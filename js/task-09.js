function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
button.addEventListener('click', () => {
  body.style.background = getRandomHexColor();
  textColor.innerHTML = getRandomHexColor();
})