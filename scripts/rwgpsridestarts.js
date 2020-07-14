/* rwgps ride starts
Shows the ride starts for Rides > 20 miles
- Not affected by Privacy Zones
- Greater than 20 miles in length-

https://www.findmespot.com/en-us/support/spot-gen3/get-help/general/spot-api-support
*/
// get_user_info = {BASE_URL}/users/current.json?email={EMAIL}&password={PASSWORD}&apikey={API_KEY}&version=2')
// 
const AUTH_TOKEN = '26a71f681dceeca317b8b092395ef839'

const API_KEY = 'aa49d17b'
const EMAIL = 'tomas.quinones@gmail.com'
const PASSWORD = 'GetRiding1!'
const URL = `https://ridewithgps.com/user/45898/trips.json?auth_token=${AUTH_TOKEN}email=${EMAIL}&password=${PASSWORD}&apikey=${API_KEY}&version=2`;

let myData = {};

const req = new XMLHttpRequest();





req.open('GET', URL, true);
req.send();

myData = JSON.parse(req.responseText);



function addMap(){
    mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXMtcXVpbm9uZXMiLCJhIjoiY2p4aTBtYm8xMGs3OTNzbXYzZzQ4N2x3bCJ9.opEFsTazWexbWHalZBNPcg';
    let myMap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-122.672448, 45.5232677], // starting position
        zoom: 8, // starting zoom
        keyboard: true,
        trackResize: true,
    });

    myMap.addControl(new mapboxgl.NavigationControl({showCompass: true}), 'top-left');
    myMap.addControl(new mapboxgl.ScaleControl({maxWidth: 500,unit: 'imperial'}));

    for (let i = 0; i < myData["results"].length; i++) {
        new mapboxgl.Marker().setLngLat(myData["results"][i]["first_lng"], myData["results"][i]["first_lat"] ).addTo(myMap);
     }
};