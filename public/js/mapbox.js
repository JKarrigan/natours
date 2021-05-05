/* eslint-disable */

export const displayMap = (locations) => {
    mapboxgl.accessToken = "pk.eyJ1IjoiamthcnJpZ2FuIiwiYSI6ImNrbmtzNWNubjAyczEyb285dDBzbGQxdWIifQ.nVfHg_J0FX6QiDeGQ5yRJw";

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/jkarrigan/cknkscg1d0utl17r0abp9vr4g',
scrollZoom: false
// center: [-118.113491,33.111745],
// zoom: 5,
// interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    // Create marker
    const el = document.createElement("div");
    el.className = "marker";

    // Add marker
    new mapboxgl.Marker({
        element: el,
        anchor: "bottom"
    })
    .setLngLat(loc.coordinates)
    .addTo(map);

    // Add popup
    new mapboxgl.Popup({
        offset: 40
    })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
        .addTo(map);


    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
    padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100 
    }
});

}