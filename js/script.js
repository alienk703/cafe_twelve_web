

$(document).ready(function()
{


$('.breakfast').click(function() {
    $(this).toggleClass("active")
    $('.lunch').toggleClass("hide")
    $('.drinks').toggleClass("hide")
    $('.salad').toggleClass("hide")
});

$('.lunch').click(function() {
    $(this).toggleClass("active")
    $('.breakfast').toggleClass("hide")
    $('.drinks').toggleClass("hide")
    $('.salad').toggleClass("hide")
});

$('.drinks').click(function() {
    $(this).toggleClass("active")
    $('.lunch').toggleClass("hide")
    $('.breakfast').toggleClass("hide")
    $('.salad').toggleClass("hide")
});

$('.salad').click(function() {
    $(this).toggleClass("active")
    $('.lunch').toggleClass("hide")
    $('.drinks').toggleClass("hide")
    $('.breakfast').toggleClass("hide")
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