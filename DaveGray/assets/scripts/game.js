let playGame = confirm("Play the new Game");

if (playGame) {
	let playerChoice = prompt("Please enter rock, paper, or scissors");
	if (playerChoice) {
		let playerOne = playerChoice.trim().toLowerCase();
		if (
			playerOne === "rock" ||
			playerOne === "paper" ||
			playerOne === "scissors"
		) {
			let computerChoice = Math.floor(Math.random() * 3 + 1);
			let computer =
				computerChoice === 1
					? "rock"
					: computerChoice === 2
					? "paper"
					: "scissors";
			let result =
				playerOne === computer
					? "Tie Game"
					: playerOne === "rock" && computer === "paper"
					? `Player One: ${playerOne} \n Computer: ${computer} \n Computer Winn!`
					: playerOne === "paper" && computer === "scissors"
					? `Player One: ${playerOne} \n Computer: ${computer} \n Computer Winn!`
					: playerOne === "scissors" && computer === "rock"
					? `Player One: ${playerOne} \n Computer: ${computer} \n Computer Winn!`
					: `Player One: ${playerOne} \n Computer: ${computer} \n palyer One Winn `;
			alert(result);
			let palyAgain = confirm("Play again!");
			palyAgain ? location.reload() : alert("Ookay thank you playing.");
		} else {
			console.log("Your did't enter rock, paper, scissors");
		}
	} else {
		console.log("I guss you changed your mind. May be next time!");
	}
} else {
	console.log("Okay may be next time!");
}
