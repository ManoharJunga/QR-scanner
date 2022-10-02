$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
            
        }
    }, {
        offset: '60px;'
    });
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
        
    });
    /* Animation*/
     $('.js--wp-1').waypoint(
        (direction) => {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        },
    {
      offset: '50%',
    }
    );
    $('.js--wp-2').waypoint(
        (direction) => {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        },
    {
      offset: '50%',
    }
    );
    
    $('.js--wp-3').waypoint(
        (direction) => {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        },
    {
      offset: '50%',
    }
    );
    
    $('.js--wp-4').waypoint(
        (direction) => {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
        },
    {
      offset: '50%',
    });
    /* Mobile nav*/
    $('.js--nav-icon').resize(function(){
            var nav = $('.js--main-nav');
            var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) { 
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');

        }

    });
    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
    
});