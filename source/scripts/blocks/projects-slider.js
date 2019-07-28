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
