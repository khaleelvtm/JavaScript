let num = 5;
let str = "";

/* - 1 */
// for (let i = 0; i < num; i++) {
// 	for (let j = 0; j < num; j++) {
// 		str += "!";
// 	}
// 	str += "<br>";
// }

// /* - 2 */
// for (let i = 0; i < num; i++) {
// 	for (let j = 0; j < num; j++) {
// 		if (i === 0 || i === num - 1 || j === num - 1 || j === 0) {
// 			str += "@";
// 		} else {
// 			str += " ";
// 		}
// 	}
// 	str += "<br>";
// }

// /* - 3 */
// for (let i = 1; i <= num; i++) {
// 	for (let j = 0; j < num - i; j++) {
// 		str += " ";
// 	}
// 	for (let k = 0; k < i; k++) {
// 		str += "#";
// 	}
// 	str += "<br>";
// }

// /* - 4 */
// for (let i = 1; i <= num; i++) {
// 	for (let j = 0; j < i; j++) {
// 		str += "$";
// 	}
// 	str += "<br>";
// }

// /* - 5 */
// for (let i = 0; i < num; i++) {
// 	for (let j = 0; j < num - i; j++) {
// 		str += "%";
// 	}
// 	str += "<br>";
// }

/* - 6 */
// for (let i = 1; i <= num; i++) {
// 	for (let j = 0; j < i; j++) {
// 		if (j === 0 || j === i - 1 || i === num) {
// 			str += "^";
// 		} else {
// 			str += " ";
// 		}
// 	}
// 	str += "<br>";
// }

/* - 7 */
// for (let i = 1; i <= num; i++) {
// 	for (let j = 1; j <= num - i; j++) {
// 		str += " ";
// 	}
// 	for (let k = 0; k < 2 * i - 1; k++) {
// 		str += "&";
// 	}
// 	str += "<br>";
// }

/* - 8 */
// for (let i = 0; i < num; i++) {
// 	for (let j = 0; j < i; j++) {
// 		str += " ";
// 	}
// 	for (let k = 0; k < 2 * (num - i) - 1; k++) {
// 		str += "&";
// 	}
// 	str += "<br>";
// }

/* - 9 */
// for (let i = 1; i <= num; i++) {
// 	for (let j = 1; j <= num - i; j++) {
// 		str += " ";
// 	}
// 	for (let k = 0; k < 2 * i - 1; k++) {
// 		if (k === 0 || k === 2 * i - 2 || i === num) {
// 			str += "&";
// 		} else {
// 			str += " ";
// 		}
// 	}
// 	str += "<br>";
// }

// for (let i = 0; i < num; i++) {
// 	for (let j = 0; j < i; j++) {
// 		str += " ";
// 	}
// 	for (let k = 0; k < 2 * (num - i) - 1; k++) {
// 		if (k === 0 || k === 2 * (num - i) - 2 || i === 0) {
// 			str += "*";
// 		} else {
// 			str += " ";
// 		}
// 	}
// 	str += "<br>";
// }

/* - 10 */
// for (let i = 1; i <= num; i++) {
// 	for (let j = 1; j <= num - i; j++) {
// 		str += " ";
// 	}
// 	for (let k = 0; k < 2 * i - 1; k++) {
// 		str += "&";
// 	}
// 	str += "<br>";
// }

// for (let i = 1; i < num; i++) {
// 	for (let j = 0; j < i; j++) {
// 		str += " ";
// 	}
// 	for (let k = 0; k < 2 * (num - i) - 1; k++) {
// 		str += "&";
// 	}
// 	str += "<br>";
// }

/* - 11 */
// for (let i = 1; i <= num; i++) {
// 	for (let j = 1; j <= num - i; j++) {
// 		str += " ";
// 	}
// 	for (let k = 0; k < 2 * i - 1; k++) {
// 		if (k === 0 || k === 2 * i - 2) {
// 			str += "*";
// 		} else {
// 			str += " ";
// 		}
// 	}
// 	str += "<br>";
// }

// for (let i = 1; i < num; i++) {
// 	for (let j = 0; j < i; j++) {
// 		str += " ";
// 	}
// 	for (let k = 0; k < 2 * (num - i) - 1; k++) {
// 		if (k === 0 || k === 2 * (num - i) - 2) {
// 			str += "*";
// 		} else {
// 			str += " ";
// 		}
// 	}
// 	str += "<br>";
// }

/* - 12 */
for (let i = 0; i < num; i++) {
	for (let j = 0; j < i; j++) {
		str += " ";
	}
	for (let k = 0; k < 2 * (num - i) - 1; k++) {
		str += "&";
	}
	str += "<br>";
}
for (let i = 2; i <= num; i++) {
	for (let j = 1; j <= num - i; j++) {
		str += " ";
	}
	for (let k = 0; k < 2 * i - 1; k++) {
		str += "&";
	}
	str += "<br>";
}

document.write(`<pre>${str}</pre>`);
