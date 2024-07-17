// script.js

let currentSlide = 0;
let slides = [];
let slideTexts = [];

function expandImage(element) {
  var popup = document.getElementById("imagePopup");
  var popupImage = document.getElementById("popupImage");
  var popupText = document.getElementById("popupText");

  // Get the text from data-text attribute
  var text = element.getAttribute("data-text");

  // Replace \n with <br> to create line breaks
  var formattedText = text.replace(/\n/g, "<br>");

  slides = Array.from(document.querySelectorAll(".event-item img")).map(img => img.src);
  slideTexts = Array.from(document.querySelectorAll(".event-item img")).map(img => img.getAttribute('data-text'));

  currentSlide = slides.indexOf(element.querySelector("img").src);
  popup.style.display = "flex";
  popupImage.src = slides[currentSlide];
  popupText.innerHTML = formattedText;

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
  var popupText = document.getElementById("popupText");

  popupImage.src = slides[currentSlide];
  popupText.textContent = slideTexts[currentSlide];

}
