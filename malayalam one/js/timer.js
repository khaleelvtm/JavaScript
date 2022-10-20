// Timers
setInterval(function () {
	document.write("*");
}, 1000);

//
let a = 0;
let x = setInterval(function () {
	console.log("^");
	a++;
	if (a > 10) clearInterval(x);
}, 100);

// Count Number
let count = 10;
let set = setInterval(function () {
	if (count == 0) clearInterval(set);
	document.getElementById("countNumber").innerHTML = count;
	count--;
}, 1000);

let count2 = 100;
let set2 = setInterval(function () {
	if (count2 == 0) clearInterval(set2);
	document.getElementById("countNumber2").innerHTML = count2;
	count2--;
}, 100);

//
let y = 0;
function abc() {
	setTimeout(function () {
		y++;
		document.write("*");
		if (y < 20) abc();
	}, 100);
}
abc();
