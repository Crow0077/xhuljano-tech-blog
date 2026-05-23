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
      <span class="tag">RKE2 K8s</span>
      <span class="tag">Systemd</span>
      <span class="tag">Streamable HTTP</span>
      <span class="tag">Python</span>
    </div>
    <p>8 production MCP servers deployed across a single-node RKE2 Kubernetes cluster — 6 on K8s with hostNetwork (arxiv, backup, firecrawl, homelab, sentinel, youtube) and 2 on systemd (immune, logs). 60+ tools. All servers use Streamable HTTP transport, survive reboots, and run independently of any AI agent session. Monitoring and observability stripped in favor of k9s and direct kubectl access — no Prometheus/Grafana overhead on a single-node cluster.</p>
    <div class="stat-row">
      <div class="stat"><div class="num">8</div><div class="lbl">MCP Servers</div></div>
      <div class="stat"><div class="num">60+</div><div class="lbl">Tools</div></div>
      <div class="stat"><div class="num">6</div><div class="lbl">on K8s</div></div>
      <div class="stat"><div class="num">2</div><div class="lbl">Systemd</div></div>
    </div>
    <div class="links">
      <a href="/ai-news/">AI News</a>
      <a href="https://github.com/Crow0077">GitHub</a>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-canvas" id="canvas-bridge"></div>
  <div class="project-info">
    <h2>Cross-MCP Security Pipeline</h2>
    <div class="tag-row">
      <span class="tag">MCP→MCP</span>
      <span class="tag">Automation</span>
      <span class="tag">Sentinel</span>
      <span class="tag">GitHub Issues</span>
    </div>
    <p>Sentinel runs a full security audit, a bridge script parses findings by severity, groups them by affected file, and creates structured GitHub issues with CVE references and fix recommendations — all without human intervention. The pattern generalizes to any MCP→MCP pipeline.</p>
    <div class="stat-row">
      <div class="stat"><div class="num">MCP→MCP</div><div class="lbl">Pattern</div></div>
      <div class="stat"><div class="num">6</div><div class="lbl">Issues Created</div></div>
      <div class="stat"><div class="num">18</div><div class="lbl">Servers Audited</div></div>
    </div>
    <div class="links">
      <a href="https://github.com/Crow0077/homelab-ai-toolkit/blob/master/sentinel_github_bridge.py">Source</a>
      <a href="https://github.com/Crow0077/homelab-ai-toolkit/issues">Issues</a>
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
    let names=['ARXIV','BACKUP','FIRECRAWL','HOMELAB','SENTINEL','YOUTUBE','IMMUNE','LOGS'];
    let cols=[[0,200,255],[80,220,120],[200,140,255],[255,200,50],[100,200,200],[255,100,150],[120,200,255],[255,180,80]];
    let cx=W/2,cy=H/2,r=Math.min(W,H)*0.38;
    let nCount=names.length;
    for(let i=0;i<nCount;i++){
      let a=(p.TWO_PI/nCount)*i-p.HALF_PI;
      nodes.push({x:cx+p.cos(a)*r,y:cy+p.sin(a)*r,col:cols[i],label:names[i],size:8,phase:p.random(p.TWO_PI),conns:[]});
    }
    for(let i=0;i<nCount;i++){nodes[i].conns=[(i+1)%nCount,(i+3)%nCount,(i+5)%nCount];}
    for(let i=0;i<60;i++){particles.push({src:p.floor(p.random(nCount)),tgt:p.floor(p.random(nCount)),t:p.random(1),sp:0.003+p.random()*0.006});}
  };
  p.draw=function(){
    p.background(8,8,16);time+=0.008;
    for(let n of nodes){for(let ci of n.conns){let t=nodes[ci];p.stroke(30,35,55,25);p.strokeWeight(0.4);p.line(n.x,n.y,t.x,t.y);}}
    for(let pt of particles){
      pt.t+=pt.sp;if(pt.t>=1){pt.t=0;pt.src=pt.tgt;pt.tgt=p.floor(p.random(nodes.length))}
      let s=nodes[pt.src],t=nodes[pt.tgt];
      let x=p.lerp(s.x,t.x,pt.t),y=p.lerp(s.y,t.y,pt.t);
      p.noStroke();p.fill(s.col[0],s.col[1],s.col[2],120);p.circle(x,y,2.5);
    }
    for(let n of nodes){
      let ps=1+p.sin(time+n.phase)*0.15;
      p.noStroke();for(let g=3;g>0;g--){p.fill(n.col[0],n.col[1],n.col[2],8*g);p.circle(n.x,n.y,n.size*2+g*4);}
      p.fill(n.col[0],n.col[1],n.col[2],180);p.circle(n.x,n.y,n.size*ps);
      p.fill(255,255,255,80);p.circle(n.x,n.y,n.size*0.2);
      p.fill(n.col[0],n.col[1],n.col[2],100);p.textSize(7);p.textFont('monospace');p.textAlign(p.CENTER);p.text(n.label,n.x,n.y+n.size+8);
    }
  };
  p.windowResized=function(){let w=document.getElementById('canvas-command');W=w.offsetWidth;p.resizeCanvas(W,H);};
},'canvas-command');

