const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(randomColor, 1000);
    startBtn.toggleAttribute('disabled');
    stopBtn.removeAttribute('disabled');
});

function randomColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
    stopBtn.toggleAttribute('disabled');
});