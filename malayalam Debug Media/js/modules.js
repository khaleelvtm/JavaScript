/*import { myString as str, myFunction } from "./variables.js";
import testscript from "./variables.js";

import * as Util from "./variables.js";

console.log(Util.default());

let myNumber = "99";

let convert = myNumber | 0;

console.log(myNumber);
console.log(typeof convert);*/

const users = {
	id: 0,
	name: "",
};

const newUser = users.id ?? "Dummy";

console.log(newUser);

let myFunc = () => {
	console.log("Loaing....");
};

myFunc();

(function hjy() {})();

((wew) => {
	console.log("Rtr");
})();
