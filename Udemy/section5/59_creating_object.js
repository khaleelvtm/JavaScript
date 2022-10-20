/* -------------------------------- 
59. Creating Objects
---------------------------------*/

let personProto = {
	calculateAge: function () {
		console.log(2010 - this.yearOfBirth);
	},
};

let john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1989;
john.job = "Teacher";

let smith = Object.create(personProto, {
	name: { value: "Smith" },
	yearOfBirth: { value: 1993 },
	job: { value: "Designre" },
});



