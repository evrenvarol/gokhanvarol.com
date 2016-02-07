
(function($) {
    "use strict"; // Start of use strict

    // Offset for Main Navigation
    $('#homeNav').affix({
        offset: {
            top: 100
        }
    })

    // Highlight the top nav as scrolling occurs
   /* $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })*/

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


})(jQuery); // End of use strict


// jQuery to collapse the navbar on scroll
/*$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-header").removeClass("hidden");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-header").addClass("hidden");
    }
});*/
/*
// data-spy="scroll" data-target=".navbar-fixed-top"

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
*/
