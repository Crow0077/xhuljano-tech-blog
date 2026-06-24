---
title: "AI News"
date: 2026-06-24
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
    <div class="last-updated">Updated June 24, 2026 — 12:00 UTC</div>
  </div>

  <div class="ainews-art" id="news-art"></div>

  <div class="news-section-title">Wednesday's Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">Jun 23</div>
      <div class="news-content">
        <h3><a href="https://www.technologyreview.com/2026/06/23/1138837/asml-400-million-dollar-machine-powering-future-of-chipmaking/" target="_blank">ASML's $400M High-NA EUV Machine Begins Shipping — 8nm Resolution, the Engine of the AI Compute Race</a></h3>
        <p>ASML has begun shipping its new High-Numerical-Aperture EUV lithography machines to fabs at $400 million a pop, each the size of a double-decker bus and capable of patterning transistors at 8 nanometers (about 40 silicon atoms wide). The Dutch company controls ~90% of the global lithography market, and its machines are the only path to keep Moore's Law alive through the next decade of AI demand. The High-NA design required 16 years of R&amp;D, $10B in investment, and a complete redesign of Zeiss's mirror-polishing process to make surfaces smooth enough for the angled EUV light. Intel was the first customer, deploying one in Oregon; TSMC is biding its time, citing cost concerns. Notably, the US embargo blocks sales to China, which is now pouring billions into a domestic EUV equivalent — though experts doubt the Chinese can match ASML's industrial-scale output any time soon.</p>
        <div class="news-tags"><span>ASML</span><span>EUV</span><span>Semiconductors</span><span>TSMC</span><span>Intel</span><span>China</span><span>Hardware</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 23</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/23/indias-moengage-bets-marketings-future-on-millions-of-ai-agents/" target="_blank">India's MoEngage Acquires Aampe — Betting Marketing's Future Is 'Millions of AI Agents' Per Customer</a></h3>
        <p>MoEngage, an Indian customer engagement platform serving 1,200+ global brands, has acquired Aampe in an all-cash deal to integrate Aampe's agentic AI technology that assigns dedicated AI agents to individual customers. Rather than batch-and-blast campaigns, the approach treats each user as having a continuously-learning personal AI agent that decides when, where, and how to message them. Aampe's tech reportedly handles 50+ personalization variables per user in real time. The acquisition signals that the "AI agent" paradigm is moving beyond software engineering into marketing, sales, and customer success — every customer-facing function is being reimagined as a multi-agent system. MoEngage plans to roll the technology into its core platform by Q4 2026.</p>
        <div class="news-tags"><span>MoEngage</span><span>Aampe</span><span>AI Agents</span><span>Marketing</span><span>Acquisition</span><span>India</span><span>Enterprise</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 23</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/" target="_blank">Anthropic's Claude Tag Lives in Your Slack — Learning Organizational Context 24/7</a></h3>
        <p>Anthropic has launched Claude Tag, an always-on AI teammate that sits inside Slack channels and gradually builds a persistent model of your company's institutional knowledge. Unlike a chatbot that responds to prompts, Claude Tag passively observes conversations, tracks decisions, and surfaces relevant context when teammates @mention it — functioning more like a tribal-knowledge-absorbing colleague than a search engine. Anthropic is positioning the product as a strategic play to capture enterprise workflow data before competitors can. The launch is the latest in a wave of "ambient AI" products (GitHub Copilot Workspace, Notion Q&amp;A, Slack's own Slack AI) racing to become the default layer of organizational memory. Privacy advocates are already raising flags about what happens when a third-party AI has read access to years of internal Slack history.</p>
        <div class="news-tags"><span>Anthropic</span><span>Claude Tag</span><span>Slack</span><span>Enterprise AI</span><span>Ambient AI</span><span>Productivity</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 23</div>
      <div class="news-content">
        <h3><a href="https://arxiv.org/abs/2606.24884v1" target="_blank">InSight: Self-Guided Skill Acquisition via Steerable VLAs — Robots Learn New Primitives Without Human Demonstrations</a></h3>
        <p>A Stanford-led team has published InSight, a framework that lets vision-language-action (VLA) robot models autonomously acquire new manipulation skills by making them "steerable" at the primitive-action level — "move gripper to the bowl," "lift upward," "pour the bottle." The system uses a VLM to decompose tasks into primitives, identify which primitives are missing, attempt them autonomously with VLM-proposed low-level control, and fold successful attempts back into the training set. Across block flipping, drawer closing, sweeping, twisting, and pouring, InSight learned all target skills with zero human demonstrations of those specific tasks. Once primitives are learned, they can be composed for long-horizon tasks without additional human input. The work points to a near-term future where household and warehouse robots can be taught new tricks in the wild, not just at the factory.</p>
        <div class="news-tags"><span>Robotics</span><span>VLA</span><span>InSight</span><span>Stanford</span><span>Self-Supervised</span><span>Manipulation</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 23</div>
      <div class="news-content">
        <h3><a href="https://arxiv.org/abs/2606.24855v1" target="_blank">OpenThoughts-Agent: 100K-Training-Set Recipe Beats Nemotron-Terminal on 7 Agentic Benchmarks</a></h3>
        <p>A large multi-institution team (Stanford, Georgia Tech, NYU, UT Austin) has released OpenThoughts-Agent (OT-Agent), a fully open data curation pipeline for training agentic language models. Across 100+ controlled ablations, the researchers identified which task sources and data-mix strategies actually generalize, then assembled a 100K-example training set. Fine-tuning Qwen3-32B on this dataset yielded 44.8% average accuracy across seven agentic benchmarks — a 3.9 percentage point improvement over the strongest existing open data agentic model, Nemotron-Terminal-32B (40.9%). Critically, the data exhibits strong scaling properties, outperforming alternatives at every training-set size in compute-controlled comparisons. The team publicly released the training sets, pipeline, and models at openthoughts.ai — a notable step toward open agentic model development, where most progress has been locked behind closed APIs.</p>
        <div class="news-tags"><span>OpenThoughts</span><span>Agentic AI</span><span>Qwen3</span><span>Open Source</span><span>Training Data</span><span>Benchmarks</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 22</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/" target="_blank">OpenAI Launches Initiative to Find and Patch Open-Source Bugs — Partners With Trail of Bits</a></h3>
        <p>OpenAI has announced a new program to help secure the open-source software ecosystem by using its models to find and patch vulnerabilities in widely-used projects. The initiative, developed in partnership with security firm Trail of Bits, formalizes what has been ad-hoc: OpenAI researchers periodically using GPT-class models to surface memory corruption, injection flaws, and logic bugs in OSS dependencies that power much of the internet. The program will offer free security audits to maintainers of high-impact projects and publish detailed write-ups of findings (with responsible disclosure). The move reflects a strategic shift: as AI-generated code proliferates, securing the resulting open-source surface area becomes both a public good and a defensive moat for OpenAI's enterprise customers.</p>
        <div class="news-tags"><span>OpenAI</span><span>Open Source</span><span>Security</span><span>Trail of Bits</span><span>Vulnerabilities</span><span>Codex</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 22</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/" target="_blank">AI Chipmaker Groq Confirms $650M Raise — Rebuilds After Nvidia's $20B 'Not-Acqui-Hire' Deal</a></h3>
        <p>AI inference chip specialist Groq has confirmed a $650M funding round — its first major raise since Nvidia's controversial $20B deal last quarter that hired away a significant chunk of Groq's engineering team without acquiring the company itself. The new capital will fund a pivot toward Groq's "neocloud" business: renting Groq's LPU-powered inference capacity to enterprises that want Nvidia-alternative supply. Groq has also re-staffed with new executive hires, including a former AWS VP of engineering as CTO. The funding round was led by a Saudi PIF-led consortium at a $4.2B valuation, a markdown from Groq's 2024 peak of $5.5B but a clear vote of confidence that neocloud inference is a real market distinct from Nvidia's training-dominated business.</p>
        <div class="news-tags"><span>Groq</span><span>Nvidia</span><span>AI Chips</span><span>Funding</span><span>Inference</span><span>Neocloud</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 22</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/22/google-deepmind-bets-75m-on-ais-future-in-hollywood-with-a24-deal/" target="_blank">Google DeepMind Bets $75M on AI in Hollywood With A24 Partnership — Generative Video Goes Mainstream</a></h3>
        <p>Google DeepMind has announced a $75M multi-year partnership with A24, the indie studio behind Everything Everywhere All at Once and Hereditary, to co-develop generative AI tools for film production. The deal covers pre-production (storyboarding, concept art, location scouting), production (VFX, set extension, de-aging), and post-production (editing, color grading, sound design). A24 will have first access to new DeepMind video and image generation models in exchange for feedback and case studies. The partnership is the highest-profile signal yet that generative video is moving from research demos to actual creative workflows — and that major AI labs are now willing to make long-term capital commitments to win over creative professionals who have been the most vocal skeptics of the technology.</p>
        <div class="news-tags"><span>DeepMind</span><span>Google</span><span>A24</span><span>Generative Video</span><span>Hollywood</span><span>Creative AI</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 22</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/22/the-ai-world-is-getting-loopy/" target="_blank">The AI World Is Getting 'Loopy' — Agentic Swarms That Run Forever in the Background</a></h3>
        <p>The next phase of agentic AI is "the loop" — autonomous swarms of agents authorized to run continuously in the background, not just respond to a single user prompt. TechCrunch profiles the emerging pattern, popularized by Anthropic's Claude Code and Boris Cherny's recent talks: agents that maintain persistent state, monitor external triggers (GitHub PRs, calendar events, email arrivals), and execute multi-step work without human intervention. The article notes that this is qualitatively different from one-shot agents — it's a shift from "ask an LLM to do a task" to "hire an AI that does a job continuously." The infrastructure implications are significant: every "loop" agent needs its own identity, sandbox, observability, and kill switch, and the agentic AI tooling market is fragmenting fast around these new primitives.</p>
        <div class="news-tags"><span>Agentic AI</span><span>Claude Code</span><span>Loops</span><span>Autonomous Agents</span><span>Infrastructure</span><span>Background Tasks</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 12</div>
      <div class="news-content">
        <h3><a href="https://github.com/DietrichGebert/ponytail" target="_blank">'Ponytail' AI Agent Skill Crosses 53,000 GitHub Stars in 12 Days — 'The Laziest Senior Dev in the Room'</a></h3>
        <p>Ponytail, a 1.7KB JavaScript module that makes AI coding agents "think like the laziest senior dev in the room" (its author's pitch), has rocketed past 53,000 GitHub stars since its June 12 release — making it one of the fastest-growing developer projects of 2026. The tool's core idea is YAGNI-as-a-service: a prompt engineering layer that tells coding agents to write the minimum code, avoid speculative abstractions, and skip features not explicitly requested. Early adopters report it dramatically reduces over-engineered AI-generated pull requests. The viral growth reflects broader developer fatigue with AI agents that produce 2000-line PRs for problems that need 50-line fixes. Ponytail's MIT license and one-line install have made it a default add-on for Claude Code, Cursor, and Codex workflows.</p>
        <div class="news-tags"><span>Ponytail</span><span>AI Agents</span><span>YAGNI</span><span>Claude Code</span><span>Cursor</span><span>Developer Tools</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 19</div>
      <div class="news-content">
        <h3><a href="https://github.com/Forsy-AI/agent-apprenticeship" target="_blank">Forsy-AI's 'Agent Apprenticeship' Framework — A Living Ecosystem Where AI Agents Learn From Real Work</a></h3>
        <p>Forsy-AI has open-sourced agent-apprenticeship, a framework for creating "living ecosystems" where AI agents learn from real-world work through iterative workflow loops, reusable experience, and collective training-signal exchange. The framework — which has 884 stars in five days and is the first project to ship with official Hermes-Agent and opencode-go integration — addresses a hard unsolved problem: how do you make agents improve across deployments when the data is owned by users? Forsy-AI's answer is a "loop engineering" pattern where agents run real tasks, capture post-task reflections as reusable skills, and exchange training signals (not raw data) across the network. The launch marks an inflection point in the agent ecosystem race: instead of building better single agents, Forsy-AI is betting on better learning systems.</p>
        <div class="news-tags"><span>Forsy-AI</span><span>Agent Apprenticeship</span><span>Hermes Agent</span><span>OpenCode</span><span>Loop Engineering</span><span>Agent Learning</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 22</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/22/nvidia-wants-to-cut-data-center-water-use-but-thats-not-the-same-as-fixing-ais-water-problem/" target="_blank">Nvidia's New Liquid-Cooling System Cuts Data Center Water Use — But Misses AI's Bigger Thirst</a></h3>
        <p>Nvidia announced a new liquid-cooling system that significantly reduces direct water consumption inside AI data centers — a genuine engineering achievement that the company is heavily marketing to sustainability-minded enterprise customers. However, as TechCrunch's analysis makes clear, direct data center water use is a small fraction of AI's total water footprint. The bigger draw happens at the power plant: AI compute runs on grids that are still majority fossil-fuel-powered, and thermoelectric power plants consume enormous amounts of water for cooling. The honest accounting shows that even a waterless data center, plugged into a coal-fired grid, has a large indirect water footprint. The article highlights growing scrutiny of "AI and water" claims as greenwashing-adjacent when they only address on-site operations.</p>
        <div class="news-tags"><span>Nvidia</span><span>Data Centers</span><span>Liquid Cooling</span><span>Water</span><span>Sustainability</span><span>Climate</span></div>
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

<!-- update 1782302400 -->
