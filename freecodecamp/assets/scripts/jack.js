// ---
let cards = [];
let cardSum = 0;
let blackCard = false;
let isAlive = false;
let message = "";

let messageText = document.getElementById("gameMessage");
let sumData = document.getElementById("gameSum");
let selectdCard = document.getElementById("gameCard");

let player = {
	name: "John",
	price: 99,
};
let playerValue = document.getElementById("playerName");
playerValue.textContent = player.name + ": $ " + player.price;

const startGame = () => {
	isAlive = true;
	let firstCard = getRandomNumber();
	let secondCard = getRandomNumber();
	cards = [firstCard, secondCard];
	cardSum = firstCard + secondCard;
	randerGame();
};

function getRandomNumber() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber === 1) {
		return 11;
	} else if (randomNumber > 10) {
		return 10;
	} else {
		return randomNumber;
	}
}

const randerGame = () => {
	selectdCard.textContent = "Card: ";
	for (let i = 0; i < cards.length; i++) {
		selectdCard.textContent += cards[i] + " ";
	}
	sumData.textContent = "SUM: " + cardSum;
	if (cardSum <= 20) {
		message = "Start Now!";
	} else if (cardSum === 21) {
		message = "Winner!";
		blackCard = true;
	} else {
		message = "End Game";
		isAlive = false;
	}
	messageText.textContent = message;
};

const newCard = () => {
	if (isAlive === true && blackCard === false) {
		let newCard = getRandomNumber();
		cardSum += newCard;
		cards.push(newCard);
		randerGame();
	}
};
