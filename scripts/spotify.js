$(document).ready(function() {
  // Spotify API Code April 10, 2017

  var templateSource = $('#results-template').html();
  var template = Handlebars.compile(templateSource);
  var resultsPlaceholder = document.getElementById('results');

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

    $('#search-form').on("submit", function(e) {
      e.preventDefault();
      searchAlbums($('#query').val());
    });


}); // end ready











// Sample Code from 3/31 Mentor Session
  // const searchString = $('#form').val.searchify;
  //
  // const searchify = () => {
  //   // take search string and change it into api-friendly format
  // }
  //
  // let apiMaker = 'https://api.spotify.com/v1/search?q=${searchString}&type=${searchType}';
