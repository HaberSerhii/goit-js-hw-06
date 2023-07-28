function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const colorSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

changeColorBtn.addEventListener("click", changeBackgroundColor);
