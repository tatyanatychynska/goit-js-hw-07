function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnClick = document.querySelector('.change-color');
btnClick.addEventListener('click', changeColor);

const spanColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

function changeColor() {
  const color = getRandomHexColor();
  
  bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
  return;
}