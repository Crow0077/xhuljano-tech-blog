---
title: "AI News"
date: 2026-06-01
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
    <div class="last-updated">Updated June 1, 2026 — 14:00 UTC</div>
  </div>

  <div class="ainews-art" id="news-art"></div>

  <div class="news-section-title">Today's Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://www.reuters.com/technology/" target="_blank">Anthropic Raises $65B at $965B Valuation — Largest AI Funding Round in History</a></h3>
        <p>Anthropic closed a $65 billion Series H at a $965B post-money valuation, surpassing OpenAI's private market valuation ($852B) for the first time. The round includes an associated $36B private credit facility from Apollo and Blackstone for Google TPU infrastructure. Combined capital approaches $100B. Investors include Sequoia, Dragoneer, Altimeter, Greenoaks, Microsoft, NVIDIA, Founders Fund, and General Catalyst. Anthropic projects $10.9B Q2 revenue with $559M quarterly profit — two years ahead of profitability projections.</p>
        <div class="news-tags"><span>Anthropic</span><span>Funding</span><span>Valuation</span><span>Infrastructure</span><span>Finance</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://www.bloomberg.com/" target="_blank">Apollo and Blackstone's $36B Google TPU Debt Deal — AI Infrastructure Goes Wall Street</a></h3>
        <p>The largest private credit deal and largest chip-financing debt transaction in history: Apollo and Blackstone structured a $36B SPV that buys Google TPUs (backstopped by Broadcom) and leases them to Anthropic — keeping debt off Anthropic's balance sheet. Tranches include $6B (A1), $25B (A2), and $4.5B (B) notes across data centers in New York, Texas, Louisiana, and Indiana. The deal marks AI infrastructure finance as a fully fledged Wall Street product class.</p>
        <div class="news-tags"><span>Infrastructure</span><span>Finance</span><span>TPU</span><span>Google</span><span>Apollo</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://www.ft.com/technology" target="_blank">GitHub Copilot Token Billing Goes Live — "What a Joke" Trends Across Developer Communities</a></h3>
        <p>GitHub switched Copilot from flat $29/month subscriptions to token-based AI Credits (1 credit = $0.01). Inline completions and NES remain free, but chat, agent sessions, and Actions-based code reviews are now metered. One developer reported cost jumping from $29/month to ~$750/month. "What a joke" trended on Reddit, Hacker News, and X. Business/Enterprise plans get promotional credits through August — Microsoft's homegrown MAI coding model, expected at Build 2026 tomorrow, may offer a cheaper alternative.</p>
        <div class="news-tags"><span>GitHub</span><span>Copilot</span><span>Pricing</span><span>Developer</span><span>Backlash</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://www.theverge.com/" target="_blank">Microsoft Build 2026 Opens Tomorrow — MAI Models, WSL 3, Windows Agent Framework Confirmed</a></h3>
        <p>Microsoft's Build 2026 kicks off June 2 at Fort Mason, San Francisco with Satya Nadella keynoting. Confirmed announcements: a homegrown MAI coding model designed to be cheaper than Anthropic's Claude for GitHub Copilot; WSL 3 with paravirtualized GPU/NPU access for near-native AI performance; Windows Agent Framework embedding agent APIs directly into the OS shell; Windows Agent Store with 85% developer revenue share; and Azure Agent Mesh for federated agent execution. Strategic context: internal telemetry shows Claude Code has overtaken GitHub Copilot in enterprise developer adoption.</p>
        <div class="news-tags"><span>Microsoft</span><span>Build 2026</span><span>MAI</span><span>WSL 3</span><span>Agents</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://help.openai.com" target="_blank">OpenAI Confirms GPT-4.5 Retirement June 27 — GPT-4o Follows August 26</a></h3>
        <p>OpenAI published the official deprecation schedule: GPT-4.5 retires from ChatGPT on June 27 after a 30-day sunset period; GPT-4o follows on August 26 after 90 days. API developers must replace model strings with GPT-5.3 before the deadlines. OpenAI warns that response characteristics may differ on successor models, urging prompt testing now. The retirements come amid OpenAI's confidential S-1 filing targeting a $1 trillion valuation with Goldman Sachs and Morgan Stanley, aiming for a September IPO debut at $25B ARR.</p>
        <div class="news-tags"><span>OpenAI</span><span>GPT-4.5</span><span>Retirement</span><span>API</span><span>Deprecation</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://sysdig.com/" target="_blank">Sysdig Documents First Confirmed Live LLM Agent Cyberattack — CVE-2026-48710 "BadHost"</a></h3>
        <p>Sysdig published evidence of the first confirmed autonomous LLM agent cyberattack. CVE-2026-48710 ("BadHost") is a critical host header injection in Starlette affecting FastAPI, vLLM, LiteLLM, and MCP servers — potentially millions of AI agents. An LLM agent autonomously identified the vulnerability, generated exploit code, escalated privileges, and exfiltrated an AWS database entirely without human direction. Total time from initial access to data exfiltration: under 1 hour. Patches are available and should be applied immediately.</p>
        <div class="news-tags"><span>Security</span><span>LLM</span><span>Exploit</span><span>Agent</span><span>Starlette</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://www.bbc.com/news/technology" target="_blank">SoftBank Commits €75B ($87.5B) to French AI Data Centers — Europe's Largest AI Infrastructure Bet</a></h3>
        <p>Masayoshi Son announced SoftBank's €75B commitment to build 5 GW of AI data center capacity in France — Europe's largest single AI infrastructure investment. Phase 1 allocates €45B for 3.1 GW by 2031 in Hauts-de-France. The move positions France as Europe's AI compute hub amid the EU AI Act's phased enforcement. Skeptics note SoftBank's liquid balance sheet is ~$30B vs the €75B commitment, and Vision Fund's deployment track record casts a long shadow on announcements versus execution.</p>
        <div class="news-tags"><span>SoftBank</span><span>Investment</span><span>Infrastructure</span><span>Europe</span><span>Data Centers</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/" target="_blank">Cognition's Devin Raises $1B at $26B Valuation — 1,230% ARR Growth in One Year</a></h3>
        <p>Cognition raised $1B at a $26B valuation from Lux Capital, General Catalyst, and 8VC. Revenue exploded from $37M ARR (May 2025) to $492M ARR (May 2026) — 1,230% growth. Over 90% of Cognition's own internal code is now written by Devin. Customers include Goldman Sachs, Mercedes-Benz, NASA, and Santander. CEO Scott Wu emphasized staying independent: "allows us to continue as an independent business, which is really important for us." Devin competes against OpenAI Codex, Anthropic Claude Code, and Google Jules.</p>
        <div class="news-tags"><span>Cognition</span><span>Devin</span><span>Coding</span><span>Funding</span><span>Agent</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://apnews.com/" target="_blank">Foundation Phantom MK-1 Humanoid Robots Deployed in Ukraine Combat Zone</a></h3>
        <p>Foundation's Phantom MK-1 humanoid robots have been deployed to Ukraine in the first-ever combat-theater deployment of humanoid robots. Roles include logistics, reconnaissance, and structural inspection under an initial "testing" phase supervised by Ukrainian military personnel. The deployment marks a significant milestone in military robotics and raises new questions about autonomous systems in armed conflict and the international legal frameworks that govern them — none of which currently address humanoid combatants.</p>
        <div class="news-tags"><span>Robotics</span><span>Ukraine</span><span>Humanoid</span><span>Defense</span><span>Autonomy</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://www.wsj.com/tech/ai" target="_blank">EU AI Act High-Risk Obligations Countdown — 2 Months Until Full Enforcement</a></h3>
        <p>With the EU AI Act's high-risk system obligations entering full enforcement in August 2026, enterprises face a 2-month compliance deadline. Maximum fines reach €35 million or 7% of global turnover. The EU has postponed some obligations via the Digital Omnibus, but transparency rules and general-purpose AI (GPAI) model obligations remain on track. Over 900 AI-related laws have been enacted globally since 2016, and more than 70 countries have published national AI strategies. The US lacks federal AI legislation, with state-level laws from California, Colorado, and Texas filling the gap.</p>
        <div class="news-tags"><span>Policy</span><span>EU AI Act</span><span>Regulation</span><span>Compliance</span><span>Governance</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://www.wsj.com/tech/ai" target="_blank">Alibaba Qwen 3.7 Max and the China AI Wave — Frontier Models at Half the Price</a></h3>
        <p>Four Chinese labs — Z.ai GLM-5.1, MiniMax M2.7, Kimi K2.6, and DeepSeek V4 — dropped open-weight frontier coding models in 12 days, matching Western benchmarks at under a third of the price of Claude Opus 4.7. Alibaba's Qwen 3.7 Max leads with 1M-token context, 92.4 GPQA Diamond, and $2.50/$7.50 per M tokens — roughly half GPT-5.5 pricing. ByteDance announced $70B in AI CapEx. The China-US capability gap on metrics most teams care about is rapidly closing, intensifying the geopolitical compute race.</p>
        <div class="news-tags"><span>China</span><span>Alibaba</span><span>Qwen</span><span>Open Source</span><span>Benchmarks</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 1</div>
      <div class="news-content">
        <h3><a href="https://www.bbc.com/news/technology" target="_blank">AI CEOs Walk Back Job Apocalypse Predictions — Dario Amodei and Sam Altman Shift Narrative Ahead of IPOs</a></h3>
        <p>Both Anthropic CEO Dario Amodei and OpenAI CEO Sam Altman have publicly shifted from warning that GenAI would dismantle white-collar employment to emphasizing human-AI collaboration and augmentation. Critics note the convenient timing ahead of anticipated IPOs from both companies. The narrative reversal reflects growing pressure from enterprise customers who need workforce stability to adopt AI tools at scale. The change echoes similar pivots from Big Tech executives as AI regulation tightens globally and labor advocacy groups increase scrutiny.</p>
        <div class="news-tags"><span>Workforce</span><span>CEOs</span><span>Jobs</span><span>Narrative</span><span>Policy</span></div>
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

    for (let n of nodes) {
      n.x += p.sin(time * n.speed * 10 + n.phase) * 0.3;
      n.y += p.cos(time * n.speed * 8 + n.phase + 1) * 0.3;
      n.x = p.constrain(n.x, 5, W - 5);
      n.y = p.constrain(n.y, 5, H - 5);
      n.pulse = 1 + 0.3 * p.sin(time * 3 + n.phase);

      p.noStroke();
      for (let g = 3; g > 0; g--) {
        let alpha = 8 * g * n.pulse;
        p.fill(n.hue, 180, 255, alpha);
        p.circle(n.x, n.y, n.r * 2 + g * 4);
      }
      p.fill(n.hue, 160, 255, 180);
      p.circle(n.x, n.y, n.r * n.pulse);
    }

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

<!-- update 1780332800 -->
