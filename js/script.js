$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 350) {
      $(".navbar").addClass("compressed");
    } else {
      $(".navbar").removeClass("compressed");
    }
  });
});