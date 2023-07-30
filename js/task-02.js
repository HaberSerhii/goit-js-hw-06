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

const ingredientsArr = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("ingredient");
  li.append(ingredient);
  return li;
});
ingredientsList.append(...ingredientsArr);
