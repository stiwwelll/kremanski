// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require lightbox
//= require_tree .

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.5000723, lng: 13.4177044},
    zoom: 16
  });
  var image = '/assets/K_Pfeil.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 52.5000723, lng: 13.4177044},
    map: map,
    icon: image
  });
 }

var ready;
ready = function() {

   var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 1000, function () {
            window.location.hash = href;
        });
        return false;
    });

};

$(document).ready(ready);
$(document).on('page:load', ready);