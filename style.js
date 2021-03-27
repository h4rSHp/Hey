function myFunction(){
  $('#myDropdown').slideToggle();
    $(window).click(function(event){
      if (!event.target.matches('.dropbtn')) {
        $('#myDropdown').slideUp();
      }
  })
}
// 
// Comment
// 
  function postToGoogle() {
    var field1 = $("#commentText").val();
    if (field1 == "") {
      alert('Please Fill Your Name');
      document.getElementById("commentText").focus();
      return false;
    }
    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdTtMRq9zB6nMZQNRvjDVtQrcPuOPbyvSNq3ggC6E31Fs5D4g/formResponse?",
      data: { "entry.1486345417": field1 },
      type: "POST",
      dataType: "xml",
      success: function (d) {
      },
      error: function (x) {
        $('.success').fadeIn(750);
        setTimeout(function () { $('.success').fadeOut(1000) }, 2000);
      }
    });
    document.getElementById('commentText').value = "";
    document.activeElement.blur();
    return false;
  }
// Submit Comment
// 
  // FOR SMOOTH SCROLLING
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  // 
  // ScrollSpy
  // 
  // Select the buttons
  $('.scrollSpy-content').click(function(event){
    var buttonName = event.target.name;
    //Using name to make Id
    var ids = '#'+ buttonName;
    var ht = $(ids).css("height");
    $(ids).css({"height" : "0px","opacity":"0.4"});
    $(ids).show(controlButton());
    $(ids).animate({height: ht,opacity:1});
    $('.scrollSpy-container').children().not(ids).hide();
    function controlButton(){
      $('.scrollSpy-content').css({"background":"rgba(0, 0, 0, 0.11)","color":"black"});
    }
    $(event.target).css({"background":"rgb(0,0,0)","color":"white"})
  });
  // 
  // Go to Top | Arrow
  // 
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    $('#arrow').fadeIn().show();
  } else {
    $('#arrow').fadeOut().hide();
  }
}
