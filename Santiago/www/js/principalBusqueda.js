long = 42.876;
lat = -8.544;
var map = L.map('map').setView([long, lat], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGdvbnphbGV6cyIsImEiOiJjbDJlaDM4M24wMG5xM2NuenMwY2wxbXl1In0.DaC-3gn9rsRvgYBOYhgPjA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

let m1 = L.marker([long + 0.009, lat + 0.009]);
m1.bindPopup(L.popup({maxWidth:500}).setContent("Mirador Santiago Plaza"));
m1.addTo(map);

let m2 = L.marker([long + 0.03, lat + 0.015]);
m2.bindPopup(L.popup({maxWidth:500}).setContent("Albergue A costa"));
m2.addTo(map);

let m3 = L.marker([long + 0.035, lat + 0.02]);
m3.bindPopup(L.popup({maxWidth:500}).setContent("Albergue do Cebreiro"));
m3.addTo(map);

let m4 = L.marker([long + 0.045, lat + 0.045]);
m4.bindPopup(L.popup({maxWidth:500}).setContent("Albergue Carmen Ramos"));
m4.addTo(map);

let m5 = L.marker([long + 0.06, lat + 0.06]);
m5.bindPopup(L.popup({maxWidth:500}).setContent("Mirador Praias do Mar"));
m5.addTo(map);