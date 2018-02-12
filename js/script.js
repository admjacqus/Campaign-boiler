(function($) {
  $(document).ready(function() {

// scroll to hash on click
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    var is_mobile = false;

    function checkMob() {
      if ($('.hide-on-mob').css('display') == 'none') {
        is_mobile = true;
        console.log("mob");
        $('.menu a:nth-child(1)').html("hash");
        $('.menu a:nth-child(2)').html("lookbook");
        $('.menu a:nth-child(3)').html("shop now");
      } else {
        is_mobile = false;
        $('.menu a:nth-child(1)').html("got to hash");
        $('.menu a:nth-child(2)').html("view the lookbook");
        $('.menu a:nth-child(3)').html("shop the collection");
      }
    };

    //fix menu
    function checkOffset() {
      var menu = $(".menu"),
          a = $(document).scrollTop() + window.innerHeight,
          b = $(".footer-container").offset().top;

        // c = $("#lookbook").offset().top,
        // videobg = $("#video-background");

      if (a > b) {
        menu.removeClass("fixedHeader").addClass("clearHeader");
        menu.slideDown(3000);
      } else {
        menu.removeClass("clearHeader").addClass("fixedHeader");
        menu.slideDown(3000);
      };

      // if (a > c) {videobg.fadeOut('slow');} else {videobg.fadeIn('slow');}
    };

    checkOffset();
    checkMob();

    $(window).scroll(function() {
      checkOffset();
    });
    $(window).resize(function() {
      checkMob();
    });

    $(window).load(function() {
      $.cloudinary.responsive();
      $('.preloader').fadeOut('slow', function() {
        $(this).remove();
      });

      // to top right away
      if (window.location.hash) scroll(0, 0);
      // void some browsers issue
      setTimeout(function() {
        scroll(0, 0);
      }, 1);

      // *only* if we have anchor on the url
      if (window.location.hash) {
        // smooth scroll to the anchor id
        $('html, body').animate({
          scrollTop: $(window.location.hash).offset().top + 'px'
        }, 1000);
      } 

    });
  });
})(jQuery);