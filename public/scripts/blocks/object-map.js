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
