// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
function createSong(title) {

  function createsong(title) {

    

    }

  function submitSong(event) {
    event.preventDefault();
    createSong($("#song_title").val());
    $("#song_title").val(null);

  }

  var newsong = { title: title, completed: false };

  $.ajax({
    type: "POST",
    url: "/song.json",
    data: JSON.stringify({
        song: newSong
    }),
    contentType: "application/json",
    dataType: "json"
  });
}
