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

console.log(person);
