var map = new GMaps({
    el: '#map',
    lat: 51.5116713,
    lng: -0.126884
});

map.addMarker({
    lat: 51.5116713,
    lng: -0.126884,
    title: 'Clos Maggiore'
});

map.setZoom(14);
