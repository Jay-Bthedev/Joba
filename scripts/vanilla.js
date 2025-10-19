// My Portfolio Website

var smallScreenMenuIcons = document.querySelector(".icons");
var navDisplayToggle = false;
var smallScreenMenu = document.querySelector(".Side-bar");
var hamburgerIcon = document.querySelector(".ham");
var closeIcon = document.querySelector(".close-icon");
var smallScreenLinks = document.querySelector(".Side-bar-links");

smallScreenLinks.addEventListener('click', function () {
    smallScreenMenu.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
})
closeIcon.style.display = "none";
smallScreenMenu.style.display = "none";

smallScreenMenuIcons.addEventListener("click", function () {
  navDisplayToggle = !navDisplayToggle;

  if (navDisplayToggle === true) {
    smallScreenMenu.style.display = "flex";
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
  } else {
    smallScreenMenu.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  }
});