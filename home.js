// Initialize the map
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.0060 }, // Initial map center coordinates (New York City)
    zoom: 14, // Initial zoom level
  });

  // Create a marker on the map
  const marker = new google.maps.Marker({
    position: { lat: 40.7128, lng: -74.0060 }, // Initial marker position (New York City)
    map: map,
    title: "Marker Title",
  });
}

// Function to change the marker location
function changeMarkerLocation() {
  // Get the existing marker
  const marker = map.getMarkers()[0]; // Assuming only one marker is on the map

  // Change the marker position to a new location
  marker.setPosition({ lat: NEW_LATITUDE, lng: NEW_LONGITUDE }); // Replace NEW_LATITUDE and NEW_LONGITUDE with the new coordinates
}
