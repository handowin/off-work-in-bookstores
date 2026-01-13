var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -1
});

var width = 3000;
var height = 2000;

var bounds = [[0,0], [height, width]];

L.imageOverlay('images/map.png', bounds).addTo(map);
map.fitBounds(bounds);

L.marker([1000, 1200]).addTo(map)
  .bindPopup(`
    <h3>Story Point 01</h3>
    <p>This is where the story begins.</p>
  `);
