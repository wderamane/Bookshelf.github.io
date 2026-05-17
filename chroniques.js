// =====================
// EMBERS
// =====================
const ec = document.getElementById('embers');
function spawnEmber() {
  const el = document.createElement('div'); el.className = 'ember';
  const s=Math.random()*3.5+1.2, x=Math.random()*100, dx=(Math.random()-.5)*70,
        dur=Math.random()*6+5, del=Math.random()*4, pink=Math.random()>.5;
  el.style.cssText=`width:${s}px;height:${s}px;left:${x}%;bottom:-10px;--dx:${dx}px;
    background:radial-gradient(circle,${pink?'rgba(224,64,251,0.85)':'rgba(168,85,247,0.85)'},transparent 70%);
    animation-duration:${dur}s;animation-delay:${del}s;
    box-shadow:0 0 ${s*2}px ${pink?'rgba(224,64,251,0.5)':'rgba(168,85,247,0.5)'};`;
  ec.appendChild(el);
  setTimeout(() => el.remove(), (dur+del)*1000);
}
for (let i=0; i<16; i++) spawnEmber();
setInterval(spawnEmber, 620);

// =====================
// TABS
// =====================
function switchTab(name) {
  document.querySelectorAll('.tab').forEach((t,i) =>
    t.classList.toggle('active', ['fiches','liste','timeline'][i] === name)
  );
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + name).classList.add('active');
}

// =====================
// HELPERS AVATAR
// =====================
function renderAvatar(c, size) {
  const src = c.imgIcon;
  if (!src) return c.emoji;
  const styles = {
    card: 'width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;',
    list: 'width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;',
  };
  return `<img src="${src}" alt="${c.name}" style="${styles[size]}"
    onerror="this.style.display='none';this.parentElement.textContent='${c.emoji}'">`;
}

// =====================
// CHARACTERS DATA
// =====================
const chars = [
  {
    emoji:'🔥', element:'🔥',
    bg:'linear-gradient(160deg,#3a0505 0%,#1a0202 50%,#090101 100%)',
    glow:'rgba(255,80,80,0.55)', cardGlow:'rgba(255,80,80,0.25)',
    name:'Hinoka', role:'Déesse du Feu', faction:'Divinité Primordiale', factionClass:'faction-order',
    classe:'Divinité Élémentaire', race:'Entité Divine', alignement:'Chaotique Neutre', niveau:'∞',
    status:'Disparue', statusClass:'status-unknown',
    quote:'"Les flammes détruisent, mais elles forgent aussi les empires."',
    desc:"Hinoka est la Déesse du Feu et des passions ardentes. Créatrice des terres volcaniques du sud, elle insuffla aux peuples la force, l'ambition et la guerre.",
    infos:[
      {l:'Origine',v:'Premier Feu'},
      {l:'Affinité',v:'Flamme Primordiale'},
      {l:'Statut',v:'Disparue'},
      {l:'Titre',v:'Reine Ardente'}
    ]
  },

  {
    emoji:'🌊', element:'💧',
    bg:'linear-gradient(160deg,#041a35 0%,#020d20 50%,#010712 100%)',
    glow:'rgba(80,140,255,0.5)', cardGlow:'rgba(80,140,255,0.2)',
    name:'Mireon', role:'Dieu des Océans', faction:'Divinité Primordiale', factionClass:'faction-void',
    classe:'Divinité Élémentaire', race:'Entité Divine', alignement:'Neutre', niveau:'∞',
    status:'Disparu', statusClass:'status-unknown',
    quote:'"Toute chose retourne à l\u2019océan."',
    desc:'Mireon façonna les mers et les rivières de Shūrenga. Il est considéré comme le gardien des profondeurs et du savoir oublié.',
    infos:[
      {l:'Origine',v:'Océan Primordial'},
      {l:'Affinité',v:'Eau Sacrée'},
      {l:'Statut',v:'Disparu'},
      {l:'Titre',v:'Souverain des Abysses'}
    ]
  },

  {
    emoji:'⛰', element:'🌍',
    bg:'linear-gradient(160deg,#1d1405 0%,#120d02 50%,#0b0701 100%)',
    glow:'rgba(210,170,90,0.45)', cardGlow:'rgba(210,170,90,0.2)',
    name:'Tianzu', role:'Dieu de la Terre', faction:'Divinité Primordiale', factionClass:'faction-neutral',
    classe:'Divinité Élémentaire', race:'Entité Divine', alignement:'Loyal Neutre', niveau:'∞',
    status:'Disparu', statusClass:'status-unknown',
    quote:'"Les montagnes survivent à tous les royaumes."',
    desc:"Tianzu érigea les montagnes, les forêts anciennes et les plaines infinies. Il représente la stabilité, la mémoire et l'équilibre.",
    infos:[
      {l:'Origine',v:'Pierre Originelle'},
      {l:'Affinité',v:'Terre Divine'},
      {l:'Statut',v:'Disparu'},
      {l:'Titre',v:'Gardien des Montagnes'}
    ]
  },

  {
    emoji:'🌪', element:'💨',
    bg:'linear-gradient(160deg,#14052d 0%,#090118 50%,#04010c 100%)',
    glow:'rgba(180,120,255,0.45)', cardGlow:'rgba(180,120,255,0.2)',
    name:'Ayaluun', role:'Déesse des Cieux', faction:'Divinité Primordiale', factionClass:'faction-order',
    classe:'Divinité Élémentaire', race:'Entité Divine', alignement:'Chaotique Bon', niveau:'∞',
    status:'Disparue', statusClass:'status-unknown',
    quote:'"Même les étoiles obéissent au vent."',
    desc:'Ayaluun régna sur les vents, les tempêtes et les cieux éternels. Elle enseigna la liberté et le voyage aux peuples du monde.',
    infos:[
      {l:'Origine',v:'Premier Souffle'},
      {l:'Affinité',v:'Air Divin'},
      {l:'Statut',v:'Disparue'},
      {l:'Titre',v:'Impératrice des Cieux'}
    ]
  },

  {
    emoji:'🌑', element:'🖤',
    bg:'linear-gradient(160deg,#050505 0%,#110016 50%,#020202 100%)',
    glow:'rgba(180,0,255,0.55)', cardGlow:'rgba(180,0,255,0.25)',
    name:'Noctyra', role:"Déesse de l'Ombre", faction:'Divinité Primordiale', factionClass:'faction-shadow',
    classe:'Divinité Élémentaire', race:'Entité Divine', alignement:'Neutre Absolu', niveau:'∞',
    status:'Disparue', statusClass:'status-unknown',
    quote:'"L\u2019ombre n\u2019est pas le mal. Elle est la vérité cachée."',
    desc:"Noctyra est la plus mystérieuse des divinités. Déesse de l'ombre, des secrets et du Void, elle désirait offrir davantage de pouvoir aux mortels.",
    infos:[
      {l:'Origine',v:'Néant Originel'},
      {l:'Affinité',v:'Ombre Primordiale'},
      {l:'Statut',v:'Disparue'},
      {l:'Titre',v:'Souveraine du Void'}
    ]
  }
];

