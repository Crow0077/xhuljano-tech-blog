"""Build a dated, source-linked AI news wire from public RSS/Atom feeds.

No LLM rewriting: publisher title + source + published date + original URL only.
The output is a build artifact. Fail closed when too few feeds are reachable.
"""
from __future__ import annotations

import argparse
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
import json
from pathlib import Path
import re
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

SOURCES = (
    ("Hugging Face", "https://huggingface.co/blog/feed.xml"),
    ("Google AI", "https://blog.google/innovation-and-ai/technology/ai/rss/"),
    ("PyTorch", "https://pytorch.org/blog/feed/"),
    ("TechCrunch AI", "https://techcrunch.com/category/artificial-intelligence/feed/"),
    ("GitHub Blog", "https://github.blog/feed/"),
    ("The Verge AI", "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml"),
    ("OpenAI", "https://openai.com/news/rss.xml"),
)
ROOT = Path(__file__).resolve().parent.parent


def localname(tag: str) -> str:
    return tag.rsplit("}", 1)[-1]


def child_text(element: ET.Element, *names: str) -> str:
    for ch in element:
        if localname(ch.tag) in names and ch.text:
            return ch.text.strip()
    return ""


def when(raw: str) -> datetime | None:
    try:
        dt = parsedate_to_datetime(raw)
    except (ValueError, TypeError, IndexError):
        try:
            dt = datetime.fromisoformat(raw.replace("Z", "+00:00"))
        except (ValueError, TypeError):
            return None
    if dt.tzinfo is None:
        return None
    return dt.astimezone(timezone.utc)


def canonical(raw: str) -> str | None:
    parts = urlsplit(raw.strip())
    if parts.scheme != "https" or not parts.hostname or parts.username or parts.password:
        return None
    query = urlencode([(k, v) for k, v in parse_qsl(parts.query, keep_blank_values=True)
                       if not k.lower().startswith("utm_") and k.lower() not in ("fbclid", "gclid")])
    return urlunsplit((parts.scheme, parts.netloc.lower(), parts.path, query, ""))


def entries(xml_data: bytes, source: str, now: datetime, max_age: timedelta) -> list[dict]:
    root = ET.fromstring(xml_data)
    is_atom = localname(root.tag) == "feed"
    nodes = [el for el in root.iter() if localname(el.tag) == ("entry" if is_atom else "item")]
    results = []
    for node in nodes[:40]:
        title = re.sub(r"\s+", " ", child_text(node, "title"))[:240]
        link = ""
        if is_atom:
            for tag in node:
                if localname(tag.tag) == "link" and tag.attrib.get("rel", "alternate") == "alternate":
                    link = tag.attrib.get("href", "")
                    break
        else:
            link = child_text(node, "link")
        url = canonical(link)
        published = when(child_text(node, "pubDate", "published", "updated", "date"))
        if (not title or not url or not published or
                re.search(r"\b(MCP|sponsored|webinar|hackathon|disrupt 20\d\d)\b", title, re.I)):
            continue
        if published > now + timedelta(minutes=10) or now - published > max_age:
            continue
        results.append({"source": source, "title": title, "url": url,
                        "published_at": published.isoformat(timespec="seconds"),
                        "display_date": published.strftime("%b %d · %H:%M UTC")})
    return results


def collect(now: datetime | None = None, max_age_hours: int = 96) -> dict:
    now = (now or datetime.now(timezone.utc)).astimezone(timezone.utc)
    all_items, errors, succeeded = [], [], 0
    for name, url in SOURCES:
        try:
            request = Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; XhuljanoPortfolioNews/1.0)",
                                            "Accept": "application/rss+xml, application/atom+xml, application/xml"})
            with urlopen(request, timeout=12) as response:
                content = response.read(2_000_001)
            if len(content) > 2_000_000:
                raise ValueError("feed too large")
            all_items.extend(entries(content, name, now, timedelta(hours=max_age_hours)))
            succeeded += 1
        except (OSError, ValueError, ET.ParseError) as exc:
            errors.append({"source": name, "kind": type(exc).__name__})
    if succeeded < 3:
        raise RuntimeError(f"Only {succeeded} feeds reached; refusing to publish a partial news update")
    all_items.sort(key=lambda e: e["published_at"], reverse=True)
    picked, seen_urls, seen_titles, per_source = [], set(), set(), {}
    for item in all_items:
        title_key = re.sub(r"[^a-z0-9]+", "", item["title"].lower())
        if item["url"] in seen_urls or title_key in seen_titles or per_source.get(item["source"], 0) >= 3:
            continue
        picked.append(item)
        seen_urls.add(item["url"])
        seen_titles.add(title_key)
        per_source[item["source"]] = per_source.get(item["source"], 0) + 1
        if len(picked) == 12:
            break
    return {"generated_at": now.isoformat(timespec="seconds"),
            "generated_display": now.strftime("%b %d, %Y · %H:%M UTC"),
            "sources_succeeded": succeeded, "source_errors": errors, "items": picked}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=ROOT.joinpath("data", "latest_news.json"))
    args = parser.parse_args()
    result = collect()
    args.output.parent.mkdir(parents=True, exist_ok=True)
    tmp = args.output.with_suffix(args.output.suffix + ".tmp")
    tmp.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
    tmp.replace(args.output)
    print(f"news: {len(result['items'])} items, {result['sources_succeeded']} sources, "
          f"{len(result['source_errors'])} source errors; {args.output}")


if __name__ == "__main__":
    main()
