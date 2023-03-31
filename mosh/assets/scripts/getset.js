const person = {
	firstName: "John",
	lastName: "Smith",

	get fullName() {
		return `${person.firstName} ${person.lastName}`;
	},
	set fullName(value) {
		let parts = value.split(" ");
		this.firstName = parts[0];
		this.lastName = parts[1];
	},
};

person.fullName = "Wills Node";

// console.log(person);

//----

const circle = {
	raduis: 1,
	draw() {
		console.log("Drawing Start!");
	},
};

//console.log("Circle:", circle);
// const anothOne = {};
// for (let key in circle) {
// 	anothOne[key] = circle[key];
// 	console.log("another:", anothOne);
// }

const anothOne = Object.assign(
	{
		color: "red",
		age: 34,
	},
	circle
);

// console.log(anothOne);

const video = {
	title: "Start",
	tags: ["one", "two", "three"],
	showTag() {
		this.tags.forEach(function (tag) {
			console.log("TAG: ", this.title, tag);
		}, this);
	},
};

video.showTag();
