// DOM
//document.title = "Welcome to";
//document.body.innerText = "This";

// let btnElement = document.querySelector(".dom-button");
// console.log(btnElement);

// subscribeButton.addEventListener("click", function () {
// 	subscribeButton.innerHTML = "Subscribed";
// });

/*
// Game Code
function clickSubscribe() {
	let subscribeButton = document.querySelector(".sub-button");

	if (subscribeButton.innerHTML === "Subscribe") {
		subscribeButton.innerHTML = "Subscribed";
	} else {
		subscribeButton.innerHTML = "Subscribe";
	}
}

let score = JSON.parse(localStorage.getItem("score")) || {
	win: 0,
	losses: 0,
	ties: 0,
};

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
	let gameResult = "";

	if (playerMove) {
		if (computerGame === playerMove) {
			gameResult = "Game Tie!";
		}
	}
	if (playerMove === "Rock") {
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

	if (gameResult === "You Win!") {
		score.win += 1;
	} else if (gameResult === "You Lose") {
		score.losses += 1;
	} else if (gameResult === "Game Tie!") {
		score.ties += 1;
	}

	localStorage.setItem("score", JSON.stringify(score));
	updateScore();

	let gameResultInfo = document.querySelector(".game-result");
	gameResultInfo.innerHTML = gameResult;
	if (gameResult === "You Lose") {
		gameResultInfo.style.color = "red";
	} else if (gameResult === "You Win!") {
		gameResultInfo.style.color = "green";
	} else {
		gameResultInfo.style.color = "blue";
	}

	document.querySelector(
		".game-move"
	).innerHTML = `Your are picked <u>${playerMove}</u>. Computer Picked <u>${computerGame}</u>`;
}

function resetScore() {
	score.win = 0;
	score.losses = 0;
	score.ties = 0;

	localStorage.removeItem("score");
	updateScore();
}

function updateScore() {
	let gameScore = `WIN: ${score.win}, LOSE: ${score.losses}, TIE: ${score.ties}`;
	document.querySelector(".game-score").innerHTML = gameScore;
}

updateScore();
*/
// --------------

function calculateFun() {
  let priceValue = document.querySelector("input").value;

  if (priceValue <= 40) {
    priceValue = Math.round(Number(priceValue) + 10);
  }

  document.querySelector(".calculate-result").innerHTML = `$${priceValue}`;
}

function keyEnter(event) {
  if (event.key === "Enter") {
    calculateFun();
  }
}

//String(45);
//console.log("50" - 15);
/*
console.log(document.querySelector("button"));

function btnTwo() {
	document.querySelector(".btnTwo").innerHTML = "Two Done";
}

let dataResult = document.querySelector(".dataResult");
function btnHeads() {
	dataResult.innerHTML = "You chose: heads";
}
function btnTails() {
	dataResult.innerHTML = "You chose: tails";
}

function submitButton() {
	let yourName = document.querySelector(".select-name").value;
	document.querySelector(
		".show-name"
	).innerHTML = `Your name is: ${yourName}`;
}

function nameEnter(event) {
	if (event.key === "Enter") {
		submitButton();
	}
}
*/
