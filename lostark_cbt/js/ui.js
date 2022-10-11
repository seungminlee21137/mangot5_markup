$(function () {
  new WOW().init();

  $("body").on("hidden.bs.modal", function () {
    if ($(".modal.show").length > 0) {
      $("body").addClass("modal-open");
    }
  });

  $(".event-tab-btn").on("click", function () {
    $("#event-tab").tab("show");
    $("#cbt-tab").tab("show");
  });

  $(".adventure-tab-btn").on("click", function () {
    $("#adventure-tab").tab("show");
  });

  $(".cbt-tab-btn").on("click", function () {
    $("#cbt-tab").tab("show");
  });

  $(".game-event-btn").on("click", function () {
    $("#game-event-tab").tab("show");
  });

  $(".cbt-target-btn").on("click", function () {
    $("#cbt-target-tab").tab("show");
  });

  $(".js-confirm").on("click", function () {
    var text;
    if ($(this).attr("data-confirm-text")) {
      text = $(this).attr("data-confirm-text");
    }

    var ok = confirm(text);

    if (ok) {
      console.log(text);
      $("#event-tab").tab("show");
      $("#cbt-tab").tab("show");
      setTimeout(function () {
        $("html")
          .stop()
          .animate(
            {
              scrollTop: $("#mainTab").offset().top - 100,
            },
            500
          );
      }, 100);
    } else {
      return false;
    }
  });

  // scroll top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".scroll-top").addClass("up");
    } else {
      $(".scroll-top").removeClass("up");
    }

    if ($(window).scrollTop() >= $("#wrapper").offset().top + $("#wrapper").outerHeight() - window.innerHeight) {
      $(".scroll-top").addClass("fixed-bottom");
    } else {
      $(".scroll-top").removeClass("fixed-bottom");
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
    e.preventDefault();

    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");

    var hash = this.hash;

    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800
      );
    }, 150);
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

  $(".nav-left-toggle, .app_overlay, .bd-sidenav a").on("click", function () {
    $("#nav-panel").removeClass("show");
    $(".app_overlay").removeClass("open");
    $("body").removeClass("modal-open");
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
