const counterValue = document.querySelector('#value');
const button = document.querySelectorAll('#counter>button');
let number = 0;
const descrement = () => {
    number -= 1;
    counterValue.textContent = number;
}
const increment = () => {
    number += 1;
    counterValue.textContent = number;
}
button[0].addEventListener('click', descrement);
button[1].addEventListener('click', increment);