// Start JS

// let time = 13;

// if (time >= 6 && time < 12) {
// 	console.log("Good Morning");
// } else if (time >= 12 && time < 18) {
// 	console.log("Good afternoon");
// } else {
// 	console.log("Good evening!");
// }

// Factory function
function createCircle(radus) {
	return {
		radus,
		draw() {
			console.log("Drawing start");
		},
	};
}

console.log("function: ", createCircle);
console.log("type:", typeof createCircle);

let myCircle = createCircle(1);
console.log("my circle: ", myCircle);

// Constractor function
function Circle(radus) {
	this.radus = radus;
	this.draw = function () {
		console.log("Drawing start");
	};
}

console.log("function: ", Circle);
console.log("type:", typeof Circle);

let newOne = new Circle(2);
console.log("new:", newOne);

//
