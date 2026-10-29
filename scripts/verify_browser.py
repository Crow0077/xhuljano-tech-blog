#!/usr/bin/env python3
"""Exercise the built site in isolated headless Chromium, never a personal profile."""
import argparse
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROUTES = ['', 'projects/', 'projects/claimcheck/', 'projects/fleetcheck/',
          'projects/homelab/', 'writing/', 'about/', 'ai-news/', 'posts/',
          'posts/claim-matching-is-not-verification/', 'posts/three-roles-one-lab/', 'lab-machine/']
WIDTHS = [320, 375, 414, 768, 1440]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--base', default='http://127.0.0.1:18765/xhuljano-tech-blog/')
    parser.add_argument('--evidence', type=Path, required=True)
    args = parser.parse_args()
    shots = args.evidence / 'screenshots'
    shots.mkdir(parents=True, exist_ok=True)
    results, errors, failures = [], [], []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(reduced_motion='reduce')
        page = context.new_page()
        current = {}
        page.on('pageerror', lambda error: errors.append({'page': dict(current), 'type': 'pageerror', 'error': str(error)}))
        page.on('console', lambda msg: errors.append({'page': dict(current), 'type': 'console', 'error': msg.text}) if msg.type == 'error' else None)
        page.on('response', lambda response: errors.append({'page': dict(current), 'type': 'http', 'error': f'{response.status} {response.url}'}) if response.status >= 400 else None)
        for width in WIDTHS:
            page.set_viewport_size({'width': width, 'height': 900})
            for route in ROUTES:
                current.update(width=width, route=route)
                response = page.goto(args.base + route, wait_until='networkidle')
                page.wait_for_timeout(100)
                data = page.evaluate('''() => {
                  const bounds = el => { const r=el.getBoundingClientRect(); return {x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom}; };
                  const nav = [...document.querySelectorAll('#menu a')].map(el => ({text:el.textContent.trim(),...bounds(el),lineHeight:getComputedStyle(el).lineHeight}));
                  const outside = [...document.querySelectorAll('body *')].filter(el => {
                    const r=el.getBoundingClientRect(), s=getComputedStyle(el);
                    return r.width > 0 && (r.right > innerWidth+1 || r.left < -1) && s.position !== 'fixed' && !el.closest('.skip-link') && el.tagName !== 'SCRIPT';
                  }).slice(0,12).map(el => ({tag:el.tagName,cls:el.className?.baseVal ?? el.className,...bounds(el)}));
                  return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,nav,outside,
                    h1:document.querySelector('h1')?.textContent.trim(),
                    intro:document.querySelector('#intro-title') ? bounds(document.querySelector('#intro-title')) : null,
                    primary:document.querySelector('.primary-action') ? bounds(document.querySelector('.primary-action')) : null,
                    images:[...document.images].filter(im=>!im.complete||!im.naturalWidth).map(im=>im.src),
                    video:document.querySelector('video') ? {paused:document.querySelector('video').paused,readyState:document.querySelector('video').readyState} : null};
                }''')
                data.update(route=route, status=response.status)
                if data['scrollWidth'] > width + 1 or data['outside'] or data['images'] or response.status != 200:
                    failures.append({'width': width, 'route': route, 'error': 'layout, images, or HTTP failure', 'data': data})
                for item in data['nav']:
                    if item['x'] < 0 or item['right'] > width or item['height'] < 40:
                        failures.append({'width': width, 'route': route, 'error': 'clipped/inaccessible navigation', 'item': item})
                if route == '':
                    if not data['video']['paused']:
                        failures.append({'width': width, 'route': route, 'error': 'reduced-motion video not paused'})
                    if width == 1440 and data['primary']['bottom'] > 900:
                        failures.append({'width': width, 'route': route, 'error': 'primary CTA below fold'})
                    # Keyboard traversal must find the CTA and show a focus indicator.
                    page.evaluate('document.activeElement?.blur(); window.scrollTo(0,0)')
                    focus = []
                    for _ in range(10):
                        page.keyboard.press('Tab')
                        focus.append(page.evaluate('''() => ({text:document.activeElement.textContent.trim().slice(0,80), cls:document.activeElement.className, outline:getComputedStyle(document.activeElement).outlineStyle, outlineWidth:getComputedStyle(document.activeElement).outlineWidth})'''))
                    data['keyboard'] = focus
                    primary = next((x for x in focus if x['cls'] == 'primary-action'), None)
                    if not primary or primary['outline'] == 'none' or primary['outlineWidth'] == '0px':
                        failures.append({'width': width, 'error': 'primary action not keyboard reachable/visible'})
                    page.evaluate('document.activeElement?.blur(); window.scrollTo(0,0)')
                if route and route != 'lab-machine/':
                    focus = []
                    for _ in range(8):
                        page.keyboard.press('Tab')
                        focus.append(page.evaluate('''() => ({tag:document.activeElement.tagName,text:document.activeElement.textContent.trim().slice(0,80),outline:getComputedStyle(document.activeElement).outlineStyle,outlineWidth:getComputedStyle(document.activeElement).outlineWidth})'''))
                    data['keyboard'] = focus
                    if any(x['tag'] == 'A' and (x['outline'] == 'none' or x['outlineWidth'] == '0px') for x in focus):
                        failures.append({'width': width, 'route': route, 'error': 'missing keyboard focus indicator'})
                    page.evaluate('document.activeElement?.blur(); window.scrollTo(0,0)')
                results.append(data)
                if width in [375, 1440] or route == '':
                    slug = route.strip('/').replace('/', '-') or 'home'
                    page.screenshot(path=str(shots / f'{slug}-{width}-top.png'))
                if route == '' and width in [375, 1440]:
                    for selector, name in [('.selected-work', 'work'), ('.featured-project', 'featured'), ('.lab-section', 'lab'), ('.writing-section', 'writing')]:
                        page.locator(selector).scroll_into_view_if_needed()
                        page.wait_for_timeout(150)
                        page.screenshot(path=str(shots / f'home-{width}-{name}.png'))
                    page.evaluate('window.scrollTo(0,document.body.scrollHeight)')
                    page.screenshot(path=str(shots / f'home-{width}-bottom.png'))
                if route == '':
                    iframe = page.locator('.lab-visual iframe')
                    iframe.scroll_into_view_if_needed()
                    frame = page.frame_locator('.lab-visual iframe')
                    frame.locator('[data-route="1"]').click()
                    page.wait_for_timeout(100)
                    size = iframe.evaluate('(el) => ({height:el.getBoundingClientRect().height,contentHeight:el.contentDocument.documentElement.scrollHeight})')
                    selected = frame.locator('[data-detail-title]').inner_text()
                    data['embedded_lab'] = {**size, 'selected': selected}
                    if size['height'] < size['contentHeight'] or 'Node B' not in selected:
                        failures.append({'width': width, 'error': 'embedded lab clipped or selection failed', 'data': size})
        # Exercise the preserved standalone lab, not merely its iframe load.
        page.goto(args.base + 'lab-machine/', wait_until='networkidle')
        page.locator('[data-route="1"]').click()
        assert 'Node B' in page.locator('[data-detail-title]').inner_text()
        page.locator('[data-flow="0"]').click()
        before = page.locator('[data-detail-title]').inner_text()
        page.locator('[data-next]').click()
        after = page.locator('[data-detail-title]').inner_text()
        assert before != after
        page.locator('[data-back]').click()
        assert page.locator('[data-detail-title]').inner_text() == before
        page.locator('[data-route="2"]').focus()
        page.keyboard.press('Enter')
        assert 'Pavilion' in page.locator('[data-detail-title]').inner_text()
        lab = {'node_selection': True, 'next_and_previous': True, 'keyboard_selection': True}
        # Changing the OS preference while the animation is playing must pause it.
        page.goto(args.base, wait_until='networkidle')
        page.emulate_media(reduced_motion='no-preference')
        page.locator('.video-toggle').click()
        page.wait_for_timeout(250)
        playing = page.locator('video').evaluate('(v) => !v.paused')
        page.emulate_media(reduced_motion='reduce')
        page.wait_for_timeout(100)
        paused = page.locator('video').evaluate('(v) => v.paused')
        if not playing or not paused:
            failures.append({'error': 'video toggle or dynamic reduced-motion behavior failed', 'playing': playing, 'paused': paused})
        context.close()
        browser.close()
    report = {'viewports': WIDTHS, 'routes': ROUTES, 'results': results, 'console_errors': errors,
              'failures': failures, 'lab_interaction': lab, 'video_toggle_played': playing,
              'dynamic_reduced_motion_paused': paused, 'screenshots': sorted(x.name for x in shots.glob('*.png'))}
    args.evidence.mkdir(parents=True, exist_ok=True)
    (args.evidence / 'browser-checks.json').write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps({'viewport_route_checks': len(results), 'console_errors': len(errors), 'failures': failures, 'screenshots': len(report['screenshots']), 'lab': lab, 'video_toggle_played': playing, 'dynamic_reduced_motion_paused': paused}, indent=2))
    return bool(failures or errors)


if __name__ == '__main__':
    raise SystemExit(main())
