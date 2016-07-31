

$(document).ready(function()
{


    $('.wrapper div').click(function() {
    $(this).toggleClass('go')
    if($(this).hasClass('go')){
      $(this).animate({'width':'100%'},{
        duration:300,
        step:function(gox){
          var width = gox < 100 ? (100 - gox) / 4 : 0;
                  $(this).siblings().css('width', width + "%"); 
          }
        })
    }else{
      $('.wrapper div').animate({'width':'25%'},300)
    }
    });
$('.breakfast').click(function() {
    $('#breakfast-static').toggleClass("show")
});

$('.lunch').click(function() {
    $('#lunch-static').toggleClass("show")
});
$('.drinks').click(function() {
    $('#drinks-static').toggleClass("show")
});
$('.salad').click(function() {
    $('#salad-static').toggleClass("show")
});

console.log('working');
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$('.breakfast').click(function() {
    $('#breakfast-static').css({
        'display': 'block'
    });
});