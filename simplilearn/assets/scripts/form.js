// Form Validation
function formValidation() {
	var mailID = document.getElementById("emailAddress").value;
	var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/g;
	// if (mailID.text(regx)) {
	// 	alert("You have provided a valid email address");
	// 	return true;
	// } else {
	// 	alert("Sorry!");
	// 	return false;
	// }
	//console.log(mailID);
}
