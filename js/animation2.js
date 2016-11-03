$(document).ready(function(){

  

  $('.hamburger').on('click', function(){
    $('footer').css('height', '500px');
  });

  $('.close').on('click', function(){
    $('footer').css('height', '90px');
  });


});
