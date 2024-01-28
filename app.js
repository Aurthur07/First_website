const menu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelector('.mobile-menu__nav--link');

let isShown = false;

function mobileMenu() {
  if (isShown) {
    menu.classList.remove('mobile-menu__nav--active');
    menuLinks.classList.remove('active');
    isShown = false;
  } else {
    menu.classList.add('mobile-menu__nav--active');
    menuLinks.classList.add('active');
    isShown = true;
  }
}

menu.addEventListener('click', mobileMenu);