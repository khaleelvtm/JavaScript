// Objects
let score = JSON.parse(localStorage.getItem("score"));

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

	// 	alert(
	// 		`Your are picked ${playerMove}. Computer Picked ${computerGame}. ${gameResult}
	// WIN: ${score.win} - LOSE: ${score.losses} - TIE: ${score.ties}`
	// 	);

	localStorage.setItem("score", JSON.stringify(score));

	console.log(`Your are picked ${playerMove}. Computer Picked ${computerGame}. ${gameResult}
	WIN: ${score.win}, LOSE: ${score.losses}, TIE: ${score.ties}`);
}

function resetScore() {
	score.win = 0;
	score.losses = 0;
	score.ties = 0;

	localStorage.removeItem("score");

	console.log(`Game Rested!
	WIN: ${score.win}, LOSE: ${score.losses}, TIE: ${score.ties}`);
}

let products = {
	item_name: "LP",
	"item-size": 45,
	rating: {
		star: 4.5,
		count: 56,
	},
	objFunction() {
		console.log("This is testing message!");
	},
};

console.log(products);
products.objFunction();

console.log(JSON.stringify(products));
let jsonString = JSON.stringify(products);

console.log(JSON.parse(jsonString));

console.log(localStorage);

console.log("user name".length);
console.log("user name".toUpperCase());
console.log("user name".toLocaleLowerCase());

let newObjects = {
	producname: "Mobile Phone",
	price: 799,
};
let { producname, price } = newObjects;
console.log(producname);

let amzon = {
	name: "basketball",
	price: 2095,
};
console.log(amzon);

amzon.price += 500;
console.log(amzon);

amzon["delivery-time"] = "3 Days";
console.log(amzon);

let product1 = {
	name: "Shirt",
	price: 2095,
};
let product2 = {
	name: "Shoes",
	price: 1025,
};

function comparePrice(product1, product2) {
	if (product1.price < product2.price) {
		return product1;
	} else {
		return product2;
	}
}
console.log(comparePrice(product1, product2));

function isSameProduct(product1, product2) {
	return product1.name === product2.name && product1.price === product2.price;
}
console.log(isSameProduct(product1, product2));

console.log("Good Morning".toLowerCase());

let text = "testing";
console.log(text.repeat(4));

let calculation = "";
let btnClcik = document.getElementsByClassName("btn");
let value = document.getElementById("input");

for (let i = 0; i < btnClcik.length; i++) {
	btnClcik[i].addEventListener("click", function () {
		console.log(calculation);
		value.value = calculation;
	});
}
