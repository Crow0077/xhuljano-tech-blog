
---
title: "AI News"
date: 2026-05-31
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
    <div class="last-updated">Updated May 31, 2026 — 14:00 UTC</div>
  </div>

  <div class="ainews-art" id="news-art"></div>

  <div class="news-section-title">Today's Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/" target="_blank">Claude Opus 4.8 Launch With Dynamic Workflows — 1,000 Parallel Subagents</a></h3>
        <p>Anthropic released Claude Opus 4.8 just 41 days after 4.7 — its fastest cadence ever. The model scores 88.6% on SWE-bench Verified and 69.2% on SWE-bench Pro, beating GPT-5.5 by ~10 points on both. The headline feature is Dynamic Workflows: Claude Code can now fan complex problems out to up to 1,000 parallel subagents, then synthesize results. Canonical proof: Bun creator Jarred Sumner migrated ~750K lines of Rust in 11 days. Fast Mode is 2.5x speed at $10/$50 per M tokens — 3x cheaper than Opus 4.7 Fast.</p>
        <div class="news-tags"><span>Anthropic</span><span>Claude Opus 4.8</span><span>Models</span><span>Subagents</span><span>Coding</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://finance.yahoo.com/news/anthropic-debuts-flagship-claude-opus-48-ai-model-as-ipo-race-with-openai-heats-up-170000527.html" target="_blank">Claude Mythos Gets Public Release Timeline — "In the Coming Weeks"</a></h3>
        <p>Anthropic confirmed that its most powerful model, Claude Mythos Preview, will be publicly available "in the coming weeks" — the first explicit timeline. Currently restricted to ~50 Project Glasswing partners, Mythos found 23,019 high-severity vulnerabilities in its first month including a 27-year-old bug in OpenBSD and a 16-year-old flaw in FFmpeg. The UK AISI evaluated it as capable of a 32-step simulated corporate network attack. The news signals the most consequential AI deployment of Q3 2026.</p>
        <div class="news-tags"><span>Anthropic</span><span>Mythos</span><span>Security</span><span>Safety</span><span>Release</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://www.theverge.com/" target="_blank">Microsoft Fires Back With MAI Models — Build 2026 Prepares Homegrown AI to Win Back Copilot</a></h3>
        <p>Microsoft's Build 2026 (June 2-3) will debut the MAI model suite: a coding-specialized model for GitHub Copilot, a reasoning model, and a new agent. The strategic trigger: internal telemetry shows Claude Code has overtaken GitHub Copilot in enterprise developer adoption. Microsoft's partnership with OpenAI was renegotiated in April, freeing Mustafa Suleyman's AI division to train top-tier in-house models. GitHub Copilot now writes 46% of all code on the platform, up from 40% in November 2025.</p>
        <div class="news-tags"><span>Microsoft</span><span>MAI</span><span>Build 2026</span><span>Copilot</span><span>Claude Code</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://www.reuters.com/technology/" target="_blank">OpenAI Releases Rosalind Biodefense Model and Files Codex Pro Pricing Restructure</a></h3>
        <p>OpenAI released Rosalind, a specialized biodefense model, on May 31 as part of its expanding safety ecosystem. Separately, the company restructured Codex Pro pricing amid the escalating agentic coding wars with Anthropic. OpenAI filed its confidential S-1 on May 22 targeting a $1 trillion valuation with Goldman Sachs and Morgan Stanley leading, aiming for a September debut. Revenue reached $25B ARR. The company also announced it solved an 80-year-old unsolved geometry problem using its reasoning model earlier in May.</p>
        <div class="news-tags"><span>OpenAI</span><span>Rosalind</span><span>Biodefense</span><span>Codex</span><span>IPO</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://www.inc.com/ben-sherry/anthropic-says-its-latest-claude-model-is-the-most-honest-yet/91351657" target="_blank">Nightmare Eclipse: Rogue Researcher Released 6 Critical Windows Zero-Days — GitHub and GitLab Bans Fail to Contain Threat</a></h3>
        <p>A rogue security researcher released 6 working critical Windows exploits over 6 weeks, achieving full SYSTEM access and BitLocker bypass on fully patched systems. GitHub banned the account on May 23; the researcher immediately migrated to GitLab, which banned them May 26. Both platforms wiped all repos. The researcher threatens further releases on July 14, claiming a "Dead man's switch." Microsoft patches are scheduled for June 9 Patch Tuesday. The incident exposes a structural gap in zero-day exploit distribution containment.</p>
        <div class="news-tags"><span>Security</span><span>Windows</span><span>Zero-Day</span><span>GitHub</span><span>Exploit</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://www.reuters.com/technology/" target="_blank">Anthropic Hits First Operating Profit at $559M — Valuation Surpasses OpenAI at $965B</a></h3>
        <p>Anthropic reported its first quarterly operating profit of $559M on $10.9B Q2 revenue, two years ahead of projections. Revenue hit $44B+ ARR, growing 80x year-over-year. The company's valuation rose to $965B, surpassing OpenAI's $852B. Major enterprise wins include PwC going all-in on Claude, KPMG deploying to 276,000 staff, and a $200M Gates Foundation deal. Anthropic also secured SpaceX's entire Colossus 1 supercomputer (220K+ GPUs) at $1.25B/month through 2029 — a $200B+ compute bet.</p>
        <div class="news-tags"><span>Anthropic</span><span>Profit</span><span>Valuation</span><span>Revenue</span><span>Enterprise</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://www.bbc.com/news/technology" target="_blank">AI CEOs Walk Back Job Apocalypse Predictions — Dario Amodei and Sam Altman Shift Narrative</a></h3>
        <p>Both Anthropic CEO Dario Amodei and OpenAI CEO Sam Altman have abruptly shifted their public predictions about AI-driven job displacement. After years of warning that GenAI would dismantle white-collar employment, both executives now emphasize human-AI collaboration and argue that AI will augment rather than replace workers. Critics note the convenient timing ahead of anticipated IPOs from both companies. The narrative reversal reflects growing pressure from enterprise customers who need workforce stability to adopt AI tools at scale.</p>
        <div class="news-tags"><span>Workforce</span><span>CEOs</span><span>Jobs</span><span>Narrative</span><span>Policy</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://www.bloomberg.com/" target="_blank">SpaceX Files S-1 for IPO — AI Compute Partnership With Anthropic Paves Way for June 8 Roadshow</a></h3>
        <p>SpaceX filed its S-1, revealing its IPO roadshow is set for June 8. The filing confirmed the Colossus 1 supercomputer deal with Anthropic at $1.25B/month through 2029 — now revealed to have a 90-day cancellation clause. The SpaceX IPO is expected to be one of the largest in history, driven in part by its AI infrastructure expansion. The deal positions SpaceX as a critical compute provider in the AI race alongside hyperscalers like AWS, Google Cloud, and Azure.</p>
        <div class="news-tags"><span>SpaceX</span><span>IPO</span><span>Compute</span><span>Infrastructure</span><span>Anthropic</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://www.ft.com/technology" target="_blank">Google Confirms Gemini 3.5 Pro for June Launch as Flash Becomes Agentic Default</a></h3>
        <p>Sundar Pichai confirmed Gemini 3.5 Pro's general availability for June 2026, with Vertex AI allowlist already open for enterprises. Meanwhile, Gemini 3.5 Flash has become Google's agentic flagship — scoring 76.2% on Terminal-Bench 2.1, 83.6% on MCP Atlas, and 84.2% on CharXiv Reasoning at just $1.50/$9 per M tokens. Google also launched Gemini Spark, wrapping the model into a personal AI agent across Gmail, Calendar, Docs, and Android. Antigravity is Google's new agent-first dev platform.</p>
        <div class="news-tags"><span>Google</span><span>Gemini 3.5</span><span>Models</span><span>Spark</span><span>Agents</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/" target="_blank">OnlyFans "Mega Leak" of 340M Records Is a Correlation Database — No Breach, Seller Admits</a></h3>
        <p>A seller offering 340M records for 0.313 BTC (~$76,000) claimed to have breached OnlyFans, but the seller admitted to Hackread: "We didn't breach or hack OnlyFans. We used existing breaches and leaks databases and matched with users of the OnlyFans platform." The dataset is an identity correlation database that breaks pseudonymity for creators and subscribers by linking real identities from Twitter, Instagram leaks to OnlyFans profiles. Troy Hunt questioned whether the data is even real vs AI-generated. The real risk is doxing and phishing.</p>
        <div class="news-tags"><span>OnlyFans</span><span>Security</span><span>Data Leak</span><span>Privacy</span><span>Doxing</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://www.reuters.com/technology/" target="_blank">KPMG Deploys Claude to 276,000 Staff — PwC Goes "All-In" on Anthropic's Enterprise Push</a></h3>
        <p>KPMG deployed Anthropic's Claude to all 276,000 employees in one of the largest enterprise AI deployments to date, following PwC's "all-in" commitment on Claude earlier in May. The Big Four accounting firm adoptions signal that enterprise AI is shifting from experimentation to full-scale deployment. Salesforce also reported that moving its entire dev org to Claude Code with no token limits yielded 79% more pull requests per developer, 5x fewer production incidents, and a 231-day migration completed in just 13 days.</p>
        <div class="news-tags"><span>KPMG</span><span>Enterprise</span><span>Claude</span><span>Deployment</span><span>Productivity</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 31</div>
      <div class="news-content">
        <h3><a href="https://www.wsj.com/tech/ai" target="_blank">Alibaba's Qwen 3.7 Max and the China AI Wave — Four Open-Weight Models Match Western Benchmarks at <1/3 the Price</a></h3>
        <p>Four Chinese labs — Z.ai GLM-5.1, MiniMax M2.7, Kimi K2.6, and DeepSeek V4 — dropped open-weight frontier coding models in 12 days, matching Western capability at under a third of the price of Claude Opus 4.7. Alibaba's Qwen 3.7 Max leads with 1M-token context, 92.4 GPQA Diamond, and $2.50/$7.50 per M tokens — roughly half GPT-5.5 pricing. ByteDance announced $70B in AI CapEx. The China-US gap on metrics most teams care about is rapidly closing.</p>
        <div class="news-tags"><span>China</span><span>Alibaba</span><span>Qwen</span><span>Open Models</span><span>Benchmarks</span></div>
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

<!-- update 1780246400 -->
