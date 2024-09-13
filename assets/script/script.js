"use strict";

// const LocoScroll = new LocomotiveScroll({
// 	el: document.querySelector("[data-scroll-container]"),
// 	smooth: true
// });

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

$(document).ready(function() {
    // Responsive menu js
    function checkScreenSize() {
      if ($(window).width() <= 992) {
        $(".nav-toggle").click(function () {
            $("html").addClass("open-menu");
        });
        $('.close-icon').click(function () {
            $("html").removeClass("open-menu");
        });
      } else {
        return
      }
    }

    // Run on load
    checkScreenSize();

    // Run on window resize
    $(window).resize(function() {
      checkScreenSize();
    });


    // Fixed Header Script
    function headerStuff() {
        if ($(window).scrollTop() > 100) {
            $('body').addClass('sticky-header');
        }
        else {
            $('body').removeClass('sticky-header');
        }
    }

    headerStuff();
    
    $(window).scroll(function () {
        headerStuff();
    });

});
