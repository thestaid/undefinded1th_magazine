// Google map part
var map;
var infowindow;

function initMap() {
    //locations Setting
    var location = {
        title: 'Acorn Academy',
        location: {lat: 37.568798, lng: 126.998961},
        imgURL: "./images/contact/donga.png"
    };

    // Create map object
    map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.568798, lng: 126.998961},
		zoom: 14,
		mapTypeControl: false
	});

    infowindow = new google.maps.InfoWindow();

    // Marker Icon
    var defaultIcon = makeMarkerIcon('0091ff');

    // Create Map marker
    var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: location.location,
        title: location.title,
        icon: defaultIcon
    });

    marker.addListener('click', function() {
        infowindow.setContent("<div><h4>"+location.title+"</h4><p>동아빌딩 15층 Acorn Academy</p><img src='"+location.imgURL+"'style='width:70%;'></div>")
        infowindow.open(map,this);
    })

    function makeMarkerIcon(markerColor) {
		var markerImage = new google.maps.MarkerImage(
			'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
			'|40|_|%E2%80%A2',
			new google.maps.Size(21, 34),
			new google.maps.Point(0, 0),
			new google.maps.Point(10, 34),
			new google.maps.Size(21,34));
		return markerImage;
	}
}

// 수현 추가 START 161021

// MENUBTN START
$("#top-menu-icon").click(function(){
    $("#contact-menuLowRank").toggleClass("menuLowRankActive");
});
// MENUBTN START

// 수현 추가 END 161021
