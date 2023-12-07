// Snake Game
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let canvasSize = 600;
canvas.width = canvasSize;
canvas.height = canvasSize;

let snakeBox = 20;
let totalMove = canvasSize / snakeBox;

let apple = new Image();
apple.src = "assets/images/apple.png";

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let down = new Audio();
let left = new Audio();
let right = new Audio();

dead.src = "assets/audio/dead.mp3";
eat.src = "assets/audio/eat.mp3";
up.src = "assets/audio/up.mp3";
down.src = "assets/audio/down.mp3";
left.src = "assets/audio/left.mp3";
right.src = "assets/audio/right.mp3";

// Snake
let snake = [];
snake[0] = {
    x: 9 * snakeBox,
    y: 10 * snakeBox,
};

let food = {};
let score = 0;
let dir = "";

getFood();

document.addEventListener("keydown", direction);

function direction(event) {
    let key = event.keyCode;

    if (key == 37 && dir != "RIGHT") {
        dir = "LEFT";
        left.play();
    } else if (key == 38 && dir != "DOWN") {
        dir = "UP";
        up.play();
    } else if (key == 39 && dir != "LEFT") {
        dir = "RIGHT";
        right.play();
    } else if (key == 40 && dir != "UP") {
        dir = "DOWN";
        down.play();
    }
}

function getFood() {
    food = {
        x: Math.floor(Math.random() * (totalMove - 2 - 3) + 3) * snakeBox,
        y: Math.floor(Math.random() * (totalMove - 2 - 3) + 3) * snakeBox,
    };
}

function collisionDetection(head, ar) {
    for (i = 0; i < ar.length; i++) {
        if (ar[i].x == head.x && ar[i].y == head.y) {
            return true;
        }
    }
    return false;
}

function render() {
    console.log(score);
    ctx.fillStyle = "#f1f1f1";
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "#190" : "#FFFFFF";
        ctx.fillRect(snake[i].x, snake[i].y, snakeBox, snakeBox);
        ctx.strockStyle = "#eeeeee";
        ctx.strokeRect(snake[i].x, snake[i].y, snakeBox, snakeBox);
    }

    ctx.drawImage(apple, food.x, food.y, snakeBox, snakeBox);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (dir == "LEFT") snakeX -= snakeBox;
    if (dir == "RIGHT") snakeX += snakeBox;
    if (dir == "UP") snakeY -= snakeBox;
    if (dir == "DOWN") snakeY += snakeBox;

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        eat.play();
        getFood();
    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY,
    };

    if (
        snakeX < 0 ||
        snakeX >= canvasSize ||
        snakeY < 0 ||
        snakeY >= canvasSize ||
        collisionDetection(newHead, snake)
    ) {
        gameOver();
        return;
    }

    snake.unshift(newHead);

    ctx.fillStyle = "black";
    ctx.font = "24px Tahoma";
    ctx.fillText(score, 20, 40);
}

render();

let gm = setInterval(render, 100);

function gameOver() {
    clearInterval(gm);
    dead.play();
    ctx.fillStyle = "black";
    ctx.font = "40px Tahoma";
    ctx.fillText("Game Over", canvasSize / 2 - 100, canvasSize / 2);
}
