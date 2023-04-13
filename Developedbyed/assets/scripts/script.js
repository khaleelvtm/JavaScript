let pScore = 0;
let cScore = 0;

let gameZone = () => {
	startGame();
	playMatch();
};

// Start Game
let startGame = () => {
	let startBtn = document.querySelector(".intro .btn");
	let introSection = document.querySelector(".intro");
	let matchSection = document.querySelector(".match");

	startBtn.addEventListener("click", () => {
		introSection.classList.add("fadeOut");
		matchSection.classList.add("fadeIn");
		matchSection.classList.remove("fadeOut");
	});
};

// Play Match
let playMatch = () => {
	let optionButton = document.querySelectorAll(".options .btn");
	let playerHand = document.querySelector(".player-hand");
	let computerHand = document.querySelector(".computer-hand");
	let hands = document.querySelectorAll(".hands img");
	hands.forEach((hand) => {
		hand.addEventListener("animationend", function () {
			this.style.animation = "";
		});
	});

	let computerOptions = ["rock", "paper", "scissors"];
	optionButton.forEach((option) => {
		option.addEventListener("click", function () {
			let computerNumber = Math.floor(Math.random() * 3);
			let computerChoice = computerOptions[computerNumber];
			setTimeout(() => {
				comparerHands(this.textContent, computerChoice);
				playerHand.src = `./assets/images/${this.textContent}.png`;
				computerHand.src = `./assets/images/${computerChoice}.png`;
			}, 2000);
			playerHand.style.animation = "shakePlayer 2s ease";
			computerHand.style.animation = "shakeComputer 2s ease";
		});
	});
};

let comparerHands = (playerChoice, computerChoice) => {
	let winner = document.querySelector(".winner");
	if (playerChoice === computerChoice) {
		winner.textContent = `It is a tie`;
		return;
	}
	if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		winner.textContent = "Player Winn!";
		pScore++;
		updateScore();
		return;
	} else {
		winner.textContent = "Computer Winn!";
		cScore++;
		updateScore();
		return;
	}
};

let updateScore = () => {
	let playerScore = document.querySelector(".player-score h2");
	let computerScore = document.querySelector(".computer-score h2");
	playerScore.textContent = pScore;
	computerScore.textContent = cScore;
};

gameZone();
