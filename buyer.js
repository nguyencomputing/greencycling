// default map layer
let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [10.8231, 106.6297],
    zoom: 12
});

var Icon = L.Icon.extend({
    options: {
        iconSize: [58, 58],
        iconAnchor: [29, 53],
        popupAnchor: [0,-50]
    }
});
//destination pickers
var pinkIcon = new Icon({iconUrl: 'img/pink.png'});

var clicker = L.marker([10.808271811345692, 106.68797586712518], {icon: pinkIcon}).on('click', onClick).addTo(map);
var clicker2 = L.marker([10.830880802355344, 106.64871111550792], {icon: pinkIcon}).on('click', onClick).addTo(map);
var clicker3 = L.marker([10.805207733130963, 106.64618338287681], {icon: pinkIcon}).on('click', onClick).addTo(map);
var clicker4 = L.marker([10.857452553931422, 106.69600236872952], {icon: pinkIcon}).on('click', onClick).addTo(map);
var clicker5 = L.marker([10.72441648470577, 106.70012230948105], {icon: pinkIcon}).on('click', onClick).addTo(map);
var clicker6 = L.marker([10.783790545940509, 106.49928100081958], {icon: pinkIcon}).on('click', onClick).addTo(map);
var clicker7 = L.marker([10.75939998181019, 106.6475958449971], {icon: pinkIcon}).on('click', onClick).addTo(map);
//popups
clicker.bindPopup("PET Plastic - 1kg <br> Newspaper - 2kg <br>  Cardboard - 2kg");
clicker.on('mouseover', function (e) {
    this.openPopup();
});
clicker2.bindPopup("Newspaper - 5kg <br> Cardboard - 2kg <br>  Scrap Metal - 1kg");
clicker2.on('mouseover', function (e) {
    this.openPopup();
});
clicker3.bindPopup("Aluminium Cans - 1kg <br> Electronics - 2kg");
clicker3.on('mouseover', function (e) {
    this.openPopup();
});
clicker4.bindPopup("Newspaper - 12kg");
clicker4.on('mouseover', function (e) {
    this.openPopup();
});
clicker5.bindPopup("Newspaper - 3kg <br>  Scrap Metal - 4kg");
clicker5.on('mouseover', function (e) {
    this.openPopup();
});
clicker6.bindPopup("Cardboard - 6kg <br> Newspaper - 4kg");
clicker6.on('mouseover', function (e) {
    this.openPopup();
});
clicker7.bindPopup("PET Plastic - 1kg <br> Newspaper - 2kg <br> Cardboard - 3kg <br> Aluminium Cans - 4kg <br> Scrap Metal - 5kg <br> Electronics - 6kg");
clicker7.on('mouseover', function (e) {
    this.openPopup();
});

//starting point
var blueIcon = new Icon({iconUrl: 'img/blue.png'});

var clicker = L.marker([10.8231, 106.6297], {icon: blueIcon}).addTo(map);


    function runDirection(start, end) {
    document.getElementById("map").style = "display:block";
    // recreating new map layer after removal
    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [10.8231, 106.6297],
        zoom: 12
    });
    
    var dir = MQ.routing.directions();

    dir.route({
        locations: [
            start,
            end
        ]
    });

    CustomRouteLayer = MQ.Routing.RouteLayer.extend({
        createStartMarker: (location) => {
            var custom_icon;
            var marker;

            custom_icon = L.icon({
                iconUrl: 'img/blue.png',
                iconSize: [58, 58],
                iconAnchor: [29, 53]
            });

            marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

            return marker;
        },

        createEndMarker: (location) => {
            var custom_icon;
            var marker;

            custom_icon = L.icon({
                iconUrl: 'img/red.png',
                iconSize: [58, 58],
                iconAnchor: [29, 53]
            });

            marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);
                                                    

            return marker;
        }
                                                    
    });
    var Icon = L.Icon.extend({
        options: {
            iconSize: [58, 58],
            iconAnchor: [29, 53],
            popupAnchor: [0,-50]
        }
    });
    //destination pickers
    var pinkIcon = new Icon({iconUrl: 'img/pink.png'});

    var clicker = L.marker([10.808271811345692, 106.68797586712518], {icon: pinkIcon}).on('click', onClick).addTo(map);
    var clicker2 = L.marker([10.830880802355344, 106.64871111550792], {icon: pinkIcon}).on('click', onClick).addTo(map);
    var clicker3 = L.marker([10.805207733130963, 106.64618338287681], {icon: pinkIcon}).on('click', onClick).addTo(map);
    var clicker4 = L.marker([10.857452553931422, 106.69600236872952], {icon: pinkIcon}).on('click', onClick).addTo(map);
    var clicker5 = L.marker([10.72441648470577, 106.70012230948105], {icon: pinkIcon}).on('click', onClick).addTo(map);
    var clicker6 = L.marker([10.783790545940509, 106.49928100081958], {icon: pinkIcon}).on('click', onClick).addTo(map);
    var clicker7 = L.marker([10.75939998181019, 106.6475958449971], {icon: pinkIcon}).on('click', onClick).addTo(map);
    //popups
    clicker.bindPopup("PET Plastic - 1kg <br> Newspaper - 2kg <br>  Cardboard - 2kg");
    clicker.on('mouseover', function (e) {
        this.openPopup();
    });
    clicker2.bindPopup("Newspaper - 5kg <br> Cardboard - 2kg <br>  Scrap Metal - 1kg");
    clicker2.on('mouseover', function (e) {
        this.openPopup();
    });
    clicker3.bindPopup("Aluminium Cans - 1kg <br> Electronics - 2kg");
    clicker3.on('mouseover', function (e) {
        this.openPopup();
    });
    clicker4.bindPopup("Newspaper - 12kg");
    clicker4.on('mouseover', function (e) {
        this.openPopup();
    });
    clicker5.bindPopup("Newspaper - 3kg <br>  Scrap Metal - 4kg");
    clicker5.on('mouseover', function (e) {
        this.openPopup();
    });
    clicker6.bindPopup("Cardboard - 6kg <br> Newspaper - 4kg");
    clicker6.on('mouseover', function (e) {
        this.openPopup();
    });
    clicker7.bindPopup("PET Plastic - 1kg <br> Newspaper - 2kg <br> Cardboard - 3kg <br> Aluminium Cans - 4kg <br> Scrap Metal - 5kg <br> Electronics - 6kg");
    clicker7.on('mouseover', function (e) {
        this.openPopup();
    });
        
    map.addLayer(new CustomRouteLayer({
            directions: dir,
            fitBounds: false
        }));
        
    }


// function that runs when form submitted
function onClick(e) {
    // delete current map layer
    map.remove();

    // getting form data
    start = '10.8231, 106.6297';
    endLat = e.latlng.lat;
    endLat = endLat.toString();
    endLng = e.latlng.lng;
    endLng = endLng.toString();
    end = e.latlng.lat.toString() + ' , ' + e.latlng.lng.toString();

    // run directions function
    runDirection(start, end);
    
}


