// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function () {
  const dynamicText = document.getElementById("dynamic-text");
  dynamicText.textContent = "The text has been changed dynamically!";
});

// Modify CSS styles via JavaScript
document.getElementById("toggle-style-btn").addEventListener("click", function () {
  const dynamicText = document.getElementById("dynamic-text");
  dynamicText.classList.toggle("highlight");
});

// Add or remove an element when a button is clicked
document.getElementById("add-element-btn").addEventListener("click", function () {
  const container = document.getElementById("element-container");
  const newElement = document.createElement("p");
  newElement.textContent = "This is a new dynamically added element.";
  container.appendChild(newElement);
});

document.getElementById("remove-element-btn").addEventListener("click", function () {
  const container = document.getElementById("element-container");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});