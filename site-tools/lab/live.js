// This is a deterministic, user-stepped architecture walkthrough. No requests,
// live telemetry, fabricated job events, or hidden background traffic.
const projection = __PROJECTION__;
const bays = [
  { x: -118, name: 'Node A', role: 'Control', fact: 'Daily workstation and Hermes gateway. Agent work starts here; changes and checks return here for review.' },
  { x: 0, name: 'Node B', role: 'Compute', fact: 'RTX 4080 Super workstation. A local inference and creative workload lane when the machine is available.' },
  { x: 118, name: 'Pavilion', role: 'Services', fact: 'Separate service and backup host. Persistent services and backup storage stay off the daily workstation.' }
];
const paths = [
  { name: 'Local model task', steps: [
    { bay: 0, title: 'Set the task', detail: 'A task is scoped at Node A. The GPU route is a choice, not a claim that every request uses local inference.' },
    { bay: 1, title: 'Use the GPU lane', detail: 'When Node B is available, it can run a local model or a creative workload. This is a possible route, not an observed job.' },
    { bay: 0, title: 'Review the result', detail: 'The result returns to Node A for inspection and a concrete check before it is reported or kept.' }
  ] },
  { name: 'Backup verification', steps: [
    { bay: 0, title: 'Start at the controller', detail: 'Node A initiates a bounded backup or restore check.' },
    { bay: 2, title: 'Use durable storage', detail: 'Pavilion is the separate destination for backed-up data and long-running services.' },
    { bay: 0, title: 'Read back evidence', detail: 'A report on Node A should use a readback or restore test; a green animation is not proof of a backup.' }
  ] }
];
const nodes = [...document.querySelectorAll('[data-node]')];
const carriage = document.querySelector('[data-carriage]');
const readout = document.querySelector('[data-readout]');
const nodeButtons = [...document.querySelectorAll('[data-route]')];
const flowButtons = [...document.querySelectorAll('[data-flow]')];
const title = document.querySelector('[data-detail-title]');
const detail = document.querySelector('[data-detail]');
const trail = document.querySelector('[data-trail]');
const controls = document.querySelector('[data-step-controls]');
const back = document.querySelector('[data-back]');
const next = document.querySelector('[data-next]');
const play = document.querySelector('[data-play]');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let chosen = 0, path = -1, step = 0, position = bays[0].x;
let frame = 0, last = 0, visible = true, timer = 0;
function stop() { if (timer) clearTimeout(timer); timer = 0; play.textContent = 'Play'; play.setAttribute('aria-pressed', 'false'); }
function paint() { carriage.setAttribute('transform', translateAlong(projection, [position, 0, 0])); }
function animate(now) {
  frame = 0;
  if (!visible) return;
  const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
  last = now;
  const target = bays[chosen].x;
  position = reduced.matches ? target : position + (target - position) * (1 - Math.exp(-dt / .28));
  if (Math.abs(position - target) < .02) position = target;
  paint();
  if (position !== target) frame = requestAnimationFrame(animate);
}
function move() { last = 0; if (!frame && visible) frame = requestAnimationFrame(animate); }
function render() {
  const tracing = path >= 0;
  const scene = tracing ? paths[path].steps[step] : null;
  chosen = tracing ? scene.bay : chosen;
  nodes.forEach((node, index) => {
    node.dataset.active = String(index === chosen);
    node.setAttribute('aria-pressed', String(index === chosen));
  });
  nodeButtons.forEach((button, index) => button.setAttribute('aria-pressed', String(!tracing && index === chosen)));
  flowButtons.forEach((button, index) => button.setAttribute('aria-pressed', String(tracing && index === path)));
  controls.hidden = !tracing;
  play.disabled = reduced.matches;
  play.title = reduced.matches ? 'Automatic playback is off with reduced motion; use Next and Previous.' : '';
  trail.replaceChildren();
  if (tracing) {
    paths[path].steps.forEach((part, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'trail-step';
      button.textContent = `${String(index + 1).padStart(2, '0')}  ${bays[part.bay].name}`;
      button.setAttribute('aria-label', `Step ${index + 1}: ${part.title} on ${bays[part.bay].name}`);
      button.setAttribute('aria-current', String(index === step ? 'step' : 'false'));
      button.addEventListener('click', () => setStep(index));
      trail.append(button);
    });
    back.disabled = step === 0;
    next.disabled = step === paths[path].steps.length - 1;
    readout.textContent = `${paths[path].name} · ${step + 1}/${paths[path].steps.length}`;
    title.textContent = scene.title;
    detail.textContent = scene.detail;
  } else {
    readout.textContent = `${bays[chosen].name} · ${bays[chosen].role}`;
    title.textContent = `${bays[chosen].name} / ${bays[chosen].role}`;
    detail.textContent = bays[chosen].fact;
  }
  move();
}
function selectBay(index) { stop(); path = -1; chosen = index; render(); }
function setPath(index) { stop(); path = index; step = 0; render(); }
function setStep(index) {
  if (path < 0 || index < 0 || index >= paths[path].steps.length) return;
  step = index;
  render();
  if (timer) schedule();
}
function schedule() {
  if (timer) clearTimeout(timer);
  if (path < 0 || step === paths[path].steps.length - 1 || !visible || reduced.matches) { stop(); return; }
  timer = setTimeout(() => {
    timer = 0;
    step++;
    render();
    if (step === paths[path].steps.length - 1) stop();
    else schedule();
  }, 1600);
}
nodeButtons.forEach((button, index) => button.addEventListener('click', () => selectBay(index)));
nodes.forEach((node, index) => {
  node.addEventListener('click', () => selectBay(index));
  node.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectBay(index); }
  });
});
flowButtons.forEach((button, index) => button.addEventListener('click', () => setPath(index)));
back.addEventListener('click', () => setStep(step - 1));
next.addEventListener('click', () => setStep(step + 1));
play.addEventListener('click', () => {
  if (timer) { stop(); return; }
  if (path < 0 || reduced.matches) return;
  if (step === paths[path].steps.length - 1) step = 0;
  render();
  play.textContent = 'Pause';
  play.setAttribute('aria-pressed', 'true');
  schedule();
});
controls.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault(); setStep(step + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
new IntersectionObserver(entries => {
  visible = entries[entries.length - 1].isIntersecting;
  if (!visible) { stop(); if (frame) cancelAnimationFrame(frame); frame = 0; }
  else move();
}, { rootMargin: '120px 0px' }).observe(document.querySelector('.iso-stage'));
reduced.addEventListener('change', () => { stop(); move(); });
render();
