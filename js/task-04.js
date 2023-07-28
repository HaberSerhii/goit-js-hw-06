const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueElement = document.getElementById("value");

let counterValue = 0;

function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  updateCounterValue();
}

function decrement() {
  counterValue -= 1;
  updateCounterValue();
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

updateCounterValue();
