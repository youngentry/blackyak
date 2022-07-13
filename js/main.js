$(function () {
  $("html, body").on("mousewheel", function (e) {
    var height = $(document).scrollTop();
    var d = e.originalEvent.deltaY;
    if (height >= 700) {
      $(".header").css("background", "#e8e2db").css("border", "1px solid #999");
      if (d > 0) {
        $(".header").addClass("on");
        // console.log("내림");
      } else if (d < 0) {
        $(".header").removeClass("on");

        // console.log("올림");
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
  });
});
