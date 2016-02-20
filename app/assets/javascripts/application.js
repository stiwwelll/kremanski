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

$(function() {

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

  $("#contact-form-submit").on("click", function(event) {
    var params;
    event.preventDefault();
    
    params = { name: $("#name").val(), email: $("#email").val(), message: $("#message").val() };

    $('#contact-form-submit').on('click', function () {
      $(this).prop('disabled', true);

      var request = $.ajax({
        url: "main_pages/contact_form",
        data: params,
        method: "POST"
      });

      request.done(function(response) {
        $.notify({
          // options
            icon: 'fa fa-coffee',
            message: response.message
            },{
          // settings
            type: response.status,
            placement: {
              from: "bottom",
              align: "left"
            },
        });
      });
    });
  });

  $( ".impressum" ).click(function() {
    $( "#impressum-container" ).fadeToggle( "slow", "linear");
  });

  $(".carousel-inner").swipe( {
    //Generic swipe handler for all directions
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      $(this).parent().carousel('prev');
      $(".swipe-icon").css("display","none");
    },
    swipeLeft: function() {
      $(this).parent().carousel('next');
      $(".swipe-icon").css("display","none");
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold:0
  });
});






