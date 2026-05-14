---
title: "Compliance Suite — Live Demo"
date: 2026-05-13
draft: false
ShowToc: false
layout: "compliance-suite-demo"
---

{{< rawhtml >}}
<style>
.compliance-wrap {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
}
.compliance-header {
  text-align: center;
  margin-bottom: 1.5rem;
}
.compliance-header h1 {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 1.8rem;
  color: rgba(220,230,255,0.95);
  margin: 0;
  letter-spacing: -1px;
}
.compliance-header p {
  font-size: 0.8rem;
  color: rgba(140,160,200,0.5);
  margin-top: 0.5rem;
}
#compliance-canvas {
  width: 100%;
  height: 500px;
  background: #04060e;
  border: 1px solid rgba(60,60,90,0.2);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
}
.controls {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
.controls button {
  font-family: 'SF Mono', monospace;
  font-size: 0.7rem;
  background: rgba(12,14,22,0.9);
  border: 1px solid rgba(60,60,90,0.3);
  color: rgba(200,215,240,0.8);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.controls button:hover {
  border-color: rgba(100,160,255,0.5);
  color: #fff;
}
#scan-btn {
  background: rgba(34,197,94,0.15);
  border-color: rgba(34,197,94,0.4);
  color: #22c55e;
}
#scan-btn:hover { background: rgba(34,197,94,0.25); }
#score-display {
  text-align: center;
  margin: 1rem 0;
  font-family: 'SF Mono', monospace;
  font-size: 1.2rem;
}
.score-value { font-size: 2.5rem; font-weight: 700; }
.score-label { font-size: 0.6rem; color: rgba(140,160,200,0.5); letter-spacing: 2px; text-transform: uppercase; }
.legend-row { display: flex; gap: 1rem; justify-content: center; font-size: 0.65rem; color: rgba(140,160,200,0.5); margin: 0.5rem 0; }
.legend-dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 4px; vertical-align: middle; }
</style>

<div class="compliance-wrap">
<div class="compliance-header">
  <h1>🔐 Compliance Suite</h1>
  <p>Interactive Demo — 8 CIS Benchmarks · Cryptographic Audit Trail · SOC 2 Ready</p>
</div>
<div id="compliance-canvas"></div>
<div id="score-display">
  <div class="score-label">CIS Score</div>
  <div class="score-value" style="color:rgba(140,160,200,0.3)" id="score-text">—</div>
</div>
<div class="legend-row">
  <span><span class="legend-dot" style="background:#22c55e;box-shadow:0 0 8px #22c55e55"></span> PASS</span>
  <span><span class="legend-dot" style="background:#ef4444;box-shadow:0 0 8px #ef444455"></span> FAIL</span>
  <span><span class="legend-dot" style="background:rgba(140,160,200,0.3)"></span> PENDING</span>
</div>
<div class="controls">
  <button id="scan-btn" onclick="startScan()">▶ Run Full Audit</button>
  <button onclick="resetScan()">↺ Reset</button>
</div>
<div style="text-align:center;margin-top:1rem;font-size:0.6rem;color:rgba(140,160,200,0.3)">
  Every scan is SHA-256 chained · Deployed on MCPize · github.com/Crow0077/compliance-suite-mcp
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js"></script>
<script>
const CHECKS = [
  { id:"firewall",   name:"Firewall Active",     cat:"Firewall",    sev:"critical", pass:null, detail:"" },
  { id:"updates",    name:"Security Updates",     cat:"Updates",     sev:"high",     pass:null, detail:"" },
  { id:"icmp",       name:"ICMP Redirects",       cat:"Kernel",      sev:"high",     pass:null, detail:"" },
  { id:"source_rt",  name:"Source Routing",       cat:"Kernel",      sev:"high",     pass:null, detail:"" },
  { id:"passwd",     name:"Password Policy",      cat:"Auth",        sev:"med",      pass:null, detail:"" },
  { id:"brute",      name:"Brute Force Detection",cat:"Auth",        sev:"high",     pass:null, detail:"" },
  { id:"selinux",    name:"SELinux/AppArmor",     cat:"Access Ctrl", sev:"high",     pass:null, detail:"" },
  { id:"coredump",   name:"Core Dumps Restricted",cat:"Kernel",      sev:"med",      pass:null, detail:"" },
];

