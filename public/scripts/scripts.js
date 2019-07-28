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

          var collection = new ymaps.GeoObjectCollection(null, { preset: pl.style });

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

          for (var i = 0; i < pl.items.length; i += 1) {
            createMenu(pl.items[i])
          }

          menu.appendTo($('.js-map-list'));
          map.setBounds(map.geoObjects.getBounds());

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
