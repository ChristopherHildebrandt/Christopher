


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
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "&#xf11a;";
    }, 3000);
    setTimeout(function () {
      a.innerHTML = "&#xf57f;";
    }, 4000);
    setTimeout(function () {
      a.innerHTML = "&#xf579;";
    }, 5000);
    setTimeout(function () {
      a.innerHTML = "&#xf583;";
    }, 6000);
}
smile();
setInterval(smile, 7000);