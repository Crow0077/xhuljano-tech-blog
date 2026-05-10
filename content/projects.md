---
title: "Projects"
date: 2026-05-10
draft: false
ShowToc: false
---

<style>
.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}
.project-card {
  background: rgba(15,15,25,0.8);
  border: 1px solid rgba(60,60,90,0.3);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.3s;
}
.project-card:hover {
  border-color: rgba(100,140,255,0.4);
}
.project-canvas {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  cursor: crosshair;
}
.project-canvas canvas {
  display: block;
}
.project-info {
  padding: 1.5rem;
}
.project-info h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
  color: #e0e0f0;
}
.project-info .tag-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.8rem;
}
.project-info .tag {
  background: rgba(60,80,120,0.3);
  color: rgba(160,180,220,0.9);
  padding: 0.15rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: monospace;
}
.project-info p {
  color: rgba(160,170,190,0.8);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}
.project-info .links {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
.project-info .links a {
  color: rgba(100,180,255,0.8);
  text-decoration: none;
  font-size: 0.85rem;
  font-family: monospace;
}
.project-info .links a:hover {
  color: rgba(100,180,255,1);
}
</style>

<div class="project-grid">

<div class="project-card">
  <div class="project-canvas" id="canvas-flooring"></div>
  <div class="project-info">
    <h2>KR Flooring MCP Server</h2>
    <div class="tag-row">
      <span class="tag">MCP</span>
      <span class="tag">Cloudflare Workers</span>
      <span class="tag">ChatGPT</span>
      <span class="tag">API</span>
    </div>
    <p>MCP server that lets customers get instant flooring estimates and book appointments through ChatGPT. 4 tools, 3 HTML widgets, deployed globally on Cloudflare Workers for free.</p>
    <div class="links">
      <a href="https://kr-flooring-mcp.xcaushlari.workers.dev/mcp">Live Endpoint</a>
      <a href="/posts/mcp-server-flooring-business/">Write-up</a>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-canvas" id="canvas-homelab"></div>
  <div class="project-info">
    <h2>AI-Powered Homelab</h2>
    <div class="tag-row">
      <span class="tag">Hermes Agent</span>
      <span class="tag">Podman</span>
      <span class="tag">MCP</span>
      <span class="tag">Fedora</span>
    </div>
    <p>Production homelab managed by AI agents with 35 custom MCP tools. Two nodes running containers, monitoring, DNS filtering, and workflow automation 24/7.</p>
    <div class="links">
      <a href="/posts/homelab-dell-optiplex/">Write-up</a>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-canvas" id="canvas-agent"></div>
  <div class="project-info">
    <h2>MCP Server Ecosystem</h2>
    <div class="tag-row">
      <span class="tag">Python</span>
      <span class="tag">Socket.IO</span>
      <span class="tag">GitHub API</span>
      <span class="tag">n8n</span>
    </div>
    <p>5 custom MCP servers bridging AI agents to real infrastructure — web scraping, service monitoring, repository management, and workflow automation.</p>
    <div class="links">
      <a href="/posts/what-are-mcp-servers/">Write-up</a>
    </div>
  </div>
</div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js"></script>
<script>
// === KR Flooring Visualizer ===
new p5(function(p) {
  let W = 800, H = 300;
  let stage = 0;
  let timer = 0;
  let questionText = "How much for LVP in a 15x20 room?";
  let typedChars = 0;
  let dataParticles = [];
  let estimateLines = [];
  let pulse = 0;
  
  p.setup = function() {
    let wrap = document.getElementById('canvas-flooring');
    W = wrap.offsetWidth;
    let c = p.createCanvas(W, H);
    c.parent('canvas-flooring');
    p.colorMode(p.RGB, 255);
    p.textFont('monospace');
  };
  
  p.draw = function() {
    p.background(8, 8, 16);
    timer++;
    pulse += 0.03;
    
    // Draw subtle grid
    p.stroke(20, 20, 35);
    p.strokeWeight(0.5);
    for (let x = 0; x < W; x += 40) p.line(x, 0, x, H);
    for (let y = 0; y < H; y += 40) p.line(0, y, W, y);
    
    let cx = W / 2, cy = H / 2;
    
    // Stage 0: Customer question typing
    if (stage === 0) {
      // Chat bubble
      p.fill(20, 30, 50);
      p.stroke(40, 60, 100);
      p.strokeWeight(1);
      p.rect(cx - 180, cy - 40, 360, 50, 8);
      
      // Typed text
      if (timer % 3 === 0 && typedChars < questionText.length) typedChars++;
      p.fill(150, 200, 255);
      p.noStroke();
      p.textSize(14);
      p.textAlign(p.CENTER, p.CENTER);
      p.text(questionText.substring(0, typedChars), cx, cy - 15);
      
      // Cursor blink
      if (typedChars < questionText.length && timer % 30 < 15) {
        let tw = p.textWidth(questionText.substring(0, typedChars));
        p.fill(150, 200, 255);
        p.rect(cx - tw/2 + 2, cy - 25, 2, 20);
      }
      
      // Label
      p.fill(100, 120, 160);
      p.textSize(11);
      p.text("Customer via ChatGPT", cx, cy + 30);
      
      if (typedChars >= questionText.length && timer > 120) {
        stage = 1;
        timer = 0;
      }
    }
    
    // Stage 1: Data flows through MCP
    if (stage === 1) {
      // Draw MCP server box
      p.fill(15, 20, 35);
      p.stroke(0, 200, 255, 60);
      p.strokeWeight(1);
      p.rect(cx - 50, cy - 30, 100, 60, 6);
      p.fill(0, 200, 255, 180);
      p.noStroke();
      p.textSize(10);
      p.textAlign(p.CENTER, p.CENTER);
      p.text("MCP SERVER", cx, cy - 8);
      p.textSize(8);
      p.fill(0, 200, 255, 100);
      p.text("estimate tool", cx, cy + 8);
      
      // Question on left
      p.fill(20, 30, 50);
      p.stroke(40, 60, 100);
      p.strokeWeight(1);
      p.rect(40, cy - 20, 160, 40, 6);
      p.fill(150, 200, 255);
      p.noStroke();
      p.textSize(11);
      p.text("LVP 15x20 room?", 120, cy);
      
      // Data particles flowing left to right
      if (timer % 8 === 0) {
        dataParticles.push({x: 200, y: cy, vx: 3, life: 100, col: [0, 200, 255]});
      }
      
      for (let i = dataParticles.length - 1; i >= 0; i--) {
        let dp = dataParticles[i];
        dp.x += dp.vx;
        dp.life--;
        
        p.noStroke();
        p.fill(dp.col[0], dp.col[1], dp.col[2], dp.life * 2);
        p.ellipse(dp.x, dp.y, 4, 4);
        p.fill(255, 255, 255, dp.life);
        p.ellipse(dp.x, dp.y, 1.5, 1.5);
        
        if (dp.life <= 0 || dp.x > W) dataParticles.splice(i, 1);
      }
      
      // Response building on right
      if (timer > 40) {
        p.fill(15, 25, 15);
        p.stroke(0, 255, 150, 40);
        p.strokeWeight(1);
        p.rect(cx + 80, cy - 25, 180, 50, 6);
        
        let lines = ["Materials: $450", "Labor: $300", "Total: $750"];
        p.fill(0, 255, 150, 180);
        p.noStroke();
        p.textSize(11);
        p.textAlign(p.LEFT, p.CENTER);
        for (let i = 0; i < lines.length; i++) {
          if (timer > 60 + i * 20) {
            p.text(lines[i], cx + 95, cy - 12 + i * 15);
          }
        }
      }
      
      if (timer > 150) {
        stage = 2;
        timer = 0;
      }
    }
    
    // Stage 2: Complete - show full flow
    if (stage === 2) {
      // Full pipeline visualization
      let boxes = [
        {x: W*0.1, label: "Customer", col: [150, 200, 255]},
        {x: W*0.35, label: "ChatGPT", col: [100, 255, 100]},
        {x: W*0.6, label: "MCP Server", col: [0, 200, 255]},
        {x: W*0.85, label: "Response", col: [0, 255, 150]}
      ];
      
      // Connection lines
      for (let i = 0; i < boxes.length - 1; i++) {
        let x1 = boxes[i].x, x2 = boxes[i+1].x;
        p.stroke(40, 50, 80, 80);
        p.strokeWeight(1);
        p.line(x1 + 30, cy, x2 - 30, cy);
        
        // Flowing particles
        let t = ((timer * 2 + i * 50) % 200) / 200;
        let px = p.lerp(x1 + 30, x2 - 30, t);
        p.noStroke();
        p.fill(boxes[i].col[0], boxes[i].col[1], boxes[i].col[2], 150);
        p.ellipse(px, cy, 4, 4);
      }
      
      // Boxes
      for (let b of boxes) {
        let glow = Math.sin(pulse + b.x * 0.01) * 0.2 + 0.8;
        p.fill(12, 15, 25);
        p.stroke(b.col[0], b.col[1], b.col[2], 60 * glow);
        p.strokeWeight(1);
        p.rect(b.x - 40, cy - 22, 80, 44, 6);
        
        p.fill(b.col[0], b.col[1], b.col[2], 180);
        p.noStroke();
        p.textSize(10);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(b.label, b.x, cy);
      }
      
      // Status text
      p.fill(0, 255, 150, 150);
      p.textSize(12);
      p.text("Instant estimate delivered", cx, cy + 50);
      
      // Restart
      if (timer > 200) {
        stage = 0;
        timer = 0;
        typedChars = 0;
        dataParticles = [];
      }
    }
  };
  
  p.windowResized = function() {
    let wrap = document.getElementById('canvas-flooring');
    W = wrap.offsetWidth;
    p.resizeCanvas(W, H);
  };
}, 'canvas-flooring');


// === Homelab Visualizer ===
new p5(function(p) {
  let W = 800, H = 300;
  let nodes = [];
  let particles = [];
  let pulse = 0;
  
  p.setup = function() {
    let wrap = document.getElementById('canvas-homelab');
    W = wrap.offsetWidth;
    let c = p.createCanvas(W, H);
    c.parent('canvas-homelab');
    p.colorMode(p.RGB, 255);
    
    let cx = W/2, cy = H/2, r = 90;
    let labels = ['HERMES', 'UPTIME', 'FIRECRAWL', 'GITHUB', 'N8N', 'ADGUARD'];
    let cols = [[0,200,255],[0,255,150],[255,120,60],[160,110,255],[255,210,50],[255,70,110]];
    
    for (let i = 0; i < 6; i++) {
      let a = (p.TWO_PI / 6) * i - p.HALF_PI;
      nodes.push({
        x: cx + Math.cos(a) * r,
        y: cy + Math.sin(a) * r,
        vx: 0, vy: 0,
        col: cols[i], label: labels[i],
        size: 22, phase: p.random(p.TWO_PI)
      });
    }
    
    for (let i = 0; i < 50; i++) {
      let src = Math.floor(Math.random() * 6);
      let tgt;
      do { tgt = Math.floor(Math.random() * 6); } while (tgt === src);
      particles.push({src, tgt, t: Math.random(), speed: 0.004 + Math.random() * 0.006, size: 2 + Math.random() * 2, trail: []});
    }
  };
  
  p.draw = function() {
    p.background(8, 8, 16);
    pulse += 0.02;
    
    // Grid
    p.stroke(18, 18, 30);
    p.strokeWeight(0.5);
    for (let x = 0; x < W; x += 40) p.line(x, 0, x, H);
    for (let y = 0; y < H; y += 40) p.line(0, y, W, y);
    
    // Update nodes
    for (let n of nodes) {
      n.vx += (W/2 - n.x) * 0.0002;
      n.vy += (H/2 - n.y) * 0.0002;
      for (let o of nodes) {
        if (o === n) continue;
        let dx = n.x - o.x, dy = n.y - o.y;
        let d = Math.sqrt(dx*dx + dy*dy);
        if (d < 60 && d > 0) { n.vx += (dx/d)*0.15; n.vy += (dy/d)*0.15; }
      }
      let md = Math.sqrt((p.mouseX-n.x)**2 + (p.mouseY-n.y)**2);
      if (md < 120 && md > 0 && p.mouseX > 0) {
        n.vx += ((p.mouseX-n.x)/md) * 0.06;
        n.vy += ((p.mouseY-n.y)/md) * 0.06;
      }
      n.vx *= 0.95; n.vy *= 0.95;
      n.x += n.vx; n.y += n.vy;
      n.phase += 0.02;
    }
    
    // Connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i+1; j < nodes.length; j++) {
        let d = Math.sqrt((nodes[j].x-nodes[i].x)**2 + (nodes[j].y-nodes[i].y)**2);
        if (d < 180) {
          p.stroke(35, 40, 60, p.map(d, 0, 180, 35, 5));
          p.strokeWeight(0.6);
          p.line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
        }
      }
    }
    
    // Particles
    for (let pt of particles) {
      pt.t += pt.speed;
      if (pt.t >= 1) { pt.t = 0; pt.trail = []; let s = pt.src; do { pt.src = Math.floor(Math.random()*6); } while(pt.src === s); pt.tgt = Math.floor(Math.random()*6); while(pt.tgt === pt.src) pt.tgt = Math.floor(Math.random()*6); }
      
      let s = nodes[pt.src], t = nodes[pt.tgt];
      let mx = (s.x+t.x)/2, my = (s.y+t.y)/2;
      let px = -(t.y-s.y)*0.12, py = (t.x-s.x)*0.12;
      if (pt.src%2===0) { px*=-1; py*=-1; }
      
      let x = (1-pt.t)*(1-pt.t)*s.x + 2*(1-pt.t)*pt.t*(mx+px) + pt.t*pt.t*t.x;
      let y = (1-pt.t)*(1-pt.t)*s.y + 2*(1-pt.t)*pt.t*(my+py) + pt.t*pt.t*t.y;
      
      pt.trail.push({x, y});
      if (pt.trail.length > 5) pt.trail.shift();
      
      let col = nodes[pt.src].col;
      for (let i = 0; i < pt.trail.length; i++) {
        let a = p.map(i, 0, pt.trail.length, 8, 80);
        p.noStroke(); p.fill(col[0], col[1], col[2], a);
        p.ellipse(pt.trail[i].x, pt.trail[i].y, 2, 2);
      }
      p.fill(col[0], col[1], col[2], 180);
      p.ellipse(x, y, pt.size, pt.size);
    }
    
    // Nodes
    for (let n of nodes) {
      let pulse = Math.sin(n.phase)*0.2+0.8;
      p.noStroke();
      for (let i = 3; i > 0; i--) {
        p.fill(n.col[0], n.col[1], n.col[2], 10*i);
        p.ellipse(n.x, n.y, n.size*2*i*pulse*0.4, n.size*2*i*pulse*0.4);
      }
      p.fill(n.col[0], n.col[1], n.col[2], 170);
      p.stroke(n.col[0], n.col[1], n.col[2], 50);
      p.strokeWeight(1);
      p.ellipse(n.x, n.y, n.size*pulse, n.size*pulse);
      p.noStroke();
      p.fill(255, 255, 255, 100);
      p.ellipse(n.x, n.y, n.size*0.2, n.size*0.2);
      p.fill(n.col[0], n.col[1], n.col[2], 130);
      p.textSize(8); p.textFont('monospace'); p.textAlign(p.CENTER, p.CENTER);
      p.text(n.label, n.x, n.y + n.size*0.65);
    }
  };
  
  p.windowResized = function() {
    let wrap = document.getElementById('canvas-homelab');
    W = wrap.offsetWidth;
    p.resizeCanvas(W, H);
  };
}, 'canvas-homelab');


