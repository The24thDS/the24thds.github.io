let snake = document.querySelector(".snake");
const box = document.querySelector(".box");
getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
let snakeWidth = getComputedStyle(snake,null).getPropertyValue("width");
const boxWidth = Number(getComputedStyle(box,null).getPropertyValue("width").slice(0, -2));
const boxHeight = Number(getComputedStyle(box,null).getPropertyValue("height").slice(0, -2));
let snakeTop = getRandomInt(boxHeight-20);
let snakeLeft = getRandomInt(boxWidth-20);
initSnake = () => {
    snake.style.top = `${snakeTop}px`;
    snake.style.left = `${snakeLeft}px`;
}
window.addEventListener("keypress", event => {console.log(event)});
initSnake();