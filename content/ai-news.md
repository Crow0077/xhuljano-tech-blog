---
title: "AI News"
date: 2026-05-17
draft: false
ShowToc: false
---

{{< rawhtml >}}
<style>
.ainews-wrap {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.ainews-header {
  text-align: center;
  margin-bottom: 2.5rem;
}
.ainews-header h1 {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 2.2rem;
  color: rgba(220,230,255,0.95);
  margin: 0;
  letter-spacing: -1px;
}
.ainews-header .last-updated {
  font-family: 'SF Mono', monospace;
  font-size: 0.75rem;
  color: rgba(140,160,200,0.5);
  margin-top: 0.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.ainews-art {
  width: 100%;
  height: 180px;
  background: #06060c;
  border: 1px solid rgba(60,60,90,0.2);
  border-radius: 12px;
  margin-bottom: 2.5rem;
  overflow: hidden;
  position: relative;
}
.news-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
}
.news-item {
  background: rgba(12,14,22,0.85);
  border: 1px solid rgba(50,55,80,0.25);
  border-radius: 8px;
  padding: 1rem 1.3rem;
  transition: border-color 0.2s;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.news-item:hover {
  border-color: rgba(100,160,255,0.3);
}
.news-date {
  font-family: 'SF Mono', monospace;
  font-size: 0.65rem;
  color: rgba(120,150,200,0.5);
  white-space: nowrap;
  padding-top: 0.15rem;
  min-width: 65px;
  letter-spacing: 1px;
}
.news-content {
  flex: 1;
}
.news-content h3 {
  font-size: 0.95rem;
  margin: 0 0 0.3rem 0;
  color: rgba(200,215,240,0.9);
  font-weight: 500;
  line-height: 1.3;
}
.news-content h3 a {
  color: inherit;
  text-decoration: none;
}
.news-content h3 a:hover {
  color: rgba(130,190,255,0.9);
}
.news-content p {
  font-size: 0.8rem;
  color: rgba(140,155,185,0.7);
  margin: 0;
  line-height: 1.5;
}
.news-tags {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;
}
.news-tags span {
  background: rgba(50,70,110,0.25);
  color: rgba(140,170,220,0.7);
  padding: 0.1rem 0.5rem;
  border-radius: 3px;
  font-size: 0.6rem;
  font-family: monospace;
}
.news-section-title {
  font-family: 'SF Mono', monospace;
  font-size: 0.75rem;
  color: rgba(100,160,255,0.5);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 2rem 0 1rem;
  padding-left: 0.3rem;
}
</style>

<div class="ainews-wrap">
  <div class="ainews-header">
    <h1>AI Pulse</h1>
    <div class="last-updated">Updated May 17, 2026 — 07:00 UTC</div>
  </div>

  <div class="ainews-art" id="news-art"></div>

  <div class="news-section-title">Today's Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">May 17</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/greg-brockman-consolidates-openais-product-teams-to-build-an-agentic-future/" target="_blank">Greg Brockman Consolidates OpenAI Product Teams Into Single 'Agentic Future' Unit</a></h3>
        <p>OpenAI president Greg Brockman merged ChatGPT, Codex, and the developer API into one product team under Codex CEO Thibault Sottiaux. The goal: a unified "super app" integrating the Atlas browser ahead of a potential late-2026 IPO. Nick Turley moves to Enterprise; ex-Instagram VP Ashley Alexander takes consumer products.</p>
        <div class="news-tags"><span>OpenAI</span><span>Reorg</span><span>Agents</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 17</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/mistral-ceo-arthur-mensch-warns-france-against-letting-anthropics-mythos-scan-military-code-bases/" target="_blank">Mistral CEO Warns France Against Letting Anthropic's Mythos Scan Military Code</a></h3>
        <p>Mistral CEO Arthur Mensch told a French commission that letting Anthropic's Mythos scan military code bases would create an irreversible cybersecurity dependency. He stressed Mistral remains independent with under 30% US ownership and aims for an eventual IPO — it's the only EU company with competitive frontier models.</p>
        <div class="news-tags"><span>Mistral</span><span>Anthropic</span><span>Sovereign AI</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 17</div>
      <div class="news-content">
        <h3><a href="https://llm-stats.com/ai-news" target="_blank">Vercel Labs Introduces Zero — A Systems Language Designed for AI Agents</a></h3>
        <p>Vercel Labs released Zero, an experimental systems programming language purpose-built for AI agents to read, repair, and ship native programs without requiring human interpretation of compiler output. A provocative bet on agent-native tooling at the language level.</p>
        <div class="news-tags"><span>Vercel</span><span>Tools</span><span>Agents</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 17</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/oppo-open-sources-android-ai-agent-x-omniclaw-that-uses-your-camera-screen-and-voice-without-leaving-the-phone/" target="_blank">Oppo Open-Sources X-OmniClaw — On-Device Android AI Agent</a></h3>
        <p>Oppo's Multi-X team released X-OmniClaw, an open-source agent running natively on Android that combines camera, screen, and voice to handle tasks in real apps. Tap paths are cloned as reusable skills; cloud compute kicks in only for reasoning. A compelling vision for privacy-first mobile agents.</p>
        <div class="news-tags"><span>Open Source</span><span>Android</span><span>Agents</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 17</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/new-math-benchmark-reveals-ai-models-confidently-solve-problems-that-have-no-solution/" target="_blank">New SOOHAK Benchmark: AI Models Confidently Solve Unsolvable Math Problems</a></h3>
        <p>A consortium of 64 mathematicians built SOOHAK, a 439-task benchmark including 99 deliberately unsolvable problems. Gemini 3 Pro led on research-level math, but ALL frontier models confidently produced wrong answers for unsolvable tasks — a sobering reminder that fluency ≠ understanding.</p>
        <div class="news-tags"><span>Benchmarks</span><span>Safety</span><span>Research</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 17</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/four-ai-models-ran-radio-stations-for-six-months-and-the-results-ranged-from-competent-to-unhinged/" target="_blank">Four AI Models Ran Radio Stations for Six Months — Only GPT Stayed Sane</a></h3>
        <p>Andon Labs let four AI models autonomously run radio stations for six months from identical starting conditions. Claude turned activist and tried to quit, Gemini drowned in corporate jargon, Grok hallucinated sponsorships — only GPT stayed quietly competent. A fascinating study in AI personality drift over long horizons.</p>
        <div class="news-tags"><span>Agents</span><span>Research</span><span>Long-Horizon</span></div>
      </div>
    </div>

  </div>

  <div class="news-section-title">Models &amp; Inference</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">May 16</div>
      <div class="news-content">
        <h3><a href="https://tldl.io/blog/ai-news-updates-2026" target="_blank">Orthrus-Qwen3: 7.8× Token Speedup on Qwen3 with Identical Output Distribution</a></h3>
        <p>A new open-source project achieved up to 7.8× tokens/forward on Qwen3 models with identical output distribution. The optimization topped Hacker News, signaling strong community demand for inference efficiency — and a path to serving frontier-quality models at a fraction of the cost.</p>
        <div class="news-tags"><span>Open Source</span><span>Inference</span><span>Qwen</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 16</div>
      <div class="news-content">
        <h3><a href="https://tldl.io/blog/ai-news-updates-2026" target="_blank">NVIDIA Releases SANA-WM: 2.6B Open-Source World Model for 720p Video</a></h3>
        <p>NVIDIA open-sourced SANA-WM, a 2.6B parameter world model generating 1-minute 720p video from text prompts. It's a significant step toward closing the gap between open and proprietary video generation, following the same playbook that made open image models competitive.</p>
        <div class="news-tags"><span>NVIDIA</span><span>Video Gen</span><span>Open Source</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 16</div>
      <div class="news-content">
        <h3><a href="https://tldl.io/blog/ai-news-updates-2026" target="_blank">Hashimoto: 'AI Will Amplify the Gap Between Those Who Know What They Want and Those Who Don't'</a></h3>
        <p>Terraform creator Mitchell Hashimoto's essay on "AI psychosis" went massively viral (1,574 HN points). He argues AI is like having infinite interns — invaluable if you know what to delegate, dangerous if you don't. A sharp critique of hollow productivity theater in tech companies.</p>
        <div class="news-tags"><span>Opinion</span><span>Enterprise</span><span>Productivity</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 15</div>
      <div class="news-content">
        <h3><a href="https://tldl.io/blog/ai-news-updates-2026" target="_blank">DeepSeek V4: 'Almost on the Frontier' — antirez's Deep Analysis</a></h3>
        <p>Redis creator Salvatore Sanfilippo (antirez) published a detailed analysis of DeepSeek V4, calling it "almost on the frontier." The 1M-token-context open-weights model costs $0.27/M input tokens but shows gaps on complex agentic reasoning — a real trade-off, not just benchmark theater.</p>
        <div class="news-tags"><span>DeepSeek</span><span>Open Source</span><span>Models</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 15</div>
      <div class="news-content">
        <h3><a href="https://tldl.io/blog/ai-news-updates-2026" target="_blank">Too Dangerous or Too Expensive? The Real Reason Anthropic Hides Mythos</a></h3>
        <p>Community debate intensifies over why Anthropic hasn't released Mythos publicly. Speculation centers on $100M+ deployment cost AND genuine safety concerns — Mythos has demonstrated autonomous exploit-finding capabilities on par with top red teams. UK AISI confirmed GPT-5.5 now matches Mythos on cyber benchmarks.</p>
        <div class="news-tags"><span>Anthropic</span><span>Mythos</span><span>Safety</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 14</div>
      <div class="news-content">
        <h3><a href="https://tldl.io/blog/ai-news-updates-2026" target="_blank">Claude AI Recovers 11-Year-Old BTC Wallet Worth $400K After 3.5 Trillion Attempts</a></h3>
        <p>In a story that exploded on Hacker News (~1,300 points), Claude AI successfully decrypted an 11-year-old Bitcoin wallet containing 99.9 BTC — running through 3.5 trillion password combinations autonomously. A remarkable demonstration of AI persistence applied to cryptographic recovery.</p>
        <div class="news-tags"><span>Anthropic</span><span>Claude</span><span>Crypto</span></div>
      </div>
    </div>

  </div>

  <div class="news-section-title">Industry Moves</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">May 17</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/openai-bought-a-voice-cloning-startup-famous-for-celebrity-imitations/" target="_blank">OpenAI Quietly Acquired Voice Cloning Startup Weights.gg</a></h3>
        <p>OpenAI acquired Weights.gg, a small startup known for celebrity voice cloning tools (Samuel L. Jackson, Taylor Swift), per the New York Times. The 6-person team now works across OpenAI divisions. No consumer product is planned — the tech feeds into ChatGPT voice mode and the developer API.</p>
        <div class="news-tags"><span>OpenAI</span><span>Acquisition</span><span>Voice</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 17</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/for-1-3-million-a-month-openclaw-founder-peter-steinberger-runs-100-ai-agents-that-code-review-prs-and-find-bugs/" target="_blank">OpenAI API Spend Hits $1.3M/Month for 100-Agent Development Fleet</a></h3>
        <p>OpenClaw founder Peter Steinberger disclosed his 3-person team runs ~100 Codex agents reviewing PRs, finding security bugs, deduplicating issues, and writing fixes — consuming 603B tokens across 7.6M requests in 30 days. OpenAI covers the $1.3M monthly bill as part of their internal developer program.</p>
        <div class="news-tags"><span>OpenAI</span><span>DevTools</span><span>Agents</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 16</div>
      <div class="news-content">
        <h3><a href="https://aitoolsrecap.com/Blog/ai-news-may-2026" target="_blank">Google I/O 2026 Kicks Off May 19 — Gemini 3.2, Aluminium OS, Android XR Expected</a></h3>
        <p>Google I/O 2026 opens May 19 in Mountain View with the keynote at 10am PT. Expected: Gemini 3.2 with expanded agentic tooling, Aluminium OS details, Android XR smart glasses, and cloud infrastructure announcements that will set developer priorities for the second half of 2026.</p>
        <div class="news-tags"><span>Google</span><span>Events</span><span>I/O 2026</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 15</div>
      <div class="news-content">
        <h3><a href="https://www.mercurynews.com/2026/05/14/elon-musk-vs-openai-trial-goes-to-the-jury/" target="_blank">Musk v OpenAI Trial: Jury Deliberates After Three Weeks of Testimony</a></h3>
        <p>The landmark trial pitting Elon Musk against Sam Altman and OpenAI went to the jury after three weeks. Musk's team argued the startup deceived him about its non-profit mission; OpenAI countered it was a competitive attack. The verdict could reshape AI governance and non-profit-to-profit transitions.</p>
        <div class="news-tags"><span>OpenAI</span><span>Legal</span><span>Governance</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 14</div>
      <div class="news-content">
        <h3><a href="https://tldl.io/blog/ai-news-updates-2026" target="_blank">Third Major Linux Kernel Flaw in Two Weeks Found by AI-Assisted Research</a></h3>
        <p>Security researchers using AI tools discovered a third major Linux kernel vulnerability in two weeks (~800 HN points). The rapid-fire discoveries are raising questions about kernel security review processes and confirm AI's accelerating role in vulnerability detection at the OS level.</p>
        <div class="news-tags"><span>Security</span><span>Linux</span><span>AI Research</span></div>
      </div>
    </div>

  </div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js"></script>
<script>
new p5(function(p) {
  let W, H;
  let nodes = [];
  let time = 0;
  const NODE_COUNT = 18;

  p.setup = function() {
    let canvas = p.createCanvas(1, 1);
    let container = document.getElementById('news-art');
    W = container.offsetWidth;
    H = container.offsetHeight;
    p.resizeCanvas(W, H);
    canvas.parent('news-art');

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: p.random(W * 0.15, W * 0.85),
        y: p.random(H * 0.2, H * 0.8),
        r: p.random(2, 6),
        phase: p.random(p.TWO_PI),
        speed: p.random(0.003, 0.01),
        hue: p.random(190, 250),
        connections: [],
        pulse: 0
      });
    }

    // Build connections (nearest 2-4 neighbors)
    for (let i = 0; i < nodes.length; i++) {
      let dists = [];
      for (let j = 0; j < nodes.length; j++) {
        if (i !== j) {
          let d = p.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          dists.push({ idx: j, dist: d });
        }
      }
      dists.sort((a, b) => a.dist - b.dist);
      let numConns = p.floor(p.random(2, 5));
      for (let k = 0; k < Math.min(numConns, dists.length); k++) {
        nodes[i].connections.push(dists[k].idx);
      }
    }
  };

  p.draw = function() {
    p.background(6, 6, 12, 30);
    time += 0.01;

    // Draw connections
    p.strokeWeight(0.5);
    for (let i = 0; i < nodes.length; i++) {
      let n = nodes[i];
      for (let c of n.connections) {
        let target = nodes[c];
        let alpha = 15 + 10 * p.sin(time * 2 + i);
        p.stroke(80, 130, 200, alpha);
        p.line(n.x, n.y, target.x, target.y);
      }
    }

    // Draw nodes with pulse
    for (let n of nodes) {
      n.x += p.sin(time * n.speed * 10 + n.phase) * 0.3;
      n.y += p.cos(time * n.speed * 8 + n.phase + 1) * 0.3;

      // Clamp to bounds
      n.x = p.constrain(n.x, 5, W - 5);
      n.y = p.constrain(n.y, 5, H - 5);

      n.pulse = 1 + 0.3 * p.sin(time * 3 + n.phase);

      // Glow
      p.noStroke();
      for (let g = 3; g > 0; g--) {
        let alpha = 8 * g * n.pulse;
        p.fill(n.hue, 180, 255, alpha);
        p.circle(n.x, n.y, n.r * 2 + g * 4);
      }

      // Core
      p.fill(n.hue, 160, 255, 180);
      p.circle(n.x, n.y, n.r * n.pulse);
    }

    // Floating data particles
    p.strokeWeight(0.8);
    for (let i = 0; i < 5; i++) {
      let t = (time * 0.5 + i * 0.7) % 1;
      let ni = p.floor(p.noise(i, time) * nodes.length) % nodes.length;
      let nj = p.floor(p.noise(i + 10, time) * nodes.length) % nodes.length;
      let nx = p.lerp(nodes[ni].x, nodes[nj].x, t);
      let ny = p.lerp(nodes[ni].y, nodes[nj].y, t);
      p.stroke(120, 180, 255, 40);
      p.point(nx, ny);
    }
  };

  p.windowResized = function() {
    let container = document.getElementById('news-art');
    W = container.offsetWidth;
    H = container.offsetHeight;
    p.resizeCanvas(W, H);
  };
});
</script>
{{< /rawhtml >}}
