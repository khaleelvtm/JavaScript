let myNumber = 0;
while (myNumber < 10) {
	myNumber++;
	//console.log(myNumber);
}

let name = "John";
let counter = 0;
let leter;

while (true) {
	leter = name[counter];
	console.log(leter);
	if (leter === "h") break;
	counter++;
}

function sum(num1, num2 = num1++) {
	return num1 + num2;
}
console.log(sum(5));

function getUsernameFromEmail(email) {
	return email.slice(0, email.indexOf("@"));
}
console.log(getUsernameFromEmail("khaleel@gmail.com"));

const toProperCase = (data) => {
	return data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
};
console.log(toProperCase("sTeEev"));
