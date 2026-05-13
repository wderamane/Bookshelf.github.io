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
// STAT BAR COLOR PALETTE
// =====================
const BAR_VIOLET  = 'linear-gradient(to right,#4c1d95,#a855f7)';
const BAR_PINK    = 'linear-gradient(to right,#6b21a8,#e040fb)';
const BAR_LILAC   = 'linear-gradient(to right,#5b21b6,#c084fc)';
const BAR_SOFT    = 'linear-gradient(to right,#7c3aed,#d8b4fe)';
const BAR_DEEP    = 'linear-gradient(to right,#2e1065,#7c3aed)';
const BAR_MAGENTA = 'linear-gradient(to right,#831843,#e040fb)';

// =====================
// HELPERS AVATAR
// imgIcon = petite icône ronde (nav gauche + carte + liste)
// imgArt  = grande illustration centrale (modal art zone)
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
// imgIcon : petite image ronde (nav, carte, liste)
// imgArt  : grande illustration pleine hauteur dans la zone centrale de la modal

const chars = [
  {
    emoji:'🔥', element:'🔥',
    bg:'linear-gradient(160deg,#3a0505 0%,#1a0202 50%,#090101 100%)',
    glow:'rgba(255,80,80,0.55)', cardGlow:'rgba(255,80,80,0.25)',
    name:'Hinoka', role:'Déesse du Feu', faction:'Divinité Primordiale', factionClass:'faction-order',
    classe:'Divinité Élémentaire', race:'Entité Divine', alignement:'Chaotique Neutre', niveau:'∞',
    status:'Disparue', statusClass:'status-unknown',
    quote:'"Les flammes détruisent, mais elles forgent aussi les empires."',
    desc:'Hinoka est la Déesse du Feu et des passions ardentes. Créatrice des terres volcaniques du sud, elle insuffla aux peuples la force, l’ambition et la guerre.',
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
    quote:'"Toute chose retourne à l’océan."',
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
    desc:'Tianzu érigea les montagnes, les forêts anciennes et les plaines infinies. Il représente la stabilité, la mémoire et l’équilibre.',
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
    name:'Noctyra', role:'Déesse de l’Ombre', faction:'Divinité Primordiale', factionClass:'faction-shadow',
    classe:'Divinité Élémentaire', race:'Entité Divine', alignement:'Neutre Absolu', niveau:'∞',
    status:'Disparue', statusClass:'status-unknown',
    quote:'"L’ombre n’est pas le mal. Elle est la vérité cachée."',
    desc:'Noctyra est la plus mystérieuse des divinités. Déesse de l’ombre, des secrets et du Void, elle désirait offrir davantage de pouvoir aux mortels.',
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
let curSection = 'attributes';

// =====================
// BUILD RIGHT PANEL
// =====================
function buildRight(c, section) {

  const sections = {
    attributes: `
      <div class="g-section active">
        <div class="g-section-title">Identité</div>
        <div class="g-identity">
          <span class="g-badge">${c.race}</span>
          <span class="g-badge">${c.alignement}</span>
        </div>
        <div class="g-section-title">Caractéristiques</div>
        <div class="g-abilities">
          ${c.abilities.map(a => `
            <div class="g-ability">
              <div class="g-ability-name">${a.n}</div>
              <div class="g-ability-score">${a.s}</div>
              <div class="g-ability-mod">${a.m}</div>
            </div>`).join('')}
        </div>
      </div>`,

    combat: `
      <div class="g-section active">
        <div class="g-section-title">Compétences</div>
        <div class="g-stat-bars">
          ${c.bars.map(b => `
            <div>
              <div class="g-bar-label"><span>${b.l}</span><span class="g-bar-val">${b.v}</span></div>
              <div class="g-bar-track"><div class="g-bar-fill" data-val="${b.v}" style="background:${b.c}"></div></div>
            </div>`).join('')}
        </div>
      </div>`,

    powers: `
      <div class="g-section active">
        <div class="g-section-title">Capacités spéciales</div>
        <div class="g-powers">
          ${c.powers.map(p => `
            <div class="g-power">
              <span class="g-power-icon">${p.i}</span>
              <div>
                <div class="g-power-name">${p.n}</div>
                <div class="g-power-desc">${p.d}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>`,

    profile: `
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
      </div>`
  };

  document.getElementById('gRight').innerHTML = sections[section] || sections['attributes'];

  setTimeout(() => {
    document.querySelectorAll('.g-bar-fill').forEach(el => { el.style.width = el.dataset.val + '%'; });
    document.querySelectorAll('.g-hp-fill').forEach(el => { el.style.width = el.dataset.pct + '%'; });
  }, 80);
}

// =====================
// SWITCH NAV SECTION
// =====================
function switchSection(el, section) {
  curSection = section;
  document.querySelectorAll('.g-nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
  if (curChar !== null) buildRight(chars[curChar], section);
}

// =====================
// OPEN / CLOSE MODAL
// =====================
function openModal(i) {
  curChar = i;
  curSection = 'attributes';
  const c = chars[i];

  document.querySelectorAll('.g-nav-item').forEach((n, idx) => n.classList.toggle('active', idx === 0));

  // Nav icon (haut gauche) : utilise imgIcon, sinon emoji
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

  // Zone centrale : si imgArt → grande image pleine hauteur, sans texte
  // Sinon → affichage classique emoji + nom + rôle + badge
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

  buildRight(c, 'attributes');

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