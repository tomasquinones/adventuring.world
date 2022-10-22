function addMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXMtcXVpbm9uZXMiLCJhIjoiY2w5amZlM3E0MDI0YTQwcGh4b2hmeDYzZSJ9.Wt_M7K6EzoCkWzakMYH3cw';
    var myMap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-122.672448, 45.5232677], // starting position
        zoom: 4, // starting zoom
        keyboard: true,
        trackResize: true,
    });

    myMap.addControl(new mapboxgl.NavigationControl({ showCompass: true }), 'top-left');
    myMap.addControl(new mapboxgl.ScaleControl({ maxWidth: 500, unit: 'imperial' }));


    //let myPlaces = {"Banff": [-115.56982, 51.17622],
    //                "Portland": [-122.672448, 45.5232677],
    //                "Tokyo": [139.817413, 35.672855],
    //                "Death Valley": [-116.8169955, 36.246618],
    //                "Missoula, Mt": [-113.9939982, 46.872146]
    //};

    let myPlaces = [[-115.56982, 51.17622],
    [-122.672448, 45.5232677],
    [139.817413, 35.672855],
    [-116.8169955, 36.246618],
    [-113.9939982, 46.872146],
    [-74.0032736, 40.7282466]
    ];


    for (i = 0; i < myPlaces.length; i++) {
        new mapboxgl.Marker().setLngLat(myPlaces[i]).addTo(myMap);
    }

};
