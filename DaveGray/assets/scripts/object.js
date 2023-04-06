let vehicle = {
	wheel: 4,
	engin() {
		return "Testing.";
	},
};

let truck = Object.create(vehicle);
// let bus = new Object(vehicle);

truck.doors = 2;

console.log(truck);
console.log(vehicle);

// ------
const band = {
	vocals: "Robort",
	guitar: "Jimi",
	bass: "John",
};
console.log("band:", band);

let { vocals, guitar, bass } = band;
// console.log(guitar);

function sings({ vocals }) {
	return `${vocals} sings!`;
}
console.log(sings(band));
