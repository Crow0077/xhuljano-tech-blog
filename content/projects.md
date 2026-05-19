---
title: "Projects"
date: 2026-05-12
draft: false
ShowToc: false
---

{{< rawhtml >}}
<style>
.project-grid { display:grid; grid-template-columns:1fr; gap:2rem; margin-top:2rem; }
.project-card { background:rgba(15,15,25,0.8); border:1px solid rgba(60,60,90,0.3); border-radius:12px; overflow:hidden; transition:border-color 0.3s; }
.project-card:hover { border-color:rgba(100,140,255,0.4); }
.project-canvas { width:100%; height:240px; position:relative; overflow:hidden; cursor:crosshair; }
.project-canvas canvas { display:block; }
.project-info { padding:1.5rem; }
.project-info h2 { margin:0 0 0.5rem 0; font-size:1.4rem; color:#e0e0f0; }
.project-info .tag-row { display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:0.8rem; }
.project-info .tag { background:rgba(60,80,120,0.3); color:rgba(160,180,220,0.9); padding:0.15rem 0.6rem; border-radius:4px; font-size:0.75rem; font-family:monospace; }
.project-info p { color:rgba(160,170,190,0.8); font-size:0.95rem; line-height:1.6; margin:0; }
.project-info .stat-row { display:flex; gap:1.5rem; margin:0.8rem 0; }
.project-info .stat { text-align:center; }
.project-info .stat .num { font-size:1.3rem; color:rgba(130,180,240,0.9); font-family:monospace; }
.project-info .stat .lbl { font-size:0.6rem; color:rgba(120,150,190,0.4); text-transform:uppercase; letter-spacing:1px; }
.project-info .links { margin-top:1rem; display:flex; gap:1rem; }
.project-info .links a { color:rgba(100,180,255,0.8); text-decoration:none; font-size:0.85rem; font-family:monospace; }
.project-info .links a:hover { color:rgba(100,180,255,1); }
</style>

<div class="project-grid">

<div class="project-card">
  <div class="project-canvas" id="canvas-command"></div>
  <div class="project-info">
    <h2>MCP Command Center</h2>
    <div class="tag-row">
      <span class="tag">MCP</span>
      <span class="tag">Systemd</span>
      <span class="tag">Streamable HTTP</span>
      <span class="tag">Python</span>
    </div>
    <p>18 production MCP servers running as standalone systemd daemons on Fedora Server — compliance auditing, incident forensics, self-healing infrastructure, container management, log aggregation, backup orchestration, security scanning, and cloud exit analysis. 100+ tools. Every server survives reboots and runs independently of any AI agent session.</p>
    <div class="stat-row">
      <div class="stat"><div class="num">18</div><div class="lbl">MCP Servers</div></div>
      <div class="stat"><div class="num">100+</div><div class="lbl">Tools</div></div>
      <div class="stat"><div class="num">2</div><div class="lbl">Enterprise Tier</div></div>
      <div class="stat"><div class="num">24/7</div><div class="lbl">Uptime</div></div>
    </div>
    <div class="links">
      <a href="/ai-news/">AI News</a>
      <a href="https://github.com/Crow0077">GitHub</a>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-canvas" id="canvas-compliance"></div>
  <div class="project-info">
    <h2>Infrastructure Compliance Auditor</h2>
    <div class="tag-row">
      <span class="tag">CIS Benchmarks</span>
      <span class="tag">CVE Detection</span>
      <span class="tag">SSH Audit</span>
      <span class="tag">SQLite</span>
    </div>
    <p>Enterprise-grade compliance scanning engine. Runs nightly CIS Level 1 audits across 9 security dimensions — SSH hardening, firewall verification, kernel parameters, open port classification, brute force detection, disk encryption, and pending CVE checks. All results stored in SQLite with historical trending. Telegram alerts when score drops below 75%.</p>
    <div class="stat-row">
      <div class="stat"><div class="num">9</div><div class="lbl">CIS Checks</div></div>
      <div class="stat"><div class="num">3am</div><div class="lbl">Nightly Scan</div></div>
      <div class="stat"><div class="num">8</div><div class="lbl">Tools</div></div>
      <div class="stat"><div class="num">:8100</div><div class="lbl">HTTP Port</div></div>
    </div>
    <div class="links">
      <a href="https://github.com/Crow0077/compliance-suite-mcp">Source</a>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-canvas" id="canvas-forensics"></div>
  <div class="project-info">
    <h2>Automated Incident Forensics</h2>
    <div class="tag-row">
      <span class="tag">Root Cause Analysis</span>
      <span class="tag">Timeline Reconstruction</span>
      <span class="tag">Podman</span>
      <span class="tag">SQLite</span>
    </div>
    <p>Proactive incident investigation engine. Monitors all containers every 15 minutes for error spikes. When anomalies are detected, automatically gathers logs from every service, correlates events across containers, builds chronological timelines, and identifies the root cause — before a human even knows something broke. Stores full incident history with replayable event logs.</p>
    <div class="stat-row">
      <div class="stat"><div class="num">15m</div><div class="lbl">Proactive Scan</div></div>
      <div class="stat"><div class="num">6</div><div class="lbl">Tools</div></div>
      <div class="stat"><div class="num">:8101</div><div class="lbl">HTTP Port</div></div>
    </div>
    <div class="links">
      <a href="https://github.com/Crow0077/homelab-ai-toolkit">Source</a>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-canvas" id="canvas-immune"></div>
  <div class="project-info">
    <h2>Self-Healing Infrastructure</h2>
    <div class="tag-row">
      <span class="tag">Quorum Sensing</span>
      <span class="tag">Treg Arbitration</span>
      <span class="tag">Immune Memory</span>
      <span class="tag">Auto-Heal</span>
    </div>
    <p>Autonomous infrastructure healing inspired by the adaptive immune system. Four-channel health detection (HTTP, container status, logs, resources) with quorum sensing requires consensus before acting. Treg arbitrator suppresses false positives. Immune memory prevents restart loops. Heals confirmed failures automatically without human intervention.</p>
    <div class="stat-row">
      <div class="stat"><div class="num">4</div><div class="lbl">Detection Channels</div></div>
      <div class="stat"><div class="num">5</div><div class="lbl">Tools</div></div>
      <div class="stat"><div class="num">:8102</div><div class="lbl">HTTP Port</div></div>
    </div>
    <div class="links">
      <a href="https://github.com/Crow0077/homelab-ai-toolkit">Source</a>
    </div>
  </div>
</div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js"></script>
<script>

new p5(function(p){
  let W,H, nodes=[], particles=[], time=0;
  p.setup=function(){
    let c=p.createCanvas(1,1);
    let wrap=document.getElementById('canvas-command');
    W=wrap.offsetWidth;H=240;
    p.resizeCanvas(W,H);c.parent('canvas-command');
    let names=['AUDITOR','FORENSICS','IMMUNE','DEPLOY','LOGS','BACKUP','HOMELAB','UPTIME','FIRECRAWL','BULKEXIT','SENTINEL','WATCHDOG','GSD','MINIRAG','AMEM','COMPLIANCE'];
    let cols=[[0,200,255],[255,160,60],[80,220,120],[200,140,255],[255,200,50],[100,200,200],[255,100,150],[120,200,255],[255,180,80],[160,140,255],[200,100,255],[100,255,180],[255,150,100],[180,200,255],[255,100,200],[80,180,255]];
    let cx=W/2,cy=H/2,r=Math.min(W,H)*0.38;
    let nCount=Math.min(names.length, 16);
    for(let i=0;i<nCount;i++){
      let a=(p.TWO_PI/nCount)*i-p.HALF_PI;
      nodes.push({x:cx+p.cos(a)*r,y:cy+p.sin(a)*r,col:cols[i],label:names[i],size:10,phase:p.random(p.TWO_PI),conns:[]});
    }
    for(let i=0;i<nCount;i++){nodes[i].conns=[(i+1)%nCount,(i+3)%nCount,(i+5)%nCount];}
    for(let i=0;i<80;i++){particles.push({src:p.floor(p.random(nCount)),tgt:p.floor(p.random(nCount)),t:p.random(1),sp:0.003+p.random()*0.006});}
  };
  p.draw=function(){
    p.background(8,8,16);time+=0.008;
    for(let n of nodes){for(let ci of n.conns){let t=nodes[ci];p.stroke(30,35,55,20);p.strokeWeight(0.3);p.line(n.x,n.y,t.x,t.y);}}
    for(let pt of particles){
      pt.t+=pt.sp;if(pt.t>=1){pt.t=0;pt.src=pt.tgt;pt.tgt=p.floor(p.random(nodes.length))}
      let s=nodes[pt.src],t=nodes[pt.tgt];
      let x=p.lerp(s.x,t.x,pt.t),y=p.lerp(s.y,t.y,pt.t);
      p.noStroke();p.fill(s.col[0],s.col[1],s.col[2],100);p.circle(x,y,2);
    }
    for(let n of nodes){
      let ps=1+p.sin(time+n.phase)*0.12;
      p.noStroke();for(let g=3;g>0;g--){p.fill(n.col[0],n.col[1],n.col[2],6*g);p.circle(n.x,n.y,n.size*2+g*3);}
      p.fill(n.col[0],n.col[1],n.col[2],160);p.circle(n.x,n.y,n.size*ps);
      p.fill(255,255,255,70);p.circle(n.x,n.y,n.size*0.18);
      p.fill(n.col[0],n.col[1],n.col[2],80);p.textSize(6);p.textFont('monospace');p.textAlign(p.CENTER);p.text(n.label,n.x,n.y+n.size+9);
    }
  };
  p.windowResized=function(){let w=document.getElementById('canvas-command');W=w.offsetWidth;p.resizeCanvas(W,H);};
},'canvas-command');

new p5(function(p){
  let W,H, checks=[], scanPhase=0, timer=0;
  p.setup=function(){
    let c=p.createCanvas(1,1);
    let wrap=document.getElementById('canvas-compliance');
    W=wrap.offsetWidth;H=240;
    p.resizeCanvas(W,H);c.parent('canvas-compliance');
    let names=['SSH Root','SSH Auth','Protocol','Firewall','Updates','Kernel','Ports','Logins','Encrypt'];
    for(let i=0;i<9;i++){checks.push({name:names[i],x:60+i*(W-120)/8,y:H/2,status:'pending',col:[80,80,100]});}
  };
  p.draw=function(){
    p.background(8,8,16);timer++;
    if(timer%80===0&&scanPhase<9){checks[scanPhase].status='scanning';checks[scanPhase].col=[0,200,255];}
    if(timer%80===40&&scanPhase<9){
      let r=p.random();checks[scanPhase].status=r>0.55?'pass':r>0.15?'fail':'skip';
      checks[scanPhase].col=checks[scanPhase].status==='pass'?[80,220,120]:checks[scanPhase].status==='fail'?[255,100,100]:[200,180,80];
      scanPhase++;
    }
    if(scanPhase>=9&&timer%300===0){scanPhase=0;timer=0;for(let c of checks){c.status='pending';c.col=[80,80,100];}}
    if(scanPhase<9){
      let sx=checks[scanPhase].x,sy=checks[scanPhase].y;
      p.stroke(0,200,255,60+20*p.sin(timer*0.1));p.strokeWeight(1);p.line(sx,sy-30,sx,sy+30);
    }
    for(let c of checks){
      let glow=c.status==='scanning'?1+0.3*p.sin(timer*0.2):1;
      p.noStroke();for(let g=2;g>0;g--){p.fill(c.col[0],c.col[1],c.col[2],10*g*glow);p.circle(c.x,c.y,16+g*6);}
      p.fill(c.col[0],c.col[1],c.col[2],180);p.circle(c.x,c.y,8*glow);
      if(c.status==='pass'){p.fill(80,220,120);p.textSize(12);p.textAlign(p.CENTER);p.text('\u2713',c.x,c.y+4);}
      else if(c.status==='fail'){p.fill(255,100,100);p.textSize(12);p.textAlign(p.CENTER);p.text('\u2717',c.x,c.y+4);}
      else if(c.status==='skip'){p.fill(200,180,80);p.textSize(12);p.textAlign(p.CENTER);p.text('\u2212',c.x,c.y+4);}
      p.fill(c.col[0],c.col[1],c.col[2],80);p.textSize(7);p.textFont('monospace');p.textAlign(p.CENTER);p.text(c.name,c.x,c.y+22);
    }
    if(scanPhase>=9){
      let passed=checks.filter(c=>c.status==='pass').length;
      p.fill(130,180,240,200);p.textSize(14);p.textFont('monospace');p.textAlign(p.CENTER);
      p.text('Score: '+Math.round(passed/checks.length*100)+'%',W/2,H-25);
    }
  };
  p.windowResized=function(){let w=document.getElementById('canvas-compliance');W=w.offsetWidth;p.resizeCanvas(W,H);};
},'canvas-compliance');

new p5(function(p){
  let W,H,events=[],time=0;
  p.setup=function(){
    let c=p.createCanvas(1,1);
    let wrap=document.getElementById('canvas-forensics');
    W=wrap.offsetWidth;H=240;
    p.resizeCanvas(W,H);c.parent('canvas-forensics');
    let svcs=['firecrawl','uptime','grafana','prometheus','dozzle','immune','sentinel'];
    for(let i=0;i<30;i++){
      let s=svcs[p.floor(p.random(svcs.length))];
      let sev=p.random()>0.85?'error':p.random()>0.7?'warning':'info';
      events.push({x:p.random(W*0.1,W*0.9),y:30+p.random(H-60),svc:s,sev:sev,life:p.random(80,200),maxLife:200,phase:p.random(p.TWO_PI)});
    }
  };
  p.draw=function(){
    p.background(8,8,16);time+=0.01;
    p.stroke(20,22,35);p.strokeWeight(0.5);
    for(let y=40;y<H-20;y+=30)p.line(20,y,W-20,y);
    p.stroke(40,50,80,60);p.strokeWeight(1);p.line(30,H-15,W-30,H-15);
    p.fill(80,100,140,80);p.textSize(8);p.textAlign(p.LEFT);p.text('\u2190 incident window \u2192',35,H-8);
    for(let e of events){
      e.life--;if(e.life<=0){e.life=e.maxLife;e.x=p.random(W*0.1,W*0.9);e.y=30+p.random(H-60);}
      let alpha=p.map(e.life,0,e.maxLife,0,180);
      let col=e.sev==='error'?[255,90,90]:e.sev==='warning'?[255,180,60]:[80,140,220];
      p.noStroke();p.fill(col[0],col[1],col[2],alpha);p.circle(e.x,e.y,4+2*p.sin(time*2+e.phase));
      p.stroke(col[0],col[1],col[2],alpha*0.3);p.strokeWeight(0.3);p.line(e.x,e.y+8,e.x,H-15);
    }
    let errs=events.filter(e=>e.sev==='error');
    if(errs.length>0){
      let first=errs.reduce((a,b)=>a.x<b.x?a:b);
      p.noFill();p.stroke(255,80,80,60+20*p.sin(time*3));p.strokeWeight(1.5);p.circle(first.x,first.y,16+4*p.sin(time*2));
      p.fill(255,80,80,180);p.textSize(8);p.textAlign(p.CENTER);p.text('ROOT CAUSE',first.x,first.y-16);
    }
  };
  p.windowResized=function(){let w=document.getElementById('canvas-forensics');W=w.offsetWidth;p.resizeCanvas(W,H);};
},'canvas-forensics');

new p5(function(p){
  let W,H,cells=[],threats=[],time=0;
  p.setup=function(){
    let c=p.createCanvas(1,1);
    let wrap=document.getElementById('canvas-immune');
    W=wrap.offsetWidth;H=240;
    p.resizeCanvas(W,H);c.parent('canvas-immune');
    for(let i=0;i<12;i++){cells.push({x:p.random(W*0.15,W*0.85),y:p.random(H*0.2,H*0.8),r:12+Math.random()*8,hp:100,infected:false,phase:p.random(p.TWO_PI)});}
  };
  p.draw=function(){
    p.background(8,8,16);time+=0.01;
    if(p.random()<0.02&&threats.length<3){
      let target=cells[p.floor(p.random(cells.length))];
      threats.push({x:p.random(W),y:p.random(H),tx:target.x,ty:target.y,t:0,sp:0.008+Math.random()*0.01});
    }
    for(let i=threats.length-1;i>=0;i--){
      let th=threats[i];th.t+=th.sp;
      th.x=p.lerp(th.x,th.tx,th.t);th.y=p.lerp(th.y,th.ty,th.t);
      p.noStroke();p.fill(255,60,60,200);p.circle(th.x,th.y,8+2*p.sin(time*5));
      p.fill(255,100,100,60);p.circle(th.x,th.y,16);
      for(let c of cells){let d=p.dist(th.x,th.y,c.x,c.y);if(d<20&&!c.infected){c.infected=true;c.hp=100;threats.splice(i,1);break;}}
      if(th.t>=1)threats.splice(i,1);
    }
    for(let i=0;i<cells.length;i++){for(let j=i+1;j<cells.length;j++){
      let d=p.dist(cells[i].x,cells[i].y,cells[j].x,cells[j].y);
      if(d<100){p.stroke(40,80,140,15);p.strokeWeight(0.4);p.line(cells[i].x,cells[i].y,cells[j].x,cells[j].y);}
    }}
    for(let c of cells){
      if(c.infected){c.hp-=0.3;if(c.hp<=0){c.infected=false;c.hp=100;}}
      let alpha=c.infected?p.map(c.hp,0,100,80,200):180;
      let col=c.infected?[255,130,80]:[80,200,140];
      p.noStroke();for(let g=3;g>0;g--){p.fill(col[0],col[1],col[2],8*g);p.circle(c.x,c.y,c.r*2+g*6);}
      p.fill(col[0],col[1],col[2],alpha);p.circle(c.x,c.y,c.r);
      if(c.infected){p.stroke(255,255,255,40);p.strokeWeight(0.5);p.arc(c.x,c.y,c.r+6,c.r+6,-p.HALF_PI,-p.HALF_PI+p.map(c.hp,100,0,p.TWO_PI*0.8,p.TWO_PI*0.1));}
      p.fill(col[0],col[1],col[2],100);p.textSize(6);p.textFont('monospace');p.textAlign(p.CENTER);p.text(c.infected?'HEALING':'HEALTHY',c.x,c.y+c.r+10);
    }
    p.fill(200,180,100,100);p.textSize(8);p.textAlign(p.RIGHT);p.text('TREG: suppressing false positives',W-15,H-8);
  };
  p.windowResized=function(){let w=document.getElementById('canvas-immune');W=w.offsetWidth;p.resizeCanvas(W,H);};
},'canvas-immune');

</script>
{{< /rawhtml >}}
