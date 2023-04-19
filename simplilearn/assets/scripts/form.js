// Form Validation
function formValidation() {
	var mailID = document.getElementById("emailAddress").value;
	var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
	if (regx.test(mailID)) {
		alert("You have provided a valid email address");
		return true;
	} else {
		alert("Sorry!");
		return false;
	}
}
