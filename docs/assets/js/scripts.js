// --------------------------------------------------------------
// Author       : Tanvirul Haque
// Template Name: Multi - Onepage Business Template
// Version      : 1.0
// --------------------------------------------------------------
// ==============================================================
// CSS TABLE OF CONTENTS
// ==============================================================
// 01. START PRELOADER
// 02. START MENU STICKY JS
// 03. START SMOTH SCROOL JS
// 04. START SCROOLSPY JS
// 05. START TOGGLE DROPDOWN JS
// 06. START PROGRESSBAR JS
// 07. START VENOBOX JS
// 08. START COUNTDOWN JS
// 09. START SHOP MIXITUP JS
// 10. START PARALLAX JS
// 11. START PARTNER CAROUSEL JS
// 12. START WOW ANIMATION JS
// ==============================================================

(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // 01. START PRELOADER
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 3000);
        // 01. END PRELOADER

        // 02. START MENU STICKY JS
        $(".header-top-area").sticky({
            topSpacing: 0,
        });
        // 02. END MENU STICKY JS

        // 03. START SMOTH SCROOL JS
        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 88
            }, 1200);
            e.preventDefault();
        });
        // 03. END SMOTH SCROOL JS

        // 04. START SCROOLSPY JS
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 90
        });
        // 04. END SCROOLSPY JS

        // 05. START TOGGLE DROPDOWN JS
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        // 05. END TOGGLE DROPDOWN JS

        // 06. START PROGRESSBAR JS
        $(".progressbar").loading();
        // 06. END PROGRESSBAR JS

        // 07. START VENOBOX JS
        $('.image-popup').venobox({
            numeratio: true,
            infinigall: true
        });
        // 07. END VENOBOX JS

        // 08. START COUNTDOWN JS
        $('.counter, .progress').on('inview', function (event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: $this.text()}, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });
        // 08. END COUNTDOWN JS

        // 09. START SHOP MIXITUP JS
        $('.shop-grid').mixitup({
            targetSelector: '.shop-all'
        });
        // 09. END SHOP MIXITUP JS

        // 10. START PARALLAX JS
        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
        // 10. END PARALLAX JS

        // 11. START PARTNER CAROUSEL JS
        $('#partner-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            smartSpeed: 900,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 6,
                }
            }
        });

        console.log('loading .......');
        var x = document.getElementById('pros');
        var v = x.getAttribute("src");
        if (v == "feed-blue.png") {
            v = "feed-orange.png";
        } else {
            v = "feed-blue.png"
        }
        location.search.split('pros=')[1]
        v = "assets/img/portfolio/" + location.search.split('pros=')[1] + ".jpg";
        x.setAttribute("src", v);
        // 11. END PARTNER CAROUSEL JS
    });

    // 12. START WOW ANIMATION JS
    new WOW().init();
    // 12. END WOW ANIMATION JS

})(jQuery);
