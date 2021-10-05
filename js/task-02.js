const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients')
const markup = ingredients.map((el) => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = el;
  return item;  
})
ul.append(...markup);