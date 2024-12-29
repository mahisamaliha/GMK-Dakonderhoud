// hero Carousel

jQuery(function ($) {

    'use strict';
    $('.hero-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

$(document).ready(function () {
    $('.hero-carousel .item').each(function () {
        $(this).css('height', $(window).height()); // Set height dynamically
    });

    $(window).resize(function () {
        $('.hero-carousel .item').each(function () {
            $(this).css('height', $(window).height());
        });
    });
});

// Slider Carousel

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<", ">"],
        responsive: {
            0: { items: 1 },
            768: { items: 3 }
        }
    });
});