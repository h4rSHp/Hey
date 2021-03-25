
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdwns = document.getElementsByClassName("dropdwn-content");
      var i;
      for (i = 0; i < dropdwns.length; i++) {
        var openDropdown = dropdwns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// 
// Submit Comment
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
  // 
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

