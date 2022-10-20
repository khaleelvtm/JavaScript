let timeElement = document.getElementById("currentTime");

function putZero(number) {
	return number < 10 ? "0" + number : number;
}

function showTime() {
	let newDate = new Date();
	let hours = newDate.getHours();
	let amPm = hours > 12 ? "pm" : "am";
	let dateString =
		putZero(hours % 12) +
		" : " +
		putZero(newDate.getMinutes()) +
		" : " +
		putZero(newDate.getSeconds()) +
		" " +
		amPm;
	timeElement.innerHTML = dateString;
	setTimeout(function () {
		showTime();
	}, 1000);
}
showTime();
