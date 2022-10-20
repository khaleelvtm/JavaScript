/* ------------------------------------------------
28. Loops and iteration
--------------------------------------------------*/
// For Loop
for (let i = 0; i <= 10; i++) {
	console.log(i);
}
for (let i = 1; i <= 20; i += 3) {
	console.log(i);
}

let john = ["John", "location", 1990, "mark", true];
for (let i = 0; i < john.length; i++) {
	console.log(john[i]);
}

// Wile Loop
let x = 0;
while (x < john.length) {
	console.log(john[x]);
	x++;
}

// Continue
let mark = ["Mark", "Smith", 29, "Calicut", 1990, true, "Green"];
for (let x = 0; x < mark.length; x++) {
	if (typeof mark[x] !== "string") continue;
	console.log(mark[x]);
}

for (let x = 0; x < mark.length; x++) {
	if (typeof mark[x] !== "string") break;
	console.log(mark[x]);
}

// Looping backword
for (let x = mark.length; x >= 0; x--) {
	console.log(x);
}
