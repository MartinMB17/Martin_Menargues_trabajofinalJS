

// Inicializar el mapa centrado en Alicante 
var map = L.map('map').setView([38.343886, -0.489981], 13); 

// Cargar el mapa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar un marcador en la ubicación especificada
L.marker([38.344025, -0.490074]).addTo(map)
    .bindPopup('Aquí se ubica MARTIN´S RENTING')
    .openPopup();

// Función para calcular la ruta y dibujarla en el mapa
function calculateRoute(userLocation) {
    // Crear una instancia del control de enrutamiento
    var control = L.Routing.control({
        waypoints: [
            L.latLng(userLocation),   
            L.latLng(businessLocation) 
        ],
        routeWhileDragging: true, 
        createMarker: function() { return null; } 
    }).addTo(map);
    
    // Obtener la ruta y dibujarla
    control.on('routesfound', function(e) {
        var routes = e.routes;
        var route = routes[0];

        // Crear una línea que represente la ruta
        var polyline = L.polyline(route.coordinates, { color: 'red', weight: 10 ,height: 5 }).addTo(map);
        
        // Centrar el mapa en la ruta
        map.fitBounds(polyline.getBounds());
    });
}

// Función para obtener la ubicación del usuario
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = [position.coords.latitude, position.coords.longitude]; 
            L.marker(userLocation).addTo(map) 
                .bindPopup('Tu ubicación')
                .openPopup();
            map.setView(userLocation, 13); 
            calculateRoute(userLocation); // 
        }, function() {
            alert('Error al obtener la ubicación del usuario.');
        });
    } else {
        alert('La geolocalización no es soportada por este navegador.');
    }
}

// Preguntar al usuario si puede obtener su ubicación
if (confirm('¿Permites que la página obtenga tu ubicación?')) {
    getUserLocation();
} else {
    alert('No se puede mostrar la ruta sin la ubicación del usuario.');
}