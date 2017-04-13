$(document).ready(function() {
  // Spotify API Code April 10, 2017

  var templateSource = document.getElementById('results-template').innerHTML,
    template = Handlebars.compile(templateSource),
    resultsPlaceholder = document.getElementById('results');
    // playingCssClass = 'playing',
    // audioObject = null;

var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template(response);
        }
    });
};

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.getElementById('query').value);
}, false);




  // SPOTIFY API CODE April 03, 2017
  // $( "form" ).on( "submit", function( event ) {
  //   event.preventDefault();
  //   console.log( $( this ).serialize() );
  //   console.log( $( "select" ).val() );
  // });
  //
  // $("button").click(function() {
  //   $("button").removeClass("selected");
  //   $(this).addClass("selected");
  //
  //   // the AJAX part
  //
  //   var spotifyAPI = "https://api.spotify.com/v1/search";
  //   var query = $(this).text();
  //   console.log(query);
  //
  //   var spotifyOptions = {
  //     q: query,
  //     type: "artist"
  //   };
  //   console.log(spotifyOptions);
  //
  // }) //end click

}); // end ready

// Sample Code from 3/31 Mentor Session
  // const searchString = $('#form').val.searchify;
  //
  // const searchify = () => {
  //   // take search string and change it into api-friendly format
  // }
  //
  // let apiMaker = 'https://api.spotify.com/v1/search?q=${searchString}&type=${searchType}';
