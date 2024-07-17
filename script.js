// script.js
var currentSlideIndex = 0;
var slides = [];
var slideTexts = [];

// Function to initialize event listeners and populate slides and slideTexts arrays
function initializeGallery() {
  // Select all event items and populate slides and slideTexts arrays
  var eventItems = document.querySelectorAll(".event-item");
  eventItems.forEach(function (item, index) {
    var img = item.querySelector("img");
    slides.push(img.src);
    slideTexts.push(img.getAttribute("data-text"));
  });
}


// Function to expand image and show popup
function expandImage(element) {
  var popup = document.getElementById("imagePopup");
  var popupImage = document.getElementById("popupImage");
  var popupText = document.getElementById("popupText");

  // Get the image source and data-text from the clicked element's child img
  var img = element.querySelector("img");
  var imageUrl = img.src;
  var text = img.getAttribute("data-text");

  // Replace $ with <br> to create line breaks in the popup text
  var formattedText = text.replace(/\$/g, "<br>");

  // Display the popup with the corresponding image and text
  popup.style.display = "flex";
  popupImage.src = imageUrl;
  popupText.innerHTML = formattedText;

  // Set the current slide index
  currentSlideIndex = slides.indexOf(imageUrl);
}


// Function to change slide (navigate through images in popup)
function changeSlide(direction) {
  currentSlideIndex += direction;

  // Wrap around if exceeding the slide boundaries
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  // Update the popup image and text
  var popupImage = document.getElementById("popupImage");
  var popupText = document.getElementById("popupText");
  popupImage.src = slides[currentSlideIndex];

  // Replace $ with <br> to create line breaks in the popup text
  var formattedText = slideTexts[currentSlideIndex].replace(/\$/g, "<br>");
  popupText.innerHTML = formattedText;
}


// Function to close the image popup
function closeImage() {
  var popup = document.getElementById("imagePopup");
  popup.style.display = "none";
}

// Initialize the gallery when the page loads
document.addEventListener("DOMContentLoaded", function () {
  initializeGallery();
});
