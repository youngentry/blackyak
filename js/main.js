$(function () {
  $("html, body").on("mousewheel", function (e) {
    var sct = $(document).scrollTop();
    var innovation = $(".innovationWrap").offset();
    var stickyBoxWall = $(".box-wall").offset();
    var d = e.originalEvent.deltaY;
    if ((sct >= 600 && sct < innovation.top - 200) || sct > stickyBoxWall.top - 500) {
      $(".header").css("background", "#f2f2f2").css("border-bottom", "1px solid #999");
      if (d > 0) {
        $(".header").addClass("on"); // DOWN!!!
      }
      if (d < 0) {
        $(".header").removeClass("on"); // UP!!!
      }
    } else {
      $(".header").css("background", "transparent").css("border-bottom", "none");
      if (d > 0) {
        $(".header").addClass("on"); // DOWN!!!
      }
    }
  });

  $(window).on("scroll", function (e) {
    var heritage = $(".heritage").offset();
    var sct = $(document).scrollTop();
    var introHead = $("#introduction p, #introduction .head");
    var stickyFlowTop = heritage.top - 2000;
    if (sct > stickyFlowTop) {
      introHead.css("visibility", "hidden");
    } else if (sct < stickyFlowTop) {
      introHead.css("visibility", "visible");
    }
  });

  $(".productSlider").slick({
    arrows: false,
    slidesToShow: 2,
    variableWidth: true,
    touchThreshold: 25,
  });
  $(".seasonSlider").slick({
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    slidesToShow: 4,
    touchThreshold: 25,
    swipeToSlide: true,
  });
  $(".promotionSlider").slick({
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: true,
    slidesToShow: 1,
    touchThreshold: 25,
    swipeToSlide: true,
  });
});
