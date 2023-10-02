// Varibles

let coffee = 5;
let bagels = 3;
let soup = 9;

let cost = coffee + bagels * 2 + soup;
let tax = cost * 0.1;

console.log(`Cost of Food: $${cost}`);
console.log(`Tax (10%) $${cost * 0.1}`);

let totalCost = cost + tax;
console.log(`Total Cost: $${totalCost}`);

let plus4 = (totalCost += 4);
console.log(`Add more 4 items : $${plus4}`);

let plus5 = (totalCost += 5);
console.log(`Add more 5 items : $${plus5}`);

let remove = totalCost - bagels;
console.log(`Rmove one Item : $${remove}`);

let remove2 = (totalCost -= 2);
console.log(remove2);

let remove3 = (totalCost -= 3);
console.log(remove3);

let calculation = "";
let btnClcik = document.getElementsByClassName("btn");
let value = document.getElementById("input");

for (let i = 0; i < btnClcik.length; i++) {
	btnClcik[i].addEventListener("click", function () {
		console.log(calculation);
		value.value = calculation;
	});
}
