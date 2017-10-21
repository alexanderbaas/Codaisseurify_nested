
function nextSongId() {
  return $(".song").length + 1;
}


function submitSong(event) {
  event.preventDefault();

  var title = $("#new-song").val();

  createSong(title);
  $("#new-song").val(null);


  $.ajax({
      type: "POST",
      url: "/songs.json",
      data: JSON.stringify({
          song: "new-song"
      }),
      contentType: "application/json",
      dataType: "json"
    });
  }


  function createSong(title) {
    var checkboxId = "song-" + nextSongId();

    var songItem = $("<li></li>");

    var label = $('<label></label>');
    label.html(title);
    songItem.append(label);

    $("#songlist").append( songItem );


    $("form").bind('submit', submitSong);

  }
