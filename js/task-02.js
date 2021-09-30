const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredient = document.querySelector('#ingredients')
const item = document.createElement('li');
item.textContent = ingredients;
item.classList.add('item');
console.log(ingredients.map(ing => ing.toLowerCase))
