function expandImage(element) {
  var popup = document.getElementById("imagePopup");
  var popupImage = document.getElementById("popupImage");
  popup.style.display = "flex";
  popupImage.src = element.querySelector("img").src;
}

function closeImage() {
  var popup = document.getElementById("imagePopup");
  popup.style.display = "none";
}
