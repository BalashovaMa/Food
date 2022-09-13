window.addEventListener('DOMContentLoaded', () => {
    const calculator = require('./modules/calculator'),
        cards = require('./modules/cards'),
        form = require('./modules/form'),
        modal = require('./modules/modal'),
        slider = require('./modules/slider'),
        tabs = require('./modules/tabs'),
        timer = require('./modules/timer');

    calculator();
    cards();
    form();
    modal();
    slider();
    tabs();
    timer();
    /* new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container',
        'menu__item'
    ).render(); */

    /*const slides = document.querySelectorAll('.offer__slide'),
  prev = document.querySelector('.offer__slider-prev'),
  next = document.querySelector('.offer__slider-next'),
  total = document.querySelector('#total'),
  current = document.querySelector('#current');
let slideIndex = 1;

showSlides(slideIndex);

if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
} else {
  total.textContent = slides.length;
}

function showSlides(n) {
  if (n > slides.length) {
      slideIndex = 1;
  }

  if (n < 1) {
      slideIndex = slides.length;
  }

  slides.forEach(item => item.style.display = 'none');

  slides[slideIndex - 1].style.display = 'block';
  if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
  } else {
      current.textContent = slideIndex;
  }

}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
  plusSlides(-1);
});

next.addEventListener('click', () => {
  plusSlides(1);
});*/


});