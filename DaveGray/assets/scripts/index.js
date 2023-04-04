let myVariable = "Javascript";
//console.log(myVariable.toUpperCase());
let myNumber = 55.9;

let myString = "55";

//console.log(myString);
//console.log(typeof Number.parseFloat("45.678ac").toFixed(1).toString());

// Math
//console.log(Math.PI);
//console.log(Math.trunc(Math.PI));

// log
let name = "wilsmith";
//console.log(name.charAt(Math.floor(Math.random() * name.length)));

// ternry
let soup;
let isCostomerBrand = true;
let soupAccess = isCostomerBrand
	? "Sorry, no soup for you!"
	: soup
	? `Yes, we have ${soup} today.`
	: "Sorry, no soup today";

//console.log(soupAccess);

let liveScore = 99;
let currentScore =
	liveScore > 89
		? "A"
		: liveScore > 79
		? "B"
		: liveScore > 69
		? "C"
		: liveScore > 59
		? "D"
		: "F";
//console.log("score:", currentScore);

//let dataConfirm = confirm("ok === true \n cancel === false");
//console.log(dataConfirm);
let enterUsername = prompt("Enter your username:");
if (enterUsername) {
	console.log(enterUsername);
} else {
	console.log("Empty filed!");
}
