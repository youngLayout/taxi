$(function(){
  'use strict';

  $('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop:$(target).offset().top
      },
      800
    );
  });

});
