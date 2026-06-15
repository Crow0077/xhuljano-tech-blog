---
title: "AI News"
date: 2026-06-15
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
    <div class="last-updated">Updated June 15, 2026 — 13:15 UTC</div>
  </div>

  <div class="ainews-art" id="news-art"></div>

  <div class="news-section-title">Monday's Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">Jun 15</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/15/ai-agents-are-becoming-employees-newcore-emerges-with-66m-to-give-them-identities/" target="_blank">NewCore Emerges with $66M to Give AI Agents Their Own Identities — Treating Bots as Digital Employees</a></h3>
        <p>Cybersecurity startup NewCore emerged from stealth with $66M in seed funding led by Cyberstarts, valuing the company at $300M. The company argues the next frontier of enterprise security is managing AI agent identities, not human ones. Its platform treats AI agents as first-class identities with their own permissions, lifecycle controls, and revocation mechanisms, built on a "split-key" architecture. Founder Zohar Alon predicts AI agents could outnumber human employees at tech companies within years, and warns that legacy identity platforms from Okta and Microsoft will buckle under the scale. The platform already integrates with Claude Code, OpenAI Codex, and Cursor via an "Agentic Skill" package.</p>
        <div class="news-tags"><span>NewCore</span><span>Identity</span><span>Security</span><span>AI Agents</span><span>$66M</span><span>Enterprise</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 15</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/15/a-satellite-just-learned-to-find-things-on-its-own-heres-what-that-means/" target="_blank">A Satellite Just Learned to Find Things on Its Own — First VLM in Orbit with Google's Gemma 3</a></h3>
        <p>In a historic first, an Earth observation satellite autonomously identified targets without human analysts. The Yam-9 satellite, built by Loft Orbital and running Google DeepMind's Gemma 3 vision-language model on an Nvidia Jetson Orin AGX GPU, classified sensor data and answered natural language queries about infrastructure — all in orbit. JPL's NAVI-Orbital software acted as the harness. Loft Orbital's Head of AI Paul Lasserre says the breakthrough "opens the door to always-on patrol layers in space" and a fleet of 50-100 such satellites could provide real-time coverage of anywhere on Earth. The concept originally stemmed from JPL research into astronaut AI assistants for lunar and Mars missions.</p>
        <div class="news-tags"><span>Satellite</span><span>VLM</span><span>Gemma 3</span><span>Loft Orbital</span><span>Space</span><span>Onboard AI</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 15</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/15/the-ai-layoff-wave-is-becoming-a-powder-keg/" target="_blank">The AI Layoff Wave Is Becoming a Powder Keg — 150,000 Workers Cut as AI Insiders Get Rich</a></h3>
        <p>TechCrunch reports a combustible dynamic: ~150,000 tech workers have been laid off in 2026 in ~363 separate cuts — a pace of 974 people/day, 44% faster than 2025 — while a tiny cohort of AI insiders amasses unprecedented wealth. AI has been cited as the #1 reason for layoffs for three consecutive months across every industry. Marc Andreessen called AI the "silver bullet excuse" for over-hiring during the pandemic. Meanwhile, SpaceX's Friday IPO minted ~4,400 millionaires, Anthropic and OpenAI both approach trillion-dollar valuations, and Mark Zuckerberg purchased a record $170M Miami mansion two months before cutting 8,000 Meta employees. The piece warns the social backlash could exceed 2008-era Occupy Wall Street.</p>
        <div class="news-tags"><span>Layoffs</span><span>Inequality</span><span>Tech Industry</span><span>Society</span><span>IPO Wealth</span><span>Backlash</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 14</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/13/meta-reportedly-moves-to-unwind-2b-manus-deal-after-beijings-demand/" target="_blank">Meta Begins Unwinding $2B Manus Acquisition After Beijing Divestiture Order</a></h3>
        <p>Meta has started dismantling its $2 billion acquisition of Chinese-founded AI agent startup Manus, cutting the startup off from internal systems and halting data sharing after Beijing ordered the deal reversed on national security grounds. The saga marks a major unraveling: Manus co-founders are now seeking ~$1B to reclaim the company and potentially pursue a Hong Kong listing. The case sets a precedent that Beijing's regulatory power extends to Chinese-founded AI companies even after offshore incorporation. Asian backers including Tencent and ZhenFund have indicated they will cooperate with the unwinding. The deal was announced in December 2025 and had already drawn scrutiny from U.S. Senator John Cornyn.</p>
        <div class="news-tags"><span>Meta</span><span>Manus</span><span>China</span><span>Acquisition</span><span>Divestiture</span><span>Geopolitics</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 13-14</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/13/as-anthropic-suspends-access-to-new-models-india-debates-its-ai-future/" target="_blank">India Debates AI Sovereignty After Anthropic Blocks Fable 5 — "Technology Is the Ultimate Weapon"</a></h3>
        <p>The U.S. government's directive forcing Anthropic to block Fable 5 and Mythos 5 for all foreign nationals has triggered an existential debate in India, the second-largest market for frontier AI. Tech leaders called for urgent action: Activate founder Aakrit Vaish said it "materially changes how we should think about sovereign AI in India," Zoho's Sridhar Vembu urged adopting smaller/open-source models (both Indian and Chinese), and former Infosys executive Mohandas Pai proposed a ₹500B ($5.8B) annual fund for AI. The IndiaAI Mission's current budget is just $1.2B over five years. Lightspeed's Hemant Mohapatra noted talent and compute constraints remain the binding factors. India has only a handful of foundational model efforts, with most startups building applications on foreign models.</p>
        <div class="news-tags"><span>India</span><span>Anthropic</span><span>Sovereign AI</span><span>Geopolitics</span><span>Policy</span><span>Fable 5</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 11</div>
      <div class="news-content">
        <h3><a href="https://www.technologyreview.com/2026/06/11/1138794/google-deepmind-is-worried-about-what-happens-when-millions-of-agents-start-to-interact/" target="_blank">Google DeepMind Funds $10M Multi-Agent Safety Research — "There Isn't a Field for This Yet"</a></h3>
        <p>Google DeepMind has teamed up with Schmidt Sciences, the UK government's ARIA, and others to launch a $10M funding pot for multi-agent safety research — a field that, by DeepMind's own admission, "barely exists." Rohin Shah, who directs DeepMind's AGI safety research, warns that as millions of AI agents begin interacting online without human oversight, we could hit a tipping point where today's hypothetical dangers become tomorrow's real ones — from supercharged prompt injections turning agents into self-guided malware to coordinated attacks on digital infrastructure. The initiative aims to kick-start academic research outside of tech companies. Anthropic separately published zero-trust guidelines for deploying AI agents. Shah estimates we have "a few more months" before multi-agent risks become a practical concern.</p>
        <div class="news-tags"><span>DeepMind</span><span>Multi-Agent</span><span>Safety</span><span>$10M</span><span>Research</span><span>Alignment</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 12</div>
      <div class="news-content">
        <h3><a href="https://github.com/DietrichGebert/ponytail" target="_blank">Ponytail — 11.8k⭐ Tool That Makes AI Agents Think Like "the Laziest Senior Dev"</a></h3>
        <p>Ponytail, a viral open-source project, has taken the AI agent community by storm with a contrarian philosophy: "The best code is the code you never wrote." The tool configures AI coding agents (Claude Code, Codex, Cursor, etc.) to follow YAGNI (You Ain't Gonna Need It) principles — writing minimal, lazy, production-grade code that avoids over-engineering. With 11,800+ GitHub stars in 3 days, its popularity reflects developer fatigue with AI agents that generate excessive boilerplate. The project's approach is the polar opposite of the "ship everything" agent mindset, teaching agents to aggressively prune scope, question requirements, and refuse unnecessary work.</p>
        <div class="news-tags"><span>Ponytail</span><span>Open Source</span><span>Developer Tools</span><span>AI Agents</span><span>YAGNI</span><span>Claude Code</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 11</div>
      <div class="news-content">
        <h3><a href="https://github.com/omnigent-ai/omnigent" target="_blank">Omnigent — Open-Source Meta-Harness for All AI Agents Hits 1.5k⭐, Supports Claude Code + Codex + Pi</a></h3>
        <p>Omnigent, a new open-source project from omnigent-ai, provides a common orchestration layer over multiple AI agent harnesses — Claude Code, OpenAI Codex, Pi, and custom agents — allowing users to swap or combine them without rewriting workflows. Features include policy-and-sandbox controls for agent governance and real-time collaboration from any device. With 1,500 GitHub stars since its June 11 launch, the project addresses the growing fragmentation in the AI agent tooling ecosystem as developers juggle multiple agent platforms. The Apache 2.0 licensed project is positioning itself as the Linux-like kernel for the agent operating system.</p>
        <div class="news-tags"><span>Omnigent</span><span>Open Source</span><span>Agent Orchestration</span><span>Claude Code</span><span>Codex</span><span>DevTools</span></div>
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

<!-- update 1750029066 -->