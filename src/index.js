console.log('Or something')

const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken = "pk.eyJ1IjoiZ2xvYmFsYXJ0MTkiLCJhIjoiY2pnbzNscXZjMGd3czJ4cXZ0enJ4cnU0OCJ9.cbTfjjRZ6_Pcbme46MQqrA"

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.639, 41.8954],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
})

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-87.639, 41.8954]).addTo(map)
