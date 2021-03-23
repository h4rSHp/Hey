
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

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