// === MCP Ecosystem Visualizer ===
new p5(function(p) {
  let W = 800, H = 300;
  let agents = [];
  let tools = [];
  let callParticles = [];
  let pulse = 0;
  let callTimer = 0;
  
  p.setup = function() {
    let wrap = document.getElementById('canvas-agent');
    W = wrap.offsetWidth;
    let c = p.createCanvas(W, H);
    c.parent('canvas-agent');
    p.colorMode(p.RGB, 255);
    
    // Agent on left
    agents.push({x: W*0.15, y: H/2, col: [0, 200, 255], label: "HERMES"});
    
    // Tools on right
    let toolData = [
      {label: "scrape", col: [255, 120, 60]},
      {label: "monitor", col: [0, 255, 150]},
      {label: "github", col: [160, 110, 255]},
      {label: "workflow", col: [255, 210, 50]},
      {label: "dns", col: [255, 70, 110]}
    ];
    
    for (let i = 0; i < 5; i++) {
      let y = 40 + (H - 80) * (i / 4);
      tools.push({x: W*0.85, y: y, col: toolData[i].col, label: toolData[i].label, active: false, activeTimer: 0});
    }
  };
  
  p.draw = function() {
    p.background(8, 8, 16);
    pulse += 0.025;
    callTimer++;
    
    // Grid
    p.stroke(18, 18, 30);
    p.strokeWeight(0.5);
    for (let x = 0; x < W; x += 40) p.line(x, 0, x, H);
    for (let y = 0; y < H; y += 40) p.line(0, y, W, y);
    
    // Draw agent
    let agent = agents[0];
    let aglow = Math.sin(pulse) * 0.2 + 0.8;
    p.noStroke();
    for (let i = 3; i > 0; i--) {
      p.fill(agent.col[0], agent.col[1], agent.col[2], 10*i*aglow);
      p.ellipse(agent.x, agent.y, 60*i*0.4, 60*i*0.4);
    }
    p.fill(12, 15, 25);
    p.stroke(agent.col[0], agent.col[1], agent.col[2], 60);
    p.strokeWeight(1.5);
    p.ellipse(agent.x, agent.y, 50, 50);
    p.fill(agent.col[0], agent.col[1], agent.col[2], 200);
    p.noStroke();
    p.textSize(11);
    p.textFont('monospace');
    p.textAlign(p.CENTER, p.CENTER);
    p.text(agent.label, agent.x, agent.y - 5);
    p.textSize(8);
    p.fill(agent.col[0], agent.col[1], agent.col[2], 100);
    p.text("35 tools", agent.x, agent.y + 10);
    
    // Draw tools
    for (let t of tools) {
      if (t.active) {
        t.activeTimer--;
        if (t.activeTimer <= 0) t.active = false;
      }
      
      let tglow = t.active ? 1 : 0.4;
      p.fill(12, 15, 25);
      p.stroke(t.col[0], t.col[1], t.col[2], 50 * tglow);
      p.strokeWeight(1);
      p.rect(t.x - 35, t.y - 15, 70, 30, 5);
      
      p.fill(t.col[0], t.col[1], t.col[2], 160 * tglow);
      p.noStroke();
      p.textSize(9);
      p.textAlign(p.CENTER, p.CENTER);
      p.text(t.label, t.x, t.y);
    }
    
    // Spawn tool calls
    if (callTimer % 40 === 0) {
      let tgt = Math.floor(Math.random() * tools.length);
      tools[tgt].active = true;
      tools[tgt].activeTimer = 60;
      callParticles.push({
        srcX: agent.x + 25, srcY: agent.y,
        tgtX: tools[tgt].x - 35, tgtY: tools[tgt].y,
        t: 0, speed: 0.015 + Math.random() * 0.01,
        col: tools[tgt].col, returning: false
      });
    }
    
    // Update call particles
    for (let i = callParticles.length - 1; i >= 0; i--) {
      let cp = callParticles[i];
      cp.t += cp.speed;
      
      let startX = cp.returning ? cp.tgtX : cp.srcX;
      let startY = cp.returning ? cp.tgtY : cp.srcY;
      let endX = cp.returning ? cp.srcX : cp.tgtX;
      let endY = cp.returning ? cp.srcY : cp.tgtY;
      
      let midX = (startX + endX) / 2;
      let midY = (startY + endY) / 2 - 30;
      
      let t = cp.t;
      let x = (1-t)*(1-t)*startX + 2*(1-t)*t*midX + t*t*endX;
      let y = (1-t)*(1-t)*startY + 2*(1-t)*t*midY + t*t*endY;
      
      p.noStroke();
      p.fill(cp.col[0], cp.col[1], cp.col[2], 200);
      p.ellipse(x, y, 5, 5);
      p.fill(255, 255, 255, 150);
      p.ellipse(x, y, 2, 2);
      
      // Trail
      for (let j = 1; j <= 3; j++) {
        let tt = Math.max(0, cp.t - j * 0.03);
        let tx = (1-tt)*(1-tt)*startX + 2*(1-tt)*tt*midX + tt*tt*endX;
        let ty = (1-tt)*(1-tt)*startY + 2*(1-tt)*tt*midY + tt*tt*endY;
        p.fill(cp.col[0], cp.col[1], cp.col[2], 60 - j*15);
        p.ellipse(tx, ty, 3, 3);
      }
      
      if (cp.t >= 1) {
        if (!cp.returning) {
          cp.returning = true;
          cp.t = 0;
        } else {
          callParticles.splice(i, 1);
        }
      }
    }
    
    // Labels
    p.fill(80, 90, 120);
    p.noStroke();
    p.textSize(10);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("Agent", agent.x, agent.y + 40);
    p.text("MCP Tools", tools[0].x, 15);
  };
  
  p.windowResized = function() {
    let wrap = document.getElementById('canvas-agent');
    W = wrap.offsetWidth;
    p.resizeCanvas(W, H);
  };
}, 'canvas-agent');
</script>
