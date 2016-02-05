var topNav = document.getElementById('topNav'),
    header = document.getElementById('header-bg'),
  stop = topNav.offsetTop - 30,
  docBody = document.documentElement || document.body.parentNode || document.body,
  hasOffset = window.pageYOffset !== undefined,
  scrollTop;

window.onresize = function(e) {
    
var topNav = document.getElementById('topNav'),
  stop = topNav.offsetTop - 30,
  docBody = document.documentElement || document.body.parentNode || document.body,
  hasOffset = window.pageYOffset !== undefined,
  scrollTop;
}

window.onscroll = function(e) {

  scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;
  if (scrollTop >= stop) {
    topNav.className = 'flex-parent top-out';
      header.className = 'header-bg topped';
  } else {
    topNav.className = 'flex-parent';
      header.className = 'header-bg';
  }
}

$(function() {
    $('.fa', '.flex-parent').fadeTo(5000, 1);
    $('.my-slider').unslider({
        animation: 'fade'
    });
    $('#sliderDiv').fadeTo(5000, 1);
    $('.unslider').fadeTo(5000, 1);
//    $('#down-arrow').click(function(){            
//        $(this).fadeToggle();
//    });
});

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference