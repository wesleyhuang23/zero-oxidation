$(document).ready(function(){

  $('.button-wrapper').on('click', function(){
    $('input').val('');
    $('textarea').val('');
  });

  $('.hamburger').on('click', function(){
    $('footer').css('height', '500px');
  });

  $('.close').on('click', function(){
    $('footer').css('height', '90px');
  });


});
