const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function updateNameOutput() {
  const name = nameInput.value.trim();
  nameOutput.textContent = name !== "" ? name : "Anonymous";
}

nameInput.addEventListener("input", updateNameOutput);

updateNameOutput();
