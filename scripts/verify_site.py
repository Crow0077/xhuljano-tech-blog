#!/usr/bin/env python3
"""Verify Hugo's output at its production subpath without querying external sites."""
import argparse
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import unquote, urljoin, urlsplit
from urllib.request import urlopen
import xml.etree.ElementTree as ET

PREFIX = '/xhuljano-tech-blog/'
ORIGIN = 'https://crow0077.github.io'


class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.references = []
        self.ids = set()
        self.canonical = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        for attr in ['href', 'src', 'poster']:
            if attrs.get(attr):
                self.references.append((tag, attrs[attr]))
        srcset = attrs.get('srcset')
        if srcset:
            self.references.extend((tag, x.strip().split()[0]) for x in srcset.split(','))
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('output', type=Path)
    parser.add_argument('--preview', default='http://127.0.0.1:18765')
    parser.add_argument('--report', type=Path, required=True)
    args = parser.parse_args()
    root = args.output.resolve()
    documents = {}
    failures = []
    for path in sorted(root.rglob('*.html')):
        doc = Document()
        doc.feed(path.read_text())
        documents[path] = doc
    checked = set()
    anchors = 0
    for path, doc in documents.items():
        rel = path.relative_to(root).as_posix()
        route = PREFIX + (rel[:-10] if rel.endswith('index.html') else rel)
        if rel != 'lab-machine/index.html' and not doc.canonical:
            failures.append({'page': route, 'error': 'missing canonical'})
        for tag, reference in doc.references:
            full = urlsplit(urljoin(ORIGIN + route, reference))
            if full.netloc != 'crow0077.github.io' or full.scheme not in ['http', 'https']:
                continue
            if not full.path.startswith(PREFIX):
                failures.append({'page': route, 'reference': reference, 'error': 'escapes project subpath'})
                continue
            destination = root / unquote(full.path[len(PREFIX):])
            if destination.is_dir():
                destination /= 'index.html'
            if not destination.is_file():
                failures.append({'page': route, 'reference': reference, 'error': 'missing file'})
                continue
            checked.add(full.path)
            if full.fragment and destination in documents:
                anchors += 1
                if unquote(full.fragment) not in documents[destination].ids:
                    failures.append({'page': route, 'reference': reference, 'error': 'missing anchor'})
    for path in root.rglob('*.css'):
        for value in re.findall(r'url\([\'"]?([^\)\'\"]+)', path.read_text()):
            if value.startswith('data:'):
                continue
            full = urlsplit(urljoin(ORIGIN + PREFIX + path.relative_to(root).as_posix(), value))
            if full.netloc == 'crow0077.github.io':
                dest = root / unquote(full.path.removeprefix(PREFIX))
                if not dest.is_file():
                    failures.append({'page': str(path), 'reference': value, 'error': 'missing CSS media'})
                else:
                    checked.add(full.path)
    http = []
    for route in sorted(checked):
        try:
            with urlopen(args.preview + route) as response:
                status = response.status
                # Read bytes too: a header-only response would not prove a usable artifact.
                length = len(response.read())
                http.append({'route': route, 'status': status, 'bytes': length})
                if status != 200 or length == 0:
                    failures.append({'page': route, 'error': 'empty or non-200 preview response'})
        except Exception as exc:
            failures.append({'page': route, 'error': str(exc)})
    for feed in ['index.xml', 'posts/index.xml', 'sitemap.xml']:
        try:
            # Only parse locally generated Hugo XML, never untrusted external XML.
            ET.parse(root / feed)
        except Exception as exc:
            failures.append({'page': feed, 'error': str(exc)})
    report = {'html_documents': len(documents), 'unique_local_targets': len(checked),
              'fragment_references': anchors, 'http_checks': http, 'failures': failures}
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps(report, indent=2))
    return bool(failures)


if __name__ == '__main__':
    raise SystemExit(main())
