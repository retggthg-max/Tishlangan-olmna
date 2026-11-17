const menuToggle = document.getElementById('menuToggle');
const searchToggle = document.getElementById('searchToggle');
const searchPanel = document.getElementById('searchPanel');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const bagToggle = document.getElementById('bagToggle');

menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  const expanded = document.body.classList.contains('menu-open');
  menuToggle.setAttribute('aria-expanded', String(expanded));
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => document.body.classList.remove('menu-open'));
});

searchToggle.addEventListener('click', () => {
  searchPanel.classList.add('open');
  searchInput.focus();
});
searchClose.addEventListener('click', () => searchPanel.classList.remove('open'));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    searchPanel.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
});
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && searchInput.value.trim()) {
    const term = encodeURIComponent(searchInput.value.trim());
    window.open(`https://www.apple.com/us/search/${term}`, '_blank', 'noopener');
  }
});
bagToggle.addEventListener('click', () => {
  window.open('https://www.apple.com/shop/bag', '_blank', 'noopener');
});

// Navigatsiya bandini bosganda tegishli bo'limga yumshoq o'tish.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