// =====================
// BUILD GRID & LIST
// =====================
const grid = document.getElementById('charGrid');
const list = document.getElementById('charList');

chars.forEach((c, i) => {
  grid.innerHTML += `
    <div class="char-card" onclick="openModal(${i})" style="--card-glow:${c.cardGlow}">
      <div class="card-icon-wrap">
        <div class="card-icon" style="background:${c.bg};--card-glow:${c.cardGlow};overflow:hidden;">${renderAvatar(c,'card')}</div>
      </div>
      <div class="card-body">
        <div class="card-name">${c.name}</div>
        <div class="card-role">${c.role}</div>
        <div class="card-faction ${c.factionClass}">${c.faction}</div>
      </div>
    </div>`;
  list.innerHTML += `
    <div class="char-list-item" onclick="openModal(${i})">
      <div class="list-avatar" style="background:${c.bg};overflow:hidden;">${renderAvatar(c,'list')}</div>
      <div>
        <div class="list-name">${c.name}</div>
        <div class="list-role">${c.role} · ${c.faction}</div>
      </div>
      <div class="list-status ${c.statusClass}">${c.status}</div>
    </div>`;
});

// =====================
// MODAL STATE
// =====================
let curChar = null;

// =====================
// BUILD RIGHT PANEL — Profil uniquement
// =====================
function buildRight(c) {
  document.getElementById('gRight').innerHTML = `
    <div class="g-section active">
      <div class="g-section-title">Histoire</div>
      <p class="g-desc">${c.desc}</p>
      <div class="g-section-title" style="margin-top:1.2rem;">Informations</div>
      <div class="g-infos">
        ${c.infos.map(inf => `
          <div class="g-info">
            <div class="g-info-label">${inf.l}</div>
            <div class="g-info-val">${inf.v}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

// =====================
// SWITCH NAV SECTION (gardé pour compatibilité, ne fait que rafraîchir)
// =====================
function switchSection(el, section) {
  document.querySelectorAll('.g-nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
  if (curChar !== null) buildRight(chars[curChar]);
}

// =====================
// OPEN / CLOSE MODAL
// =====================
function openModal(i) {
  curChar = i;
  const c = chars[i];

  document.querySelectorAll('.g-nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('.g-nav-item').classList.add('active');

  const navIcon = document.getElementById('gNavIcon');
  navIcon.style.cssText = `background:${c.bg};overflow:hidden;`;
  navIcon.innerHTML = c.imgIcon
    ? `<img src="${c.imgIcon}" alt="${c.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;"
        onerror="this.style.display='none';this.parentElement.textContent='${c.emoji}'">`
    : c.emoji;

  document.getElementById('gNavName').textContent = c.name;
  document.getElementById('gNavSub').textContent = c.role;

  document.getElementById('gBg').style.background = c.bg;
  document.getElementById('gGlow').style.background = c.glow;

  if (c.imgArt) {
    document.getElementById('gArt').innerHTML = `
      <img src="${c.imgArt}" alt="${c.name}"
        style="width:70%;height:70%;object-fit:contain;object-position:center bottom;display:block;border-radius:0;"
        onerror="this.outerHTML='<div class=\\'g-art-emoji\\'>${c.emoji}</div><div class=\\'g-art-name\\'>${c.name}</div><div class=\\'g-art-role\\'>${c.role}</div><div class=\\'g-art-badge ${c.factionClass}\\'>${c.faction} · ${c.element}</div>'">`;
  } else {
    document.getElementById('gArt').innerHTML = `
      <div class="g-art-emoji">${c.emoji}</div>
      <div class="g-art-name">${c.name}</div>
      <div class="g-art-role">${c.role}</div>
      <div class="g-art-badge ${c.factionClass}">${c.faction} · ${c.element}</div>`;
  }

  document.getElementById('gQuote').textContent = c.quote;

  buildRight(c);

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  curChar = null;
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});