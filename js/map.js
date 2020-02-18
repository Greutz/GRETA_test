
// Initialize the platform object:
var platform = new H.service.Platform({
    'apikey': '{E-TtPSQvuEIsvIsOzTqA4XxBpI2kaigT46zBgzmWlOs}'
  });

// Obtain the default map types from the platform object
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  maptypes.vector.normal.map,
  {
    zoom: 10,
    center: { lng: 13.4, lat: 52.51 }
  });