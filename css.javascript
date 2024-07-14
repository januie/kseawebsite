function expandImage(element) {
  var img = element.querySelector("img");
  img.style.transform = "scale(1.5)"; // Example scale value, adjust as needed
  img.style.transition = "transform 0.3s ease-in-out";
  img.style.zIndex = "1000";
  img.style.position = "absolute";
  img.style.top = "0";
  img.style.left = "0";
  img.style.right = "0";
  img.style.bottom = "0";
  img.style.margin = "auto";
  img.style.maxWidth = "100%";
  img.style.maxHeight = "100%";
  img.style.overflow = "auto";

  // Close the expanded image on click
  img.onclick = function () {
    img.style.transform = "scale(1)";
    img.style.position = "static";
    img.style.zIndex = "unset";
    img.style.overflow = "hidden";
  };
}
