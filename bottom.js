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
  "bild/pild2.png",
  "bild/pild3.png",
  "bild/pild4.png",
  "bild/pild5.png",
  "bild/pild6.png",
  "bild/pild7.png",
  "bild/pild8.png",
  "bild/pild9.png",
  "bild/pild10.png",
  "bild/pild11.png",
  "bild/pild12.png",
  "bild/pild13.png",
  "bild/pild14.png",
  "bild/pild15.png",
  "bild/pild16.png",
  "bild/pild17.png",
  "bild/pild18.png",
  "bild/pild19.png",
  "bild/pild20.png",
  "bild/pild21.png"

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
