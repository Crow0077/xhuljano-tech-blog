---
title: "AI News"
date: 2026-05-12
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
    <div class="last-updated">Updated May 13, 2026 — 15:00 UTC</div>
  </div>

  <div class="ainews-art" id="news-art"></div>

  <div class="news-section-title">Today's Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">May 12</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/ai-startup-recursive-emerges-from-stealth-with-650-million-to-build-self-improving-ai/" target="_blank">Recursive Emerges from Stealth with $650M to Build Self-Improving AI</a></h3>
        <p>AI startup Recursive officially launched with $650M at a $4.65B valuation, backed by GV, Greycroft, AMD Ventures, and Nvidia. Co-founders Richard Socher (ex-Salesforce) and Tim Rocktäschel (ex-DeepMind) aim to automate the scientific method starting with AI research itself.</p>
        <div class="news-tags"><span>Funding</span><span>Superintelligence</span><span>Startup</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 12</div>
      <div class="news-content">
        <h3><a href="https://github.com/cactus-compute/needle" target="_blank">Needle: Gemini Tool Calling Distilled into a 26M Parameter Model</a></h3>
        <p>Show HN hit with 482 points: a 26M-parameter model distilled from Google's Gemini tool-calling capabilities, demonstrating that complex agent functionality can run on tiny open models. Built by Cactus Compute.</p>
        <div class="news-tags"><span>Open Source</span><span>Tool Calling</span><span>Distillation</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 12</div>
      <div class="news-content">
        <h3><a href="https://deepmind.google/blog/ai-pointer/" target="_blank">DeepMind Reimagines the Mouse Pointer for the AI Era</a></h3>
        <p>DeepMind's "Pointer Engineering" turns the cursor into a context-capture tool — pixels become structured entities (places, dates, objects). Users can issue shorthand commands like "Fix this" or "Move that here." 210 points on HN.</p>
        <div class="news-tags"><span>DeepMind</span><span>UX</span><span>Gemini</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 12</div>
      <div class="news-content">
        <h3><a href="https://claude.com/blog/claude-for-the-legal-industry" target="_blank">Anthropic Expands Legal AI: 12 New Claude Cowork Plugins</a></h3>
        <p>Anthropic launched 12 new Claude plugins and 20+ MCP connectors for law firms, integrating with Thomson Reuters CoCounsel, DocuSign, Everlaw, and Harvey. Over 20,000 lawyers attended a recent Claude webinar.</p>
        <div class="news-tags"><span>Anthropic</span><span>Legal AI</span><span>Enterprise</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 12</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/google-is-hiring-hundreds-of-engineers-to-help-customers-adopt-its-ai/" target="_blank">Google Hiring Hundreds of "Forward Deployed Engineers" for AI Adoption</a></h3>
        <p>Google Cloud is building a "Forward Deployed Engineers" unit to provide hands-on technical resources to AI customers — joining OpenAI's DeployCo and Anthropic's PE joint venture in the race to bridge the AI implementation gap.</p>
        <div class="news-tags"><span>Google</span><span>Enterprise</span><span>Hiring</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 12</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/alphabets-isomorphic-labs-raises-2-1-billion-to-scale-ai-drug-discovery-toward-clinical-trials/" target="_blank">Isomorphic Labs Raises $2.1B to Scale AI Drug Discovery</a></h3>
        <p>Alphabet's AI drug discovery spinout closed a $2.1B Series B led by Thrive Capital. The funding will push IsoDDE drug candidates toward clinical trials, with Demis Hassabis calling it a "mission to solve all disease."</p>
        <div class="news-tags"><span>DeepMind</span><span>Biotech</span><span>Funding</span></div>
      </div>
    </div>

  </div>

  <div class="news-section-title">Models & Inference</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">May 12</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/thinking-machines-lab-ships-its-first-model-and-argues-interactivity-is-what-openai-gets-wrong-about-voice/" target="_blank">Thinking Machines Lab Ships First Model — Real-Time Voice AI</a></h3>
        <p>Mira Murati's startup released its debut model processing audio, video, and text in 200ms parallel chunks — aiming to beat OpenAI's GPT Realtime 2 and Google's Gemini Live on interaction quality rather than raw benchmarks.</p>
        <div class="news-tags"><span>Voice AI</span><span>Startup</span><span>Real-time</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 12</div>
      <div class="news-content">
        <h3><a href="https://www.marktechpost.com/2026/05/12/meet-antangelmed-a-103b-parameter-open-source-medical-language-model-built-on-a-1-32-activation-ratio-moe-architecture/" target="_blank">AntAngelMed: 103B Open-Source Medical MoE Model</a></h3>
        <p>A new 103B-parameter medical language model with 1/32 activation-ratio Mixture-of-Experts architecture was released open-source, designed for clinical reasoning and biomedical text generation.</p>
        <div class="news-tags"><span>Open Source</span><span>Healthcare</span><span>MoE</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 11</div>
      <div class="news-content">
        <h3><a href="https://www.marktechpost.com/2026/05/11/sakana-ai-and-nvidia-introduce-twell-with-cuda-kernels-for-20-5-inference-and-21-9-training-speedup-in-llms/" target="_blank">Twell: Sakana AI + Nvidia CUDA Kernels for 20.5% Inference Speedup</a></h3>
        <p>Sakana AI and Nvidia introduced Twell, custom CUDA kernels delivering 20.5% faster inference and 21.9% faster training on LLMs — demonstrating that kernel-level optimization still yields significant gains at scale.</p>
        <div class="news-tags"><span>Nvidia</span><span>CUDA</span><span>Optimization</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 11</div>
      <div class="news-content">
        <h3><a href="https://huggingface.co/papers/2605.12357" target="_blank">Δ-Mem: Efficient Online Memory for Large Language Models</a></h3>
        <p>New research on arXiv proposes Δ-Mem, an efficient online memory architecture for LLMs that enables persistent multi-session agent memory without full context retention — addressing a key bottleneck in long-running AI agents.</p>
        <div class="news-tags"><span>Research</span><span>Memory</span><span>Agents</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 13</div>
      <div class="news-content">
        <h3>MCP Ecosystem: 19,831 Servers, 97M Monthly SDK Downloads</h3>
        <p>The Model Context Protocol ecosystem continues explosive growth with nearly 20,000 indexed servers and 97 million monthly SDK downloads. The 2026 roadmap focuses on transport scalability, agent communication, and enterprise readiness under Linux Foundation governance.</p>
        <div class="news-tags"><span>MCP</span><span>Agents</span><span>Infrastructure</span></div>
      </div>
    </div>

  </div>

  <div class="news-section-title">Industry Moves</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">May 13</div>
      <div class="news-content">
        <h3><a href="https://www.cnbc.com/2026/05/13/tencent-q1-earnings-gaming-ai-demand-revenue-miss.html" target="_blank">Tencent Q1: $37B Yuan AI Capex, Revenue Up 9%</a></h3>
        <p>Tencent reported Q1 revenue of ¥196.5B (+9% YoY) with ¥37B in AI infrastructure capex. The company hired ex-OpenAI researcher Yao Shunyu to compete with Alibaba and ByteDance in the Chinese AI arms race.</p>
        <div class="news-tags"><span>Tencent</span><span>Earnings</span><span>AI Capex</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 13</div>
      <div class="news-content">
        <h3><a href="https://www.bloomberg.com/news/articles/2026-05-13/alibaba-q4-revenue-misses-estimates-amid-ai-investment-push" target="_blank">Alibaba Q4: Cloud Revenue Jumps 26%, AI Revenue Triple-Digit Growth</a></h3>
        <p>Alibaba Cloud posted 26% revenue growth with AI-related revenue maintaining triple-digit growth for the 8th consecutive quarter — now over 20% of external customer revenue. Q4 net income doubled YoY to $3.7B.</p>
        <div class="news-tags"><span>Alibaba</span><span>Cloud</span><span>Earnings</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 12</div>
      <div class="news-content">
        <h3><a href="https://the-decoder.com/google-says-it-stopped-a-mass-cyberattack-after-ai-was-used-to-discover-a-zero-day-exploit/" target="_blank">Google Stopped Mass Cyberattack After AI Discovered Zero-Day</a></h3>
        <p>Google's Threat Intelligence Group identified a threat actor using AI to discover and weaponize a zero-day vulnerability. Google intercepted the planned mass attack and detailed AI-powered cyber threats from China, North Korea, and Russia in a new report.</p>
        <div class="news-tags"><span>Cybersecurity</span><span>Google</span><span>Zero-Day</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 12</div>
      <div class="news-content">
        <h3>Hugging Face Hosted Malware Masquerading as OpenAI Release</h3>
        <p>Security researchers discovered malicious software on Hugging Face posing as an official OpenAI release, highlighting supply-chain risks in the open-source AI ecosystem and the need for model provenance verification.</p>
        <div class="news-tags"><span>Security</span><span>HuggingFace</span><span>Supply Chain</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 9</div>
      <div class="news-content">
        <h3>Meta Laying Off 10% of Staff — 8,000 Jobs Cut Toward Superintelligence Labs</h3>
        <p>Meta plans to lay off approximately 8,000 employees and close 6,000 open roles, redirecting resources toward "Meta Superintelligence Labs" amid a $115-135B capex forecast for 2026 — the largest AI infrastructure bet by any single company.</p>
        <div class="news-tags"><span>Meta</span><span>Layoffs</span><span>Superintelligence</span></div>
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