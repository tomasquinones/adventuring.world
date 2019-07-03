function addMap (){
    mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXMtcXVpbm9uZXMiLCJhIjoiY2p4aTBtYm8xMGs3OTNzbXYzZzQ4N2x3bCJ9.opEFsTazWexbWHalZBNPcg';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', 
    // style: 'mapbox://styles/tomas-quinones/cjxl62axj0lad1cnr2olpnc1o',
    // style: 'mapbox://styles/tomas-quinones/cjxl6ajgc0lj11cmimwy733j2',
    center: [-122.672448, 45.5232677], // starting position
    zoom: 3, // starting zoom
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl({showCompass: true}), 'top-left');

    map.addControl(new mapboxgl.ScaleControl({
        maxWidth: 200,
        unit: 'imperial'
    }));

    // disable map rotation using right click + drag
    // map.dragRotate.disable();

    // disable map rotation using touch rotation gesture
    // map.touchZoomRotate.disableRotation();

    map.keyboard.enable();
  }