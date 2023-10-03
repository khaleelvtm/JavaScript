// Time
let hourTime = 5;
let userName = "Rahman";

if (hourTime >= 6 && hourTime <= 12) {
	console.log(`Good Morning ${userName}`);
} else if (hourTime >= 13 && hourTime <= 17) {
	console.log(`Good Afternoon ${userName}`);
} else {
	console.log(`Good Night! ${userName}`);
}

// Age
let age = 67;
let isHoliday = true;

if ((age <= 6 || age >= 65) && isHoliday) {
	console.log("Discount");
} else {
	console.log("No Discount");
}

// Random Number
let randomNumber = Math.random();
let result = "";

if (randomNumber < 0.5) {
	console.log((result += "Hand ") + randomNumber);
} else {
	console.log((result += "Tail ") + randomNumber);
}

let guss = "Hand ";
guss === result ? console.log("You Win!") : console.log("You Lose!");
