jQuery(function($){
  var $feildTel = $('input[type="tel"]');

  if($feildTel.length) {
    $feildTel.mask("+7 (999) 999-99-99");
  }
});

jQuery(function($){
  var $mainNavBtn = $('.js-main-nav-btn');

  if($mainNavBtn) {
    var $mainNavPanel = $('.js-main-nav-panel');
    var ESC = 27;

    if(+$(window).outerWidth() < 768) {
      $mainNavBtn.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $mainNavPanel.toggleClass('active');
      });

      $(document).on('keyup', function() {
        if (e.keyCode === ESC) {
          $mainNavPanel.removeClass('active');
          $mainNavBtn.removeClass('active');
        }
      });
    }
  }

});

jQuery(function($){

  var projectsSLider = $('.js-projects-slider');

  if(projectsSLider.length) {
    var destroy = true;

    function slideDetect() {
      if (document.documentElement.clientWidth < 768 && !destroy) {
         projectsSLider.slick('unslick');
         destroy = true;
      } else if (document.documentElement.clientWidth > 767 && destroy) {
         projectsSLider.slick({
          infinite: true,
          arrows: true,
          slidesPerRow: 1,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          autoplayHoverPause: true,
          swipeToSlide: true,
          prevArrow: '<button class="control control--prev projects__prev" type="button"></button>',
          nextArrow: '<button class="control control--next projects__next" type="button"></button>',
        });

        destroy = false;
      }
    }

    slideDetect();

    $(window).resize(function() {
       slideDetect()
    });
  }

});
