


// animated scroll
AOS.init();
// animated scrool


// nav bar script starts
var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");
var cancel = document.querySelector(".cancel")

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle("open")
});
// nav bar script Ends

// count down start
// Set the date we're counting down to
var countDownDate = new Date("dec 31, 2020 22:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("cd-day").innerHTML = days;
  document.getElementById("cd-hour").innerHTML = hours;
  document.getElementById("cd-min").innerHTML = minutes;
  document.getElementById("cd-sec").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count-down").innerHTML = "EXPIRED";
  }
}, 1000);

// count down ends


// owl carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
 
    responsive:{
        0:{
            items:1
        },
                   
        400:{
            items:1
        },            
        960:{
            items:3
        },
        1200:{
            items:4
        }
    }
});


// owl carousel ends