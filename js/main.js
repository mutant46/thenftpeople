$(document).ready(() => {
  AOS.init({
    duration: 900,
    easing: "ease",
    offset: 150,
    once: true,
  });
  $(".question-link").each((index, link) => {
    $(link).on("click", () => {
      $("#" + $(link).attr("data-id")).toggleClass("faq-active");
    });
  });
  $('a[href^="#"]').on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      var hash = this.hash;
      var nav = $(".navbar").outerHeight();

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        350,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