new p5(function(p){
  let W,H,nodes=[],flows=[],time=0;
  p.setup=function(){
    let c=p.createCanvas(1,1);
    let wrap=document.getElementById('canvas-bridge');
    W=wrap.offsetWidth;H=240;
    p.resizeCanvas(W,H);c.parent('canvas-bridge');
    nodes.push({x:W*0.15,y:H/2,col:[0,200,255],label:'SENTINEL',r:16});
    nodes.push({x:W*0.5,y:H/2,col:[80,220,120],label:'BRIDGE',r:12});
    nodes.push({x:W*0.85,y:H/2,col:[255,180,60],label:'GITHUB',r:16});
    for(let i=0;i<25;i++){flows.push({from:0,to:1,t:p.random(1),sp:0.005+p.random()*0.01,col:null});}
  };
  p.draw=function(){
    p.background(8,8,16);time+=0.01;
    p.stroke(40,60,100,40);p.strokeWeight(1);
    p.line(nodes[0].x,nodes[0].y,nodes[1].x,nodes[1].y);
    p.line(nodes[1].x,nodes[1].y,nodes[2].x,nodes[2].y);
    for(let f of flows){
      f.t+=f.sp;if(f.t>=1){f.t=0;}
      let s=nodes[f.from],t=nodes[f.from==1?2:1];
      let x=p.lerp(s.x,t.x,f.t),y=p.lerp(s.y,t.y,f.t);
      let col=f.from==0?[0,200,255]:[80,220,120];
      p.noStroke();p.fill(col[0],col[1],col[2],100+40*p.sin(time*3+f.t*10));p.circle(x,y,3);
    }
    for(let n of nodes){
      let ps=1+p.sin(time*2+nodes.indexOf(n))*0.1;
      p.noStroke();for(let g=3;g>0;g--){p.fill(n.col[0],n.col[1],n.col[2],6*g);p.circle(n.x,n.y,n.r*2+g*4);}
      p.fill(n.col[0],n.col[1],n.col[2],180);p.circle(n.x,n.y,n.r*ps);
      p.fill(255,255,255,70);p.circle(n.x,n.y,n.r*0.2);
      p.fill(n.col[0],n.col[1],n.col[2],90);p.textSize(7);p.textFont('monospace');p.textAlign(p.CENTER);p.text(n.label,n.x,n.y+n.r+12);
    }
    p.fill(180,180,200,80);p.textSize(8);p.textAlign(p.CENTER);p.text('scan -> parse -> issue',W/2,H-15);
  };
  p.windowResized=function(){let w=document.getElementById('canvas-bridge');W=w.offsetWidth;p.resizeCanvas(W,H);};
},'canvas-bridge');

</script>
{{< /rawhtml >}}
