function hide_and_show() {
  var x = document.getElementById("dropdown_content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}