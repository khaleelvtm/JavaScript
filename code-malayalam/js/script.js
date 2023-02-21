// CallBack Function
document.getElementById("clickButton").onclick = clickFunction;
function clickFunction(x) {
	console.log(x);
}
console.log("One");

// Async Callback
const number = [2, 4, 5, 6, 7, 8];
function numberFunction(a) {
	console.log(a);
}
number.forEach(numberFunction);

let hNumb = [11, 12, 14, 25, 64, 78];
hNumb.forEach(function (val) {
	console.log("Hello World!", val);
});

// Arrow Function
const arrowTest = function (val) {
	console.log("Hello JS", val);
};
const arrowFunc = (val) => {
	console.log("Hello JS", val);
};

arrowTest(99);
arrowFunc(55);

const arrowAdd = (a, b) => {
	return a + b;
};
const arrowMult = (z, x) => {
	return z * x;
};

console.log(arrowAdd(8, 3), arrowMult(19, 25));

// Object
const myObject = {
	q: 5,
	w: 4,
	oF: function () {
		console.log(this);
	},
};

myObject.oF = myObject.oF.bind(myObject);
let a = myObject.oF;
a();

const myObjectTwo = {
	q: 5,
	w: 4,
	fun: function (aa, ss) {
		console.log(this, aa, ss);
	},
};

let zz = myObjectTwo.fun;
zz.call(myObjectTwo, 22, 33);
zz.apply(myObjectTwo, [22, 33]);

class myClass {
	classFunction = () => {
		console.log(this);
	};
}

let classObject = new myClass();
let az = classObject.classFunction;
az();

// Call By Value, Call By Reference
function one() {
	let x = [100];
	two(x);
	console.log("One", x[0]);
}
function two(x) {
	x[0] = x[0] * 5;
	console.log("Two", x[0]);
}
one();

// Closure
function add(a, b) {
	function myAdd() {
		let c = a + b;
		return c;
	}
	return myAdd;
}
function main() {
	let res = add(6, 8);
	let val = res();
	console.dir(res);
}

main();

function coundFunc(a) {
	[1, 4, 5, 7, 9].forEach(function (i) {
		console.log(i, a);
	});
}
coundFunc(25);

let nameObject = [
	{
		name: "One",
		msg: "Hello I am One",
	},
	{
		name: "Two",
		msg: "Hello I am Two",
	},
	{
		name: "three",
		msg: "Hello I am Three",
	},
];

const nameFunction = () => {
	nameObject.forEach((item) => {
		const btn = document.createElement("button");
		btn.innerHTML = item.name;
		btn.onclick = clickFunctionTwo(item.msg);
		document.body.appendChild(btn);
	});
};

const clickFunctionTwo = (arg) => {
	return () => {
		alert(arg);
	};
};

nameFunction();

// Spread Operator

let spOp = {
	id: 10,
	name: "Jogn",
	age: 28,
};
//console.log(spOp);

let spOpTwo = {
	id2: 15,
	name2: "smith",
	age: 35,
};

let spOpFinal = {
	...spOp,
	...spOpTwo,
	status: "online",
};
//console.log(spOpFinal);

// let spAr = [1, 3, 4, 5, 6];
// console.log(spAr);

// let spArTwo = [...spAr];
// console.log(spArTwo);

let spOpCop = {
	id: 10,
	name: "Jogn",
	age: 28,
};
let spOpCopTwo = { ...spOpCop };
spOpCopTwo.status = "Offline";
//console.log(spOpCop, spOpCopTwo);

let numArr = [2, 5, 25, 74, 15, 9];
let numOb = Math.max(...numArr);
console.log(numOb);

// Destucturing
// Object Destucturing
const desObj = {
	name: "Rahman",
	location: undefined,
	pin: 6702,
};

const desFun = () => {
	const { name, location, pin, status = "Start" } = desObj;
	console.log(name, location, pin, status);
};
desFun();

let desObjOne = {
	name: "One",
	location: "NY",
};
let desObjTwo = {
	name: "Two",
	location: "PR",
};

function desFunction() {
	var { name, location } = desObjOne;
	var { name: name2, location: location2 } = desObjTwo;

	console.log(name, location, name2, location2);
}
desFunction();

// Array Function // forEach, find, filter, map, reduce

