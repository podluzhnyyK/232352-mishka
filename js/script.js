var navMain = document.querySelector('.main-nav');
var searchBasket = document.querySelector('.search-basket');
var navToggle = document.querySelector('.page-header__toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    searchBasket.classList.remove('search-basket--closed');
    searchBasket.classList.add('search-basket--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    searchBasket.classList.add('search-basket--closed');
    searchBasket.classList.remove('search-basket--opened')
  }
});
