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
  "bild/bildb.png",
  "bild/bildc.png",
  "bild/bildd.png",
  "bild/bilde.png",
  "bild/bildf.png",
  "bild/bildg.png",
  "bild/bildh.png",
  "bild/bildi.png",
  "bild/bildj.png",
  "bild/bildk.png",
  "bild/bildl.png",
  "bild/bildm.png",
  "bild/bildn.png",
  "bild/bildo.png",
  "bild/bildp.png",
  "bild/bildq.png",
  "bild/bildr.png",
  "bild/bilds.png",
  "bild/bildt.png",
  "bild/bildu.png",
  "bild/bildv.png"

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