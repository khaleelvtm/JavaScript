let myObj = {
	name: "John",
	age: 25,
	logName() {
		console.log(this.name);
	},
};

let myArr = ["eat", "sleep", "code"];

sessionStorage.setItem("Session Store", myArr);
let myStore = sessionStorage.getItem("Session Store");
console.log(myStore);
