//-------------------------------------translate
$('.lang').on('click', function() {
    // Toggle highlight for the clicked button
    $(this).addClass('active');
    // Remove highlight from the other button
    $('.lang').not(this).removeClass('active');
    // Define language arrays
    var country;
    if ($(this).text() === "EN") {
        country = ["Search", "Home", "Contact", "Login"];
    } else {
        country = ["Zoeken", "Home", "Contact", "Aanmelden"];
    }
    // Update button text based on the clicked button's language
    $('.menu ul li a').each(function(index) {
        $(this).text(country[index]);
    });
    // Update all elements with 'data-lang' attribute
    $('[data-lang]').each(function() {
        var dataLangValue = $(this).data('lang');
        $(this).text(country[dataLangValue]);
    });
  });
  //--------------------------------------Sticky nav
  window.onscroll = function() {sticknav()};
  var nav = document.getElementById("taskbar");
  var sticky = nav.offsetTop;
  function sticknav() {
    if (window.scrollY > sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }
  //-------------------------------------------------progressbar
   document.addEventListener('DOMContentLoaded', function() {
      const progressBar = document.createElement('div');
      progressBar.classList.add('progress-bar');
      document.body.appendChild(progressBar);
    
      window.addEventListener('scroll', updateProgressBar);
    
      function updateProgressBar() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';
      }
    });
  //-------------------------------------------------slideshow
   let currentSlide = 0;
   const slides = document.getElementsByClassName('slide');
   function showSlide() {
     // Hide all slides
     for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = 'none';
     }
     // Show the current slide
     slides[currentSlide].style.display = 'block';
     // Move to the next slide
     currentSlide = (currentSlide + 1) % slides.length;
   }
   // 1000 milliseconds (1 second)
   const intervalId = setInterval(showSlide, 5000);
   const maxIterations = 10;
   let iterations = 0;
   /*function stopSlideshow() {
     clearInterval(intervalId);
   }
    setTimeout(stopSlideshow, maxIterations * 3000);*/

    