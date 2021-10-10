const counterValue = document.querySelector('#value');

const button = document.querySelectorAll('#counter>button');
button[0].addEventListener('click', () => {
    const num = Number(counterValue.innerHTML);   
    let number;
    number = num - 1;
    counterValue.textContent = number;   
})
button[1].addEventListener('click', () => {
    const num = Number(counterValue.innerHTML);
    let number;
    number = num + 1;
    counterValue.textContent = number; 
})