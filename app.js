function initMap() {

    // Map Option
    var options = {
        center: {lat: 8.8764, lng: 7.2437},
        zoom: 10
    }

    //New Map
    map = new google.maps.Map(document.getElementById('map'), options);

    //Marker
    /*const marker = new google.maps.Marker({
        position:{lat: 9.0040, lng: 7.2691},
        map: map,
        icon: "https://img.icons8.com/nolan/2x/marker.png"
    });

    //InfoWindow

    const detailWindow = new google.maps.InfoWindow({
        content: `<h2>Our Aiport</h2>`
    });

    marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
    })*/

    // Add Marker
    function addMarker(location) {
        const marker = new google.maps.Marker({
            position:location,
            map: map,
            icon: "https://img.icons8.com/nolan/2x/marker.png"
        });
    }

    addMarker({lat: 9.0040, lng: 7.2691});
    addMarker({lat: 8.9914, lng: 7.3948});
    addMarker({lat: 9.0602, lng: 7.4898});
}