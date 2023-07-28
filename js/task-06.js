const inputElement = document.getElementById("validation-input");
const dataLength = parseInt(inputElement.getAttribute("data-length"));

function validateInput() {
  const inputText = inputElement.value;
  const isValid = inputText.length === dataLength;

  if (isValid) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
}

inputElement.addEventListener("blur", validateInput);
