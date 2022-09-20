$(function () {
  new WOW().init();

  $("body").on("hidden.bs.modal", function () {
    if ($(".modal.show").length > 0) {
      $("body").addClass("modal-open");
    }
  });
  
  // music
  var musicBg = document.getElementById("bg_music");
  var isPlayMusic = false;
  $(".music").on("click", function () {
    if ($(this).hasClass("active")) {
      musicBg.pause();
      $(".music").removeClass("active");
      isPlayMusic = false;
    } else {
      musicBg.play();
      $(".music").addClass("active");
      isPlayMusic = true;
    }
  });

  // scroll to
  $("a.scroll-btn[href^='#']").on("click", function (e) {
    // prevent default anchor click behavior
    e.preventDefault();

    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");

    $(".navbar-collapse").removeClass("in");

    // store hash
    var hash = this.hash;

    // animate
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 80,
      },
      800,
      function () {
        // when done, add hash to url
        // (default click behaviour)
        // window.location.hash = hash;
      }
    );
  });

  // sidebar btn
  $(".sidebtn, .side-close").on("click", function () {
    $(".sidebar").toggleClass("on");
  });

  // sidebar menu
  $("#sidebarCollapse").on("click", function () {
    $("#nav-panel").addClass("show");
    $(".app_overlay").addClass("open");
    $("body").addClass("modal-open");
  });

  // side menu btn
  $(".sidemenu-btn").on("click", function () {
    $("#sidemenu-bar").toggleClass("on");
  });

  $(".nav-left-toggle, .app_overlay").on("click", function () {
    $("#nav-panel").removeClass("show");
    $(".app_overlay").removeClass("open");
    $("body").removeClass("modal-open");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".scroll-top").addClass("up");
    } else {
      $(".scroll-top").removeClass("up");
    }
  });

  $(".scroll-top").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});

// accept action
const termsAndConditions = document.querySelector(".terms-and-conditions");
const acceptButton = document.querySelector(".accept");

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    acceptButton.disabled = false;
    observe.unobserve(termsAndConditions.lastElementChild);
  }
}

const observe = new IntersectionObserver(obCallback, {
  root: termsAndConditions,
  threshold: 1,
});

observe.observe(termsAndConditions.lastElementChild);
