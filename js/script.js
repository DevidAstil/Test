$(document).ready(function(){
    $('.reviews_slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        centerMode:true,
        variableWidth: true,
        responsive:[
            {
            breakpoint: 1024,
            settings: {
              slidesToShow:2,
              centerMode:false,
            },
            breakpoint: 650,
            settings: {
              slidesToShow:1,
            }
            }
        ]
    })

    var counter = new Date('aug 17 2022 16:30:00'); 
    counter = new Date(counter); 
    $('#m').countdown({until: counter}); 
})

function showText(){
    $('.form-input-focus-1').css({
        'opacity':'1'
    })
}
function downText(){
    $('.form-input-focus-1').css({
        'opacity':'0'
    })
}
function showText2(){
    $('.form-input-focus-2').css({
        'opacity':'1'
    })
}
function downText2(){
    $('.form-input-focus-2').css({
        'opacity':'0'
    })
}
$('.form-input-name').focus(showText)
$('.form-input-name').blur(downText)
$('.form-input-tel').focus(showText2)
$('.form-input-tel').blur(downText2)
    
