const soundtrack = document.getElementById("soundtrack");
const body = document.body;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const maxVolume = 1;

body.addEventListener("mousemove", function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const volume = calculateVolume(mouseX, mouseY, screenWidth, screenHeight, maxVolume);
  soundtrack.volume = volume;
});

function calculateVolume(mouseX, mouseY, screenWidth, screenHeight, maxVolume) {
    const distanceFromCenter = Math.sqrt(Math.pow(mouseX - window.innerWidth/2, 2) + Math.pow(mouseY - window.innerHeight/2, 2));
    const maxDistanceFromCenter = Math.sqrt(Math.pow(window.innerWidth/2, 2) + Math.pow(window.innerHeight/2, 2));
    const percentageFromCenter = distanceFromCenter / maxDistanceFromCenter;
    let volume = maxVolume - percentageFromCenter;
    if (volume < 0) {
      volume = 0;
    }
    return volume;
}

body.addEventListener("click", function(event) {
  body.classList.add("shake");
  setTimeout(function() {
    body.classList.remove("shake");
  }, 500);
});

const image = document.getElementById("image");
const images = [
  "bild/dild2.png",
  "bild/dild3.png",
  "bild/dild4.png",
  "bild/dild5.png",
  "bild/dild6.png",
  "bild/dild7.png",
  "bild/dild8.png",
  "bild/dild9.png",
  "bild/dild10.png",
  "bild/dild11.png",
  "bild/dild12.png",
  "bild/dild13.png",
  "bild/dild14.png",
  "bild/dild15.png",
  "bild/dild16.png",
  "bild/dild17.png",
  "bild/dild18.png",
  "bild/dild19.png",
  "bild/dild20.png"

];
let currentImage = 0;

document.addEventListener("click", function() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  image.src = images[currentImage];
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
