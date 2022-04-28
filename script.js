// smooth scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// scroll mobile navbar
$(document).ready(function(){
  $(window).scroll(function(){
      if ($(window).scrollTop() > 100){
          $('.mobile-nav').addClass('scrolled');
          $('.mobile-nav a').css('padding','18px');
      }else{
          $('.mobile-nav').removeClass('scrolled');
          $('.mobile-nav a').css('padding','30px');
      }
  });
});

// wow js initialization
new WOW().init();

$('header .menubtn').on('click',function(){
  $('nav').css('opacity','1');
  $('nav').css('display','flex');  
});
$('header .menuclosebtn').on('click',function(){
  $('nav').css('transition','1s');
  $('nav').css('opacity','0');
  let timefornav = setTimeout(() => {
    $('nav').css('display','none');
  }, 1000);
});