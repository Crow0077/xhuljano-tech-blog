import { readFileSync, writeFileSync } from 'node:fs';
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
// Three docked bays share a mechanical selector rail. It represents a chosen
// processing destination, not a physical network cable or a live job queue.
const bus=pl(-164,45,328,9,2);

body.push(slab(pl(-164,39,328,21,2),0,1,'lo'));
body.push(slab(bus,1,3,'mid'));
for(const x of [-118,0,118]){
  body.push(slab(pl(x-6,19,12,20,1),2,2,'mid'));
  body.push(slab(pl(x-9,39,18,17,2),4,2,'lo'));
  body.push(puck(x,48,4.5,6,1,'mid'));
  body.push(l(k.ring(x,48,3.4,7,P,24),{tone:'lo'}));
}
for(const x of [-155,155])body.push(slab(pl(x-3,38,6,22,1),4,7,'mid'));
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
    // Front panel: a recessed cartridge, two captive screws and short intake slots.
    const face=pl(x-width/2+7,-33+depth-7,width-14,4,1);
    o.push(slab(face,z+3,3,'lo',.2));
    for(const dx of [-width/2+11,width/2-11])o.push(pts([[x+dx,-33+depth-5,z+6.2]],'hi',.45));
    for(let slot=0;slot<4;slot++){
      const grille=pl(x-width/2+14+slot*6,-33+depth-4,3,1.8,.5);
      o.push(slab(grille,z+height-2,.3,'mid',.1));
    }
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
const live=readFileSync(resolve(HERE,'live.js'),'utf8').replace('__PROJECTION__',JSON.stringify(P));
const plate=k.plateHtml({fig:'Lab',title:'Three nodes · paths',hint:'SELECT A BAY',readout:'Node A · Control',keys:[{mark:'lit',label:'Selected machine or step in the walkthrough.'},{mark:'raised',label:'The rail represents a chosen destination, not a cable or live job.'}],caption:'Architecture walkthrough only. The steps are illustrative—not live status, network traffic, uptime or proof of a completed job.',body:`<div class="iso-stage">${svg}</div>`});
let html=k.pageHtml({title:'Homelab architecture — three machines',theme:'dark',body:plate+`<section class="lab-console" aria-label="Explore the homelab"><div class="console-row"><span class="console-label">Machines</span><nav class="routes" aria-label="Inspect machine"><button type="button" data-route="0">Node A</button><button type="button" data-route="1">Node B</button><button type="button" data-route="2">Pavilion</button></nav></div><div class="console-row"><span class="console-label">Walkthroughs</span><nav class="routes" aria-label="Choose example path"><button type="button" data-flow="0">Local model task</button><button type="button" data-flow="1">Backup verification</button></nav></div><div class="trail" data-trail aria-label="Walkthrough steps"></div><div class="step-controls" data-step-controls hidden><button type="button" data-back>Previous</button><button type="button" data-play aria-pressed="false">Play</button><button type="button" data-next>Next</button><span class="step-hint">← / → to step</span></div><div class="route-detail" aria-live="polite" aria-atomic="true"><strong data-detail-title>Node A / Control</strong><p data-detail></p></div></section>`,script:kitScript()+live,width:950});
html=html.replace('</head>',`<style>
/* Hallmark · pre-emit: P5 H4 E4 S5 R4 V4 */
:root{--lab-ink:oklch(93% .012 230);--lab-muted:oklch(74% .015 230);--lab-rule:oklch(39% .025 220);--lab-focus:oklch(78% .11 185);--lab-card:oklch(18% .015 235);--lab-metal:oklch(64% .016 225);--lab-line:oklch(48% .014 225);--lab-faint:oklch(34% .013 225);--lab-surface:oklch(22% .017 230)}
html,body{overflow-x:clip}body{background:var(--lab-card);color:var(--lab-ink)}
.iso{--anatomy-mid:var(--lab-metal);--anatomy-lo:var(--lab-line);--anatomy-faint:var(--lab-faint);--anatomy-card:var(--lab-card);--anatomy-paper:var(--lab-card)}
.iso-page{padding:12px 14px 16px;max-width:950px;margin:auto}.iso-figure{max-width:none}.iso-plate{background:var(--lab-card)}.iso-plate-corner[data-corner=title],.iso-plate-corner[data-corner=hint]{color:var(--lab-muted)}
.lab-console{padding:10px 0 0;font:14px/1.5 system-ui,sans-serif;color:var(--lab-ink)}
.console-row{display:grid;grid-template-columns:105px minmax(0,1fr);gap:10px;align-items:center;margin-bottom:9px}
.console-label{font:600 10px/1.4 ui-monospace,monospace;letter-spacing:.08em;text-transform:uppercase;color:var(--lab-muted)}
.routes,.trail,.step-controls{display:flex;gap:7px;flex-wrap:wrap;align-items:center}.routes button,.trail button,.step-controls button{font:600 12px/1.2 system-ui,sans-serif;white-space:nowrap;color:var(--lab-muted);background:transparent;border:1px solid var(--lab-rule);border-radius:3px;min-height:35px;padding:8px 11px;cursor:pointer;transition:color .15s,background .15s,transform .15s}
.routes button:hover,.trail button:hover,.step-controls button:hover:not(:disabled){color:var(--lab-ink);background:var(--lab-surface)}.routes button[aria-pressed=true],.trail button[aria-current=step]{color:var(--lab-ink);border-color:var(--lab-focus);background:var(--lab-surface)}
.routes button:focus-visible,.trail button:focus-visible,.step-controls button:focus-visible,.node:focus-visible{outline:2px solid var(--lab-focus);outline-offset:3px}
.step-controls[hidden]{display:none}.step-controls button:disabled{opacity:.35;cursor:not-allowed}.step-hint{font:11px/1.3 ui-monospace,monospace;color:var(--lab-muted);margin-left:auto}
.trail{min-height:0;margin:5px 0 0 115px}.trail:not(:empty){padding:6px 0 8px}.trail button{border:0;border-bottom:1px solid var(--lab-rule);padding:7px 3px;border-radius:0}
.step-controls{margin:0 0 7px 115px}.route-detail{border-top:1px solid var(--lab-rule);padding:10px 0 0;margin-top:10px;min-height:65px}.route-detail strong{display:block;font:600 13px/1.4 system-ui,sans-serif;color:var(--lab-ink)}.route-detail p{font:12px/1.5 system-ui,sans-serif;color:var(--lab-muted);margin:4px 0 0;max-width:65ch}
.node{cursor:pointer;transition:opacity .18s}.node[data-active=false]{opacity:.48}.node[data-active=true]{opacity:1}
@media(max-width:480px){.iso-page{padding:8px}.console-row{grid-template-columns:minmax(0,1fr);gap:4px}.routes{gap:5px}.routes button,.trail button,.step-controls button{font-size:11px;padding:7px 8px;min-height:32px}.trail,.step-controls{margin-left:0}.step-hint{display:none}.route-detail p{font-size:11px}}
@media(prefers-reduced-motion:reduce){.node,.routes button,.trail button,.step-controls button{transition:none!important}}
</style></head>`);
writeFileSync(OUT,html);
console.log('built',OUT,'physical solids',parts,'bytes',Buffer.byteLength(html));
