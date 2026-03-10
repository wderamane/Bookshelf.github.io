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
// HELPER : rendu avatar (image ou emoji fallback)
// Pour ajouter une image, ajoute img:'URL' dans les données du perso.
// =====================
function renderAvatar(c, size) {
  if (!c.img) return c.emoji;
  const styles = {
    card: 'width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;',
    list: 'width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;',
    modal:'width:130px;height:130px;border-radius:50%;object-fit:cover;border:3px solid rgba(168,85,247,0.7);box-shadow:0 0 32px rgba(168,85,247,0.5);display:block;'
  };
  return `<img src="${c.img}" alt="${c.name}" style="${styles[size]}"
    onerror="this.style.display='none';this.parentElement.textContent='${c.emoji}'">`;
}

// =====================
// CHARACTERS DATA
// =====================
const chars = [
  {
    emoji:'⚔', element:'🔥',
    // img: 'https://ton-url.com/kael.jpg',
    bg:'linear-gradient(160deg,#1a0530 0%,#0e0220 40%,#08011a 100%)',
    glow:'rgba(168,85,247,0.6)', cardGlow:'rgba(168,85,247,0.3)',
    name:'Kael Vorn', role:'Porteur du Void', faction:'Void', factionClass:'faction-void',
    classe:'Guerrier / Maudit', race:'Humain', alignement:'Neutre Chaotique', niveau:'12',
    status:'Vivant', statusClass:'status-alive',
    quote:'"Le Void ne m\'a pas choisi. Il m\'a absorbé."',
    desc:'Ancien soldat de l\'Ordre, Kael fut marqué par le Void lors d\'une expédition dans les ruines de Vel\'Khan. Ses runes vivantes lui confèrent des pouvoirs incontrôlables qu\'il tente de maîtriser avant qu\'ils ne le consument.',
    hp:{current:78, max:104},
    abilities:[{n:'FOR',s:18,m:'+4'},{n:'DEX',s:14,m:'+2'},{n:'CON',s:16,m:'+3'},{n:'INT',s:10,m:'+0'},{n:'SAG',s:11,m:'+0'},{n:'CHA',s:13,m:'+1'}],
    bars:[{l:'Combat',v:88,c:BAR_PINK},{l:'Magie Voïdale',v:72,c:BAR_VIOLET},{l:'Endurance',v:80,c:BAR_LILAC},{l:'Instinct',v:60,c:BAR_SOFT}],
    powers:[
      {i:'🌑',n:'Fissure du Void',d:'Ouvre une brèche temporaire. 3d10 dégâts nécrotiques.'},
      {i:'⚔',n:'Frappe Runique',d:'Runes enflammées au contact. +2d6 dégâts de force.'},
      {i:'🛡',n:'Égide du Maudit',d:'Absorbe 20 dégâts une fois par repos long.'}
    ],
    infos:[{l:'Âge',v:'28 ans'},{l:'Origine',v:'Korrath'},{l:'Statut',v:'Vivant'},{l:'Affinité',v:'Void'}]
  },
  {
    emoji:'🌑', element:'💧',
    img: 'img/jiyosen.png',
    bg:'linear-gradient(160deg,#120540 0%,#0a021e 40%,#060118 100%)',
    glow:'rgba(224,64,251,0.5)', cardGlow:'rgba(224,64,251,0.22)',
    name:'Ji Yosen', role:'Archiviste de l\'Ordre', faction:'Ordre', factionClass:'faction-order',
    classe:'Clerc / Érudit', race:'Humaine', alignement:'Loyal Bon', niveau:'10',
    status:'Vivante', statusClass:'status-alive',
    quote:'"Chaque mot interdit est une arme que j\'ai choisi de porter."',
    desc:'Gardienne des archives de l\'Ordre de l\'Aube, Lyra est la seule à avoir lu les textes interdits sur le Void. Sa mémoire parfaite est à la fois son plus grand atout et son plus lourd fardeau.',
    hp:{current:62, max:72},
    abilities:[{n:'FOR',s:8,m:'-1'},{n:'DEX',s:12,m:'+1'},{n:'CON',s:13,m:'+1'},{n:'INT',s:20,m:'+5'},{n:'SAG',s:18,m:'+4'},{n:'CHA',s:15,m:'+2'}],
    bars:[{l:'Savoir',v:98,c:BAR_SOFT},{l:'Magie Sacrée',v:85,c:BAR_LILAC},{l:'Diplomatie',v:75,c:BAR_VIOLET},{l:'Combat',v:28,c:BAR_DEEP}],
    powers:[
      {i:'📖',n:'Mémoire Absolue',d:'Avantage sur tous les jets d\'Histoire.'},
      {i:'✨',n:'Lumière Sacrée',d:'2d8 dégâts radieux. Désavantage aux créatures du Void.'},
      {i:'🔒',n:'Sceau de l\'Ordre',d:'Lie un secret. Nul ne peut le révéler sous contrainte.'}
    ],
    infos:[{l:'Âge',v:'31 ans'},{l:'Origine',v:'Mirhal'},{l:'Statut',v:'Vivante'},{l:'Affinité',v:'Lumière'}]
  },
  {
    emoji:'🔮', element:'🌫',
    // img: 'https://ton-url.com/seris.jpg',
    bg:'linear-gradient(160deg,#1a0545 0%,#0f0230 40%,#08011e 100%)',
    glow:'rgba(192,132,252,0.55)', cardGlow:'rgba(192,132,252,0.25)',
    name:'Seris Nul', role:'Tisseuse d\'Ombres', faction:'Ombre', factionClass:'faction-shadow',
    classe:'Ensorceleur / Tisserand', race:'Inconnue', alignement:'Neutre Vrai', niveau:'??',
    status:'Inconnue', statusClass:'status-unknown',
    quote:'"Je ne suis ni alliée ni ennemie. Je suis l\'inévitable."',
    desc:'Mystérieuse et insaisissable, Seris Nul tisse les fils de l\'ombre pour manipuler les perceptions. Ses véritables allégeances sont inconnues.',
    hp:{current:45, max:58},
    abilities:[{n:'FOR',s:9,m:'-1'},{n:'DEX',s:19,m:'+4'},{n:'CON',s:12,m:'+1'},{n:'INT',s:16,m:'+3'},{n:'SAG',s:14,m:'+2'},{n:'CHA',s:22,m:'+6'}],
    bars:[{l:'Manipulation',v:95,c:BAR_MAGENTA},{l:'Discrétion',v:92,c:BAR_DEEP},{l:'Magie des Ombres',v:88,c:BAR_VIOLET},{l:'Combat direct',v:40,c:BAR_LILAC}],
    powers:[
      {i:'🌫',n:'Voile d\'Ombre',d:'Invisibilité en zone de pénombre jusqu\'à attaque.'},
      {i:'🔮',n:'Tisser les Esprits',d:'Implante une fausse mémoire. Jet SAG DD 18.'},
      {i:'👁',n:'Regard du Néant',d:'Cible effrayée 1 min. Jet SAG DD 16.'}
    ],
    infos:[{l:'Âge',v:'Inconnue'},{l:'Origine',v:'Inconnue'},{l:'Statut',v:'Inconnue'},{l:'Affinité',v:'Ombre'}]
  },
  {
    emoji:'🗡', element:'🔥',
    // img: 'https://ton-url.com/drath.jpg',
    bg:'linear-gradient(160deg,#200550 0%,#130228 40%,#0a0118 100%)',
    glow:'rgba(124,58,237,0.65)', cardGlow:'rgba(124,58,237,0.3)',
    name:'Drath Edun', role:'Général des Cendres', faction:'Ombre', factionClass:'faction-shadow',
    classe:'Guerrier / Paladin Déchu', race:'Humain', alignement:'Loyal Mauvais', niveau:'15',
    status:'Décédé', statusClass:'status-dead',
    quote:'"L\'Ordre m\'a appris à mourir pour une cause. J\'ai choisi la mienne."',
    desc:'Autrefois le plus grand général de l\'Ordre, Drath Edun a trahi ses frères pour servir une puissance venue du Void. Sa chute a laissé un vide plus dangereux encore.',
    hp:{current:0, max:138},
    abilities:[{n:'FOR',s:22,m:'+6'},{n:'DEX',s:13,m:'+1'},{n:'CON',s:20,m:'+5'},{n:'INT',s:14,m:'+2'},{n:'SAG',s:10,m:'+0'},{n:'CHA',s:17,m:'+3'}],
    bars:[{l:'Force brute',v:96,c:BAR_DEEP},{l:'Tactique',v:90,c:BAR_VIOLET},{l:'Résistance',v:94,c:BAR_LILAC},{l:'Magie noire',v:55,c:BAR_MAGENTA}],
    powers:[
      {i:'🔥',n:'Serment Brisé',d:'2d8 dégâts nécrotiques. Ignore les résistances divines.'},
      {i:'⚔',n:'Frappe du Traître',d:'Triple les dés contre d\'anciens alliés de l\'Ordre.'},
      {i:'💀',n:'Dernier Souffle',d:'À 0 PV : explosion 30 pieds, 8d6 dégâts nécrotiques.'}
    ],
    infos:[{l:'Âge',v:'54 ans'},{l:'Origine',v:'Eldrath'},{l:'Statut',v:'Décédé'},{l:'Affinité',v:'Void noir'}]
  },
  {
    emoji:'🌿', element:'🌿',
    // img: 'https://ton-url.com/eryn.jpg',
    bg:'linear-gradient(160deg,#0e0535 0%,#080220 40%,#050115 100%)',
    glow:'rgba(216,180,254,0.4)', cardGlow:'rgba(216,180,254,0.18)',
    name:'Eryn Solh', role:'Vagabonde du Rift', faction:'Neutre', factionClass:'faction-neutral',
    classe:'Rôdeur / Explorateur', race:'Mi-elfe', alignement:'Chaotique Bon', niveau:'9',
    status:'Vivante', statusClass:'status-alive',
    quote:'"Les Rifts ne font pas peur à qui n\'a plus rien à perdre."',
    desc:'Ni de l\'Ordre ni du Void, Eryn traverse les Rifts depuis l\'enfance. Elle connaît les routes impossibles et les passages oubliés. Son passé est un secret qu\'elle protège avec une lame acérée.',
    hp:{current:70, max:82},
    abilities:[{n:'FOR',s:13,m:'+1'},{n:'DEX',s:20,m:'+5'},{n:'CON',s:15,m:'+2'},{n:'INT',s:13,m:'+1'},{n:'SAG',s:16,m:'+3'},{n:'CHA',s:11,m:'+0'}],
    bars:[{l:'Agilité',v:92,c:BAR_SOFT},{l:'Survie',v:88,c:BAR_VIOLET},{l:'Navigation Rifts',v:85,c:BAR_LILAC},{l:'Combat distance',v:80,c:BAR_PINK}],
    powers:[
      {i:'🏹',n:'Flèche du Rift',d:'Téléporte la flèche. Ignore les abris totaux.'},
      {i:'🌿',n:'Pas du Chasseur',d:'Avantage Discrétion en terrain naturel.'},
      {i:'🗺',n:'Mémoire des Passages',d:'Détecte tous les Rifts dans 10 km.'}
    ],
    infos:[{l:'Âge',v:'24 ans'},{l:'Origine',v:'Les Rifts'},{l:'Statut',v:'Vivante'},{l:'Affinité',v:'Neutre'}]
  },
  {
    emoji:'⚗', element:'⚡',
    // img: 'https://ton-url.com/maren.jpg',
    bg:'linear-gradient(160deg,#180540 0%,#0d0228 40%,#08011c 100%)',
    glow:'rgba(232,121,249,0.5)', cardGlow:'rgba(232,121,249,0.22)',
    name:'Maren Cael', role:'Alchimiste du Vide', faction:'Void', factionClass:'faction-void',
    classe:'Magicien / Alchimiste', race:'Humain (altéré)', alignement:'Neutre Vrai', niveau:'13',
    status:'Inconnu', statusClass:'status-unknown',
    quote:'"Le Void n\'est pas une malédiction. C\'est une matière première."',
    desc:'Génie de l\'alchimie voïdale, Maren cherche à synthétiser l\'énergie du Void en substance stable. Ses expériences l\'ont partiellement transformé — ses yeux ne reflètent plus la lumière.',
    hp:{current:55, max:68},
    abilities:[{n:'FOR',s:8,m:'-1'},{n:'DEX',s:14,m:'+2'},{n:'CON',s:13,m:'+1'},{n:'INT',s:22,m:'+6'},{n:'SAG',s:12,m:'+1'},{n:'CHA',s:10,m:'+0'}],
    bars:[{l:'Intelligence',v:97,c:BAR_SOFT},{l:'Alchimie Voïdale',v:93,c:BAR_MAGENTA},{l:'Magie Arcanique',v:82,c:BAR_VIOLET},{l:'Combat',v:25,c:BAR_DEEP}],
    powers:[
      {i:'⚗',n:'Extrait du Vide',d:'Fiole: 4d10 dégâts ou 4d8 soins.'},
      {i:'🔬',n:'Transmutation Voïdale',d:'Transforme une substance en énergie pure. Effets variables.'},
      {i:'👁',n:'Vision du Néant',d:'Détecte magie invisible à 60 pieds.'}
    ],
    infos:[{l:'Âge',v:'44 ans'},{l:'Origine',v:"Vel'Khan"},{l:'Statut',v:'Inconnu'},{l:'Affinité',v:'Void / Alchimie'}]
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

  // Nav icon : image ou emoji
  const navIcon = document.getElementById('gNavIcon');
  navIcon.style.cssText = `background:${c.bg};overflow:hidden;`;
  navIcon.innerHTML = c.img
    ? `<img src="${c.img}" alt="${c.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;"
        onerror="this.style.display='none';this.parentElement.textContent='${c.emoji}'">`
    : c.emoji;

  document.getElementById('gNavName').textContent = c.name;
  document.getElementById('gNavSub').textContent = c.role;

  document.getElementById('gBg').style.background = c.bg;
  document.getElementById('gGlow').style.background = c.glow;

  // Art zone : image ou emoji
  document.getElementById('gArt').innerHTML = c.img
    ? `<div style="display:flex;flex-direction:column;align-items:center;gap:.8rem;">
        <img src="${c.img}" alt="${c.name}"
          style="width:130px;height:130px;border-radius:50%;object-fit:cover;
                 border:3px solid rgba(168,85,247,0.7);
                 box-shadow:0 0 32px rgba(168,85,247,0.5);"
          onerror="this.parentElement.innerHTML='<div class=\\'g-art-emoji\\'>${c.emoji}</div><div class=\\'g-art-name\\'>${c.name}</div><div class=\\'g-art-role\\'>${c.role}</div><div class=\\'g-art-badge ${c.factionClass}\\'>${c.faction} · ${c.element}</div>'">
        <div class="g-art-name">${c.name}</div>
        <div class="g-art-role">${c.role}</div>
        <div class="g-art-badge ${c.factionClass}">${c.faction} · ${c.element}</div>
      </div>`
    : `<div class="g-art-emoji">${c.emoji}</div>
       <div class="g-art-name">${c.name}</div>
       <div class="g-art-role">${c.role}</div>
       <div class="g-art-badge ${c.factionClass}">${c.faction} · ${c.element}</div>`;

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