$(function () {
  $("html, body").on("mousewheel", function (e) {
    var height = $(document).scrollTop();
    var d = e.originalEvent.deltaY;
    if (height >= 600) {
      $(".header").css("background", "#f2f2f2").css("border-bottom", "1px solid #999");
      if (d > 0) {
        $(".header").addClass("on"); // DOWN!!!
      }
    } else {
      $(".header").css("background", "transparent").css("border-bottom", "none");
      if (d < 0) {
        $(".header").removeClass("on"); // UP!!!
      }
    }
  });
  //   $(window).scroll(function (e) {
  //     console.log(e);
  //   var height = $(document).scrollTop();
  //   if (height >= 700) {
  //     $(".header").addClass("on");
  //   } else {
  //     $(".header").removeClass("on");
  //   }
  //   });

  $(".productSlider").slick({
    arrows: false,
    slidesToShow: 2,
    variableWidth: true,
    touchThreshold: 25,
  });
});
