const navButtonClass = 'header__hamburger';
const navClass = 'header__links-container';
const navOpenedClass = 'nav-opened';
const navButton = window.document.getElementsByClassName(navButtonClass)[0];
const nav = window.document.getElementsByClassName(navClass)[0];
navButton.addEventListener('click', () => nav.classList.add(navOpenedClass));