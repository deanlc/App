mapboxgl.accessToken = 'pk.eyJ1Ijoib25hZWQiLCJhIjoiY2l2ZG1jbTJ4MDAxYTJvcHBmZHBsNGU0YiJ9.QzImoZguDmRFN03fkpxDDw';

var map = new mapboxgl.Map(
{
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [long, lat] format
  center: [0.005353, 51.501597],
  // initial zoom
  zoom: 10
});