// 
// Loading Animation
// 
$(document).ready(function() {
    $('.main-wrapper').hide();
    setTimeout(function() {
        $('.main-wrapper').show();
    }, 1000);
    setTimeout(function() {
        $('.animationContainer').hide();
    }, 1500);
});
// 
// Dropdown Menu
// 
function myFunction() {
    $('#myDropdown').slideToggle();
    $(window).click(function(event) {
        if (!event.target.matches('.dropbtn')) {
            $('#myDropdown').slideUp();
        }
    })
}
// 
// Comment / Submit Comment
// 
function postToGoogle() {
    var field1 = $("#commentText").val();
    var field2 = $('#nameText').val();
    if (field1 == "") {
        alert('Please fill the Comment');
        document.getElementById("commentText").focus();
        return false;
    }
    if (field2 == "") {
        alert('Please Fill Your Name');
        document.getElementById("nameText").focus();
        return false;
    }
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdTtMRq9zB6nMZQNRvjDVtQrcPuOPbyvSNq3ggC6E31Fs5D4g/formResponse?",
        data: { "entry.1486345417": field1, "entry.15102802": field2 },
        type: "POST",
        dataType: "xml",
        success: function(d) {},
        error: function(x) {
            $('.success').fadeIn(750);
            setTimeout(function() { $('.success').fadeOut(1000) }, 2000);
        }
    });
    document.getElementById('commentText').value = "";
    document.getElementById('nameText').value = "";
    document.activeElement.blur();
    return false;
}
//
// 
// FOR SMOOTH SCROLLING
// 
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
// 
// Go to Top | Arrow | Navbar | Dropdown
// 
$(document).ready(function() {
    if (screen.width < 920) {
        $('.navbar').hide();
        $('#dropdwn').show();
    } else {
        $('.navbar').show();
        $('#dropdwn').hide();
    }
});
// 
// 

// 
// 
var frontImageHeight = $('.img_rect').height();
console.log(frontImageHeight);
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if ((document.body.scrollTop > frontImageHeight - 40 && document.body.scrollTop < frontImageHeight) || (document.documentElement.scrollTop > frontImageHeight - 40 && document.documentElement.scrollTop < frontImageHeight)) {
        $('.navbar').css('opacity', '0.5');
    } else
        $('.navbar').css('opacity', '1');
    if (document.body.scrollTop > frontImageHeight || document.documentElement.scrollTop > frontImageHeight) {
        $('#arrow').fadeIn().show();
        $('.navbar').css("background", "rgb(31, 31, 31)");
    } else {
        $('#arrow').fadeOut().hide();
        $('.navbar').css("background", "transparent");
    }
}
// 

$('.navbar .name').hover(function() {
    $('.navbar .name span').css({ "opacity": '0.5' });
}, function() {
    $('.navbar .name span').css({ 'opacity': '1' });
});
// 
// Slide-in
// 
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
// 
// 
//
