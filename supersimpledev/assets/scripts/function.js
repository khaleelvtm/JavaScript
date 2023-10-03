// Functions
function pickComputerMove() {
	let computerGame = "";
	let selectNumber = Math.random();

	if (selectNumber >= 0 && selectNumber < 1 / 3) {
		computerGame = "Rock";
	} else if (selectNumber >= 1 / 3 && selectNumber < 2 / 3) {
		computerGame = "Paper";
	} else if (selectNumber >= 2 / 3 && selectNumber < 1) {
		computerGame = "Scissors";
	}

	return computerGame;
}

function playGame(playerMove) {
	let computerGame = pickComputerMove();
	console.log(computerGame);

	let gameResult = "";

	if (playerMove) {
		if (computerGame === playerMove) {
			gameResult = "Game Tie!";
		}
	} else if (playerMove === "Rock") {
		if (computerGame === "Paper") {
			gameResult = "You Lose";
		} else if (computerGame === "Scissors") {
			gameResult = "You Win!";
		}
	} else if (playerMove === "Paper") {
		if (computerGame === "Scissors") {
			gameResult = "You Lose";
		} else if (computerGame === "Rock") {
			gameResult = "You Win!";
		}
	} else if (playerMove === "Scissors") {
		if (computerGame === "Rock") {
			gameResult = "You Lose";
		} else if (computerGame === "Paper") {
			gameResult = "You Win!";
		}
	}

	alert(
		`Your are picked ${playerMove}. Computer Picked ${computerGame}. ${gameResult}`
	);
}
// Chalange
function greet(name = "there") {
	console.log(`Hello ${name}`);
}

//greet();

function convertToFahrenheit(celsius, unit) {
	let fahrenheit = celsius * (9 / 5) + 32;
	console.log(fahrenheit + unit);
}
convertToFahrenheit(25);

function convertToCelsius(fahrenheit, unit) {
	let celsius = (fahrenheit - 32) * (5 / 9);
	console.log(celsius + unit);
}
convertToCelsius(86);

function convertToTemperature(degrees, unit) {
	if (unit === "F") {
		convertToFahrenheit(degrees, unit);
	} else {
		convertToCelsius(degrees, unit);
	}
}
convertToTemperature(25, "F");
convertToTemperature(86, "C");
