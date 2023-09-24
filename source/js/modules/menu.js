import { ScrollLock } from '../utils/scroll-lock';
import { FocusLock } from '../utils/focus-lock';
import './init-swipers';


const header = document.querySelector('[data-header]');
const burger = document.querySelector('[data-burger]');
const overlay = document.querySelector('[data-overlay]');
const scrollLock = new ScrollLock();
const focusLock = new FocusLock();
let isMenuOpen = false;


const initBurger = () => {
  if (!burger) {
    return;
  }

  burger.addEventListener('click', onBurgerClick);
  overlay.addEventListener('click', () => {
    closeMenu();
  });
}

const openMenu = () => {
  isMenuOpen = true;
  header.classList.add('is-open');
  overlay.style.visibility = 'visible';
  scrollLock.disableScrolling();
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
  focusLock.lock('[data-header]');
}

const closeMenu = () => {
  isMenuOpen = false;
  header.classList.remove('is-open');
  overlay.style.visibility = 'hidden';
  scrollLock.enableScrolling();
  focusLock.unlock('[data-header]');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
}

const onBurgerClick = () => {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeMenu();
  }
}

const onDocumentClick = (evt) => {
  if (evt.target.closest('.nav-menu__link') || evt.target.closest('.nav-menu__sublink')) {
    closeMenu();
  }
}

export { initBurger };


/*///////////////
const menuBtn = document.querySelector('.header__menu-button');
const nav = document.querySelector('.header__nav');
const navList = nav.querySelector('.nav-menu');
window.scrollLock = new ScrollLock();
/*
const runSlider = () => {
  if (menuBtn.classList.contains('header__menu-button--opened')) {
    heroSwiper.autoplay.stop();
  } else {
    heroSwiper.autoplay.start();
  }
};

function openMenu() {
  isMenuOpen = true;

}

function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    closeMenu();
  }
}

function changeState() {
  nav.classList.toggle('header__nav--opened');
  menuBtn.classList.toggle('header__nav-button--opened');
  window.addEventListener('keydown', onEscKeydown);
}

navList.addEventListener('click', (evt) => {
  if (evt.target.closest('.nav-menu__link') || evt.target.closest('.nav-menu__sublink')) {
    changeState();
  }
});

if (menuBtn) {
  menuBtn.addEventListener('click', changeState);
}


/*
const onOpenMenu = () => {
  changeClasses();
  runSlider();
};
/*
const onClickOutside = (evt) => {
  if (evt.target.className === 'nav--opened') {
    changeClasses();
    runSlider();
  }
};


button.addEventListener('click', onOpenMenu);
body.addEventListener('click', onClickOutside);
*/
