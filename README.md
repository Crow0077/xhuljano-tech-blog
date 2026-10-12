# Xhuljano — agent-directed systems portfolio

Hugo/PaperMod site at https://crow0077.github.io/xhuljano-tech-blog/. The portfolio describes Xhuljano's role accurately: he directs, prompts, reviews and decides; Hermes Agent and other agents implement substantial code, configuration and creative artifacts. It does not publish the private wiki or live homelab telemetry.

## Build

```sh
node site-tools/lab/build.mjs  # builds the Anatomy isometric homelab figure
python3 -m unittest discover -s scripts -p 'test_update_news.py' -v
python3 scripts/update_news.py  # fetch public RSS/Atom into untracked data/latest_news.json
hugo --gc --minify --destination "$HOME/.hermes/cache/scratch/portfolio-preview"
```

`site-tools/lab/` vendors the minimal Anatomy SVG geometry module and inline script helper under MIT license. The generated self-contained file at `static/lab-machine/index.html` is committed so GitHub Pages needs only Hugo. The homepage embeds the lab figure in an iframe and links to a full-page view. The experimental token-press demo is not part of this public portfolio.

GitHub Actions on `main` and twice-daily UTC schedules gather public feed titles and publication dates before building and deploying with Hugo. At least three feeds must respond or the build fails; the previous live site stays in place. The news page reports the actual last successful feed check. The older long-form August archive remains under `archive/` in source, not presented as fresh news. Drafted legacy posts remain in source history but are not published. The Earth/Moon video hero remains, with the interactive homelab below it. The one-off token-press demo is not published.
