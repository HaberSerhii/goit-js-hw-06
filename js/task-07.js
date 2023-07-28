const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

function updateFontSize() {
  const fontSize = fontSizeControl.value + "px";
  textElement.style.fontSize = fontSize;
}

fontSizeControl.addEventListener("input", updateFontSize);

updateFontSize();
