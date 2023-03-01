function arrFunc() {
	let arr = [11, 22, 33, 44, 55];
	let [a, b, c] = arr;
	//console.log(a, b, c);
}

arrFunc();

function restFunc(...total) {
	console.log(total);
	let q = total.reduce((sum, current) => sum + current);
	console.log(q);
}
let a = [12, 34, 45, 65, 98, 200];
restFunc(...a);

// --------

function testObg({ name, age }) {
	console.log(name, age);
}
const dataObg = {
	name: "John",
	age: 34,
};

testObg(dataObg);
