// de ingevulde waarde van de text-field met id='new-song' wordt opgeslagen in 'title'
var title = $("#new-song").val();

function createSong(title) {

  // checkboxId neemt de songId (number of songs + 1) en plakt het achter "song-">"song-7"
  var checkboxId = "song-" + nextSongId();
  // jquery grijpt direct alle listItems uit de DOM
  var songItem = $("<li></li>");
  // jquery grijpt direct alle labels uit de DOM
  var label = $('<label></label>');

  label.html(title);
  var song = songItem.append(label);

  $("#songlist").append( song );

  $("form").submit(submitSong(event));
}

function nextSongId() {
// jquery grijpt alle elementen met class 'song' en telt de 'length' en voegt er 1 aan toe
  var songId = $(".song").length + 1;
}
function submitSong(event) {
  // preventDefault makes that the page wont reload after every event
  event.preventDefault();
  // de ingevulde waarde van de text-field met id='new-song' wordt opgeslagen in 'title'

  // de functie createSong wordt opgeroepen en krijgt de waarde van 'title'
  createSong(title);
  // de waarde van de textfield met Id='new-song' wordt gereset
  $("#new-song").val(null);

  $.ajax({
      type: "POST",
      url: "/artiss.json",
      data: JSON.stringify({
          song: "new-song"
      }),
      contentType: "application/json",
      dataType: "json"
    });
  }
