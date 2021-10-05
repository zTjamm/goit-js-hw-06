const counterValue = document.querySelector('#value');
// let valueNumber = Number(counterValue);
const button = document.querySelectorAll('#counter>button');
button[0].addEventListener('click', () => {
    const num = Number(counterValue.innerHTML);
    counterValue.innerHTML = num - 1;    
})
button[1].addEventListener('click', () => {
    const num = Number(counterValue.innerHTML);
    counterValue.innerHTML = num + 1;    
})