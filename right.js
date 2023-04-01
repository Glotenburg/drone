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
  "bild/cild2.png",
  "bild/cild3.png",
  "bild/cild4.png",
  "bild/cild5.png",
  "bild/cild6.png",
  "bild/cild7.png",
  "bild/cild8.png",
  "bild/cild9.png",
  "bild/cild10.png",
  "bild/cild11.png",
  "bild/cild12.png",
  "bild/cild13.png",
  "bild/cild14.png",
  "bild/cild15.png",
  "bild/cild16.png",
  "bild/cild17.png",
  "bild/cild18.png",
  "bild/cild19.png",
  "bild/cild20.png",
  "bild/cild21.png",
  "bild/cild22.png",
  "bild/cild23.png",
  "bild/cild24.png"
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