let nodes = [];
let particles = [];
let scanActive = false;
let scanProgress = 0;
let time = 0;
let hoveredNode = null;

new p5(function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(1,1);
    let container = document.getElementById('compliance-canvas');
    W = container.offsetWidth;
    H = container.offsetHeight;
    p.resizeCanvas(W, H);
    canvas.parent('compliance-canvas');
    initNodes();
  };

  function initNodes() {
    nodes = [];
    const cx = W/2, cy = H/2;
    const ringR = Math.min(W,H) * 0.32;
    for (let i = 0; i < CHECKS.length; i++) {
      let angle = (i / CHECKS.length) * Math.PI * 2 - Math.PI/2;
      nodes.push({
        ...CHECKS[i],
        baseX: cx + Math.cos(angle) * ringR,
        baseY: cy + Math.sin(angle) * ringR,
        x: cx + Math.cos(angle) * ringR,
        y: cy + Math.sin(angle) * ringR,
        r: 14, hue: 200, pulse: 0,
        phase: p.random(p.TWO_PI), orbitR: p.random(3, 8)
      });
    }
  }

  p.draw = function() {
    p.background(4, 6, 14, 20);
    time += 0.015;
    const cx = W/2, cy = H/2;
    const ringR = Math.min(W,H) * 0.32;
    
    // Ring glow
    p.noFill(); p.strokeWeight(0.5);
    for (let r = 0; r < 3; r++) {
      p.stroke(60, 80, 140, p.map(r, 0, 3, 4, 1));
      p.ellipse(cx, cy, (ringR + r*8) * 2);
    }
    
    // Center node
    let centerR = 20 + Math.sin(time * 2) * 3;
    for (let g = 3; g > 0; g--) {
      let alpha = p.map(g, 3, 0, 4, 15);
      p.noStroke();
      p.fill(scanActive ? [34,197,94,alpha*(0.5+0.5*Math.sin(time*5))] : [60,100,200,alpha]);
      p.circle(cx, cy, centerR * 2 + g * 8);
    }
    p.fill(60, 100, 200, 200); p.circle(cx, cy, centerR);
    
    // Scanning pulse
    if (scanActive) {
      p.noFill();
      let scanR = ringR * (0.3 + 0.7 * scanProgress);
      let scanAlpha = 30 + 20 * Math.sin(time * 8);
      p.strokeWeight(1.5); p.stroke(34, 197, 94, scanAlpha);
      p.ellipse(cx, cy, scanR * 2);
      for (let w = 0; w < 3; w++) {
        let wr = scanR - w * 20;
        if (wr > 0) { p.strokeWeight(0.8); p.stroke(34, 197, 94, scanAlpha/(w+1)); p.ellipse(cx, cy, wr * 2); }
      }
    }
    
    // Particles
    if (scanActive && particles.length < 60) {
      for (let i = 0; i < 2; i++) {
        let target = nodes[Math.floor(p.random(nodes.length))];
        particles.push({ fromX:cx, fromY:cy, toX:target.x, toY:target.y, t:0, speed:p.random(0.01,0.03), hue:140+p.random(60) });
      }
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      let pt = particles[i]; pt.t += pt.speed;
      if (pt.t >= 1) { particles.splice(i, 1); continue; }
      p.noStroke(); p.fill(pt.hue, 180, 255, p.map(Math.sin(pt.t*Math.PI),0,1,10,80));
      p.circle(p.lerp(pt.fromX, pt.toX, pt.t), p.lerp(pt.fromY, pt.toY, pt.t), 2.5);
    }
    
    // Nodes
    for (let n of nodes) {
      n.x = n.baseX + Math.cos(time*0.8+n.phase)*n.orbitR;
      n.y = n.baseY + Math.sin(time*0.6+n.phase)*n.orbitR*0.7;
      n.pulse *= 0.96;
      
      let hue = n.pass===true ? 140 : (n.pass===false ? 0 : 210);
      let sat = n.pass===true ? 180 : (n.pass===false ? 200 : 80);
      let bri = n.pass===true ? 220 : (n.pass===false ? 200 : 160);
      let nodeR = n.r * (1 + n.pulse*2) * (n===hoveredNode ? 1.4 : 1);
      
      for (let g = 3; g > 0; g--) {
        p.noStroke(); p.fill(hue, sat, bri, p.map(g,3,0,3,12)*(1+n.pulse));
        p.circle(n.x, n.y, nodeR*2 + g*6);
      }
      p.fill(hue, sat+20, bri+30, 220); p.circle(n.x, n.y, nodeR);
      p.fill(hue, sat-40, bri+50, 80); p.circle(n.x-nodeR*0.2, n.y-nodeR*0.2, nodeR*0.4);
      
      if (n.pass !== null) {
        p.fill(255); p.textAlign(p.CENTER, p.CENTER); p.textSize(10);
        p.text(n.pass ? '✓' : '✗', n.x, n.y);
      }
      
      let la = n===hoveredNode ? 200 : p.map(n.pulse,0,1,0,100);
      if (la > 5) { p.fill(200,215,240,la); p.textSize(9); p.text(n.name, n.x, n.y-n.r-10); }
    }
    
    // Connections
    for (let n of nodes) {
      let alpha = p.map(Math.sin(time*1.5+n.phase),-1,1,3,12)+(n.pass===true?5:0);
      p.strokeWeight(0.5);
      p.stroke(n.pass===true?120:(n.pass===false?80:60), n.pass===true?200:(n.pass===false?60:80), n.pass===true?140:(n.pass===false?60:140), alpha);
      p.line(cx, cy, n.x, n.y);
    }
    
    // Hover
    let mx = p.mouseX, my = p.mouseY, found = null;
    for (let n of nodes) { if (p.dist(mx,my,n.x,n.y) < n.r*3) { found = n; break; } }
    hoveredNode = found; p.cursor(found ? 'pointer' : 'default');
    
    // Scan progress
    if (scanActive) {
      scanProgress += 0.008;
      if (scanProgress >= 1) { scanActive = false; completeScan(); }
      let revealed = Math.floor(scanProgress * nodes.length);
      for (let i = 0; i < Math.min(revealed, nodes.length); i++) {
        if (nodes[i].pass === null) { nodes[i].pass = Math.random() > 0.25; nodes[i].pulse = 1.5; }
      }
    }
  };

  p.windowResized = function() {
    let c = document.getElementById('compliance-canvas');
    W = c.offsetWidth; H = c.offsetHeight;
    p.resizeCanvas(W, H); initNodes();
  };
});

