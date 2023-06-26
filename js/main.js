const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu-list');
const headerItems = document.querySelectorAll('.header__menu-item');
const overlay = document.querySelector('.overlay');
const autorisationOpen = document.querySelector('.header__top-button');
const autorisationClose = document.querySelector('.autorisation__close');
const autorisationBlock = document.querySelector('.autorisation');

burger.addEventListener('click', toggleBurger);
headerItems.forEach(item => {
    item.addEventListener('click', toggleBurger);
});
overlay.addEventListener('click', closeAll);
autorisationOpen.addEventListener('click', openAutorisation);
autorisationClose.addEventListener('click', closeAutorisation);


function openAutorisation() {
    autorisationBlock.classList.add('autorisation--open');
    overlay.classList.add('overlay--open');
    document.body.classList.add('body-not-scroll');
};

function closeAutorisation() {
    autorisationBlock.classList.remove('autorisation--open');
    overlay.classList.remove('overlay--open');
    document.body.classList.remove('body-not-scroll');
};

function closeAll() {
    if(overlay.classList.contains('overlay--open')){
        closeBurger();
        closeAutorisation();
    }
};

function closeBurger() {
    burger.classList.remove('burger--open');
    headerMenu.classList.remove('header__menu-list--open');
    overlay.classList.remove('overlay--open');
    document.body.classList.remove('body-not-scroll');
};

function toggleBurger() {
    if (visualViewport.width < 760) {
        burger.classList.toggle('burger--open');
        headerMenu.classList.toggle('header__menu-list--open');
        overlay.classList.toggle('overlay--open');
        document.body.classList.toggle('body-not-scroll');
    }
};

window.addEventListener('resize', function () {
    if (visualViewport.width > 760 && !autorisationBlock.classList.contains('autorisation--open')) {
        closeBurger();
    }
});

window.addEventListener('scroll', function () {
    /*const scrollPosition = window.scrollY;
  console.log(scrollPosition);*/
});