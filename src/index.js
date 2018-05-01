import addMarker from './marker';

console.log('Or something')

const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken = "pk.eyJ1IjoiZ2xvYmFsYXJ0MTkiLCJhIjoiY2pnbzNscXZjMGd3czJ4cXZ0enJ4cnU0OCJ9.cbTfjjRZ6_Pcbme46MQqrA"

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.639, 41.8954],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
})

const newMarker = addMarker('Hotel', [-87.639, 41.8954])
newMarker.addTo(map)
const newMarker2 = addMarker('Activity', [-87.739, 41.8954])
newMarker2.addTo(map)
const newMarker3 = addMarker('Restaurant', [-87.539, 41.8954])
newMarker3.addTo(map)
