// Game
let gameStart = null;
let gameSpeed = null;
let gameArea = null;
let gameAreaContext = null;
let gameAreaWidth = 0;
let gameAreaHeight = 0;
let cellWidth = 0;
let playScore = 0;
let snakeFood = null;
let snakeDirection = null;
let speedSize = 0;
let timer = null;

const initialize = () => {
	gameStart = document.getElementById("gameStart");
	gameSpeed = document.getElementById("gameSpeed");
	gameArea = document.getElementById("gameArea");
	gameAreaContext = gameArea.getContext("2d");

	gameAreaWidth = 400;
	gameAreaHeight = 600;
	cellWidth = 20;

	gameArea.width = gameAreaWidth;
	gameArea.height = gameAreaHeight;

	gameStart.onclick = function () {
		this.disabled = true;
		startGame();
	};
};

const startGame = () => {
	playScore = 0;
	snakeDirection = "right";
	speedSize = parseInt(gameSpeed.value);

	if (speedSize > 9) {
		speedSize = 9;
	} else {
		speedSize = 1;
	}

	let snake = [];
	snake.push({ x: 0, y: cellWidth });

	creatFood();
	clearInterval(timer);
	timer = setInterval(createGameArea, 500 / speedSize);
};

const creatFood = () => {
	snakeFood = {
		x: Math.round(
			(Math.random() * (gameAreaWidth - cellWidth)) / cellWidth
		),
		x: Math.round(
			(Math.random() * (gameAreaHeight - cellWidth)) / cellWidth
		),
	};
};

const createGameArea = () => {
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	gameAreaContext.fillStyle = "#ffffff";
	gameAreaContext.fillRect(0, 0, gameAreaWidth, gameAreaHeight);
	gameAreaContext.strokeStyle = "#cccccc";
	gameAreaContext.strokeRect(0, 0, gameAreaWidth, gameAreaHeight);

	if (snakeDirection == "right") {
		snakeX++;
	} else if (snakeDirection == "left") {
		snakeX--;
	} else if (snakeDirection == "down") {
		snakeY++;
	} else if (snakeDirection == "up") {
		snakeY--;
	}

	if (
		snakeX == -1 ||
		snakeX == gameAreaWidth / cellWidth ||
		snakeY == -1 ||
		snakeY == gameAreaHeight / cellWidth ||
		Controll(snakeX, snakeY, snake)
	) {
		writeScore();
		clearInterval(timer);
		gameStart.disabled = false;
		return;
	}

	if (snakeX == snakeFood.x && snakeY == snakeFood.y) {
		let newhead = { x: snakeX, y: snakeY };
		playScore += speedSize;
		creatFood();
	} else {
		let newhead = snake.pop();
		newhead.x = snakeX;
		newhead.y = snakeY;
	}
	snake.unshift(newhead);
	for (let i = 0; i < snake.length; i++) {
		createSquare(snake[i].x, snake[i].y);
	}
	createSquare(snakeFood.x, snakeFood.y);
};

const Controll = (x, y, array) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i].x == x && array[i].y == y) return true;
	}
	return false;
};

const writeScore = () => {
	gameAreaContext.font = "50px sans-serif";
	gameAreaContext.fillStyle = "#FFF333";
	gameAreaContext.fillText(
		"score : " + playScore,
		gameAreawidth / 2 - 100,
		gameAreaWidth / 2
	);
};

const createSquare = (x, y) => {
	gameAreaContext.fillStyle = "#000000";
	gameAreaContext.fillRect(
		x * cellWidth,
		y * cellWidth,
		cellWidth,
		cellWidth
	);
};

const changeDirection = (event) => {
	let keys = event.which;
	if (keys == "40" && snakeDirection != "up") snakeDirection = "down";
	else if (keys == "39" && snakeDirection != "left") snakeDirection = "right";
	else if (keys == "38" && snakeDirection != "down") snakeDirection = "up";
	else if (keys == "37" && snakeDirection != "right")
		snakeDirection = "left ";
};

//window.onkeydown = changeDirection();
window.onload = initialize();
