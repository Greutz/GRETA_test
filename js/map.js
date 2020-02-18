// Initialize and add the map
function initMap() {
  // The location of toulon
  var toulon = {lat: 43.124228, lng: 5.928};
  // The map, centered at toulon
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: toulon});
  // The marker, positioned at toulon
  var marker = new google.maps.Marker({position: toulon, map: map});
}
