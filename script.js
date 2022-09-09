var map = new OSMBuildings({
  container: 'map',
  position: { latitude: 3.1474285, longitude: 101.6840434 },
  zoom: 13,
  minZoom: 13,
  maxZoom: 20,
  tilt: 30,
  //rotation: 300,
  
  effects: ['shadows']
  
});


map.addMapTiles('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png');
map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/dixw8kmb/tile/{z}/{x}/{y}.json');

let rotation = 0;

function rotate () {
  map.setRotation(rotation);
  rotation = (rotation+1) % 360;
  requestAnimationFrame(rotate);
}

// rotate (); // uncomment to start rotation