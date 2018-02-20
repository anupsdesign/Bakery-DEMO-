$(document).ready(function(){

                var headerHeight = $('nav').outerHeight();
          
                $('a').click(function(e){

                   var linkHref = $(this).attr('href');
                   $('html, body').animate({
                      scrollTop: $(linkHref).offset().top-90
                   },500);

                   e.preventDefault();
               });
});

$(document).ready(function() {
           $(window).scroll(function() {
                if($(document).scrollTop() > 250) {
                   $('nav').addClass('shrink');
                }
                else {
                    $('nav').removeClass('shrink');
                }
            });
}); 