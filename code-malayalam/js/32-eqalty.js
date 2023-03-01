// let a = 10;
// let b = 10;
// console.log("INTGER: ", a === b);

// let c = "Hello";
// let d = "Hello";
// console.log("STRING: ", c === d);

// let e = ["qq", "ww", "ee"];
// let f = ["qq", "ww", "ee"];
// console.log("ARRAY: ", e === f);

// let g = { name: "John" };
// let h = { name: "John" };
// console.log("OBJECT: ", g === h);

// let sm = { data: "This is dummy data" };
// let az = sm;

// az.data = "Updated Data 2.0";

// console.log("SM: ", sm);
// console.log("SM: ", az);

// let z = 100;
// let x = z;
// x = 99;
// console.log("Z: ", z);
// console.log("X: ", x);

function demoFun(object) {
	object.test = "Testing message";
	let retu = {
		...object,
		test: "Master",
	};
	return retu;
}
console.log(demoFun);

const demoObject = {
	name: "John Smith",
};
console.log("DEMO OBJECT:", demoObject);

let subject = demoFun(demoObject);

console.log("SUBJECT:", subject);

console.log("DATA:", subject === demoObject);
