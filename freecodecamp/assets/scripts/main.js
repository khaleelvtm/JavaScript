let userAge = 67;

if (userAge < 6) {
	console.log("FREE!");
} else if (userAge <= 17) {
	console.log("Child Discount");
} else if (userAge <= 26) {
	console.log("Student Discount");
} else if (userAge <= 66) {
	console.log("Full Price");
} else {
	//console.log("Snior Citizen Discount");
}

let hand = ["Rock", "Paper", "Scissor"];

function getHand() {
	let randomIndex = Math.floor(Math.random() * 3);
	return hand[randomIndex];
}

//console.log(getHand());

let fruits = [
	"🍏",
	"🍊",
	"🍎",
	"🫐",
	"🍏",
	"🍊",
	"🍋",
	"🍎",
	"🫐",
	"🍋",
	"🍊",
	"🍎",
	"🍏",
	"🫐",
	"🍊",
	"🍋",
	"🍎",
	"🫐",
	"🍏",
	"🍋",
	"🍎",
];

let greenApple = document.getElementById("green-apple");
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
let cheryShelf = document.getElementById("chery-shelf");
let limeShelf = document.getElementById("lime-shelf");

function sortFruit() {
	for (let i = 0; i < fruits.length; i++) {
		if (fruits[i] === "🍏") {
			greenApple.textContent += "🍏";
		} else if (fruits[i] === "🍎") {
			appleShelf.textContent += "🍎";
		} else if (fruits[i] === "🍊") {
			orangeShelf.textContent += "🍊";
		} else if (fruits[i] === "🫐") {
			cheryShelf.textContent += "🫐";
		} else if (fruits[i] === "🍋") {
			limeShelf.textContent += "🍋";
		}
	}
}

sortFruit();
