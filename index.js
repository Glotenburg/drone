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
  "bild/bild2.png",
  "bild/bild3.png",
  "bild/bild4.png",
  "bild/bild5.png",
  "bild/bild7.png",
  "bild/bild8.png",
  "bild/bild9.png",
  "bild/bild10.png",
  "bild/bild11.png",
  "bild/bild12.png",
  "bild/bild13.png",
  "bild/bild14.png",
  "bild/bild15.png",
  "bild/bild16.png",
  "bild/bild17.png",
  "bild/bild18.png",
  "bild/bild19.png",
  "bild/bild20.png",
  "bild/bild21.png",
  "bild/bild22.png"
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