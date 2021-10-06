const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControl.addEventListener('input', (e) => {
    let sizeElement = e.currentTarget.value;
    text.style.fontSize = `${sizeElement}px`;    
})