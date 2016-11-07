$(document).ready(function(){



  $('.hamburger').on('click', function(){
    $('footer').css('height', '50vh');
    $('.about-about').css('padding-bottom', '500px');
    $('.about-bad-news').css('padding-bottom', '500px');
    $('.about-hunza').css('padding-bottom', '500px');
    $('.contact-form').css('padding-bottom', '500px');
  });

  $('.close').on('click', function(){
    $('footer').css('height', '10vh');
    $('.about-about').css('padding-bottom', '150px');
    $('.about-bad-news').css('padding-bottom', '150px');
    $('.about-hunza').css('padding-bottom', '150px');
    $('.contact-form').css('padding-bottom', '150px');
  });

  $('.nav-on-phone ul').on('click', function(){
    $('footer').css('height', '10vh');
  });


});
