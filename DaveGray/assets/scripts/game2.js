// Game Version 2
let initGame = () => {
	const startGame = confirm("Play the new Game");
	startGame ? playGame() : alert("Okay may be next time!");
};

let playGame = () => {
	while (true) {
		let playerChoice = getPayerChice();
		playerChoice = formatPalayerhice(playerChoice);
		if (playerChoice === "") {
			invalidChoice();
			continue;
		}
		if (!playerChoice) {
			decideNotToPlay();
			break;
		}
		playerChoice = evaluatePlayer(playerChoice);
		if (!playerChoice) {
			invalidChoice();
			continue;
		}
		let computerChoice = getComputerChoice();
		let result = determineWinner(playerChoice, computerChoice);
		displayResult(result);
		if (askToPlayAgain()) {
			continue;
		} else {
			thanksForPlaying();
			break;
		}
	}
};

// Functions ----------------
let getPayerChice = () => {
	return prompt("Please enter rock, paper, or scissors");
};

let formatPalayerhice = (playerChoice) => {
	if (playerChoice || playerChoice === "") {
		return playerChoice.trim().toLowerCase();
	} else {
		return false;
	}
};

let invalidChoice = () => {
	alert("Your did't enter rock, paper, scissors");
};

let decideNotToPlay = () => {
	alert("I guss you changed your mind. May be next time!");
};

let evaluatePlayer = (playerChoice) => {
	if (
		playerChoice === "rock" ||
		playerChoice === "paper" ||
		playerChoice === "scissors"
	) {
		return playerChoice;
	} else {
		return false;
	}
};

let getComputerChoice = () => {
	let randomNumber = Math.floor(Math.random() * 3);
	let randomArr = ["rock", "paper", "scissors"];
	return randomArr[randomNumber];
};

let determineWinner = (player, computer) => {
	let winner =
		player === computer
			? "Tie Game"
			: player === "rock" && computer === "paper"
			? `Player One: ${player} \n Computer: ${computer} \n Computer Winn!`
			: player === "paper" && computer === "scissors"
			? `Player One: ${player} \n Computer: ${computer} \n Computer Winn!`
			: player === "scissors" && computer === "rock"
			? `Player One: ${player} \n Computer: ${computer} \n Computer Winn!`
			: `Player One: ${player} \n Computer: ${computer} \n palyer One Winn `;
	return winner;
};

let displayResult = (result) => {
	alert(result);
};

let askToPlayAgain = () => {
	return confirm("Play again!");
};

let thanksForPlaying = () => {
	alert("Okay, Thanks for Playing.");
};

initGame();
