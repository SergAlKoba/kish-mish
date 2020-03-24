$(document).ready(function(){

    $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});

    $('.open-menu').on('click', function(){
      $('.mobile-menu').toggleClass('active');
    });

    var header = $('header').outerHeight();
    var footer = $('footer').outerHeight();
    var footer_after = $('.footer-after').outerHeight();
  
    $('.footer').css({
      'padding-top': footer_after
    });

    $('body').css({
      // 'padding-top': header,
      'padding-bottom': footer + footer_after,
    });

    $('.form-open').on('click', function(){
      $('.form-open').parent('form').addClass('active');
    });

});

$(window).resize(function(){

    var header = $('header').outerHeight();
    var footer = $('footer').outerHeight();
    var footer_after = $('.footer-after').outerHeight();
  
    $('.footer').css({
      'padding-top': footer_after
    });

    $('body').css({
      // 'padding-top': header,
      'padding-bottom': footer,
    });
  
});  