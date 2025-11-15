// My Portfolio Website

var smallScreenMenuIcons = document.querySelector(".icons");
var navDisplayToggle = false;
var smallScreenMenu = document.querySelector(".Side-bar");
var hamburgerIcon = document.querySelector(".ham");
var closeIcon = document.querySelector(".close-icon");
var smallScreenLinks = document.querySelector(".Side-bar-links");
var meImg = document.getElementById("pic")
var myName = document.getElementById("name")


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


// My Image Animation


var images = [
 "media/grok_image_xfajzg2-3_2-removebg-preview.png",
  "media/j-removebg-preview.png"
];
var index = 0;

// Fade-in the initial image on page load
window.onload = function () {
  setTimeout(function () {
    meImg.classList.add("show");
  }, 50); 
};

setInterval(function () {
  // fade out current image
  meImg.classList.remove("show");

  setTimeout(function () {
    // move to next image
    index++;
    if (index >= images.length) {
      index = 0;
    }

    // change the image
    meImg.src = images[index];

    // ---- sizing logic ----
    if (images[index] === "media/grok_image_xfajzg2-3_2-removebg-preview.png") {
      meImg.style.width = "100%";
      meImg.style.height = "143%";
    } else {
      meImg.style.width = "";  // reset to HTML/CSS default
      meImg.style.height = "";
    }

    // fade in the new image
    meImg.classList.add("show");

  }, 1000); // wait for fade-out

}, 5000);

// Name Animation


