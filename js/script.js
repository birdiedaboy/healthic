$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 350) {
      $(".navbar").addClass("compressed");
    } else {
      $(".navbar").removeClass("compressed");
    }
  });
});

$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 350) {
      $(".navbar-brand-imagen").addClass("enmobil");
    } else {
      $(".navbar-brand-imagen").removeClass("enmobil");
    }
  });
});
$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 350) {
      $(".nav-link").addClass("colorlink");
    } else {
      $(".nav-link").removeClass("colorlink");
    }
  });
});