function startScan() {
  scanActive = true; scanProgress = 0; particles = [];
  for (let n of nodes) { n.pass = null; n.pulse = 0; }
  document.getElementById('score-text').style.color = 'rgba(140,160,200,0.3)';
  document.getElementById('score-text').textContent = '...';
  document.getElementById('scan-btn').disabled = true;
  document.getElementById('scan-btn').textContent = '\u25C9 SCANNING...';
}

function completeScan() {
  let passed = nodes.filter(n => n.pass === true).length;
  let score = Math.round(passed / nodes.length * 100);
  let color = score >= 75 ? '#22c55e' : (score >= 50 ? '#eab308' : '#ef4444');
  let el = document.getElementById('score-text');
  el.textContent = score + '%'; el.style.color = color;
  document.getElementById('scan-btn').disabled = false;
  document.getElementById('scan-btn').textContent = '\u25B6 Run Full Audit';
}

function resetScan() {
  scanActive = false; scanProgress = 0; particles = [];
  for (let n of nodes) { n.pass = null; n.pulse = 0; }
  document.getElementById('score-text').textContent = '\u2014';
  document.getElementById('score-text').style.color = 'rgba(140,160,200,0.3)';
  document.getElementById('scan-btn').disabled = false;
  document.getElementById('scan-btn').textContent = '\u25B6 Run Full Audit';
}

setTimeout(startScan, 800);
</script>
{{< /rawhtml >}}
