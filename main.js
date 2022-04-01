/** 
*
* -----------------------------------------------------------------------------
* Template : GamFi - Metaverse Web3 IGO/IDO Token Launchpad Figma Template
* Author : uigigs
* Author URI : http://www.uigigs.com/
*
* -----------------------------------------------------------------------------
*
**/
(function ($) {
  ("use strict");
  // sticky menu
  var header = $(".menu-sticky");
  var win = $(window);

  win.on("scroll", function () {
    var scroll = win.scrollTop();
    if (scroll < 1) {
      header.removeClass("sticky");
    } else {
      header.addClass("sticky");
    }

    $("section").each(function () {
      var elementTop = $(this).offset().top - $("#sc-header").outerHeight();
      if (scroll >= elementTop) {
        $(this).addClass("loaded");
      }
    });
  });

  // wow init
  new WOW().init();

  // Counter Up
  var counter = $('.counter');
  if(counter.length) {  
      $('.counter').counterUp({
          delay: 20,
          time: 1500
      });
  }

  // magnificPopup init
    var popupvideos = $(".video-icons");
    if (popupvideos.length) {
      $(".video-icons").magnificPopup({
        disableOn: 10,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }
    
  //window load
  $(window).on( 'load', function() {
      $(".loader_first").delay(500).fadeOut(300);
      $(".circular-spinner").on( 'click', function() {
      $(".loader_first").fadeOut(300);
      })
  })  

  /*-------------------------------------
        OwlCarousel
    -------------------------------------*/
  $(".sc-carousel").each(function () {
    var owlCarousel = $(this),
      loop = owlCarousel.data("loop"),
      items = owlCarousel.data("items"),
      margin = owlCarousel.data("margin"),
      stagePadding = owlCarousel.data("stage-padding"),
      autoplay = owlCarousel.data("autoplay"),
      autoplayTimeout = owlCarousel.data("autoplay-timeout"),
      smartSpeed = owlCarousel.data("smart-speed"),
      dots = owlCarousel.data("dots"),
      nav = owlCarousel.data("nav"),
      navSpeed = owlCarousel.data("nav-speed"),
      xsDevice = owlCarousel.data("mobile-device"),
      xsDeviceNav = owlCarousel.data("mobile-device-nav"),
      xsDeviceDots = owlCarousel.data("mobile-device-dots"),
      smDevice = owlCarousel.data("ipad-device"),
      smDeviceNav = owlCarousel.data("ipad-device-nav"),
      smDeviceDots = owlCarousel.data("ipad-device-dots"),
      smDevice2 = owlCarousel.data("ipad-device2"),
      smDeviceNav2 = owlCarousel.data("ipad-device-nav2"),
      smDeviceDots2 = owlCarousel.data("ipad-device-dots2"),
      mdDevice = owlCarousel.data("md-device"),
      centerMode = owlCarousel.data("center-mode"),
      HoverPause = owlCarousel.data("hoverpause"),
      mdDeviceNav = owlCarousel.data("md-device-nav"),
      mdDeviceDots = owlCarousel.data("md-device-dots");
      owlCarousel.owlCarousel({
      loop: loop ? true : false,
      items: items ? items : 4,
      lazyLoad: true,
      center: centerMode ? true : false,
      autoplayHoverPause: HoverPause ? true : false,
      margin: margin ? margin : 0,
      //stagePadding: (stagePadding ? stagePadding : 0),
      autoplay: autoplay ? true : false,
      autoplayTimeout: autoplayTimeout ? autoplayTimeout : 1000,
      smartSpeed: smartSpeed ? smartSpeed : 250,
      dots: dots ? true : false,
      nav: nav ? true : false,
      navText: [
        "<i class='flaticon flaticon-left-arrow'></i>",
        "<i class='flaticon flaticon-right-arrow'></i>",
      ],
      navSpeed: navSpeed ? true : false,
      responsiveClass: true,
      responsive: {
        0: {
          items: xsDevice ? xsDevice : 1,
          nav: xsDeviceNav ? true : false,
          dots: xsDeviceDots ? true : false,
          center: false,
        },
        768: {
          items: smDevice2 ? smDevice2 : 2,
          nav: smDeviceNav2 ? true : false,
          dots: smDeviceDots2 ? true : false,
          center: false,
        },
        992: {
          items: smDevice ? smDevice : 3,
          nav: smDeviceNav ? true : false,
          dots: smDeviceDots ? true : false,
          center: false,
        },
        1025: {
          items: mdDevice ? mdDevice : 4,
          nav: mdDeviceNav ? true : false,
          dots: mdDeviceDots ? true : false,
        },
      },
    });
  });

    //expeander Class
        $('.expeander-iteam-area').on("click", function () {
        $(this).parent().toggleClass('expeand-bottom-content')
    });


    //canvas menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander,  #nav-close2').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }

    /******** Mobile Menu Start ********/
    $('.mobile-navbar-menu a').each(function(){
       var href = $(this).attr("href");
       if(href ="#"){
           $(this).addClass('hash');
       }else{
           $(this).removeClass('hash');
       }
    });

    $.fn.menumaker = function(options) {
     var mobile_menu = $(this), settings = $.extend({
       format: "dropdown",
       sticky: false
     }, options);

       return this.each(function() {
       mobile_menu.find('li ul').parent().addClass('has-sub');
       var multiTg = function() {
           mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
           mobile_menu.find(".hash").parent().addClass('hash-has-sub');
           mobile_menu.find('.submenu-button').on('click', function() {
               $(this).toggleClass('submenu-opened');
               if ($(this).siblings('ul').hasClass('open-sub')) {
                   $(this).siblings('ul').removeClass('open-sub').hide('fadeIn');
                   $(this).siblings('ul').hide('fadeIn');                                     
               }
               else {
                   $(this).siblings('ul').addClass('open-sub').hide('fadeIn');
                   $(this).siblings('ul').slideToggle().show('fadeIn');
               }
           });
       };

       if (settings.format === 'multitoggle') multiTg();
       else mobile_menu.addClass('dropdown');
       if (settings.sticky === true) mobile_menu.css('position', 'fixed');
      var resizeFix = function() {
           if ($( window ).width() > 991) {
               mobile_menu.find('ul').show('fadeIn');
               mobile_menu.find('ul.sub-menu').hide('fadeIn');
           }          
       };
       resizeFix();
       return $(window).on('resize', resizeFix);
       });
   };
   
   $(document).ready(function(){
       $("#mobile-navbar-menu").menumaker({
       format: "multitoggle"
       });
   });

})(jQuery);
