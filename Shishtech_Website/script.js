$(document).mousemove(function(e) {
    var X = e.pageX;
    var Y = e.pageY;
    $(".cursor").css(
      "background",
      "radial-gradient(circle at " +
        X +
        "px " +
        Y +
        "px,transparent, white 30%)"
    );
  });