import { toggleMenu, resizeWindow } from './menu.js';
import { activePrevSection, activeNextSection } from './active-section-form.js';
import { changeHeaderColor } from './change-header-color.js';

const mediaQueryDesktop = window.matchMedia('(min-width: 1366px)');

const menu = document.querySelector('.main-nav');
const buttonToggle = document.querySelector('.page-header__toggle');
const buttonToggleIcon = buttonToggle.querySelector('.page-header__toggle-icon');

const form = document.querySelector('#form');
const btnPrev = form.querySelector('#prev');
const btnNext = form.querySelector('#next');

if (!mediaQueryDesktop.matches) {
    menu.classList.add('main-nav--script-close');
} else {
    if(menu.classList.contains('main-nav--script-close')) {
      menu.classList.remove('main-nav--script-close');
    }
  
    if(menu.classList.contains('main-nav--script-open')) {
        menu.classList.remove('main-nav--script-open');
    }
}

buttonToggleIcon.classList.add('page-header__toggle-icon--open');
buttonToggle.addEventListener('click', toggleMenu);

window.addEventListener('resize', resizeWindow);

btnPrev.addEventListener('click', (evt) => activePrevSection(evt));
btnNext.addEventListener('click', (evt) => activeNextSection(evt));

window.addEventListener('scroll', () => changeHeaderColor());