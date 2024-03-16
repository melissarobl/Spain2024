let spainCoordinates = [39.9862, -5.350]
let zoomLevel = 6 //1 = whole world to 20 = city blocks

let map = L.map('spain2024-map').setView(spainCoordinates, zoomLevel)
//variable L created in Leaflet file in HTML  //'college-map' tells you where map is drawn (inside div with that name)

//mapbox, maps.stamen.com, openStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


cities =  [
    {"name": "Ubeda", "photos": "ubeda.html", "coordinates": [38.0114, -3.3712] },
    {"name": "Sevilla", "photos": "sevilla.html", "coordinates": [37.3891, -5.9845] },
    {"name": "Madrid", "photos": "madrid.html", "coordinates": [40.417, -3.7026] },
    {"name": "Baeza", "photos": "baeza.html", "coordinates": [37.9967, -3.4676] },

]

cities.forEach(function(cityVisited){
    let markerText = `<b>${cityVisited.name}</b><br><a href="${cityVisited.photos}">Photos</a>`
    L.marker(cityVisited.coordinates).bindPopup(markerText).addTo(map)  //loop creating each marker
})

// let metroAreaCircle = L.circle(spainCoordinates, {
//     color: 'green',
//     radius: 1000000,
//     fillOpacity: 0.1
// })
//     .bindPopup('Spain')
//     .addTo(map)