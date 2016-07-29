

$(document).ready(function()
{


    $('.wrapper div').click(function() {
    $(this).toggleClass('go')
    if($(this).hasClass('go')){
      $(this).animate({'width':'100%'},{
        duration:500,
        step:function(gox){
          var width = gox < 100 ? (100 - gox) / 3 : 0;
                  $(this).siblings().css('width', width + "%"); 
          }
        })
    }else{
      $('.wrapper div').animate({'width':'25%'},1000)
    }
    });


console.log('working');
});


