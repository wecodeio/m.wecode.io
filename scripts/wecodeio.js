function drawPreviousMessage(){
  $(".previous").children().detach();
  $(".previous").append($("<h4>").text(localStorage.getItem("name")));
  $(".previous").append($("<p>").append("<small>").addClass("small").text(localStorage.getItem("email")));
  $(".previous").append($("<p>").text(localStorage.getItem("comment")));

  // $(".do-load").parent().show();
  // $(".do-flush").parent().show();
}

$(function(){

  if (localStorage.getItem("name")) {
    drawPreviousMessage();
  }

  $(".do-submit").on("click", function(){

    if(typeof(Storage)!=="undefined") {
      localStorage.setItem("name", $("#name").val());
      localStorage.setItem("email", $("#email").val());
      localStorage.setItem("comment", $("#comment").val());

      drawPreviousMessage();

      $("#name").val("");
      $("#email").val("");
      $("#comment").val("");

    } else {
      console.log("Current browser doesn't support Local Storage");
    }
  });

  $(".do-load").on("click", function(){
    $("#name").val(localStorage.getItem("name"));
    $("#email").val(localStorage.getItem("email"));
    $("#comment").val(localStorage.getItem("comment"));
  });

  $(".do-flush").on("click", function(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("comment");

    $(".previous").children().detach();
    $(".previous").append($("<p>").text("No previous messages to load"));

    // $(".do-load").parent().hide();
    // $(".do-flush").parent().hide();
  });

  $(".do-redirect").on("click", function() {
    $.mobile.changePage($(this).data("target"));
  })

});