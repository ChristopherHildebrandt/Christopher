
// ======================================================================
// Header Navigation 
// ======================================================================

function hide_and_show() {
  var x = document.getElementById("dropdown_content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// ======================================================================
// Aside Links
// ======================================================================

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function barsDropdown() {
  document.getElementById("myBarsDropdown").classList.toggle("show");
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


// ======================================================================
// Smile Function
// ======================================================================

function smile() {
  var a;
  a = document.getElementById("smile-sad");
  a.innerHTML = "&#xf118;"; 
  setTimeout(function () {
      a.innerHTML = "&#xf4da;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf119;";
    }, 3000);
  setTimeout(function () {
      a.innerHTML = "&#xf11a;";
    }, 5000);
    setTimeout(function () {
      a.innerHTML = "&#xf57f;";
    }, 7000);
    setTimeout(function () {
      a.innerHTML = "&#xf579;";
    }, 9000);
    setTimeout(function () {
      a.innerHTML = "&#xf583;";
    }, 11000);
}
smile();
setInterval(smile, 7000);


// ======================================================================
// Slide show - Slider (dots)
// ======================================================================
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


// ======================================================================
// Pop-i
// ======================================================================



