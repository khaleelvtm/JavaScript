import { addArray } from "./main2.js";

let name = "My Name Is Rahman";

let options = {
	version: "2.0",
	author: "John Smith",
};

function addAll(arr = []) {
	logData("addAll");
	return arr.reduce((total, item) => total + item, 0);
}
export default function findMax(arr = []) {
	logData("findMax");
	return Math.max(...arr);
}
function logData(val) {
	console.log("INSIDE", val);
}

export { name as myname, options, addAll, findMax, logData };
export { addArray } from "./main2.js";
