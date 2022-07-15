$(function () {
  $("html, body").on("mousewheel", function (e) {
    var sct = $(document).scrollTop();
    var innovation = $(".innovationWrap").offset();
    var stickyBoxWall = $(".box-wall").offset();
    var d = e.originalEvent.deltaY;
    if ((sct >= 300 && sct < innovation.top - 200) || sct > stickyBoxWall.top - 300) {
      $(".header").css("background", "#f2f2f2").css("border-bottom", "1px solid #999");
      if (d > 0) {
        $(".header").addClass("on"); // DOWN!!!
      }
      if (d < 0) {
        $(".header").removeClass("on"); // UP!!!
      }
    } else if (sct < 300) {
      $(".header").css("background", "transparent").css("border-bottom", "none");
    } else {
      if (d > 0) {
        $(".header").css("background", "transparent").css("border-bottom", "none");

        $(".header").addClass("on"); // DOWN!!!
      }
    }
  });

  $(window).on("scroll", function (e) {
    var heritage = $(".heritage .heri").offset();
    var sct = $(document).scrollTop();
    var introHead = $("#introduction p, #introduction .head");
    var stickyFlowTop = heritage.top - 4000;
    if (sct > stickyFlowTop) {
      introHead.css("visibility", "hidden");
    } else if (sct < stickyFlowTop) {
      introHead.css("visibility", "visible");
    }
    // if ((sct >= 300 && sct < innovation.top - 200) || sct > stickyBoxWall.top - 300) {
    //   $(".header").addClass("on");
    // }
    var rLi = $(".heritage .right").children();
    function rLiTop(n) {
      return rLi.eq(n).offset().top + 100;
    }
    var heriImg = $(".heritage .left img");
    var [res, aid, sch, mou, cof] = [rLiTop(0), rLiTop(1), rLiTop(2), rLiTop(3), rLiTop(4)];

    if (sct < heritage.top) {
      heriImg.attr("src", "./img/d1.jpg");
      $(".heritage").css("background", "#f2f2f2");
    }
    if (sct > res) {
      heriImg.attr("src", "./img/stk-flow.jpg");
      $(".heritage").css("background", "#abd2e2");
    }
    if (sct > aid) {
      heriImg.attr("src", "./img/d2.jpg");
      $(".heritage").css("background", "#d4bfa0");
    }
    if (sct > sch) {
      heriImg.attr("src", "./img/d3.jpg");
      $(".heritage").css("background", "#b791cc");
    }
    if (sct > mou) {
      heriImg.attr("src", "./img/d4.png");
      $(".heritage").css("background", "#eeece4");
    }
    if (sct > cof) {
      heriImg.attr("src", "./img/d5.jpg");
      $(".heritage").css("background", "#d4dfe1");
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
