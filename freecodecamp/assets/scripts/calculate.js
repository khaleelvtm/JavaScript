// Calculate

let numb1 = 25;
let numb2 = 5;

document.getElementById("numbOne").textContent = numb1;
document.getElementById("numbTwo").textContent = numb2;

let sumValue = document.getElementById("sumValue");

let add = () => {
	let addValue = numb1 + numb2;
	sumValue.textContent = "SUM: " + addValue;
};
let sub = () => {
	let subValue = numb1 - numb2;
	sumValue.textContent = "SUM: " + subValue;
};
let div = () => {
	let divValue = numb1 / numb2;
	sumValue.textContent = "SUM: " + divValue;
};
let mul = () => {
	let mulValue = numb1 * numb2;
	sumValue.textContent = "SUM: " + mulValue;
};
