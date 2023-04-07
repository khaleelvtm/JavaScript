let myJson = {
	name: "John",
	hobbies: ["sing", "dance", "sleep"],
	hello() {
		console.log("Hello, welcome");
	},
};

console.log(myJson);
console.log(myJson.name);
console.log(myJson.hobbies);
myJson.hello();

let setJSON = JSON.stringify(myJson);
console.log(setJSON);
