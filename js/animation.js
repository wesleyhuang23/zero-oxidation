$(window).scroll(function(){

var scroll = $(this).scrollTop();

$('.image-header h1, .down-indicator').css({'transform': 'translate(0px, '+ scroll / 2.56 + '%)'});

$('.image-header-oxidation h1, .image-header-orac h1, .image-header-contact h1, .image-header-recomendations h1, .down-indicator img').css({'transform': 'translate(0px, '+ scroll / 2 + '%)'});
});
