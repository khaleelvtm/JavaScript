// Addvanced Function
/*
let newFunction = function () {
	console.log("welcome");
};

console.log(newFunction);
newFunction();

let object = {
	num: 12,
	funObject() {
		console.log("new object");
	},
};
object.funObject();

// Passing function
function run(parm) {
	parm();
}
run(function () {
	console.log("hello");
});

// SetTimeout
setTimeout(function () {
	console.log("set time");
}, 3000);

// SetInterval
setInterval(function () {
	console.log("set interval");
}, 3000);
*/
/*
// Game Code
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

	console.log(gameResult);
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

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
	if (!isAutoPlaying) {
		intervalId = setInterval(function () {
			let playerMove = pickComputerMove();
			playGame(playerMove);
		}, 2000);
		isAutoPlaying = true;
	} else {
		clearInterval(intervalId);
		isAutoPlaying = false;
	}
}
*/
/*



let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
let todoValue = document.querySelector(".todo-value");
let todoListItems = document.querySelector(".todo-list");
let todoDate = document.querySelector(".todo-date");

function randerTodoItem() {
	let todoHTML = "";

	todoList.forEach(function (todoIndex, index) {
		let { name, date } = todoIndex;
		let html = `
			<li>
				${name} ${date}
				<button onclick="todoList.splice(${index}, 1); randerTodoItem(); saveStorage()">Delete</button>
			</li>
		`;
		todoHTML += html;
	});
 
	todoListItems.innerHTML = todoHTML;
}

randerTodoItem();
function todoAddItem() {
	let name = todoValue.value;
	let date = todoDate.value;

	todoList.push({
		name,
		date,
	});
	todoValue.value = "";
	todoDate.value = "";

	randerTodoItem();
	saveStorage();
}
function saveStorage() {
	localStorage.setItem("todoList", JSON.stringify(todoList));
}


["John Smith", "Will Smith", "Done Ine", "Mark Antony"].forEach(function (
	value,
	index
) {
	if (value === "Done Ine") {
		return;
	}
	console.log(index, value);
});
*/
// Chalange - A
let add = function () {
	console.log(2 + 3);
};
add();

// Chalange - B
function runTwice(fun) {
	fun();
}
runTwice(function () {
	console.log("12b");
});
runTwice(add);

// Chalange - C
let startButton = document.querySelector(".start-button");
function startFun() {
	setTimeout(function () {
		startButton.innerHTML = "Finished!";
	}, 3000);
}

// Chalange - D
let startButtonTwo = document.querySelector(".start-button-two");
function startFunTwo() {
	startButtonTwo.innerHTML = "Loading...";
	setTimeout(function () {
		startButtonTwo.innerHTML = "Finished!";
	}, 1000);
}

// Chalange - E & F
let cartMessage = document.querySelector(".message");
let timeoutId;

function addCart() {
	cartMessage.innerHTML = "Added";
	clearTimeout(timeoutId);

	timeoutId = setTimeout(function () {
		cartMessage.innerHTML = "";
	}, 2000);
}

// Chalange - G
/*setInterval(function () {
	if (document.title === "App") {
		document.title = "(2) New Message";
	} else {
		document.title = "App";
	}
}, 1000); */

// Chalange - H
/*let message = 0;

function addMessage() {
	message++;
}
function removeMessage() {
	message--;
}

setInterval(function () {
	if (document.title === "App" && message >= 1) {
		document.title = `(${message}) New Message`;
	} else {
		document.title = "App";
	}
}, 1000); */

// Chalange - I
let message = 2;
let intervelId;
let isDisplayNotification;

displayNotification();
function displayNotification() {
	if (isDisplayNotification) {
		return;
	}
	isDisplayNotification = true;

	intervelId = setInterval(function () {
		if (document.title === "App") {
			document.title = `(${message}) New Message`;
		} else {
			document.title = "App";
		}
	}, 1000);
}
function stopNotification() {
	isDisplayNotification = false;
	clearInterval(intervelId);
	document.title = "App";
}

function addMessage() {
	message++;
	displayNotification();
}
function removeMessage() {
	message--;
	if (message === 0) {
		stopNotification();
	}
}
