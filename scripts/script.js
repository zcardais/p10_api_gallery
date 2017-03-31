$(document).ready(function() {


 $('button').click(function () {
    // highlight the button
    // not AJAX, just cool looking
    $("button").removeClass("selected");
    $(this).addClass("selected");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready


// SPOTIFY API CODE
// $(document).ready(function() {
//
//  var spotifyAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//
//  $('form').submit(function (evt) {
//     var $submitButton = $('#submit');
//     var $searchField = $('#search');
//     evt.preventDefault();
//     $searchField.prop("disabled",true);
//     $submitButton.attr("disabled", true).val("searching....");
//     var animal = $searchField.val();
//     $('#photos').html('');
//     $.getJSON(spotifyAPI, {
//         tags: animal,
//         format: "json"
//       },
//     function(data){
//       var photoHTML = '';
//       if (data.items.length > 0) {
//         $.each(data.items,function(i,photo) {
//           photoHTML += '<li class="grid-25 tablet-grid-50">';
//           photoHTML += '<a href="' + photo.link + '" class="image">';
//           photoHTML += '<img src="' + photo.media.m + '"></a></li>';
//         }); // end each
//       } else {
//         photoHTML = "<p>No photos found that match: " + animal + ".</p>"
//       }
//       $('#photos').html(photoHTML);
//       $searchField.prop("disabled", false);
//       $submitButton.attr("disabled", false).val("Search");
//     }); // end getJSON
//
//   }); // end click
//
// }); // end ready
