for (i = 1; i <= 20; i++) {
	console.log("for:", i);
	if (i == 10) {
		continue;
	}
}

let x = 10;
while (x <= 5) {
	console.log("while:", x);
	x++;
}

do {
	console.log("do:", x);
	x++;
} while (x <= 25);

let user = {
	name: "John",
	age: 25,
	gategory: "Normal",
	get main() {
		return this.gategory;
	},
};
console.log(user.main);

var value = 50;

function newValue() {
	var value = 100;
	console.log("value:", value);
	console.log("this value:", this.value);
}

newValue();

let data = [10, 20, 30, 40, 50];

for (i = 0; i < data.length; i++) {
	console.log(data[i]);
}

data.forEach((item) => {
	console.log(item);
});

let string = true;

if (typeof string === "number") {
	console.log("this is number");
} else if (typeof string === "string") {
	console.log("this is String");
} else {
	console.log("this is Boolean");
}

console.log(typeof string);

let body = "return Math.PI * rad * rad";
let circle = new Function("rad", body);

function* genarayedFunc() {
	yield 1;
	yield 2;
	return 3;
}

let gen = genarayedFunc();
let one = gen.next();
let two = gen.next();
let four = gen.next();

console.log(JSON.stringify(one));
console.log(JSON.stringify(two));
console.log(JSON.stringify(four));
