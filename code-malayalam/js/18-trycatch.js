console.log("Start");

let oneData, twoData, result;

try {
	oneData = funOne();
	twoData = funTwo();
	result = funResult(oneData, twoData);
} catch (error) {
	result = 0;
	console.log("ERROR: ", error);
} finally {
	console.log("Log Out!");
}

console.log(result);
console.log("End");

// ------------------------------------------------------------//

function funOne() {
	console.log("test One");
	return 11;
}
function funTwo() {
	console.log("test Two");
	throw new Error("My testing Error!");
	return 22;
}
function funResult(a, c) {
	console.log("test Three");
	return a + c;
}
