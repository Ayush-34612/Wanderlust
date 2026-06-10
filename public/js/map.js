
const map = new mapboxgl.Map({
    accessToken: maptoken,
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center: JSON.parse(coordinates), // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(JSON.parse(coordinates))
    .addTo(map);