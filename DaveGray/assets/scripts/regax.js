// (555)555-555 or 123-456-7890
let selectInput = document.getElementById("phoneNumber");
selectInput.addEventListener("input", (event) => {
	let regax = /^\(?(\d{3})\)?[-. ]?(\d{3})?[-. ]?(\d{4})$/g;
	let format = document.querySelector(".phone-format");
	let phone = selectInput.value;
	let found = regax.test(phone);
	if (!found && phone.length) {
		selectInput.classList.add("invalid");
		format.classList.add("block");
	} else {
		selectInput.classList.remove("invalid");
		format.classList.remove("block");
	}
});

let phoneForm = document.getElementById("phoneForm");
phoneForm.addEventListener("submit", (event) => {
	event.preventDefault();
	let regax = /[()-. ]/g;
	let savedPhoneNumber = selectInput.value.replaceAll(regax, "");
	console.log(savedPhoneNumber);
});
