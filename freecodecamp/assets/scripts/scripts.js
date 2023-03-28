// ---
let count = 0;
let selectCounter = document.getElementById("countNumber");
let saveData = document.getElementById("saveData");

function incrementClick() {
	count += 1;
	selectCounter.textContent = count;
}

function saveClick() {
	let dataCount = count + " - ";
	saveData.textContent += dataCount;
	count = 0;
	selectCounter.textContent = count;
}

let errorMsg = document.getElementsByClassName("error");
function saveClick() {
	errorMsg[0].textContent = "Somthing wrong!";
}
