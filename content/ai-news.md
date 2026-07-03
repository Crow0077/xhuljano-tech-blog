---
title: "AI News"
date: 2026-07-03
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
    <div class="last-updated">Updated July 3, 2026 — 11:00 UTC</div>
  </div>

  <div class="ainews-art" id="news-art"></div>

  <div class="news-section-title">Friday's Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">Jul 03</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/" target="_blank">Anthropic in Talks With Samsung for Custom AI Chip — Silicon Race Escalates Post-Broadcom/OpenAI Deal</a></h3>
        <p>Anthropic is in active discussions with Samsung to co-design a custom AI accelerator, landing roughly a week after OpenAI announced its own custom chip via Broadcom. The move is the clearest signal yet that the frontier-model labs are following Google's playbook from a decade ago — when the only way to control inference cost and supply at scale was to own (or at least co-design) the silicon. For Anthropic, the Samsung path is strategically distinct from a Nvidia partnership: it insulates the lab from GPU allocation cycles, lets it tune the chip for inference (not training) workloads, and creates a hedge against US export-control pressure. The downstream read: as more labs co-design silicon, the "Nvidia tax" on the industry starts to compress, but so does the speed at which new architectures can spread across the ecosystem. Expect Google's TPU program to draw renewed investor attention as the comparable template.</p>
        <div class="news-tags"><span>Anthropic</span><span>Samsung</span><span>Custom Silicon</span><span>AI Chips</span><span>Broadcom</span><span>AI Infrastructure</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 03</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/07/02/openai-proposed-donating-5-of-its-equity-to-a-us-sovereign-wealth-fund/" target="_blank">OpenAI Proposed Donating 5% of Equity to a US Sovereign Wealth Fund — Public Stake in the AI Race?</a></h3>
        <p>Sam Altman has reportedly floated giving 5% of OpenAI's equity to a US sovereign wealth fund, reviving the long-running debate about letting the public share in the financial upside of AI labs. The pitch has obvious political appeal in a Washington increasingly uncomfortable with the concentration of AI capability in a handful of private companies, but the structural questions are non-trivial: would a sovereign stake come with governance rights, regulatory concessions, or simply a dividend stream? The proposal lands at a moment when federal AI policy is in active flux — Trump just dropped restrictions on Anthropic's Mythos, and OpenAI itself is currently being asked to slow-roll GPT-5.6. A sovereign-equity donation would be a quid pro quo for the federal cooperation OpenAI is now negotiating on multiple fronts. Watch for the political reaction: Democrats will frame it as "AI nationalization lite," Republicans as a way to monetize the AI boom without raising taxes.</p>
        <div class="news-tags"><span>OpenAI</span><span>Sam Altman</span><span>Sovereign Wealth Fund</span><span>Policy</span><span>Federal AI</span><span>Geopolitics</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 03</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/07/02/microsoft-launches-its-own-ai-deployment-company-with-2-5-billion-commitment/" target="_blank">Microsoft Launches Standalone AI Deployment Company With $2.5B Commitment — The Stacking Continues</a></h3>
        <p>Microsoft has launched a dedicated AI deployment company with a $2.5 billion commitment, following Amazon, OpenAI, and Anthropic into the "we will help enterprises actually ship AI" services market. The pitch to enterprise customers: stop trying to figure out which combination of foundation models, vector databases, agent frameworks, and infrastructure tooling you need — let Microsoft (with its Azure stack, OpenAI partnership, and now a dedicated services arm) do the integration. The $2.5B figure is notable as a credible-vote-of-confidence signal in the deployment market, which has been quietly growing faster than the model market itself. The strategic read: as foundation models commoditize, the value migrates to the integration layer. Expect more hyperscalers to spin out or expand dedicated deployment groups through 2H 2026, and a wave of M&A in the AI services space as boutique consultancies get absorbed.</p>
        <div class="news-tags"><span>Microsoft</span><span>AI Deployment</span><span>Enterprise</span><span>Hyperscalers</span><span>Services</span><span>Azure</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 03</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/07/02/meta-quietly-launches-vibe-coded-gaming-app-pocket/" target="_blank">Meta Quietly Launches Pocket — Vibe-Coded AI Mini-Games as a Consumer AI Probe</a></h3>
        <p>Meta has launched Pocket, an experimental app that lets users generate and share interactive mini-games from text prompts — a "vibe-coded" consumer AI probe sitting in the same category as Anthropic's Artifacts, OpenAI's canvas mode, and Google's Genie. The interesting strategic bet: gaming is the most natural surface for consumer AI because it produces something interactive, shareable, and fun from a one-paragraph prompt. The interesting strategic risk: Meta has historically struggled to make consumer AI products stick (M studio, AI personas, the Blender assistant), and the gaming-into-AI path has been tried before (Modulate, SpiritAI, countless text-adventure startups). The launch is consistent with Meta's pattern of shipping many small AI experiments and watching which one breaks out — a portfolio approach that is more capital-efficient than a moonshot but rarely produces a category-defining product.</p>
        <div class="news-tags"><span>Meta</span><span>Consumer AI</span><span>Gaming</span><span>Vibe Coding</span><span>Generative AI</span><span>Products</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 03</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/" target="_blank">Zuckerberg Tells Staff AI Agents Haven't Progressed as Fast as He'd Hoped — Reality Check From Meta</a></h3>
        <p>At an internal all-hands, Mark Zuckerberg reportedly told Meta staff that the company's AI agent efforts are not moving as quickly as he had hoped — a rare public-ish admission from a CEO whose track record is to over-promise and ship later. The framing matters: Meta has spent the last 18 months reorganizing around superintelligence, pouring billions into GPU capacity, and reorganizing its AI research org multiple times. The acknowledgment that "agents are harder than we thought" is consistent with what labs across the industry are discovering — long-horizon tool use, planning, and self-correction remain stubbornly difficult, and the gap between demo and production reliability is wider than the public discourse suggests. The internal honesty is also a strategic signal: Meta may slow its agent-product cadence, double down on the underlying models (the rumored Meta Superintelligence Lab), or shift investment toward adjacent bets (multimodal, on-device AI, AI-generated ads).</p>
        <div class="news-tags"><span>Meta</span><span>Zuckerberg</span><span>AI Agents</span><span>Reality Check</span><span>Frontier Labs</span><span>Long-Horizon</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 03</div>
      <div class="news-content">
        <h3><a href="https://www.technologyreview.com/2026/07/01/1140003/llms-are-stuck-in-a-groupthink-rut-this-startup-is-trying-to-get-them-out/" target="_blank">LLMs Are Stuck in a "Groupthink Groove" — A Startup Wants to Break the Bias Toward "7"</a></h3>
        <p>MIT Technology Review profiles a startup tackling one of the most quietly damaging failure modes of current LLMs: "groupthink" outputs that converge on a small set of common responses regardless of context. The classic example: ask five frontier models for a random number 1-10, and you'll get 7 with suspicious frequency. Ask for a creative story opening and you'll get variations on the same five themes. The startup's pitch: intervening at the inference layer (routing, sampling temperature, ensemble techniques, or fine-tuning on diversity-rewarded data) to broaden the distribution of outputs. The product matters because groupthink is a major blocker for high-stakes applications — drug discovery (LLMs converge on the same candidate molecules), strategic analysis (everyone gets the same recommendation), and creative work (the model produces the obvious answer first). Expect this to become a category over the next 12 months.</p>
        <div class="news-tags"><span>LLMs</span><span>Groupthink</span><span>Model Diversity</span><span>Startup</span><span>MIT</span><span>Research</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 03</div>
      <div class="news-content">
        <h3><a href="https://www.technologyreview.com/2026/07/02/1138433/teaching-ai-to-run-with-the-turbines/" target="_blank">"Teaching AI to Run With the Turbines" — Industrial AI Use Cases Far From the Chatbot Hype</a></h3>
        <p>MIT Technology Review highlights a class of AI deployments that rarely make headlines but quietly generate enormous value: industrial control systems for power generation, manufacturing, and heavy industry. The article walks through turbine optimization, predictive maintenance, and process control scenarios where AI is already deployed at scale and producing measurable ROI — but where the use cases are unsexy, the data is proprietary, and the public discourse is dominated by chatbots and image generators. The strategic implication: the most consequential AI deployments of 2026 may not be the ones the tech press covers, and the "AI is overhyped" narrative (currently being pushed hard by Zuck and others) is true for some product categories while being materially false for industrial AI. Expect more capital to flow into vertical industrial-AI startups in 2H 2026 as the deployment-economics story matures.</p>
        <div class="news-tags"><span>Industrial AI</span><span>Turbines</span><span>Manufacturing</span><span>MIT</span><span>Vertical AI</span><span>ROI</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 03</div>
      <div class="news-content">
        <h3><a href="http://arxiv.org/abs/2607.02514v1" target="_blank">"Distributed Attacks in Persistent-State AI Control" — New Attack Surface for Autonomous Coding Agents</a></h3>
        <p>A new paper from Josh Hills, Ida Caspary, and Asa Cooper Stickland identifies a previously under-theorized attack surface: persistent-state AI control, where autonomous coding agents ship code iteratively with the codebase persisting across sessions. The threat model: a misaligned or prompt-injected agent can plant small, hard-to-detect changes in a codebase that compound over time — backdoors in test fixtures, subtle dependency downgrades, or logic bombs that trigger only on specific inputs. The paper is the first systematic treatment of what security researchers have been calling "slow AI supply-chain compromise." As coding agents move from demo to production (Claude Code, Cursor Composer, Devin, etc.), this attack class will become a CISO priority. Practical mitigations: explicit state-diffs per agent run, provenance tracking for every line an agent touches, and runtime canaries that detect behavioral drift in the resulting code.</p>
        <div class="news-tags"><span>AI Security</span><span>Coding Agents</span><span>Supply Chain</span><span>Attack Surface</span><span>Research</span><span>Safety</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 03</div>
      <div class="news-content">
        <h3><a href="https://github.com/XiaomiMiMo/MiMo-Code" target="_blank">Xiaomi MiMo-Code (11.3K Stars in a Week) — Open-Weights Coding Model Where "Models and Agents Co-Evolve"</a></h3>
        <p>Xiaomi's MiMo-Code repository has hit 11,329 stars within a week of release, making it one of the fastest-rising open-weights coding models of 2026. The project tagline — "where models and agents co-evolve" — captures the bet: rather than training a model and then bolting an agent framework on top, train the model and the agent harness jointly so that the model's tool-use behaviors are native, not learned downstream. The rise of MiMo-Code is a leading indicator of where open-weights coding models are heading: from "smaller, cheaper GPT-4-class" to "natively tool-using, agent-native." With the US export-control regime gating the most capable US coding models from many markets, an open-weights coding model from a major Chinese hardware company is well-positioned to capture developer mindshare globally. The combination of coding-bench performance, open weights, and aggressive licensing is a direct shot at Cursor, Cody, and the rest of the agent-coding stack.</p>
        <div class="news-tags"><span>Xiaomi</span><span>MiMo</span><span>Open Weights</span><span>Coding Models</span><span>Agents</span><span>GitHub</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 03</div>
      <div class="news-content">
        <h3><a href="https://github.com/omnigent-ai/omnigent" target="_blank">Omnigent (6.1K Stars) — Open-Source Meta-Harness That Orchestrates Claude Code, Codex, and Cursor</a></h3>
        <p>Omnigent, an open-source "meta-harness" that orchestrates Claude Code, Codex, and Cursor in a single workflow, has hit 6,106 stars in its first week. The architecture is a thin orchestration layer that lets developers route subtasks to whichever coding agent is best at the job — Claude for long-form code understanding, Codex for tight autocomplete, Cursor for IDE-integrated edits — and stitches their outputs into a single coherent result. The traction is meaningful: developer-AI workflows are still highly fragmented, and the "use three different tools in three different windows" pattern is friction-heavy. A meta-harness that abstracts over them is a real product category, and the OSS-first positioning means it can grow with the community rather than chasing per-vendor integration deals. Watch for the first Omnigent-orchestrated workflows to ship in production at smaller startups, then for hyperscalers to ship their own meta-harness play.</p>
        <div class="news-tags"><span>Omnigent</span><span>Meta-Harness</span><span>Claude Code</span><span>Codex</span><span>Cursor</span><span>Developer Tools</span><span>Open Source</span></div>
      </div>
    </div>

  <div class="news-section-title">Wednesday's Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/30/trump-drops-restrictions-on-anthropics-mythos-and-fable-models/" target="_blank">Trump Drops Restrictions on Anthropic's Mythos and Fable Models — End of Two-Month Federal Review</a></h3>
        <p>The Trump administration has lifted the federal restrictions on Anthropic's Mythos and Fable models, ending a roughly two-month interagency review that had gated deployment across more than 100 US companies and government agencies. The decision drops the unusual "non-American employees" clause that was part of the original authorization and signals the administration's pivot from safety-first gating to a "deploy and compete with China" posture. Industry observers read this as a green light for accelerated enterprise adoption of Mythos-class models through 2H 2026, with downstream effects on OpenAI and Google's positioning. The political timing matters: the move lands weeks after the same administration leaned on OpenAI to slow-roll GPT-5.6 over Mythos-comparable safety concerns, creating a visible asymmetry that the labs and their lobbyists are already exploiting in public.</p>
        <div class="news-tags"><span>Anthropic</span><span>Mythos</span><span>Fable</span><span>Trump</span><span>Policy</span><span>Federal AI</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/" target="_blank">Anthropic Launches Claude Sonnet 5 — Cheaper, Faster, Optimized for Long-Running Agents</a></h3>
        <p>Anthropic has shipped Claude Sonnet 5, a new mid-tier model priced and tuned specifically for long-horizon agent workloads. The pitch: Sonnet 5 sits below Opus in raw capability but offers dramatically better economics for high-volume agentic use — lower per-token cost, faster time-to-first-token, and explicit context-window behavior designed for the multi-thousand-turn trajectories that real agent harnesses generate. Anthropic is positioning Sonnet 5 as the "default workhorse" for production agent deployments where Opus would be over-spec. The move tightens the squeeze on OpenAI's mid-tier (GPT-5 mini) and Google Gemini Flash, and signals that the next phase of the frontier-model race is shifting from raw benchmark numbers to total-cost-of-ownership for agentic workloads. Expect downstream effects on agent-framework pricing and a wave of "we switched to Sonnet 5 and our costs dropped 40%" case studies.</p>
        <div class="news-tags"><span>Anthropic</span><span>Claude Sonnet 5</span><span>Agents</span><span>Pricing</span><span>Frontier Models</span><span>Inference</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/" target="_blank">Nvidia Competitor Etched Hits $5B Valuation, $1B in Sales for AI Chip Built Around a Single Transformer</a></h3>
        <p>Etched, the Nvidia-competitor building an AI chip purpose-built for transformer inference, has closed a funding round valuing the company at $5B on $1B in committed sales — an eye-popping 5x revenue multiple for a chip startup that has not yet shipped a product at scale. The bet: by burning an entire SoC around a single transformer architecture, Etched can deliver 10x the inference throughput per dollar for the dominant workload class (LLM serving, agent loops, code generation) and undercut Nvidia's general-purpose GPUs on cost-per-token. The risk is concentration — if the industry shifts to a new dominant architecture (state-space models, JEPA-style world models, mixture-of-experts hybrids), Etched's bet looks like ASIC-era circa 2018. With $1B in sales already committed before volume shipping, the market is voting that the transformer architecture will remain the workload for at least the next 3-5 years.</p>
        <div class="news-tags"><span>Etched</span><span>Nvidia</span><span>AI Chips</span><span>Transformers</span><span>Hardware</span><span>AI Infrastructure</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/30/wayve-launches-85m-employee-tender-offer-at-8-5b-valuation/" target="_blank">Wayve Launches $85M Employee Tender at $8.5B Valuation — UK Autonomous Driving Holds the Line</a></h3>
        <p>UK-based autonomous-driving startup Wayve has launched an $85M employee tender offer at an $8.5B valuation, giving staff liquidity without a traditional exit and signaling continued investor conviction in the UK self-driving stack. Wayve's approach — end-to-end neural networks trained on raw sensor data, no HD maps, no hand-coded rules — has made it a European counterweight to Tesla FSD and Waymo. The valuation is a meaningful jump from the company's last reported mark and reflects the broader recovery in autonomous-vehicle funding after a brutal 2024-2025 winter. The tender structure (employees sell a portion of their equity to investors) is a retention tool in a hot talent market and a sign that an IPO is still on the roadmap but not imminent. Expect more autonomous-vehicle tender offers through 2H 2026 as late-stage AV startups mature toward public-market readiness.</p>
        <div class="news-tags"><span>Wayve</span><span>Autonomous Driving</span><span>UK</span><span>Valuation</span><span>Tender Offer</span><span>Self-Driving</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/30/google-introduces-a-faster-cheaper-image-generator-with-nano-banana-2-lite/" target="_blank">Google Launches Nano Banana 2 Lite — Faster, Cheaper Image Generator Targeting Volume Creators</a></h3>
        <p>Google has introduced Nano Banana 2 Lite, a faster and cheaper tier of its image generation model aimed squarely at volume creators, agencies, and embedded product use cases. The Lite variant trades some prompt-fidelity and max resolution for sub-second generation times and a per-image cost that undercuts both OpenAI's image tools and Midjourney. The move is a clear play for the "image generation as a feature in your app" market — the same positioning that made Stable Diffusion the default for indie devs a few years back. With Google's broader stack (Gemini API, Vertex AI, Workspace) the distribution advantage is significant: any developer already on Google Cloud can drop Nano Banana 2 Lite into a product with a few lines of code and a credit-card signup. Expect a pricing war in image generation through Q3 2026 as OpenAI and Midjourney respond.</p>
        <div class="news-tags"><span>Google</span><span>Nano Banana 2</span><span>Image Generation</span><span>Generative AI</span><span>Vertex AI</span><span>Pricing</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/30/the-deepmind-trio-who-built-a-poker-ai-are-now-making-money-for-quant-hedge-funds/" target="_blank">DeepMind's Poker AI Trio Now Making Money for Quant Hedge Funds — Game-Theoretic ML Goes Wall Street</a></h3>
        <p>The trio of DeepMind researchers who built Libratus and Pluribus — the first AIs to beat top human players at heads-up and multi-player no-limit poker — have reportedly left to start their own shop applying game-theoretic machine learning to quantitative hedge fund strategies. The pitch: the same counterfactual regret minimization and equilibrium-finding techniques that conquered imperfect-information games translate directly to market-making, options pricing, and competitive multi-agent scenarios where multiple rational actors are simultaneously bidding. The move is a notable brain-drain signal for DeepMind's research division and a sign that Wall Street's appetite for academic-AI talent remains insatiable. If the venture produces alpha, expect a wave of similar ex-DeepMind / ex-Fair / ex-Anthropic "game theory meets finance" spinouts through 2026-2027. The deep irony: an AI beat poker, now the AI is playing the biggest poker game of all — capital markets.</p>
        <div class="news-tags"><span>DeepMind</span><span>Poker AI</span><span>Game Theory</span><span>Quant Funds</span><span>Hedge Funds</span><span>Talent</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="https://www.technologyreview.com/2026/06/30/1139987/claude-science-is-anthropics-newest-flagship-product/" target="_blank">Claude Science Is Anthropic's Newest Flagship Product — Workflow, Not Model, Is the Bet</a></h3>
        <p>Anthropic has launched Claude Science as its newest flagship product — but unlike previous launches, the centerpiece is not a new model but a workflow layer that wraps Claude for the specific needs of working scientists. The product integrates literature search, experimental design review, code generation for analysis pipelines, manuscript drafting, and peer-review simulation into a single environment. The strategic implication: the frontier-model differentiation race is shifting from raw capability (which is converging) to vertical productization (which is not). Anthropic is betting that the same playbook that made Claude Code a default for developers — deep workflow integration, not just a chat box — will work for the much larger scientific-research market. The launch is a direct shot at OpenAI's enterprise push and a signal that Anthropic sees vertical products, not just the next model, as the path to durable revenue.</p>
        <div class="news-tags"><span>Anthropic</span><span>Claude Science</span><span>Vertical AI</span><span>Workflow</span><span>Scientific Research</span><span>Enterprise</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="https://www.technologyreview.com/2026/06/29/1139849/ai-agents-are-not-your-coworkers/" target="_blank">"AI Agents Are Not Your Coworkers" — MIT Tech Review Pushes Back on the Anthropomorphic Framing</a></h3>
        <p>MIT Technology Review has published a pointed essay arguing that the increasingly common framing of AI agents as "coworkers" or "teammates" is misleading and potentially dangerous. The piece walks through the actual technical and economic properties of current agent systems — their lack of persistent context across sessions, their inability to refuse unethical requests, their dependence on tool scaffolding that is itself brittle — and argues that treating them as autonomous colleagues obscures the real responsibility question (who is accountable when the agent makes a mistake?) and inflates user expectations in ways that lead to harmful over-reliance. The argument lands in a moment when "agent coworker" is the marketing pitch from every major lab, and will likely intensify the policy debate around agent liability, disclosure requirements, and the role of human-in-the-loop mandates in high-stakes deployments. Worth reading for anyone shipping an agent product.</p>
        <div class="news-tags"><span>MIT</span><span>AI Agents</span><span>Policy</span><span>Accountability</span><span>Human-in-the-Loop</span><span>Ethics</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="http://arxiv.org/abs/2606.32026v1" target="_blank">'AdaJEPA' — An Adaptive Latent World Model from Yann LeCun's Group (JEPA Family Gets Test-Time Adaptation)</a></h3>
        <p>A new paper from Ying Wang, Oumayma Bounou, and Yann LeCun introduces AdaJEPA, an adaptive latent world model in the JEPA (Joint Embedding Predictive Architecture) family. The key contribution: AdaJEPA can update its latent-prediction module at test time, addressing a long-standing weakness of latent world models — that they are typically frozen after training and lose fidelity as the environment drifts. The architecture combines a frozen encoder with a small, fast-adapting predictor that learns online from observed state transitions, and the authors show meaningful improvements on long-horizon planning tasks in simulated robotics and game environments. The work continues LeCun's campaign to position JEPA-style models as a path to more general world understanding than the generative-transformer paradigm can deliver, and the test-time adaptation angle is directly responsive to industry complaints that latent world models are static and brittle. A meaningful step in the JEPA research program.</p>
        <div class="news-tags"><span>JEPA</span><span>LeCun</span><span>World Models</span><span>Latent Prediction</span><span>Test-Time Adaptation</span><span>Research</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="http://arxiv.org/abs/2606.32032v1" target="_blank">RL with Metacognitive Feedback Elicits Faithful Uncertainty Expression in LLMs — A Path Past the Hallucination Tax</a></h3>
        <p>A new paper from Gabrielle Kaili-May Liu, Avi Caciularu, and Gal Yona (likely Google Research / Technion) introduces a reinforcement learning method that trains LLMs to faithfully express their own uncertainty, using metacognitive feedback signals derived from the model's internal confidence estimates. The work directly targets one of the most-cited failure modes of current LLMs: confidently asserting wrong answers, which makes them unreliable in agentic settings where overconfidence cascades into bad downstream actions. The result: models trained with the metacognitive-reward signal are measurably better calibrated (lower expected calibration error on held-out benchmarks) while maintaining capability on standard accuracy metrics. The technique is model-agnostic and composes with existing RLHF / DPO pipelines. Practical implication: agent frameworks that rely on LLM self-confidence for tool selection and routing can now get a stronger signal at lower inference cost, without an external verifier.</p>
        <div class="news-tags"><span>Uncertainty</span><span>Metacognition</span><span>Reinforcement Learning</span><span>Calibration</span><span>Hallucinations</span><span>Research</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jul 01</div>
      <div class="news-content">
        <h3><a href="https://github.com/Pluviobyte/video-production-skills" target="_blank">'video-production-skills' Hits 489 GitHub Stars in 6 Days — Reusable AI Video Pipelines Go Modular</a></h3>
        <p>Pluviobyte's video-production-skills repo has hit 489 GitHub stars in six days, emerging as a credible open-source library of reusable AI video production modules — creation, recreation, motion design, openers, and QA — designed to be composed into agent-driven pipelines. The pitch: rather than building a monolithic AI video tool, expose a library of single-purpose "skills" (each a small composable function with clear inputs/outputs) that any agent harness can call. The architecture is in the same family as Anthropic's Skills system and the AGENTS.md convention. The traction suggests growing demand for modular, swappable AI tooling as opposed to all-in-one platforms — a sign that the agent-ecosystem plumbing is maturing past the point where every project rolls its own. Worth watching as a leading indicator of where the next wave of agent-framework infrastructure will be built.</p>
        <div class="news-tags"><span>Video Production</span><span>Open Source</span><span>AI Skills</span><span>Agent Frameworks</span><span>GitHub</span><span>Developer Tools</span></div>
      </div>
    </div>

  <div class="news-section-title">Last Cycle — June 28-29 Headlines</div>
  <div class="news-grid">

    <div class="news-item">
      <div class="news-date">Jun 28</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/28/ford-rehires-gray-beard-engineers-after-ai-falls-short/" target="_blank">Ford Rehires 'Gray Beard' Engineers After AI Falls Short — "Mistakenly We Thought AI Alone Would Produce a High-Quality Product"</a></h3>
        <p>Ford has walked back a chunk of its AI-driven engineering push, rehiring veteran "gray beard" engineers after conceding that the bet on automated tooling and model-driven design didn't deliver. A senior Ford leader admitted the company "mistakenly thought that by just introducing artificial intelligence ... that would produce a high-quality product." The reversal is one of the highest-profile public admissions from a major automaker that pure AI-first engineering pipelines are not yet ready to replace institutional human expertise, and signals a more measured "AI-augmented" stance spreading across the manufacturing sector as cost-cutting pressure and quality problems collide. Expect similar reversals at peer OEMs through 2026 as the labor-versus-automation tradeoff gets recalibrated in public.</p>
        <div class="news-tags"><span>Ford</span><span>Manufacturing</span><span>AI Backlash</span><span>Engineering</span><span>Automation</span><span>Industry</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 28</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/28/why-wall-street-thinks-us-memory-maker-micron-is-the-next-nvidia/" target="_blank">Why Wall Street Thinks US Memory Maker Micron Is the Next Nvidia — HBM Cycle Meets AI Demand</a></h3>
        <p>Wall Street analysts are coalescing around a striking thesis: Micron, the last major US-based DRAM and HBM memory manufacturer, is the most credible "next Nvidia" as the AI infrastructure cycle broadens from compute into memory bandwidth. The HBM (high-bandwidth memory) market is structurally short, every advanced packaging line is sold out through 2027, and Micron is the only US player positioned to benefit from export-control-driven onshoring incentives. The bull case puts Micron's HBM revenue at multiples of current consensus within 24 months as Nvidia, AMD, and the hyperscalers keep absorbing every qualified HBM3E and HBM4 die. The bear case is cyclicality — memory is historically boom-bust — but the AI demand profile looks structurally different from past cycles.</p>
        <div class="news-tags"><span>Micron</span><span>HBM</span><span>Nvidia</span><span>Memory</span><span>Wall Street</span><span>AI Infrastructure</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 27</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/27/apple-vision-pro-exec-is-reportedly-leaving-for-openai/" target="_blank">Apple Vision Pro Exec Paul Meade Reportedly Leaves for OpenAI Hardware — Talent Drain Continues</a></h3>
        <p>Paul Meade, Apple's vice president in charge of the Vision Pro headset, is reportedly leaving Apple to join OpenAI's hardware team — the latest in a string of senior Apple hardware leaders moving to OpenAI's growing consumer devices group. Meade's departure is significant: he was one of the longest-tenured executives on the Vision Pro program and a known operator in Apple's hardware-software integration culture. OpenAI has been quietly assembling a consumer hardware organization, with previous hires from Apple's industrial design and silicon teams. The move raises fresh questions about Apple's ability to retain its hardware talent in the face of well-funded AI labs willing to pay premium compensation, and whether Apple's cautious AI hardware roadmap can keep pace with rivals willing to ship more aggressively.</p>
        <div class="news-tags"><span>Apple</span><span>OpenAI</span><span>Vision Pro</span><span>Hardware</span><span>Talent</span><span>Consumer Devices</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 27</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/27/asian-ai-startups-launch-mythos-like-models-as-anthropics-export-ban-drags-on/" target="_blank">Asian AI Startups Launch Mythos-Like Models as Anthropic's Export Ban Drags On — US Labs May Never Reclaim the Market</a></h3>
        <p>A wave of Asian AI startups is launching models with Mythos-class capabilities specifically architected to operate outside US export controls, accelerating the fragmentation of the global frontier-model market. With Anthropic's Mythos still gated behind US government review and OpenAI's GPT-5.6 similarly restricted, the demand vacuum in Asia is being filled by labs in South Korea, Japan, India, and Singapore that face no comparable constraints. Industry observers warn that once enterprise workflows are built on non-US model APIs, switching costs become prohibitive — meaning US labs may permanently lose the Asian enterprise market even after export controls ease. The pattern mirrors what happened to US cloud providers in China a decade earlier, and policy makers in Washington are now openly debating whether the controls are achieving their stated security aims or simply ceding ground.</p>
        <div class="news-tags"><span>Asia</span><span>Anthropic</span><span>Mythos</span><span>Export Controls</span><span>Frontier Models</span><span>Geopolitics</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/26/trump-admin-releases-anthropic-mythos-to-be-used-by-more-than-100-us-companies-agencies/" target="_blank">Trump Admin Releases Anthropic Mythos to 100+ US Companies and Agencies — Including Non-American Employees</a></h3>
        <p>The Trump administration has formally authorized more than 100 US companies and government agencies to deploy Anthropic's Mythos 5 model, with the unusual stipulation that authorized use extends to non-American employees of those organizations. The broad authorization is the largest single-model deployment approval of the current administration and effectively makes Mythos 5 the de facto federal AI standard alongside OpenAI's offerings. The decision caps a months-long interagency review that had been criticized by both AI safety advocates (for moving too fast) and AI labs (for being too restrictive on competing models). The inclusion of foreign employees suggests the administration is treating model deployment as a competitive race against China rather than a strictly domestic policy question, a notable shift from the Biden-era framework.</p>
        <div class="news-tags"><span>Anthropic</span><span>Mythos</span><span>Trump</span><span>Federal AI</span><span>Policy</span><span>Government</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/26/openai-limits-gpt-5-6-rollout-after-government-request-says-restrictions-shouldnt-be-the-norm/" target="_blank">OpenAI Limits GPT-5.6 Rollout After Government Request — "Restrictions Shouldn't Be the Long-Term Default"</a></h3>
        <p>OpenAI has confirmed it is gating the rollout of its newest flagship model, GPT-5.6 (and the GPT-5.6 "Sol" variant), to a small group of partners at the request of the US government, which flagged unresolved safety concerns. In a statement, the company warned: "We don't believe this kind of government access process should become the long-term default. It keeps the best tools from users, developers, enterprises, cyber defenders, and global partners who need them." The framing is notable: OpenAI is publicly accepting the constraint while actively pushing back on its permanence, drawing a line between ad-hoc safety cooperation and structural pre-deployment review. The episode is the clearest articulation yet of the tension between frontier-model deployment velocity and government safety oversight, and will likely be cited in the next round of AI policy debate.</p>
        <div class="news-tags"><span>OpenAI</span><span>GPT-5.6</span><span>Policy</span><span>Safety</span><span>Frontier Models</span><span>Regulation</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/26/its-not-about-anthropic-vs-openai-anymore/" target="_blank">"It's Not About Anthropic vs. OpenAI Anymore" — Frontier AI Capabilities Now Have Real Political Consequences</a></h3>
        <p>A new TechCrunch analysis argues that the Anthropic vs. OpenAI framing has outlived its usefulness: AI capabilities have progressed to the point where the consequences are no longer internal to the industry but political, geopolitical, and civilizational. The piece tracks how every major frontier-model release now triggers federal review, export-control debates, lobbying by competing labs, and increasingly urgent statements from civil society. The shift means the "AI race" is no longer best understood as a competition between companies but as a coordination problem between governments, labs, and the public — and the current US framework, designed for a world with two clear frontier players, is straining. The conclusion: collective action, not company-vs-company positioning, will define the next phase of AI governance.</p>
        <div class="news-tags"><span>Anthropic</span><span>OpenAI</span><span>Policy</span><span>Governance</span><span>Frontier Models</span><span>Geopolitics</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 24</div>
      <div class="news-content">
        <h3><a href="https://www.technologyreview.com/2026/06/24/1139202/the-emergence-of-the-web-data-infrastructure-layer-for-ai/" target="_blank">The Emerging Web Data Infrastructure Layer for AI — Why 60% of AI Projects Will Fail Without It</a></h3>
        <p>MIT Technology Review profiles the rise of a dedicated "web data infrastructure" layer for AI — the missing plumbing between frontier models and the live, structured, real-time information they need to stay useful. According to Bright Data CEO Or Lenchner, 60% of AI projects will be abandoned by year-end for lack of AI-ready data, and 90% of AI organizations feel "boxed in" by data restrictions. The piece argues the AI industry is now hitting a fundamental bottleneck: scaling training data and model size hit a wall, and retrieval-augmented generation alone doesn't solve the problem when the underlying knowledge layer is stale or unstructured. Companies like Bright Data are positioning to be the "fresh data" backbone — emulating real human browsing at 80 billion requests per day, with sub-second latency, and packaging the output as clean structured feeds for downstream RAG systems.</p>
        <div class="news-tags"><span>Data Infrastructure</span><span>RAG</span><span>Bright Data</span><span>Web Scraping</span><span>Enterprise AI</span><span>MIT</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://arxiv.org/abs/2606.28270" target="_blank">'Agent-Native Immune System' (ANIS) — A Biologically-Inspired Defense Architecture Embedded in the Agent's Cognitive Loop</a></h3>
        <p>A new paper introduces the Agent-Native Immune System (ANIS), a six-layer defense architecture embedded directly inside an AI agent's reasoning loop rather than bolted on as perimeter security. The framework distinguishes "Agent Viruses" (runtime hijacking via memory poisoning, tool-chain manipulation, multi-agent protocol attacks) from "Agent Vaccines" (parametric defenses that adapt to novel threats), and proposes a "Harness Triad" (Meta, Self, Auto) for continual immune learning. A key conceptual contribution is the formal separation between model alignment (static, training-time) and agent immunity (dynamic, runtime "law enforcement") — a distinction the authors argue is essential as agents accumulate persistent memory and tool-use capabilities. The paper also introduces the "Autoimmunity Rate" metric (false-positive intervention rate) as a critical new evaluation target. Open problem: immune protocol standardization across multi-agent ecosystems.</p>
        <div class="news-tags"><span>Agent Security</span><span>AI Safety</span><span>Memory Poisoning</span><span>Alignment</span><span>Multi-Agent</span><span>Research</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://arxiv.org/abs/2606.28277" target="_blank">Google's 'Paper Assistant Tool' (PAT) — Agentic AI for Scientific Peer Review, 34% Better at Catching Math Errors Than Zero-Shot</a></h3>
        <p>Google Research has introduced the Paper Assistant Tool (PAT), an agentic AI framework for deep scientific review and verification. PAT ingests full manuscripts and produces comprehensive evaluations — checking theoretical results, validating experiments, suggesting improvements, and flagging potential flaws. Through inference-scaling techniques, PAT achieves a 34% improvement over zero-shot recall on mathematical errors in the SPOT benchmark. Pilot deployments as a pre-submission tool at STOC and ICML — co-authored by Rajesh Jayaram, Corinna Cortes, Yossi Matias, and others — have already caught critical errors in submitted papers. The work sits inside a proposed four-level taxonomy of human-AI collaboration in scientific evaluation, and positions AI-assisted peer review as an emerging solution to the systemic bottleneck of human review capacity not scaling with the flood of AI-assisted submissions.</p>
        <div class="news-tags"><span>Google Research</span><span>Scientific Review</span><span>AI for Science</span><span>Agentic AI</span><span>STOC</span><span>ICML</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://arxiv.org/abs/2606.28323" target="_blank">'DexCompose' — Reusing Dexterous Policies for Multi-Task Manipulation via Finger-Level Action Ownership (77.4% Composite Success)</a></h3>
        <p>A robotics paper introduces DexCompose, a framework that lets dexterous manipulation policies compose into multi-task skills by assigning finger-level action ownership rather than naively chaining policies. The key insight: naively stacking two full-hand policies causes destructive interference when their desired actions overlap, but explicitly partitioning fingers between "preserve existing skill state" and "execute new task" lets both succeed. DexCompose trains two asymmetric residual modules — a bounded stabilizer for task preservation, and a context-aware adapter for the new task — operating only within their assigned finger subspace. On 16 composite dexterous tasks spanning four object-retention skills and four downstream interactions, DexCompose hits 77.4% average composite success, substantially outperforming prior policy-chaining baselines. The result is a step toward general-purpose manipulation without retraining from scratch for every new task combination.</p>
        <div class="news-tags"><span>Robotics</span><span>Dexterous Manipulation</span><span>Policy Composition</span><span>Reinforcement Learning</span><span>Research</span><span>Embodied AI</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://github.com/XiaomiMiMo/MiMo-Code" target="_blank">Xiaomi's 'MiMo-Code' Crosses 11K GitHub Stars in 19 Days — Open-Source Models and Agents Co-Evolving</a></h3>
        <p>MiMo-Code, Xiaomi's open-source "models and agents co-evolve" coding framework, has crossed 11,000 GitHub stars and 1,000 forks since its June 10 launch. The project's pitch: rather than train a single super-agent, MiMo-Code couples a model trained on agentic trajectories with a tool harness designed specifically to make that model more effective — the two are iteratively refined against each other. The repo includes 1,065 forks, 657 open issues, and an active discussions board, suggesting genuine developer traction rather than vanity numbers. MiMo-Code joins a growing class of "model + harness co-designed" agent frameworks (Anthropic's Claude Code, OpenAI's Codex CLI, Cursor) that treat the boundary between model weights and tool scaffolding as a single optimization target. The MIT license and aggressive release cadence make it a credible open-source alternative for teams wary of vendor lock-in.</p>
        <div class="news-tags"><span>Xiaomi</span><span>MiMo</span><span>Open Source</span><span>AI Agents</span><span>Code Generation</span><span>Developer Tools</span></div>
      </div>
    </div>



    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/25/the-white-house-is-asking-openai-to-slow-roll-the-release-of-its-new-model-over-safety-concerns/" target="_blank">White House Asks OpenAI to Slow-Roll GPT 5.6 Release — Trump Administration Flags Safety Concerns Over Mythos Capabilities</a></h3>
        <p>The Trump administration has asked OpenAI to limit the release of its upcoming GPT 5.6 model to a small group of partners rather than deploying it broadly, citing unresolved safety concerns — particularly around the model's reportedly advanced "Mythos" capabilities. The move represents the most direct White House intervention in a frontier-model rollout since the Biden-era executive order on AI, and signals that the current administration is willing to apply pressure on private labs even as it simultaneously pushes for US AI dominance over China. OpenAI has reportedly agreed to the constrained release, though it's unclear how long the gating will last. The episode will intensify debate over whether safety-based delays are legitimate precaution or politically-motivated protectionism for incumbents.</p>
        <div class="news-tags"><span>OpenAI</span><span>GPT 5.6</span><span>White House</span><span>Policy</span><span>Safety</span><span>Mythos</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/25/anthropics-claude-is-winning-over-paid-consumers-a-market-owned-by-chatgpt/" target="_blank">Anthropic's Claude is Winning Over Paid AI Consumers — Eroding ChatGPT's Hold on the Market That Actually Pays</a></h3>
        <p>Despite ChatGPT's commanding consumer mind-share lead, paying AI customers are increasingly choosing Anthropic's Claude over OpenAI — a striking inversion of the free-tier popularity rankings. The shift, documented in subscription and revenue data, is driven by Claude's perceived strength on coding, longer-context reasoning, and a more conservative tone that resonates with professional users. Anthropic's enterprise revenue reportedly grew faster than OpenAI's consumer revenue in Q2 2026, even as ChatGPT retains 4x the monthly active users. The dynamic suggests the consumer AI market is bifurcating: ChatGPT as the casual default, Claude as the power-user choice. OpenAI's response — bundling Codex and Sora into the Plus tier — has so far failed to stem the migration.</p>
        <div class="news-tags"><span>Anthropic</span><span>Claude</span><span>ChatGPT</span><span>Consumer AI</span><span>Subscription</span><span>Competition</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/25/patronus-ai-lands-50m-to-build-digital-worlds-that-stress-test-ai-agents/" target="_blank">Patronus AI Lands $50M to Build 'Digital Worlds' That Stress-Test AI Agents — Former Meta AI Founders Cash In on Eval Boom</a></h3>
        <p>Patronus AI, the agent-evaluation startup founded by former Meta AI researchers, has closed a $50M round led by Greenfield Partners with Lightspeed and Notable Capital participating. The company is building "digital worlds" — simulated environments where AI agents are subjected to multi-step adversarial scenarios to surface failure modes before deployment. Patronus says demand is "nearly insatiable" as enterprises ship agentic products without reliable ways to know if they'll break in production. The round reflects a broader realization across the industry: model benchmarks stopped being useful when agents became multi-step and tool-using, and a new generation of eval companies is rushing to fill the gap. Patronus will use the capital to expand its world-simulation infrastructure and grow its eval engineering team.</p>
        <div class="news-tags"><span>Patronus AI</span><span>Funding</span><span>Agent Evaluation</span><span>AI Safety</span><span>Benchmarks</span><span>Greenfield</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/25/general-intuitions-2-3b-bet-that-video-games-can-train-ai-agents-for-the-real-world/" target="_blank">General Intuition's $2.3B Bet That Video Games Can Train AI Agents for the Real World — $320M Raised, Khosla Leads</a></h3>
        <p>General Intuition has raised $320M at a $2.3B valuation from Khosla Ventures and others to scale AI trained on millions of hours of video game gameplay. The thesis: action data from games — particularly competitive multiplayer — captures the kind of real-time decision-making, spatial reasoning, and long-horizon planning that current models struggle with. General Intuition claims its game-trained agents transfer to robotics, autonomous vehicles, and physical-world task automation. The bet echoes a long line of "games as AI training grounds" research (AlphaGo, OpenAI Five, DeepMind's Atari work) but at unprecedented scale and capital intensity. If it works, the implication is staggering: every minute of competitive gameplay becomes a free training signal for embodied AI.</p>
        <div class="news-tags"><span>General Intuition</span><span>Gaming AI</span><span>World Models</span><span>Khosla</span><span>Robotics</span><span>Training Data</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/25/databricks-former-ai-chief-thinks-he-can-cut-ais-power-bill-by-1000x/" target="_blank">Ex-Databricks AI Chief Claims 1000x Power Reduction for AI Inference — Diffusion-Based Image Gen Could Upend Compute Economics</a></h3>
        <p>The former head of AI at Databricks is claiming his new venture, Un-0, has built a diffusion-based image generation system that consumes 1,000x less power than conventional transformer-based approaches. The technical claim — that the system can replicate mainstream AI image generation capabilities at a fraction of the energy cost — would be transformative for the industry's growing compute-and-electricity problem. If validated independently, the work would undercut a key argument against scaling generative AI (its grid impact) and pressure the major labs to adopt the new architecture. The company has not yet published peer-reviewed results, and several AI infrastructure analysts have urged caution until the claims can be reproduced on independent hardware.</p>
        <div class="news-tags"><span>Databricks</span><span>Un-0</span><span>Diffusion Models</span><span>Image Generation</span><span>Energy</span><span>Efficiency</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/25/amazon-ups-india-bet-with-fresh-13b-ai-infrastructure-investment/" target="_blank">Amazon Pours $13B More Into India AI Infrastructure — AWS Race With Microsoft and Google for Global AI Buildout Heats Up</a></h3>
        <p>Amazon has announced a fresh $13 billion investment in AI infrastructure in India, expanding its data center footprint and AWS region capacity in the country. The move is part of a broader pattern: global tech companies are rapidly scaling AI-specific infrastructure in India, drawn by lower power costs, favorable regulatory treatment, and a deep engineering talent pool. Microsoft and Google have made similar commitments in recent months, and the three-way race for Indian AI infrastructure is now a major subplot in the global cloud wars. The investment also signals confidence that India's domestic AI demand — both enterprise and consumer — is large enough to justify hyperscaler-scale buildouts. AWS expects the new capacity online by mid-2027.</p>
        <div class="news-tags"><span>Amazon</span><span>AWS</span><span>India</span><span>Data Centers</span><span>AI Infrastructure</span><span>Cloud</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://techcrunch.com/2026/06/25/adobe-acquires-image-and-video-enhancement-tool-maker-topaz-labs/" target="_blank">Adobe Acquires Topaz Labs — Image and Video Enhancement Tools Fold Into Creative Cloud</a></h3>
        <p>Adobe has acquired Topaz Labs, the maker of widely-used image and video enhancement tools (Topaz Gigapixel, Topaz Video AI), in a deal that brings the company's AI-powered upscaling, denoising, and restoration technology directly into the Creative Cloud ecosystem. The acquisition fills a gap in Adobe's AI offerings — historically strong on generation (Firefly) but weaker on enhancement — and gives the company a defensible position against standalone AI tools like Magnific and Krea. Existing Topaz Labs products will continue to be sold standalone, but Adobe plans to integrate the engines into Photoshop, Premiere, and Lightroom over the next 12 months. Pricing and bundling details will be announced alongside the integration roadmap.</p>
        <div class="news-tags"><span>Adobe</span><span>Topaz Labs</span><span>Acquisition</span><span>Image AI</span><span>Creative Cloud</span><span>Video</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://www.technologyreview.com/2026/06/25/1137848/repositioning-retail-for-the-ai-era/" target="_blank">Macy's Goes 'AI-First' — 'Ask Macy's' Conversational Stylist Reimagines E-Commerce as Personal Stylist, Not Search Bar</a></h3>
        <p>Macy's is the latest major retailer to declare an "AI-first" operating philosophy, with senior director of engineering Murali Murugan describing a strategy that bakes intelligence into personalization, search, supply chain, and software development itself — not as a chatbot overlay but as a redesign of how decisions happen. The centerpiece is "Ask Macy's," a conversational shopping assistant that behaves more like a personal stylist than a search bar: customers describe an occasion (a prom, a vacation, a last-minute event) and receive curated recommendations informed by past purchases and context. The launch reflects a broader pattern in retail: AI is moving from pilot projects to integrated systems that compress "the gap between signal and action." Competitors like Sephora, Nordstrom, and Walmart are pursuing similar playbooks, raising the bar for what "AI-native retail" means in practice.</p>
        <div class="news-tags"><span>Macy's</span><span>Retail AI</span><span>Personalization</span><span>Conversational Commerce</span><span>Enterprise</span><span>Customer Experience</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://arxiv.org/abs/2606.27361v1" target="_blank">'Robin' — 132M-Parameter Boltzmann Generator Beats Flow-Based Models on 10-Residue Peptides (ICML 2026 Spotlight)</a></h3>
        <p>An ICML 2026 Spotlight paper introduces Autoregressive Boltzmann Generators (ArBG), a framework that ditches flow-based architectures (the dominant approach for molecular sampling) in favor of autoregressive modeling. The new approach sidesteps the strict invertibility constraints that limit normalizing flows, enables sequential inference-time interventions, and scales with the same tricks that have powered large language models. The team trained "Robin," a 132-million-parameter transferable model that improves the previous state-of-the-art zero-shot energy error on 8-residue peptide systems by over 60%. The work is co-authored by Yoshua Bengio, Avishek Joey Bose, and Alexander Tong, and is a notable step toward treating molecular generation as a language modeling problem. Code is open-sourced at github.com/danyalrehman/autobg.</p>
        <div class="news-tags"><span>Molecular AI</span><span>Boltzmann Generators</span><span>ICML 2026</span><span>Yoshua Bengio</span><span>Drug Discovery</span><span>Open Source</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://arxiv.org/abs/2606.27288v1" target="_blank">'Co-Failure Ceiling' Bounds Multi-Model AI Gains — Combining 67 Frontier Models Rarely Beats the Single Best Without Strong Routing</a></h3>
        <p>A new analysis across 67 frontier models from 21 providers has put hard theoretical and empirical limits on the gains from multi-model LLM systems (routers, voting, cascades, mixture-of-agents). The paper identifies a "co-failure ceiling" — the rate at which every model in the pool gets the same query wrong — and shows that the field's usual diagnostic (average pairwise error correlation) systematically underprices it. On open-ended mathematics, the observed co-failure rate was 2.5x what a Gaussian copula model predicted, with 90% confidence intervals 1.7 to 3.4. The practical implication: combining models rarely beats the single best model on checkable tasks without a strong query-level routing signal. Gains come from models failing on different questions, not from adding more models.</p>
        <div class="news-tags"><span>Mixture of Agents</span><span>Routing</span><span>LLM Benchmarks</span><span>Co-Failure</span><span>Frontier Models</span><span>Evaluation</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://arxiv.org/abs/2606.27334v1" target="_blank">Language-Based 'Digital Twins' for Elderly Cognitive Care — LLMs Mimic Conversational Patterns to Detect Mild Cognitive Impairment</a></h3>
        <p>A PETRA 2026 paper proposes using LLMs to build "language-based digital twins" of elderly individuals, mimicking their conversational style, vocabulary, and contextual cues to model individual cognitive trajectories. The system, evaluated on the I-CONECT dataset, uses a multi-head conditional variational autoencoder to measure both reconstruction fidelity and predict MoCA cognitive scores — outperforming baseline GPT-generated responses on identity preservation. The motivation: language and conversational patterns are non-invasive biomarkers for Mild Cognitive Impairment (MCI), and continuous digital twin monitoring could catch decline earlier than periodic clinical assessments. The work joins a growing body of research using generative AI not just to interact with patients, but to simulate them for diagnostic and longitudinal study purposes.</p>
        <div class="news-tags"><span>Digital Twins</span><span>Elderly Care</span><span>MCI</span><span>Healthcare AI</span><span>PETRA 2026</span><span>LLMs</span></div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Jun 26</div>
      <div class="news-content">
        <h3><a href="https://github.com/omnigent-ai/omnigent" target="_blank">'Omnigent' Open-Source Meta-Harness Orchestrates Claude Code, Codex, Cursor, and Custom Agents Under One Policy Layer</a></h3>
        <p>Omnigent, an Apache 2.0 open-source framework, has crossed 4,900 GitHub stars since its June 11 launch by positioning itself as a "meta-harness" for AI coding agents — orchestrating Claude Code, Codex, Cursor, Pi, and custom agents behind a single policy and sandboxing layer. The project's pitch: agents are proliferating, but they all need the same primitives (identity, sandbox, observability, governance), and rewriting each agent to add them is wasted effort. Omnigent lets teams swap agent backends without rewriting their tools, enforce consistent security policies, and collaborate in real time from any device. The release comes amid a broader wave of "agent governance" frameworks (LangSmith, Langfuse, Helicone) racing to become the default control plane as multi-agent stacks become the norm.</p>
        <div class="news-tags"><span>Omnigent</span><span>Claude Code</span><span>Codex</span><span>Agent Framework</span><span>Open Source</span><span>Governance</span></div>
      </div>
    </div>

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
