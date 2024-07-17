var currentSlideIndex = 0;
var slides = [];
var slideTexts = [];

function expandImage(element) {
  var popup = document.getElementById("imagePopup");
  var popupImage = document.getElementById("popupImage");
  var popupText = document.getElementById("popupText");

  // Get the image source and data-text from the clicked element's child img
  var img = element.querySelector("img");
  var imageUrl = img.src;
  var text = img.getAttribute("data-text");

  // Replace \n with <br> to create line breaks in the popup text
  var formattedText = text.replace(/\$/g, "<br>");

  // Display the popup with the corresponding image and text
  popup.style.display = "flex";
  popupImage.src = imageUrl;
  popupText.innerHTML = formattedText;

  // Update the slides array and slideTexts array
  slides = Array.from(document.querySelectorAll(".event-item img")).map(img => img.src);
  slideTexts = Array.from(document.querySelectorAll(".event-item img")).map(img => img.getAttribute('data-text'));

  // Set the current slide index
  currentSlideIndex = slides.indexOf(imageUrl);
  popupText.innerHTML = slideTexts[currentSlide].replace(/\$/g, "<br>");

}

function changeSlide(direction) {
  currentSlideIndex += direction;

  // Wrap around if exceeding the slide boundaries
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  // Update the popup image and text
  popupImage.src = slides[currentSlideIndex];
  popupText.innerHTML = slideTexts[currentSlideIndex];
  popupText.innerHTML = slideTexts[currentSlide].replace(/\$/g, "<br>");

}

function closeImage() {
  var popup = document.getElementById("imagePopup");
  popup.style.display = "none";
}
