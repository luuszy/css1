jQuery(function($) {
    "use strict";

    /*=================================
     Menu
     ===================================*/

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav-collapse');
        }
    });

    /*=============================
     Closes the Responsive Menu on Menu Item Click
     ============================== */


    $('a.page-scroll').on("click", function (event) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        event.preventDefault();
    });


    /*================================
     Closes the Responsive Menu on Menu Item Click
     ================================== */

    $('.navbar-collapse ul li a').on('click', function() {
        $('.navbar-toggle:visible').click();
    });

    /*================================
     wow js
     ================================== */

    new WOW().init();


    /*================================
     mixItUp
     ================================== */

    $('.portfolio-inner').mixItUp();



    /*===============================
     magnipic popup js
     ==================================
     */

    $('.work-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }

    });

});