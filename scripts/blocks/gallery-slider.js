jQuery(function($){

  var gallerySLider = $('.js-gallery-slider');

  if(gallerySLider.length) {
    var destroy = true;

    function slideDetect() {
      if (document.documentElement.clientWidth > 767 && !destroy) {
         gallerySLider.slick('unslick');
         destroy = true;
      } else if (document.documentElement.clientWidth < 767 && destroy) {
         gallerySLider.slick({
          infinite: true,
          arrows: false,
          slidesPerRow: 1,
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          infinite: true,
          dots: true,
          dotsClass: 'gallery__dots dots',
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
             }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
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
