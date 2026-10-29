#!/usr/bin/env python3
"""Build explanatory architecture art; none of these figures is a UI screenshot."""
from html import escape
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / 'static/images/projects'
STYLE = '''<style>:root{--bg:oklch(17% .014 226);--ink:oklch(94% .009 215);--muted:oklch(76% .012 215);--rule:oklch(36% .017 225);--accent:oklch(79% .10 173)}rect{fill:var(--bg);stroke:var(--rule)}text{fill:var(--ink);font-family:system-ui,sans-serif}.muted{fill:var(--muted)}.accent{fill:var(--accent)}path,line{fill:none;stroke:var(--accent);stroke-width:2}.label{font-family:monospace;font-size:18px;letter-spacing:1px}</style>'''


def text(x, y, value, size=24, cls=''):
    return f'<text x="{x}" y="{y}" font-size="{size}" class="{cls}">{escape(value)}</text>'


def box(x, y, w, h):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="2"/>'


def save(name, title, body):
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / (name + '.svg')).write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 400" role="img" aria-labelledby="title"><title id="title">{escape(title)}</title>{STYLE}<rect width="720" height="400" stroke="none"/>{body}</svg>\n')


def main():
    body = text(32, 40, 'CLAIMCHECK / EVIDENCE FLOW', 18, 'label muted')
    body += box(32, 85, 264, 215) + text(52, 122, 'Transcript', 28)
    body += text(52, 169, 'Action claim', 23) + text(52, 205, 'Tool arguments', 23, 'muted') + text(52, 241, 'Tool result', 23, 'muted')
    body += '<path d="M296 190H408m-10-7 10 7-10 7"/>'
    body += text(318, 171, 'match', 18, 'accent')
    body += box(424, 85, 264, 215) + text(444, 122, 'Report', 28)
    body += text(444, 169, 'Claim + status', 23) + text(444, 205, 'Evidence notes', 23, 'muted') + text(444, 241, 'Review needed', 23, 'muted')
    body += text(32, 358, 'Heuristic matching, not a correctness proof.', 21, 'muted')
    save('claimcheck', 'Claimcheck architecture: transcript claims matched to tool evidence for review', body)

    body = text(32, 40, 'FLEETCHECK / LOCAL AUDIT', 18, 'label muted')
    for y, label in [(84, 'Jobs + outputs'), (152, 'Skills + usage'), (220, 'Snapshots')]:
        body += box(32, y, 260, 52) + text(48, y + 34, label, 24)
    body += '<path d="M310 110H345V245H310M345 178H408m-10-7 10 7-10 7"/>'
    body += box(424, 84, 264, 188) + text(444, 122, 'Audit rules', 28)
    body += text(444, 170, 'Ranked findings', 23, 'muted') + text(444, 208, 'Drift comparison', 23, 'muted')
    body += text(32, 358, 'Inspect state; investigate the flagged behavior.', 21, 'muted')
    save('fleetcheck', 'Fleetcheck architecture: local jobs, skills, and snapshots feed audit rules and findings', body)

    body = text(32, 40, 'HOMELAB / THREE ROLES', 18, 'label muted')
    for x, name, role in [(32, 'Node A', 'Control'), (268, 'Node B', 'Compute'), (504, 'Pavilion', 'Services')]:
        body += box(x, 100, 184, 170) + text(x + 18, 146, name, 27)
        body += text(x + 18, 184, role, 23, 'accent')
        for i in range(3):
            body += f'<line x1="{x + 18}" y1="{214 + i * 12}" x2="{x + 110}" y2="{214 + i * 12}" style="stroke:var(--rule)"/>'
    body += '<path d="M124 270V308H596V270M360 270V308"/>'
    body += text(32, 358, 'Architecture diagram / not live telemetry', 21, 'muted')
    save('homelab', 'Homelab architecture: control, compute, and durable services are separate roles', body)
    print('Built explanatory diagrams:', ', '.join(p.name for p in sorted(OUT.glob('*.svg'))))


if __name__ == '__main__':
    main()
