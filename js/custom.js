(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    // ABOUT SLIDER
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    });


    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

    // Get started form 
    $('form#get-started').bind('submit',function(event){
      event.preventDefault();
        $.ajax({
            type    : 'POST',
            url     : 'sortForm.php',
            data    : $(this).serialize(),
            cache   : false,
            dataType: 'text',
            success : function (serverResponse) {  $('.sortForm #result').text(serverResponse); },
            error   : function (jqXHR, textStatus, errorThrown) { $('.sortForm #errormsg').text('error sending mail'); }
        });
     }); 

    // Say hello to us form 
    $('form#contact-form').bind('submit',function(event){
      event.preventDefault();
        $.ajax({
            type    : 'POST',
            url     : 'invite.php',
            data    : $(this).serialize(),
            cache   : false,
            dataType: 'text',
            success : function (serverResponse) {  $('.mainform #result').text(serverResponse); },
            error   : function (jqXHR, textStatus, errorThrown) { $('.mainform #errormsg').text('error sending mail'); }
        });
     }); 

})(jQuery);
