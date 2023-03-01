const textOnChange = (arg) => {
	const label = document.getElementById("validationLabel");
	const error = validate(arg.value);
	if (error) {
		label.innerText = error;
	} else {
		label.innerText = "";
	}
};

const validate = (value) => {
	const regexp = /^(?:[012]?\d|3[01])-(?:[0]?\d|1[012])-(\d{4})$/i;
	const result = value.match(regexp);
	if (result === null) {
		return "Invalid Data";
	} else {
		return "";
	}
};

let qw = /./i;
let as = "q-w-e";

const rus = qw.test(as);
console.log(rus);
