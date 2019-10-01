
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function cf() {

    var error = false;

    document.getElementById('firstnamelabel').style.color = "#004378";
    document.getElementById('lastnamelabel').style.color = "#004378";
    document.getElementById('emaillabel').style.color = "#004378";
    document.getElementById('phonelabel').style.color = "#004378";
    document.getElementById('messagelabel').style.color = "#004378";
    document.getElementById('subjectlabel').style.color = "#004378";

    if (document.getElementsByName('firstname')[0].value == "") {
        document.getElementById('firstnamelabel').style.color = "#ff2e00";
        error = true;
    }

    if (document.getElementsByName('lastname')[0].value == "") {
        document.getElementById('lastnamelabel').style.color = "#ff2e00";
        error = true;
    }

    if (!validateEmail(document.getElementsByName('email')[0].value)) {
        document.getElementById('emaillabel').style.color = "#ff2e00";
        error = true;
    }

    if (document.getElementsByName('phone')[0].value == "") {
        document.getElementById('phonelabel').style.color = "#ff2e00";
        error = true;
    }

    if (document.getElementsByName('message')[0].value == "") {
        document.getElementById('messagelabel').style.color = "#ff2e00";
        error = true;
    }

    if (document.getElementsByName('subject')[0].value == "-1") {
        document.getElementById('subjectlabel').style.color = "#ff2e00";
        error = true;
    }

    if (!error)
        return true;
    else
        return false;

}

var myStyles =[
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            { visibility: "on" }
        ]
    }
];
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 41.1097, lng: 29.0223};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: uluru, mapTypeId: google.maps.MapTypeId.ROADMAP,styles: myStyles, disableDefaultUI: true, });

    var contentString = 'ICRYPEX Crypto Exchange';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var image = 'https://www.icrypex.com/assets/img/global/svg/Google_Maps_Pin.svg';
    var marker = new google.maps.Marker({position: uluru, map: map, title: 'ICRYPEX' , icon: image});
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    marker.setMap(map);
}