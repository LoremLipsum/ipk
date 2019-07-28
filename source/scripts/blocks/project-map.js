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
