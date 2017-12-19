(function () {
  function animation(dest) {
    $('html, body').animate({
      scrollTop: $(dest).offset().top
    }, 1000);
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').click(function() {
    $('#back-to-top').hide();
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $("#quoteBtn").click(function() {
    animation("#quote")
  });

  $("#educationBtn").click(function() {
    animation("#education")
  });
})();
