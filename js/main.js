$(document).ready(() => {
  // info : Animation on Scroll
  AOS.init({
    duration: 900,
    easing: "ease",
    offset: 150,
    once: false,
  });

  // info : FAQ active class
  $(".question-link").each((index, link) => {
    $(link).on("click", () => {
      $("#" + $(link).attr("data-id")).toggleClass("faq-active");
    });
  });
  // info : smooth scroll with offset so fixed navbar doesn't cover the section
  $('a[href^="#"]').on("click", function (e) {
    let hash = this.hash;
    if (
      this.hash == "#collection" ||
      this.hash == "#roadmap" ||
      this.hash == "#team" ||
      this.hash == "#faq"
    ) {
      var mq = window.matchMedia("(min-width: 992px)");
      var nav = mq.matches
        ? $(".navbar").outerHeight()
        : $(".navbar").outerHeight() - $(".navbar-collapse").outerHeight();
      console.log(mq, nav);
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - nav,
        },
        250,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // info : prevent image drag
  $("img").on("dragstart", (event) => {
    event.preventDefault();
  });

  // info : navbar-collapse on link click
  $(".navbar .nav-link").each((index, link) => {
    $(link).on("click", () => {
      if ($(".navbar-collapse").hasClass("show")) {
        $(".navbar-collapse").removeClass("show");
      }
    });
  });

  // info : navbar-collapse on logo click
  $(".navbar-brand").on("click", () => {
    if ($(".navbar-collapse").hasClass("show")) {
      $(".navbar-collapse").removeClass("show");
    }
  });

  // info : timeline animtion
  var t1 = anime.timeline({
    easing: "cubicBezier(.5, .05, .1, .3)",
    duration: 700,
  });

  t1.add({
    targets: ".navbar",
    opacity: [0, 1],
    translateY: [-100, 0],
    easing: "easeOutCubic",
    delay: 300,
    duration: 500,
  })
    .add({
      targets: [".navbar-brand"],
      opacity: [0, 1],
      duration: 450,
    })
    .add({
      targets: [".main-nav .nav-link"],
      opacity: [0, 1],
      duration: 400,
    })
    .add({
      targets: [".social-links", "#hamburger"],
      opacity: [0, 1],
      duration: 400,
    })
    .add({
      targets: ".hero-intro img",
      opacity: [0, 1],
      translateX: [-250, 0],
    })
    .add(
      {
        targets: ".hero-intro .hero-heading",
        opacity: [0, 1],
        translateX: [-250, 0],
      },
      "-=200"
    )
    .add({
      targets: ".hero-intro .hero-btn",
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 500,
    })
    .add(
      {
        targets: ".hero-intro .hero-btn-outline",
        opacity: 1,
        translateY: [100, 0],
        duration: 500,
        delay: 100,
      },
      "-=600"
    );
});
