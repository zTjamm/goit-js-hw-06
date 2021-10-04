const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')
let li = document.createElement("li");
for (let i of ingredients){
  li.textContent += i;
  // console.log(i)
}
// li.textContent = ingredients;
li.classList.add("item")
ul.append(li)
console.log(li)


