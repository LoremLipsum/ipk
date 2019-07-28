jQuery(function($){
  $('.js-fancybox').fancybox();
});

jQuery(function($){
  var $feildTel = $('input[type="tel"]');

  if($feildTel.length) {
    $feildTel.mask("+7 (999) 999-99-99");
  }
});

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
  var objectMap = $('.js-object-map');

  if(objectMap.length) {
    if ($(window).outerWidth() > 767) {

      ymaps.ready(function () {
        var map = new ymaps.Map('object_map', {
            center: [59.939095, 30.315868],
            zoom: 10,
            scrollZoom: false,
            controls: [],
          }, {
              searchControlProvider: 'yandex#search',
              yandexMapDisablePoiInteractivity: true,
          }), menu = $('<ol class="map-list"/>');

          map.behaviors.disable('scrollZoom');
          map.controls.add('zoomControl');
          var roadcontrolState = map.controls.get('zoomControl').state.get('size');
          map.controls.get('zoomControl').options.set('size', 'small');

          var collection = new ymaps.GeoObjectCollection(null, { preset: projectMapData.style });

          map.geoObjects.add(collection);

          var createMenu = function (item) {
            var placemark = new ymaps.Placemark( item.coords, { balloonContent: item.balloonContent });
            collection.add(placemark);

            var menuItem = $('<li class="map-list__item"><button type="button" class="map-list__button js-button-pin">' + item.text + '</button></li>');
            menuItem
              .appendTo(menu)
              .find('.js-button-pin')
              .on('click', function() {
                var btns = objectMap.find('.js-button-pin');

                btns.parent().removeClass('active');
                $(this).parent().toggleClass('active');

                if (!placemark.balloon.isOpen()) {
                    placemark.balloon.open();
                } else {
                    placemark.balloon.close();
                }
                return false;
              });
          }

          for (var i = 0; i < projectMapData.items.length; i += 1) {
            createMenu(projectMapData.items[i])
          }

          menu.appendTo($('.js-map-list'));
          map.setBounds(map.geoObjects.getBounds());

        });
      }
    }
});

jQuery(function($){
  var projectMap = $('.js-project-map');

  if(projectMap.length) {
    ymaps.ready(function () {
        var map = new ymaps.Map('project_map', {
          center: projectMapData.coords,
          zoom: projectMapData.zoom,
          scrollZoom: false,
          controls: []
        }, {
          searchControlProvider: 'yandex#search'
        }),
        Placemark = new ymaps.Placemark(projectMapData.coords, {
          balloonContent: projectMapData.balloonContent
        }, {
          preset: 'islands#blueIcon'
        });

        map.geoObjects.add(Placemark);
        map.behaviors.disable('scrollZoom');
        map.controls.add('zoomControl');
        var roadcontrolState = map.controls.get('zoomControl').state.get('size');
        map.controls.get('zoomControl').options.set('size', 'small');
      });
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
