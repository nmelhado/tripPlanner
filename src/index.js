console.log("It's alive!")

const mapboxgl = require("mapbox-gl");
const { buildMarker, disectForm } = require('./marker');

mapboxgl.accessToken = "pk.eyJ1Ijoibm1lbGhhZG8iLCJhIjoiY2prZnVqM3hyNHM5OTN3bWw2dXAwdWdzcSJ9.Z03hgpW0rDTUdCMDqtx-hg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const marker = new mapboxgl.Marker()
  .setLngLat([-73.960819,40.657819])
  .addTo(map);

// const hotel = buildMarker('hotel',[-74.009151, 40.71]);

// hotel.addTo(map);

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(https://static.planetminecraft.com/files/avatar/415838.gif)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);