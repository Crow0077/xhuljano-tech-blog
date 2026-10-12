import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as k from './kit/iso-kit.mjs';
import { kitScript } from './scripts/inline-kit.mjs';

const HERE=dirname(fileURLToPath(import.meta.url));
const OUT=resolve(HERE,'../../static/lab-machine/index.html');
const W=800,H=460;
const base={x:-186,y:-82,w:372,d:165,r:9};
const P=k.fitProjection([...k.boxCorners(base,-19,0),[-120,0,105],[120,0,105]],W,H,{pad:36,azimuth:44,elevation:34});
const s=(p,o={})=>k.solidSvg(p,o),l=(d,o={})=>k.lineSvg(d,o),d=(pts,o={})=>k.dotsSvg(pts,o);
const at=(x,y,z)=>k.iso([x,y,z],P),pl=(x,y,w,dep,r=2)=>({x,y,w,d:dep,r});
let parts=0;
const slab=(q,z,h,t='mid',bev=.6)=>{parts++;return s(k.slabOf(q,z,h,P,5,bev),{tone:t});};
const puck=(x,y,r,z,h,t='mid')=>{parts++;return s(k.cylinder(x,y,r,z,h,P,36,.4),{tone:t});};
const pts=(arr,t='mid',size=.5)=>d(arr.map(v=>at(...v)),{tone:t,size});
const body=[`<path class="iso-halo" d="${k.haloOf(base,-19,12,P)}"/>`];
for(const [x,y] of k.corners(base,23).sort((a,b)=>k.depthOf([a[0],a[1],0],P)-k.depthOf([b[0],b[1],0],P))){body.push(puck(x,y,8,-19,2,'lo'),puck(x,y,5.5,-17,5,'mid'));}
body.push(slab(base,-12,12,'mid',1.5));
body.push(l(k.planOutline(k.insetPlan(base,5),0,P),{tone:'lo'}));
for(const [x,y] of k.corners(base,12))body.push(puck(x,y,2,0,1,'hi'));
const bus=pl(-164,45,328,9,2);
body.push(slab(bus,0,2,'lo'));
for(const x of [-118,0,118])body.push(slab(pl(x-6,19,12,32,1),2,2,'mid'));
const ticks=k.topTicks(-155,155,8,5,45.6,2,[2,4.5],P);
body.push(l(ticks.minor,{tone:'lo'}),l(ticks.major,{tone:'mid'}));
for(const x of [-155,-5,145]){
  const socket=pl(x-8,37,16,11,2);
  body.push(slab(socket,2,3,'mid'),pts([[x,42.5,5]],'hi',.8));
}
const xs=[-118,0,118];
const tower=(x,i)=>{
  const o=[];const floor=pl(x-41,-47,82,76,5);
  o.push(slab(floor,0,7,'lo',.8));
  o.push(l(k.planOutline(k.insetPlan(floor,3),7,P),{tone:'faint'}));
  for(const a of [-31,31]) for(const b of [-36,20])o.push(puck(x+a,b,2.7,7,2,'hi'));
  const levels=i===1?2:i===2?4:3;
  const step=i===1?33:i===2?18:24;
  const height=i===1?28:i===2?14:19;
  const width=i===1?76:i===2?54:64;
  const depth=i===1?67:i===2?52:59;
  for(let level=0;level<levels;level++){
    const z=9+level*step;
    const chassis=pl(x-width/2,-37,width,depth,3);
    o.push(slab(chassis,z,height,level===1?'hi':'mid',.7));
    o.push(l(k.sideSeam(chassis,z+height-4,P,5),{tone:'faint'}));
    const vent=pl(x-width/2+9,-33+depth-14,width-18,7,1.5);
    o.push(slab(vent,z+height,.5,'lo',.1));
    o.push(pts([[-13,0],[0,0],[13,0]].map(([dx])=>[x+dx,-33+depth-10,z+height+.5]),'mid',.7));
    o.push(puck(x+width/2-9,-33+depth-10,2.5,z+height,.8,'hi'));
  }
  if(i===1){
    for(const xoff of [-16,16]){
      o.push(puck(x+xoff,-10,13,70,4,'mid'));
      o.push(l(k.ring(x+xoff,-10,9,74,P,36),{tone:'lo'}));
      o.push(pts([[x+xoff,-10,74]],'hi',.9));
    }
  }else if(i===2){
    for(const xoff of [-17,0,17])o.push(puck(x+xoff,-16,7,81,3,'mid'));
  }else{
    o.push(slab(pl(x-25,-28,50,38,3),76,5,'hi'));
    o.push(puck(x,-9,8,81,3,'mid'));
    o.push(l(k.ring(x,-9,5.5,84,P,28),{tone:'lo'}));
  }
  return `<g class="node" data-node="${i}" tabindex="0" role="button" aria-label="Inspect ${['Node A controller','Node B GPU workstation','Pavilion backup server'][i]}">${o.join('')}</g>`;
};
xs.forEach((x,i)=>body.push(tower(x,i)));
// Routing carriage rests on the shared rail and slides to the selected bay.
const carriage=pl(-13,43,26,13,3);
const carriageArt=slab(carriage,5,5,'hi',.6)+puck(0,49,5,10,2,'hi')+pts([[0,49,12]],'lit',1.2);
body.push(`<g data-carriage transform="${k.translateAlong(P,[-118,0,0])}">${carriageArt}</g>`);
const svg=k.figureSvg({width:W,height:H,label:'An isometric three-node homelab: Node A runs the Hermes controller, Node B has the GPU workload bay, and Pavilion is the backup and service bay. A carriage travels the shared rail to the selected node. This is an architectural model, not live telemetry.',body});
const live=`
const nodes=[...document.querySelectorAll('[data-node]')];
const carriage=document.querySelector('[data-carriage]');
const text=document.querySelector('[data-readout]');
const buttons=[...document.querySelectorAll('[data-route]')];
const details=document.querySelector('[data-detail]');
const tabs=[
 {x:-118,read:'NODE A · direction + verification',detail:'Daily workstation and Hermes gateway. The agent researches, changes files, runs checks, and reports evidence back for human review.'},
 {x:0,read:'NODE B · local models + creative GPU',detail:'RTX 4080 Super workstation. Local inference, image/video experiments, and rendering happen here when the machine and GPU lane are available.'},
 {x:118,read:'PAVILION · services + backup',detail:'Separate always-on service box and backup destination. Keeps durable infrastructure distinct from the workstation and GPU workloads.'}
];
let current=0,position=-118,active=true,frame=0,last=0;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
function paint(){carriage.setAttribute('transform',translateAlong(${JSON.stringify(P)},[position,0,0]));}
function tick(now){frame=0;if(!active)return;let dt=last?Math.min((now-last)/1000,1/30):1/60;last=now;
 const target=tabs[current].x;position=reduced.matches?target:position+(target-position)*(1-Math.exp(-dt/.27));
 if(Math.abs(position-target)<.02)position=target;
 paint();if(position!==target)frame=requestAnimationFrame(tick);
}
function select(i){current=i;nodes.forEach((n,j)=>{n.dataset.active=String(j===i);n.setAttribute('aria-pressed',String(j===i));});
 buttons.forEach((b,j)=>{b.setAttribute('aria-pressed',String(j===i));});
 text.textContent=tabs[i].read;details.textContent=tabs[i].detail;last=0;if(!frame&&active)frame=requestAnimationFrame(tick);
}
buttons.forEach((b,i)=>b.addEventListener('click',()=>select(i)));
nodes.forEach((n,i)=>{n.addEventListener('click',()=>select(i));n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(i);}});});
new IntersectionObserver(e=>{active=e.at(-1).isIntersecting;if(active&&!frame)frame=requestAnimationFrame(tick);},{rootMargin:'120px'}).observe(document.querySelector('.iso-stage'));
select(0);
`;
const plate=k.plateHtml({fig:'System 01',title:'One operator · three machines',hint:'SELECT A NODE BELOW',readout:'NODE A · direction + verification',keys:[{mark:'lit',label:'Hermes routes work; the human sets the goal and reviews results.'},{mark:'raised',label:'Different machines have different jobs—not three identical agent clones.'}],caption:'An interactive architectural model, not a live status display. No private workloads or telemetry are sent to this public page.',body:`<div class="iso-stage">${svg}</div>`});
let html=k.pageHtml({title:'The agent-directed homelab — interactive architecture',theme:'dark',body:plate+`<nav class="routes" aria-label="Inspect homelab node"><button type="button" data-route="0">01 / Node A</button><button type="button" data-route="1">02 / Node B</button><button type="button" data-route="2">03 / Pavilion</button></nav><p class="route-detail" data-detail aria-live="polite"></p>`,script:kitScript()+live,width:950});
html=html.replace('</head>',`<style>
:root{--lab-ink:oklch(93% .012 230);--lab-muted:oklch(73% .015 230);--lab-rule:oklch(39% .025 220);--lab-focus:oklch(78% .11 185);--lab-card:oklch(18% .015 235);--lab-metal:oklch(64% .016 225);--lab-line:oklch(48% .014 225);--lab-faint:oklch(34% .013 225)}
html,body{overflow-x:clip}body{background:var(--lab-card);color:var(--lab-ink)}
.iso{--anatomy-mid:var(--lab-metal);--anatomy-lo:var(--lab-line);--anatomy-faint:var(--lab-faint);--anatomy-card:var(--lab-card);--anatomy-paper:var(--lab-card)}
.iso-page{padding:16px 14px 20px;max-width:950px;margin:auto}.iso-figure{max-width:none}.iso-plate{background:var(--lab-card)}
.routes{display:flex;gap:8px;padding:16px 0 4px;flex-wrap:wrap}.routes button{font:600 12px/1.3 system-ui,sans-serif;letter-spacing:.045em;white-space:nowrap;color:var(--lab-muted);background:transparent;border:1px solid var(--lab-rule);border-radius:7px;padding:11px 15px;cursor:pointer;transition:transform .16s,opacity .16s}
.routes button:hover{color:var(--lab-ink);transform:translateY(-2px)}.routes button[aria-pressed=true]{color:var(--lab-ink);border-color:var(--lab-focus)}.routes button:focus-visible,.node:focus-visible{outline:2px solid var(--lab-focus);outline-offset:3px}.node{cursor:pointer;transition:opacity .24s}.node[data-active=false]{opacity:.68}.route-detail{font:14px/1.55 system-ui,sans-serif;color:var(--lab-muted);min-height:3em;margin:10px 0 0;max-width:680px}
@media(max-width:480px){.iso-page{padding:10px}.routes{gap:5px}.routes button{font-size:11px;padding:9px 10px}.route-detail{font-size:12px}}
@media(prefers-reduced-motion:reduce){.routes button,.node{transition:none!important}}
</style></head>`);
writeFileSync(OUT,html);
console.log('built',OUT,'physical solids',parts,'bytes',Buffer.byteLength(html));
