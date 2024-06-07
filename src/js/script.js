jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  /* -----------------------------------------------
  ハンバーガー
  -------------------------------------------------- */
  $("#js-hamburger").click(function () {
    // 展開
    if ($(this).attr("aria-expanded") == "false") {
      //開いたとき
      $(this).attr("aria-expanded", true);
      $("#js-drawer").attr("aria-hidden", false);
      $("#js-hamburger-text").text("CLOSE");
    } else {
      //閉じたとき
      $(this).attr("aria-expanded", false);
      $("#js-drawer").attr("aria-hidden", true);
      $("#js-hamburger-text").text("MENU");
    }
  });

  /* -----------------------------------------------
  ヘッダー背景色変更
  -------------------------------------------------- */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#js-header").addClass("is-color-changed");
    } else {
      $("#js-header").removeClass("is-color-changed");
    }
  });

  /* -----------------------------------------------
トップ MV Swiper
-------------------------------------------------- */
  const mvSwiper = new Swiper(".js-mvSwiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  });

  /* -----------------------------------------------
  トップ Blog Swiper SPのみ
  -------------------------------------------------- */
  let blogSwiper = null;
  const mediaQuery = window.matchMedia("(max-width: 767px)");

  const checkBreakpoint = (e) => {
    if (e.matches && !blogSwiper) {
      initSwiper();
    } else if (!e.matches && blogSwiper) {
      blogSwiper.destroy(false, true);
      blogSwiper = null;
    }
  };

  const initSwiper = () => {
    blogSwiper = new Swiper(".js-blogSwiper", {
      slidesPerView: 1.22,
      centeredSlides: true,
      spaceBetween: 30,
      loop: true,
      loopAdditionalSlides: 1,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      navigation: {
        nextEl: ".js-blogSwiper .swiper-button-next",
        prevEl: ".js-blogSwiper .swiper-button-prev",
      },
    });
  };

  mediaQuery.addEventListener("change", checkBreakpoint);
  checkBreakpoint(mediaQuery);
});
