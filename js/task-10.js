function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const controlsDiv = document.getElementById("controls");
const createBtn = controlsDiv.querySelector("[data-create]");
const destroyBtn = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(div);
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = +controlsDiv.querySelector("input").value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);
