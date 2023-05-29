/*
// Regex
let regex = /Lorem/g;
let notes =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry";

// - exec
let result = regex.exec(notes);
console.log(result);

// - test
let result2 = regex.test(notes);
console.log(result2);

// - match
let result3 = notes.match(regex);
console.log(result3);

// - replace
let result4 = notes.replace(regex, "Hi");
console.log(result4);



function employe() {
	let empid = document.getElementById("empID").value;
	let check = /[DE]256[10-99]/iv;

	if (check.test(empid)) {
		alert("Valid Employee ID");
	} else {
		alert("Invalid Employee ID");
	}

	console.log(empid);
}
*/
// let regex = /\d91/;
// let number = "this is your phone number 8129009119";

// let output = regex.exec(number);

// console.log(output);

function validation() {
	let email = document.getElementById("mail").value;
	let check = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z])*$/;

	if (email.trim() == "") {
		alert("Please enter email ID");
	} else if (check.test(email)) {
		alert("Email Submited Success");
	} else {
		alert("Wrong!");
	}
}
