// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const ingredientsList = document.getElementById("ingredients");

// ingredients.forEach((ingredient) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item");
//   ingredientsList.appendChild(listItem);
// });

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const listItems = ingredients.map(
  (ingredient) => `<li class="item">${ingredient}</li>`
);
ingredientsList.innerHTML = listItems.join("");
