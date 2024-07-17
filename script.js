// script.js

let currentSlide = 0;
let slides = [];

function expandImage(element) {
  var popup = document.getElementById("imagePopup");
  var popupImage = document.getElementById("popupImage");
  slides = Array.from(document.querySelectorAll(".event-item img")).map(img => img.src);
  currentSlide = slides.indexOf(element.querySelector("img").src);
  popup.style.display = "flex";
  popupImage.src = slides[currentSlide];
}

function closeImage() {
  var popup = document.getElementById("imagePopup");
  popup.style.display = "none";
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  var popupImage = document.getElementById("popupImage");
  popupImage.src = slides[currentSlide];
}
