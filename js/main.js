const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu-list');
const headerItems = document.querySelectorAll('.header__menu-item');
const overlay = document.querySelector('.overlay');
const autorisationOpen = document.querySelector('.header__top-button');
const autorisationClose = document.querySelector('.autorisation__close');
const autorisationBlock = document.querySelector('.autorisation');
const marketsCountries = document.querySelectorAll('.markets__country');
const marketsCountriesBox = document.querySelectorAll('.markets__map-box');

burger.addEventListener('click', toggleBurger);
headerItems.forEach(item => {
    item.addEventListener('click', toggleBurger);
});
overlay.addEventListener('click', closeAll);
autorisationOpen.addEventListener('click', openAutorisation);
autorisationClose.addEventListener('click', closeAutorisation);
marketsCountries.forEach(item => {
    item.addEventListener('click', toggleMarketsMap);
});


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

function playVideo() {
    document.querySelector('.video__box-black').classList.remove('video__box-black--visibile');
    document.querySelector('.video__box').classList.add('video__box--visible');
    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);
    player.play();
};

function toggleArrow(element) {
    element.classList.toggle('program__accordion-title-arrow--active');

};


window.addEventListener('resize', function () {
    if (visualViewport.width > 760 && !autorisationBlock.classList.contains('autorisation--open')) {
        closeBurger();
    }
});

function toggleMarketsMap() {
    marketsCountries.forEach(item => {
        item.classList.remove('markets__country--active');
    })
    this.classList.add('markets__country--active');
    document.querySelector('.markets__map-box--active').classList.toggle('markets__map-box--active');

    if(this.classList.contains('markets__country-east')){
        document.querySelector('.markets__map-box--east').classList.add('markets__map-box--active');
    }
    if(this.classList.contains('markets__country-asia')){
        document.querySelector('.markets__map-box--asia').classList.add('markets__map-box--active');
    }
    if(this.classList.contains('markets__country-america')){
        document.querySelector('.markets__map-box--america').classList.add('markets__map-box--active');
    }
    if(this.classList.contains('markets__country-africa')){
        document.querySelector('.markets__map-box--africa').classList.add('markets__map-box--active');
    }
};

const accordionTitle = document.querySelectorAll('.program__accordion-title');
accordionTitle.forEach(accordionTitleItem => {
    accordionTitleItem.addEventListener('click', function(e) {
        e.preventDefault();
        let content = accordionTitleItem.nextElementSibling;
        if(content.classList.contains('program__accordion-content--active')){
            content.style.maxHeight = null;
        }
        else{
            content.style.maxHeight = '360px';
        }
        content.classList.toggle('program__accordion-content--active');
        let arrow = accordionTitleItem.lastElementChild;
        arrow.classList.toggle('program__accordion-title-arrow--active');
    })
});

window.addEventListener('scroll', function () {
    /*const scrollPosition = window.scrollY;
  console.log(scrollPosition);*/
});