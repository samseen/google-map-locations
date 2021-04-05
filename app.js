function initMap(){

    // Map option

    var options = {
        center: {lat: 8.8764, lng:7.2437},
        zoom: 10
    }

    //New Map
    map = new google.maps.Map(document.getElementById("map"),options)

    //listen for click on map location

    google.maps.event.addListener(map, "click", (event) => {
        //add Marker
        addMarker({location:event.latLng});
    })

    //Add Markers to Array

    let MarkerArray = [
        {location:{lat: 9.0040, lng: 7.2691},
            imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
            content: `<h2>Abuja City</h2>`
        },
        {location:{lat: 8.9914, lng: 7.3948}},
        {location:{lat: 9.0602, lng: 7.4898},
            content: `<h2>National Mosque</h2>`
        }
    ]

    // loop through marker
    for (let i = 0; i < MarkerArray.length; i++){
        addMarker(MarkerArray[i]);
    }

    // Add Marker

    function addMarker(property){

        const marker = new google.maps.Marker({
            position:property.location,
            map:map,
            //icon: property.imageIcon
        });

        // Check for custom Icon

        if(property.imageIcon){
            // set image icon
            marker.setIcon(property.imageIcon)
        }

        if(property.content){
            const detailWindow = new google.maps.InfoWindow({
                content: property.content
            });

            marker.addListener("mouseover", () =>{
                detailWindow.open(map, marker);
            })
        }
    }
}