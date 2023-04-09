let myNumber = 0;
while (myNumber < 10) {
	myNumber++;
	//console.log(myNumber);
}

let name = "John";
let counter = 0;
let leter;

while (true) {
	leter = name[counter];
	console.log(leter);
	if (leter === "h") break;
	counter++;
}

function sum(num1, num2 = num1++) {
	return num1 + num2;
}
console.log(sum(5));

function getUsernameFromEmail(email) {
	return email.slice(0, email.indexOf("@"));
}
console.log(getUsernameFromEmail("khaleel@gmail.com"));

const toProperCase = (data) => {
	return data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
};
console.log(toProperCase("sTeEev"));

// Array
let myArr = [];
myArr.push("one");
myArr.push(123);
myArr.push(true);
myArr.push([1, 2, 3]);

console.log(myArr);

delete myArr[2];

console.log(myArr);

let newArrA = ["A", "B", "C"];
let newArrB = ["D", "E", "F"];
let arrAB = newArrA.concat(newArrB);
console.log(arrAB);

//
const arrayFunc = () => {
	let randomNumber = Math.floor(Math.random() * 3);
	let randomvalues = ["rock", "paper", "scissors"];
	return randomvalues[randomNumber];
};
//arrayFunc();
console.log("random:", arrayFunc());

//////
class Pizza {
	constructor(pizaType, pizaSize) {
		this.type = pizaType;
		this.size = pizaSize;
		this.crust = "Original";
		this.topings = [];
	}
	getCrust() {
		return this.crust;
	}
	setCrust(pizzaCrust) {
		this.crust = pizzaCrust;
	}
	getTopings() {
		return this.topings;
	}
	setTopings(toping) {
		this.topings.push(toping);
	}
	bake() {
		console.log(
			`Backing a ${this.size} ${this.crust} ${this.type} crust pizza.`
		);
	}
}

let myPizza = new Pizza("peporoni", "small");
myPizza.setCrust("Dublicate");
myPizza.bake();
myPizza.setTopings("one");
myPizza.setTopings("Two");

console.log(myPizza.getCrust());
console.log(myPizza.getTopings());

////

class Pizza {
	constructor(pizzaSize) {
		this.size = pizzaSize;
		this.crust = "Original";
	}
	getCrust() {
		return this.crust;
	}
	setCrust(pizzaCrust) {
		this.crust = pizzaCrust;
	}
}

class SpecialPizza extends Pizza {
	constructor(pizzaSize) {
		super(pizzaSize);
		this.type = "The work";
	}
	slice() {
		console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
	}
}

let mySpecialPizza = new SpecialPizza("medium");
mySpecialPizza.slice();
