

$(document).ready(function(){
$('.click-tickets').click(function(){
        $('html,body').animate({scrollTop:$('#tickets').offset().top},800);
    });
    $('.click-gallery').click(function(){
    $('html,body').animate({scrollTop:$('#gallery').offset().top},1000);
});
    $('.click-lineup').click(function(){
    $('html,body').animate({scrollTop:$('#lineup').offset().top},1000);
});
    $('.click-contact').click(function(){
    $('html,body').animate({scrollTop:$('#about').offset().top},1000);
});
});

