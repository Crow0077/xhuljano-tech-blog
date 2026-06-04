---
title: "AI News"
date: 2026-06-04
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
    <div class="last-updated">Updated June 4, 2026 — 18:00 UTC</div>
  </div>

  <div class="ainews-art" id="news-art"></div>

  <div class="news-section-title">Today's Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/" target="_blank">Trump Signs Scaled-Back AI Executive Order — Voluntary 30-Day Pre-Release Testing</a></h3>
        <p>President Trump signed a significantly softened AI executive order after industry pushback, backing off from mandatory licensing. AI companies are now encouraged — not required — to voluntarily submit new models for government safety testing 30 days before public release, down from a 90-day mandate in earlier drafts. The order explicitly prohibits mandatory licensing or preclearance, and directs the DOJ to treat AI-assisted hacking as a high-priority enforcement area. Trump signed privately rather than at a planned ceremony with Silicon Valley executives, underscoring ongoing tech-policy tensions. This is his second major AI directive, following the December 2025 unified framework.</p>
        <div class="news-tags"><span>Policy</span><span>White House</span><span>Regulation</span><span>Safety Testing</span><span>Trump</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://www.cnbc.com/2026/05/17/uber-ai-budget-claude-code.html" target="_blank">Uber Exhausts Entire 2026 AI Budget in Four Months — Claude Code Token Spend Spikes</a></h3>
        <p>Uber burned through its full 2026 AI budget by April, with CTO Praveen Neppalli Naga confirming the overrun was driven by surging Claude Code usage among engineers. Despite the spending spike, COO Jill Hazelbaker admitted the company hasn't yet seen proportional ROI in consumer-facing features. Uber R&amp;D expenses hit $3.4B in 2025 (+9% YoY) with AI as the key driver. Separately, Uber cut 23% of its HR department and launched a major restructuring under new president Jill Hazelbaker. The story has become a cautionary tale for enterprise AI adoption: token pricing breaks conventional budget planning assumptions.</p>
        <div class="news-tags"><span>Uber</span><span>Claude Code</span><span>Anthropic</span><span>Enterprise AI</span><span>Budget</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://xix.ai/live/4944" target="_blank">BYD Confirms Humanoid Robot "Yao Shun Yu" — 4,000 R&amp;D Staff, 150 Units on Factory Floors</a></h3>
        <p>BYD EVP Li Ke confirmed the company's self-developed humanoid robot project, codenamed Yao Shun Yu, initiated in 2022. The seventh-generation prototype walks at 1.5 m/s, lifts 50 kg, and features a dexterous hand with tactile sensing. Approximately 150 units already operate in factories at 80% human efficiency. BYD plans 2,000 robots in 2025, 20,000 in 2026, and full deployment by 2028. Over 60% of components are shared with cars, and BYD's self-developed Xuanji A3 chip can be transferred to the robot platform — signaling that EV manufacturers are now serious embodied-AI players.</p>
        <div class="news-tags"><span>BYD</span><span>Humanoid Robot</span><span>Embodied AI</span><span>Manufacturing</span><span>China</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://blog.google/products/gemini/gemini-drive-gmail/" target="_blank">Google Extends Ask Gemini to Gmail — Natural Language Email Search Goes Live</a></h3>
        <p>Google expanded its Ask Gemini feature from Drive into Gmail, allowing Workspace, AI Pro, and Ultra users to search emails using natural language queries like "Find the emails I received regarding the Jenkins project approval." The feature supports multi-turn conversations for a unified view across emails, files, and folders — a practical step toward the agentic email experience Google has been promising. The rollout continues Google's strategy of embedding Gemini deeper into productivity workflows without requiring users to adopt a separate AI interface.</p>
        <div class="news-tags"><span>Google</span><span>Gemini</span><span>Gmail</span><span>Workspace</span><span>Productivity</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://about.meta.com/blog/whatsapp-business-ai-agent/" target="_blank">Meta Launches AI Customer Support Agent on WhatsApp Business Globally</a></h3>
        <p>Meta launched its Meta Business Agent globally on WhatsApp Business after two years of testing. The agent handles customer queries, recommends products, screens leads, and escalates complex issues to human agents. A Daily Briefing feature for missed messages is in testing. Future plans include search integration and an open customization platform for businesses. The move brings AI-powered customer service to WhatsApp's 2B+ user base and positions Meta as a serious player in the conversational commerce AI market, competing with offerings from Salesforce, Zendesk, and Intercom.</p>
        <div class="news-tags"><span>Meta</span><span>WhatsApp</span><span>Customer Service</span><span>AI Agents</span><span>Conversational Commerce</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://github.com/meituan-longcat/LongCat-Next" target="_blank">LongCat-Next: Meituan Open-Sources Native Multimodal Model — DiNA Architecture Unifies Text, Vision, Audio</a></h3>
        <p>Meituan's LongCat team open-sourced LongCat-Next, a 74B-parameter native multimodal model that processes text, images, and audio under a single autoregressive objective. Built on the novel DiNA (Discrete Native) architecture, it converts all modalities into shared discrete tokens, eliminating the bolted-on vision/audio modules typical of multimodal systems. Its dNaViT tokenizer achieves 28× pixel compression. Benchmarks show it outperforms Qwen3-Omni on OmniDocBench and leads in MMLU-Pro and SWE-Bench — a significant result from an open model in the multimodal frontier race.</p>
        <div class="news-tags"><span>Open Source</span><span>Multimodal</span><span>LongCat</span><span>Meituan</span><span>DiNA</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://www.studioglobal.ai/discover/answers/what-is-the-multi-year-deal-between-swedish-6a20ffae687eb4476985ee1d" target="_blank">Lovable Deepens Google Cloud Partnership — $400M ARR Startup Goes All-In on Gemini</a></h3>
        <p>Swedish vibe-coding startup Lovable announced an expanded multi-year strategic partnership with Google Cloud at the Google Cloud Summit Nordics in Stockholm. The deal increases Lovable's cloud resource usage fivefold, embeds its AI agent into Google Cloud's marketplace, and grants broader access to both Anthropic's Claude and Google's Gemini models. With $400M annualized revenue and just 146 employees serving over half of Fortune 500 companies, Lovable has become the poster child for AI-native startups achieving hyperscale revenue efficiency. The partnership includes Wiz security integration and underscores Google's strategy of locking in high-growth AI startups.</p>
        <div class="news-tags"><span>Lovable</span><span>Google Cloud</span><span>Startups</span><span>Gemini</span><span>Vibe Coding</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://www.cnbc.com/2026/06/03/alphasense-350m-funding-valuation.html" target="_blank">AlphaSense Raises $350M at $7.5B Valuation — AI Market Intelligence Platform Nears Unicorn Decacorn</a></h3>
        <p>AlphaSense closed a $350M funding round at a $7.5B valuation — nearly double its prior $4B mark — and surpassed $600M in annual recurring revenue in Q1 2026. The AI-powered market intelligence platform has raised well over $1B total, and the raise signals strong investor appetite for vertical AI platforms serving finance and corporate strategy. AlphaSense competes with Bloomberg Terminal and Refinitiv by applying NLP and generative search across earnings calls, filings, broker research, and news — a space where AI-native challengers are rapidly eroding legacy data-terminal moats.</p>
        <div class="news-tags"><span>AlphaSense</span><span>Funding</span><span>Market Intelligence</span><span>Fintech</span><span>Valuation</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://xix.ai/live/4942" target="_blank">LLM Exploit Showdown: GPT-5.5 vs DeepSeek V4 Pro — Cost Efficiency Gap Is 15×</a></h3>
        <p>Safety researcher Kasra Rahjerdi benchmarked frontier models on exploiting a vulnerable application with exposed Google backend credentials. GPT-5.5 achieved the highest success rate (7/10 runs) but cost $9.46 per successful exploit. DeepSeek V4 Pro succeeded 3/10 times at just $0.62 per success — roughly 1/15th the cost. Google's Gemini models failed entirely due to built-in rejection mechanisms. The test highlights a growing tension between capability and cost in AI security: cheaper models may enable more attempts per dollar, changing the economics of both offense and defense at scale.</p>
        <div class="news-tags"><span>Security</span><span>GPT-5.5</span><span>DeepSeek V4</span><span>Benchmarks</span><span>Exploit Testing</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/02/anthropic-scales-claude-mythos-to-critical-infrastructure-in-15-countries/" target="_blank">Anthropic Scales Claude Mythos to Critical Infrastructure in 15+ Countries</a></h3>
        <p>Anthropic announced that its most powerful model system, Claude Mythos, is now deployed across critical infrastructure sectors in more than 15 countries — including energy grids, telecommunications networks, and financial settlement systems. The expansion marks a significant escalation in frontier AI's penetration of high-stakes operational environments. Mythos, which has been in controlled rollout since late May, represents Anthropic's bet that trust and safety engineering can unlock adoption in regulated sectors that have been hesitant to integrate LLMs into operational decision pipelines.</p>
        <div class="news-tags"><span>Anthropic</span><span>Mythos</span><span>Infrastructure</span><span>Claude</span><span>Enterprise</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://www.ft.com/content/spacex-55b-chip-plant-texas" target="_blank">SpaceX Wins Tax Breaks for $55B Texas Terafab Chip Facility — AI Silicon Independence Play</a></h3>
        <p>SpaceX secured property tax exemptions for its massive $55B Terafab semiconductor fabrication facility in Texas, overcoming local opposition and legal challenges. The chip plant is central to Elon Musk's vision of vertically integrating AI silicon production — reducing dependence on TSMC, Samsung, and NVIDIA for the custom ASICs powering Colossus AI infrastructure. Combined with SpaceX's $1.25B/month compute deal with Anthropic and its Cursor acquisition option ($60B), the Terafab move positions SpaceX as a full-stack AI infrastructure player spanning chips, compute, and developer tooling — a competitive threat to both cloud hyperscalers and traditional semiconductor supply chains.</p>
        <div class="news-tags"><span>SpaceX</span><span>Semiconductors</span><span>Infrastructure</span><span>Texas</span><span>AI Chips</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 4</div>
      <div class="news-content">
        <h3><a href="https://cybernews.com/ai-news/ai-virology-dna-screening-congress/" target="_blank">AI Virology Alarm — Altman, Amodei, Hassabis Urge Congress to Screen Synthetic DNA Orders</a></h3>
        <p>Three of the most prominent AI leaders — Sam Altman (OpenAI), Dario Amodei (Anthropic), and Demis Hassabis (Google DeepMind) — jointly urged Congress to require mandatory screening of synthetic DNA orders, warning that AI tools can now coach amateur virologists through dangerous pathogen design. The unusual joint appeal follows research showing that current LLMs can meaningfully assist non-experts in virology workflows. The letter marks a rare moment of unified industry front on biosecurity and raises the stakes for the upcoming biosafety provisions in both US and EU AI regulatory frameworks.</p>
        <div class="news-tags"><span>Biosecurity</span><span>DNA Screening</span><span>OpenAI</span><span>Anthropic</span><span>DeepMind</span></div>
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

<!-- update 1749067200 -->
