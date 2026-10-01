const year = document.querySelector('#year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
