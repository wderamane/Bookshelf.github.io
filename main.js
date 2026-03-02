document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.fade-page');
  if (page) page.classList.add('visible');

  document.querySelectorAll('.fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 120 + i * 140);
  });

  const typeEl = document.getElementById('typewriter');
  const phrases = ['Bienvenue chez Bookshelf.', 'Ton coin lecture, cosy et simple.'];
  let p = 0, ch = 0;
  function type() {
    if (!typeEl) return;
    const txt = phrases[p];
    typeEl.innerHTML = txt.slice(0, ch) + '<span class="cursor-blink"></span>';
    if (ch++ < txt.length) setTimeout(type, 70);
    else setTimeout(() => { ch = 0; p = (p + 1) % phrases.length; setTimeout(type, 900); }, 1600);
  }
  type();

  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (cursor && ring) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      ring.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    });
  }

  const particles = document.getElementById('particles');
  if (particles) {
    for (let i = 0; i < 8; i++) {
      const el = document.createElement('div');
      el.className = 'particle';
      const size = 8 + Math.random() * 28;
      el.style.width = el.style.height = size + 'px';
      el.style.left = (6 + Math.random() * 88) + '%';
      el.style.top = (60 + Math.random() * 30) + '%';
      el.style.animationDuration = (6 + Math.random() * 6) + 's';
      particles.appendChild(el);
    }
  }
});
