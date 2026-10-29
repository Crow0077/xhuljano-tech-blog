# Xhuljano — agent-directed systems portfolio

Hugo/PaperMod site at https://crow0077.github.io/xhuljano-tech-blog/. The portfolio describes Xhuljano's role accurately: he directs, prompts, reviews and decides; Hermes Agent and other agents implement substantial code, configuration and creative artifacts. It does not publish the private wiki or live homelab telemetry.

## Build

```sh
node site-tools/lab/build.mjs  # builds the Anatomy isometric homelab figure
python3 scripts/build_project_diagrams.py  # explanatory SVGs, not product screenshots
python3 -m unittest discover -s scripts -p 'test_update_news.py' -v
python3 scripts/update_news.py  # fetch public RSS/Atom into untracked data/latest_news.json
hugo --gc --minify --destination "$HOME/.hermes/cache/scratch/portfolio-preview"
```

`site-tools/lab/` vendors the minimal Anatomy SVG geometry module and inline script helper under MIT license. The generated self-contained file at `static/lab-machine/index.html` is committed so GitHub Pages needs only Hugo. The homepage embeds the lab figure in an iframe and links to a full-page view. The experimental token-press demo is not part of this public portfolio.

GitHub Actions on `main` and twice-daily UTC schedules gather public feed titles and publication dates before building and deploying with Hugo. At least three feeds must respond or the build fails; the previous live site stays in place. The news page reports the actual last successful feed check. The older long-form August archive remains under `archive/` in source, not presented as fresh news. Drafted legacy posts remain in source but are not published. The Earth/Moon render supports an above-fold introduction; selected project case studies precede the preserved interactive homelab. The one-off token-press demo is not published.

## Portfolio routes and artifacts

`/projects/` is a section bundle with individual Claimcheck, Fleetcheck, and homelab notes. `/writing/` lists original published posts; `/posts/` and its RSS remain usable. `/ai-news/` is separate aggregation. No runtime model call is required to render the portfolio.

The Claimcheck downloads in `static/artifacts/` are unmodified stdout from running the public synthetic fixture at source revision `75b7a820f50d43e94763bea8458a3b01abf087ea` (ordinary Markdown and strict JSON reports). They are not private transcripts. The case study explicitly documents a false-positive evidence match rather than presenting every report label as correct. Project diagrams are reproducible with `scripts/build_project_diagrams.py`.

## Local verification

Use the Pages workflow's Hugo version (currently declared in `.github/workflows/hugo.yml`). Build to an isolated directory named `xhuljano-tech-blog` beneath a preview root, preserving the configured production base URL. Serve only on loopback:

```sh
hugo --minify --destination /absolute/preview-root/xhuljano-tech-blog
python3 -m http.server 18765 --bind 127.0.0.1 --directory /absolute/preview-root
```

In a second terminal, check all generated local references and run the browser matrix. The browser check uses an isolated headless Chromium instance, not a personal browser profile. Install its development dependency in a virtual environment:

```sh
python3 -m venv /absolute/browser-venv
/absolute/browser-venv/bin/pip install -r site-tools/requirements-browser.txt
/absolute/browser-venv/bin/playwright install chromium
python3 scripts/verify_site.py /absolute/preview-root/xhuljano-tech-blog --report /absolute/evidence/links.json
/absolute/browser-venv/bin/python scripts/verify_browser.py --evidence /absolute/evidence
```

The browser matrix exercises homepage, project index/details, writing, About, news, post archive/details, and standalone lab at 320/375/414/768/1440px. It checks off-viewport content, image loads, navigation, keyboard focus, reduced motion, video controls, and lab interactions. Screenshots and JSON evidence stay outside Hugo's public output. These checks are not an exhaustive accessibility audit or a deployment verdict.
