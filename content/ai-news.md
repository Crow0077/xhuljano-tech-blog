
---
title: "AI News"
date: 2026-05-28
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
    <div class="last-updated">Updated May 28, 2026 — 16:00 UTC</div>
  </div>

  <div class="ainews-art" id="news-art"></div>

  <div class="news-section-title">Today's Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://www.buildfastwithai.com/" target="_blank">KPMG Deploys Claude to 276,000 Employees Across 138 Countries</a></h3>
        <p>KPMG launched its "Digital Gateway Powered by Claude" — integrating Claude Cowork and Managed Agents directly into the firm's core client delivery platform. The deployment covers 276,000 professionals across tax, private equity, and cybersecurity practices, with full Azure migration by September 2026. KPMG CEO Bill Thomas said "security, trust, and governance" drove the decision over raw speed. The move completes a sweep of the Big Four — Deloitte (470K), PwC (global), and now KPMG are all standardizing on Claude, putting ~1.1M consultants on Anthropic's platform.</p>
        <div class="news-tags"><span>Enterprise</span><span>KPMG</span><span>Claude</span><span>Big Four</span><span>Consulting</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/" target="_blank">OpenAI Launches DeployCo — a $4B Enterprise Consulting Subsidiary</a></h3>
        <p>OpenAI announced DeployCo, a majority-owned standalone consulting subsidiary with $4B+ in initial capital from 19 firms (TPG leading, with Goldman, McKinsey, and Capgemini). The unit will operate with Palantir-style Forward Deployed Engineers and acquired Tomoro (150 engineers) for immediate capacity. The move is a direct response to OpenAI's enterprise API share dropping from ~50% (2023) to ~25% (mid-2025) amid Anthropic and Google competition, signaling a strategic pivot from platform to services.</p>
        <div class="news-tags"><span>OpenAI</span><span>DeployCo</span><span>Consulting</span><span>Enterprise</span><span>$4B</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://aitoolsrecap.com/Blog/ai-news-may-2026" target="_blank">Anthropic Reports First Profit: $559M on $10.9B Q2 Revenue</a></h3>
        <p>Anthropic achieved its first-ever operating profit of $559 million in Q2 2026 — two years ahead of its 2028 target. Revenue hit $10.9B (130% growth from $4.8B in Q1), with annualized revenue run rate exceeding $44B. Claude Code enterprise deployments now generate $2.5B ARR. CEO Dario Amodei noted the company planned for 10x annual growth but saw 80x, calling demand "too hard to handle." The milestone comes as OpenAI (at $25B ARR) continues operating at a loss ahead of its IPO filing.</p>
        <div class="news-tags"><span>Anthropic</span><span>Profit</span><span>$10.9B</span><span>Revenue</span><span>Milestone</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://www.reuters.com/technology/" target="_blank">OpenAI Files for IPO at $1 Trillion Target Valuation</a></h3>
        <p>OpenAI filed its IPO prospectus with Goldman Sachs and Morgan Stanley advising, targeting a public listing above $1 trillion as early as September 2026. The filing reveals $25B ARR and 900 million weekly active users, though the company remains unprofitable. The IPO race with Anthropic (profitable at $44B ARR, targeting October IPO per Bloomberg) sets up a historic narrative battle between the scale-first and profitability-first approaches to AI commercialization.</p>
        <div class="news-tags"><span>OpenAI</span><span>IPO</span><span>$1 Trillion</span><span>Public Markets</span><span>Valuation</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://www.france24.com/en/technology/20260528-ai-leaders-soften-warnings-on-job-losses-as-industry-reassesses-impact" target="_blank">AI Leaders Huang, Altman, and Amodei Soften Job Apocalypse Warnings</a></h3>
        <p>In a coordinated shift, top AI executives are walking back doomsday job-loss predictions. Jensen Huang (Nvidia) called AI-blamed layoffs "intellectually lazy" and "irresponsible scaremongering." Sam Altman (OpenAI) issued a mea culpa in Sydney, admitting his intuitions about rapid white-collar displacement were wrong. Dario Amodei (Anthropic) now predicts a highly-augmented workforce rather than pure replacement. The rhetorical shift coincides with upcoming IPOs requiring broad investor confidence and growing public hostility toward AI-driven disruption narratives.</p>
        <div class="news-tags"><span>Jobs</span><span>Society</span><span>Huang</span><span>Altman</span><span>Amodei</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://techjournal.org/tech-layoffs-2026-ai-spending" target="_blank">113K Tech Layoffs in 2026 While AI CapEx Hits $725B</a></h3>
        <p>Over 113,000 tech workers have been laid off across 179 companies in 2026 (avg. 825/day) while Meta, Amazon, Microsoft, and Alphabet committed $725B in CapEx — almost exclusively for AI data centers, chips, and infrastructure. Amazon leads with ~30,000 cuts, followed by Oracle (10K+, expected 30K) and Meta (8,000). Analysts estimate ~48% of layoffs explicitly cite AI, though much is "AI washing" — reallocating payroll budgets to GPU procurement. Per Deutsche Bank, "AI redundancy washing will be a significant feature of 2026."</p>
        <div class="news-tags"><span>Layoffs</span><span>AI Spending</span><span>$725B</span><span>Economy</span><span>Restructuring</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://www.globalpolicywatch.com/2026/05/eu-ai-act-update-timeline-relief-targeted-simplification-and-new-prohibitions/" target="_blank">EU AI Act Amended: High-Risk Rules Delayed to 2027/28, New Prohibitions Added</a></h3>
        <p>EU lawmakers reached a provisional agreement on May 7 to amend the AI Act as part of the Digital Omnibus initiative. High-risk AI system obligations are postponed to 2027/28, while new prohibitions on predictive policing and social scoring based on AI are introduced. The amendments reduce overlap with existing machinery and product safety regulations. GPAI (general-purpose AI) transparency rules remain on track for August 2026 enforcement, focusing on training data disclosure and copyright compliance for foundation models.</p>
        <div class="news-tags"><span>EU AI Act</span><span>Regulation</span><span>Policy</span><span>Compliance</span><span>High-Risk</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://www.buildfastwithai.com/" target="_blank">Canada Rules ChatGPT Violated Privacy Law in Landmark Decision</a></h3>
        <p>Canada's Office of the Privacy Commissioner — joined by Quebec, BC, and Alberta privacy authorities — ruled that OpenAI's ChatGPT violated Canadian privacy law (PIPEDA) through overcollection of public data, lack of meaningful consent, and inadequate safeguards for health data and children's information. The federal commissioner has conditionally resolved, while provinces continue enforcement. It's the first major national privacy ruling on AI training data, setting a precedent that could reshape how frontier models are trained on publicly scraped data.</p>
        <div class="news-tags"><span>Privacy</span><span>Canada</span><span>ChatGPT</span><span>PIPEDA</span><span>Landmark</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://llm-stats.com/ai-news" target="_blank">Mistral Releases Mistral 3 Family — Open-Source Frontier Models Under Apache 2.0</a></h3>
        <p>Mistral AI launched Mistral 3, a family of ten open-source models under Apache 2.0 — including Mistral Large 3 (675B total / 41B active, sparse MoE) and dense models at 14B, 8B, and 3B designed for smartphones, drones, and edge deployment. The release positions Mistral as Europe's primary challenger to US and Chinese frontier labs. CEO Arthur Mensch accelerated the timeline citing Europe's need for "AI sovereignty," with enterprise supply deals already signed with Airbus and BMW for industrial AI workloads.</p>
        <div class="news-tags"><span>Mistral</span><span>Open Source</span><span>Mistral 3</span><span>Europe</span><span>Apache 2.0</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://www.perplexity.ai/hub/blog/perplexity-is-open-sourcing-bumblebee" target="_blank">Perplexity Open-Sources Unigram Tokenizer — 5-6x CPU Reduction for Rerankers</a></h3>
        <p>Perplexity AI open-sourced its rebuilt Unigram tokenizer, achieving 5x lower p50 latency than Hugging Face tokenizers and cutting production CPU utilization by 5-6x for small rerankers and embedding models. The release targets the often-overlooked tokenization bottleneck in AI inference pipelines — small models run in single-digit milliseconds on GPU, making CPU tokenization a meaningful fraction of total latency. The move continues Perplexity's shift toward becoming an open-source AI infrastructure provider.</p>
        <div class="news-tags"><span>Perplexity</span><span>Open Source</span><span>Tokenizer</span><span>Performance</span><span>Tools</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/" target="_blank">Cohere Acquires Aleph Alpha to Create $20B Transatlantic Sovereign AI Challenger</a></h3>
        <p>Cohere (Canada) acquired Aleph Alpha (Germany) in a deal creating a ~$20B transatlantic sovereign AI company. Schwarz Group (Lidl parent) invested $600M in Cohere's Series E as part of the deal. The combined entity maintains dual HQ in Toronto and Berlin, backed by the Canada-Germany Sovereign Technology Alliance. Aleph Alpha brings German government clients, Deutsche Bank, and SAP; Cohere brings RBC, Fujitsu, and LG CNS. The "sovereign premium" approach is validated in defense and public sector but remains untested in cost-sensitive commercial markets.</p>
        <div class="news-tags"><span>Cohere</span><span>Aleph Alpha</span><span>Sovereign AI</span><span>Acquisition</span><span>Geopolitics</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://www.buildfastwithai.com/" target="_blank">ChatGPT Voice Mode Controversy: Running on Old GPT-4o Model, Not GPT-5.5</a></h3>
        <p>Investigations by Andrej Karpathy and Simon Willison revealed that ChatGPT's Voice Mode operates on a GPT-4o-era model with an April 2024 knowledge cutoff — while the text interface uses GPT-5.5. The capability gap spans 13+ months and is not prominently disclosed to $200/mo Pro subscribers. By contrast, Google's Gemini Live uses the latest Gemini 3.5 Flash model. The controversy highlights the engineering challenges of real-time multimodal inference and raises transparency questions about what model version users are actually interacting with via voice.</p>
        <div class="news-tags"><span>ChatGPT</span><span>Voice Mode</span><span>GPT-4o</span><span>Transparency</span><span>Controversy</span></div>
      </div>
    </div>

  </div>

  <div class="news-section-title">Models &amp; Policy</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://www.france24.com/" target="_blank">JD.com Founder Vows to Protect 900,000 Employees from AI Automation</a></h3>
        <p>JD.com founder Liu Qiangdong publicly committed to "do everything possible" to protect the company's 900,000 employees from AI-driven automation, making one of the strongest workforce guarantees from a major tech employer. The pledge contrasts sharply with Meta, Amazon, and Oracle which have cut 100K+ combined this year citing AI efficiency. The divergence highlights a global split in corporate AI strategy: US Big Tech is restructuring aggressively while Asian tech giants like JD.com and SoftBank emphasize labor protection and societal stability.</p>
        <div class="news-tags"><span>JD.com</span><span>Jobs</span><span>Automation</span><span>China</span><span>Workforce</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 28</div>
      <div class="news-content">
        <h3><a href="https://aitoolsrecap.com/Blog/ai-news-may-2026" target="_blank">SpaceX S-1 Reveals $45B Anthropic Compute Deal — $1.25B per Month</a></h3>
        <p>The SpaceX S-1 filing for its semiconductor fab revealed the full terms of Anthropic's Colossus 1 compute deal: $1.25 billion per month through May 2029, totaling $45 billion — 3-5x higher than analyst estimates of $3-6B/year. The deal alone generates more annual revenue for SpaceX than the company's entire 2025 standalone revenue. The staggering figure reveals that compute cost — not model architecture — is the primary economic constraint on frontier AI development, with a single deal exceeding the entire pre-revenue valuation of most AI startups.</p>
        <div class="news-tags"><span>SpaceX</span><span>Anthropic</span><span>$45B</span><span>Compute</span><span>Infrastructure</span></div>
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

<!-- update 1779968000 -->