const arrUser = [
	{
		name: "John",
		mark: 34,
		place: "Kannur",
	},
	{
		name: "Smith",
		mark: 65,
		place: "Calicut",
	},
	{
		name: "Wils",
		mark: 39,
		place: "Wayanad",
	},
];

let sum = 0;
arrUser.forEach((userItem, index) => {
	sum = sum + userItem.mark;
	//console.log(index);
});
console.log(sum);

let findUser = arrUser.find((item) => {
	return item.name === "Wils";
});
console.log(findUser);

let filterUser = arrUser.filter((item, index) => {
	return index < 2;
});
console.log(filterUser);

let mapUser = arrUser.map((item) => {
	return {
		...item,
		contry: "India",
	};
});
console.log(mapUser);

let reduseUser = arrUser.reduce((total, item) => {
	total.push(item.name);
	return total;
}, []);
console.log(reduseUser);

// nested Destucturing
let master = {
	name: "John",
	age: 25,
	location: "Calicut",
};

let { name, age, books: { malayalam } = {} } = master;
console.log(malayalam);

// Class
// function minYear(...args) {
// 	var arr = args.map((item) => item.yob);
// 	console.log(Math.min(...arr));
// }

class Users {
	name;
	yob;
	constructor(name, yob) {
		this.name = name;
		this.yob = yob;
	}
	static minYear = function (...args) {
		var arr = args.map((item) => item.yob);
		console.log(Math.min(...arr));
	};
	getAge() {
		return new Date().getFullYear() - this.yob;
	}
}

let userOne = new Users("John", 1991);
let userTwo = new Users("Mike", 1986);
let userThree = new Users("Deve", 1999);

Users.minYear(userOne, userTwo, userThree);

// console.log(userOne, userOne.name, userOne.getAge());
// console.log(userTwo, userTwo.name, userTwo.getAge());
// console.log(userThree, userThree.name, userThree.getAge());

// Setters & Getters
// class Button {
// 	constructor(name) {
// 		this.button = document.createElement("button");
// 		this.button.innerHTML = name;
// 		document.body.appendChild(this.button);
// 	}

// 	set width(width) {
// 		this.button.style.width = width + "px";
// 	}
// 	set height(height) {
// 		this.button.style.height = height + "px";
// 	}

// 	get width() {
// 		return this.button.style.width;
// 	}
// 	get height() {
// 		return this.button.style.height;
// 	}
// }

// let clickButton = new Button("Click Me!");
// clickButton.width = 100;
// clickButton.height = 100;
// console.log(clickButton.width, clickButton.height);

const addButton = {
	init(name) {
		this.button = document.createElement("button");
		this.button.innerHTML = name;
		document.body.appendChild(this.button);
	},
	set width(width) {
		this.button.style.width = width + "px";
	},
	set height(height) {
		this.button.style.height = height + "px";
	},
};

addButton.init("Click Item!");
addButton.width = 100;
addButton.height = 100;

// Inheritance
class Button {
	constructor(name) {
		this.button = document.createElement("button");
		this.button.innerHTML = name;
		document.body.appendChild(this.button);
	}
	onclickFun(fun) {
		this.button.onclick = fun;
	}
}

let clickButton = new Button("CLick 1");
clickButton.onclickFun(function () {
	console.log("Cliked !");
});

class GreenButton extends Button {
	onclickFun(fun) {
		super.onclickFun(
			function () {
				this.button.style.backgroundColor = "#190";
				fun();
			}.bind(this)
		);
	}
}
let clickButtonTwo = new GreenButton("Green Button");
clickButtonTwo.onclickFun(() => {
	console.log("Green Clicked");
});

// Prototype
class ButtonTwo {
	constructor(name) {
		this.button = document.createElement("button");
		this.button.innerHTML = name;
		document.body.appendChild(this.button);
	}
	onclickFun(fun) {
		this.button.onclick = fun;
	}
}

let clickButtonThree = new ButtonTwo("CLick 1");
console.log(clickButtonThree);

function NewButton(name) {
	this.button = document.createElement("button");
	this.button.innerHTML = name;
	document.body.appendChild(this.button);
}

NewButton.prototype.onClickFun = function (fun) {
	this.button.onclick = fun;
};

let b2 = new NewButton("Hi!");

console.dir(NewButton);
console.dir(b2);
