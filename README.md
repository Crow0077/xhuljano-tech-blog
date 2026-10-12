# Xhuljano — agent-directed systems portfolio

Hugo/PaperMod site at https://crow0077.github.io/xhuljano-tech-blog/. The portfolio describes Xhuljano's role accurately: he directs, prompts, reviews and decides; Hermes Agent and other agents implement substantial code, configuration and creative artifacts. WGU coursework is his own. It does not publish the private wiki or live homelab telemetry.

## Build

```sh
node site-tools/lab/build.mjs  # builds the Anatomy isometric homelab figure
hugo --gc --minify --destination "$HOME/.hermes/cache/scratch/portfolio-preview"
```

`site-tools/lab/` vendors the minimal Anatomy SVG geometry module and inline script helper under MIT license. The generated self-contained file at `static/lab-machine/index.html` is committed so GitHub Pages needs only Hugo. `static/token-press/index.html` is a separately tested interactive study. The homepage embeds the lab figure in an iframe and links to a full-page view.

GitHub Actions on `main` builds and deploys with Hugo. Drafted legacy posts remain in source history but are not published. The old static particle/crystal/video demos were removed. Public site copy avoids claims about current live health, metrics or Node B availability.
