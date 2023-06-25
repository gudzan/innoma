const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu-list');
const headerItems = document.querySelectorAll('.header__menu-item');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', toggleBurger);
headerItems.forEach(item => {
    item.addEventListener('click', toggleBurger);
});
overlay.addEventListener('click', toggleBurger);


function toggleBurger() {
    if (visualViewport.width < 760) {
        burger.classList.toggle('burger--open');
        headerMenu.classList.toggle('header__menu-list--open');
        overlay.classList.toggle('overlay--open');
        document.body.classList.toggle('body-not-scroll');
    }
};

window.addEventListener('resize', function () {
    if (visualViewport.width > 760) {
        burger.classList.remove('burger--open');
        headerMenu.classList.remove('header__menu-list--open');
        overlay.classList.remove('overlay--open');
        document.body.classList.remove('body-not-scroll');
    }
});

window.addEventListener('scroll', function () {
    /*const scrollPosition = window.scrollY;
  console.log(scrollPosition);*/
});