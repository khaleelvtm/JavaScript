//--
class Person {
	constructor(name) {
		this.name = name;
	}
	walk() {
		console.log("Perrson walking");
	}
}

class Teacher extends Person {
	constructor(name, digree) {
		super(name);
		this.digree = digree;
	}
	teach() {
		console.log("Teaching ..");
	}
}

const teacher = new Teacher("jon", "Msc");

console.log(teacher.walk());
