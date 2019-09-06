$(function(){
  'use strict';

// Слайдер slick
  $('.slick-slider').slick({
    infinite: true, /*Зацикливаем воспроизведение*/
    slidesToShow: 1,   /*Показывает по 1 картинке  */
    slidesToScroll: 1,
    dots: true,     /*Показывает точки внизу слайдера*/
    autoplay: true,
    autoplaySpeed: 2000,
  });

});
