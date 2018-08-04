const mapboxgl = require("mapbox-gl");

const buildMarker = (type,location) => {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if(type === 'activity') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  } else if (type === 'hotel') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === 'restaurant') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  return new mapboxgl.Marker(markerDomEl).setLngLat(location);
}

const disectForm = (arr) => {
  buildMarker(arr[0],arr[1])
}

module.exports = {
  buildMarker,
  disectForm
};