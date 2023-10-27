// Addvanced Function
/*
let newFun = (val1, val2) => {
	console.log("New function");
	return val1;
};

newFun(5);

let functioTwo = (val) => {
	console.log(val + 1);
};
functioTwo(5);

let functionThree = () => 3 * 6;
console.log(functionThree());

["new store", "second store", "three store"].forEach((value, index) => {
	console.log(index, value);
});
*/
/*
// Game Code
let score = JSON.parse(localStorage.getItem("score")) || {
	win: 0,
	losses: 0,
	ties: 0,
};

const pickComputerMove = () => {
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
};

document.querySelector(".btn-rock").addEventListener("click", () => {
	playGame("Rock");
});
document.querySelector(".btn-paper").addEventListener("click", () => {
	playGame("Paper");
});
document.querySelector(".btn-scissors").addEventListener("click", () => {
	playGame("Scissors");
});

document.body.addEventListener("keydown", (event) => {
	if (event.key === "r") {
		playGame("Rock");
	} else if (event.key === "p") {
		playGame("Paper");
	} else if (event.key === "s") {
		playGame("Scissors");
	}
});

const playGame = (playerMove) => {
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
};

document.querySelector(".btn-reset").addEventListener("click", () => {
	resetScore();
});
const resetScore = () => {
	score.win = 0;
	score.losses = 0;
	score.ties = 0;

	localStorage.removeItem("score");
	updateScore();
};

const updateScore = () => {
	let gameScore = `WIN: ${score.win}, LOSE: ${score.losses}, TIE: ${score.ties}`;
	document.querySelector(".game-score").innerHTML = gameScore;
};

updateScore();

let isAutoPlaying = false;
let intervalId;
document.querySelector(".btn-reset").addEventListener("click", () => {
	resetScore();
});
const autoPlay = () => {
	if (!isAutoPlaying) {
		intervalId = setInterval(() => {
			let playerMove = pickComputerMove();
			playGame(playerMove);
		}, 2000);
		isAutoPlaying = true;
	} else {
		clearInterval(intervalId);
		isAutoPlaying = false;
	}
};
*/
/*
let clickButton = document.querySelector(".click-button");
const eventFun = () => {
	console.log("Clicked!");
};

clickButton.addEventListener("click", eventFun);
clickButton.removeEventListener("click", eventFun);
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
				<button class="btn-delete">Delete</button>
			</li>
		`;
		todoHTML += html;
	});

	todoListItems.innerHTML = todoHTML;

	document.querySelectorAll(".btn-delete").forEach((deleteBtn, index) => {
		deleteBtn.addEventListener("click", () => {
			console.log(deleteBtn, index);
			todoList.splice(index, 1);
			randerTodoItem();
			saveStorage();
		});
	});
}

randerTodoItem();

document.querySelector(".add-button").addEventListener("click", () => {
	todoAddItem();
});
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
*/
/*
let filterArry = [1, -5, 7];
console.log(
	filterArry.filter((value, index) => {
		// if (value >= 0) {
		// 	return true;
		// } else {
		// 	return false;
		// }
		return value >= 0;
	})
);
console.log(filterArry);

let mapArry = [1, 2, 4];
console.log(
	mapArry.map((value, index) => {
		return value * 3;
	})
);

console.log(mapArry.map((value) => value * 4));
*/
/*
// Chalange - J & K
const multiply = (a, b) => console.log(a * b);
multiply(2, 3);
multiply(7, 10);

// Chalange - L
const countPositive = (nums) => {
	let positiveNumber = 0;
	nums.forEach((value, index) => {
		if (value >= 0) {
			positiveNumber++;
		}
	});
	return positiveNumber;
};
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-1, 3, -5, 7, 10]));

// Chalange - M
const addNum = (arry, num) => {
	return arry.map((value) => value + num);
};
console.log(addNum([3, 5, 6], 2));

// Chalange - N
const removeEgg = (foods) => {
	return foods.filter((food) => food !== "egg");
};
console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

// Chalange - O
const removeEggs = (foods) => {
	let eggRemoved = 0;
	return foods.filter((value) => {
		if (value === "egg" && eggRemoved < 2) {
			eggRemoved++;
			return false;
		}
		return true;
	});
};
console.log(removeEggs(["egg", "apple", "egg", "egg", "ham"]));

// Chalange - P & Q
let startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
	startButton.innerHTML = "Loading...";
	setTimeout(() => {
		startButton.innerHTML = "Finished!";
	}, 2000);
});
*/
// Chalange - R, S, T, U, V, W
let score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    losses: 0,
    ties: 0,
};

const pickComputerMove = () => {
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
};

document.querySelector(".btn-rock").addEventListener("click", () => {
    playGame("Rock");
});
document.querySelector(".btn-paper").addEventListener("click", () => {
    playGame("Paper");
});
document.querySelector(".btn-scissors").addEventListener("click", () => {
    playGame("Scissors");
});

document.body.addEventListener("keydown", (event) => {
    if (event.key === "r") {
        playGame("Rock");
    } else if (event.key === "p") {
        playGame("Paper");
    } else if (event.key === "s") {
        playGame("Scissors");
    } else if (event.key === "a") {
        autoPlay();
    } else if (event.key === "Backspace") {
        resetScore();
    }
});

const playGame = (playerMove) => {
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
};

const resetScore = () => {
    score.win = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem("score");
    updateScore();
};
document.querySelector(".btn-reset").addEventListener("click", () => {
    showResetConfirmation();
});

const updateScore = () => {
    let gameScore = `WIN: ${score.win}, LOSE: ${score.losses}, TIE: ${score.ties}`;
    document.querySelector(".game-score").innerHTML = gameScore;
};

updateScore();

let isAutoPlaying = false;
let intervalId;
let autoPlayButton = document.querySelector(".btn-auto");

autoPlayButton.addEventListener("click", () => {
    autoPlay();
});

const autoPlay = () => {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            let playerMove = pickComputerMove();
            playGame(playerMove);
            autoPlayButton.innerHTML = "Stop Playing";
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        autoPlayButton.innerHTML = "Auto Playing";
        isAutoPlaying = false;
    }
};

// Chalange - X
let resetConfirmation = document.querySelector(".reset-confirmation");
const showResetConfirmation = () => {
    resetConfirmation.innerHTML = `
		Are you sure you want to reset the score?
		<button class="reset-confirm-yes reset-confirm-button">Yes</button>
		<button class="reset-confirm-no reset-confirm-button">No</button>
	`;
    document
        .querySelector(".reset-confirm-yes")
        .addEventListener("click", () => {
            resetScore();
            hideResetConfirmation();
        });
    document
        .querySelector(".reset-confirm-no")
        .addEventListener("click", () => {
            hideResetConfirmation();
        });
};

const hideResetConfirmation = () => {
    resetConfirmation.innerHTML = "";
};
