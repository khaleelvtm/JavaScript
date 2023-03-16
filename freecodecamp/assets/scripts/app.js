let count = 0;
function cardFunction(card) {
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count--;
			break;
		default:
			count++;
			break;
	}

	let holdbet = "Hold";
	if (count > 0) {
		holdbet = "Bet";
	}
	return count + "  " + holdbet;
}

cardFunction(8);
cardFunction("Q");
cardFunction(6);
cardFunction("A");
cardFunction("K");

//console.log("DATA:", cardFunction(4));

// - Object --------------------

let userData = {
	nameOne: "John",
	nameTwo: "Smith",
	nameThree: "Mike",
};

function checkObject(prop) {
	if (userData.hasOwnProperty(prop)) {
		return userData[prop];
	} else {
		return "Not Found!";
	}
}

// JSON Arr -------------------
let collectionData = {
	2200: {
		album: "Slipy One",
		artist: "John",
		track: ["let one", "let Two"],
	},
	3300: {
		album: "Start Two",
		artist: "Mike",
		track: ["Music one", "Music Two"],
	},
	4400: {
		artist: "John Doe",
		track: [],
	},
	5500: {
		album: "Album FIVE",
	},
};

function updateData(id, prop, value) {
	if (value === "") {
		delete collectionData[id][prop];
		console.log("Empty Data!");
	} else if (prop === "track") {
		collectionData[id][prop] = collectionData[id][prop] || [];
		collectionData[id][prop].push(value);
		console.log("Prop track");
	} else {
		collectionData[id][prop] = value;
		console.log("Defult Data");
	}

	return collectionData;
}

// console.log("UPDATED: ", updateData(5500, "track", ""));

// Loop -------------------

let demoArr = [5, 6, 7, 8, 9];
let totalArr = 0;

for (let i = 0; i < demoArr.length; i++) {
	totalArr += demoArr[i];
}

// -----------

const multyPlayAll = (arr) => {
	let product = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			product += arr[i][j];
		}
	}
	return product;
};

let product = multyPlayAll([
	[1, 2],
	[3, 4],
	[5, 6],
]);

// console.log("TOTAL:", product);

let whileArr = [];
let store = 0;

do {
	whileArr.push(store);
	store++;
} while (store < 5);

// console.log(store, whileArr);
let userList = [
	{
		firstname: "David",
		lastname: "John",
		number: 123456789,
		like: ["Pizza", "coding", "Music"],
	},
	{
		firstname: "Mike",
		lastname: "wils",
		number: 9876543210,
		like: ["ONE", "TWO", "THREE"],
	},
	{
		firstname: "Rhman",
		lastname: "Start",
		number: 0011223344,
		like: ["JS", "PHP", "REACT"],
	},
	{
		firstname: "Ramu",
		lastname: "Sumesh",
		number: undefined,
		like: ["Car", "Bike", "Bus"],
	},
];

let checkProfile = (name, prop) => {
	for (let i = 0; i < userList.length; i++) {
		if (userList[i].firstname === name) {
			return userList[i][prop] || "No Property!";
		}
	}
	return "No Contact!";
};

let dataStore = checkProfile("David", "numbera");
//console.log(dataStore);

// Randome Number ------------

function randomNumber() {
	return Math.floor(Math.random() * 10);
}
//console.log(randomNumber());

function randNum(minNumb, maxNumb) {
	return Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;
}
let myRandom = randNum(5, 15);
// console.log(myRandom);

// Pars ------------------
const parselintNumber = (str) => {
	return parseInt(str);
};

// Ternary Op

function terneryFun(numb) {
	return numb > 0 ? "Positive" : numb < 0 ? "Negative" : "Zero";
}
//console.log(terneryFun(0));

// Arrow --------

const arrayList = [2, -8, 5, 6, -25, 0.5, 7, 8];
const abcFunc = (arr) => {
	const abcData = arr
		.filter((num) => Number.isInteger(num) && num > 0)
		.map((x) => x * x);
	return abcData;
};

const abcData = abcFunc(arrayList);
//console.log(abcData);

// -----------

const numberData = (function () {
	return function numberData(number, value = 10) {
		return number + value;
	};
})();

// console.log(numberData(15, 25));
// console.log(numberData(125));

// Rest Operator ----------------------
const restOp = (function () {
	return function restOp(...arrData) {
		return arrData.reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			0
		);
	};
})();

// console.log(restOp(2, 6, 8));

// Spread Operator ------------------------

let spArr = ["JAN", "FEB", "MAR", "APR"];
let spTwoArr;

(function () {
	spTwoArr = [...spArr];
	spArr[0] = "Demo";
})();

// console.log(spTwoArr);

// Destructure -------------------------
let avgTemp = {
	today: 24.5,
	tomorrow: 19.2,
};
function getTemp(avgTempData) {
	let { tomorrow: tempTomorrow } = avgTempData;
	return tempTomorrow;
}

// console.log(getTemp(avgTemp));

let localTemp = {
	today: { min: 24.5, max: 36.8 },
	tomorrow: { min: 19.2, max: 29.9 },
};
function getLocalTemp(localAvgTemp) {
	let {
		today: { max: localTomorrow },
	} = localAvgTemp;
	return localTomorrow;
}

// console.log(getLocalTemp(localTemp));

let aa = 33,
	zz = 99;
(() => {
	[aa, zz] = [zz, aa];
})();

//console.log("AA: ", aa, " - ZZ :", zz);

let newNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let removeNumber = (list) => {
	let [, , ...numArr] = list;
	return numArr;
};

let numArr = removeNumber(newNumber);
// console.log(newNumber);
// console.log(numArr);

const statusData = {
	max: 100,
	min: 20,
	average: 50,
};

const halfData = (function () {
	return function halfData(statusData) {
		return (statusData.max + statusData.min) / 2;
	};
})();
// console.log("STATUS: ", statusData);
// console.log("MIX&MAX: ", halfData(statusData));

// ------------
let resultData = ["One", "Two", "Three", "Four", "Five"];

function printResult(resultArr) {
	let storeResult = [];
	for (let i = 0; i < resultArr.length; i++) {
		storeResult.push(`<li class="resul-class">${resultArr[i]}</li>`);
	}
	return storeResult;
}
let storeResult = printResult(resultData);
// console.log(storeResult);

const genderList = (name, age, gender) => ({ name, age, gender });
// console.log(genderList("Smith", 29, "Male"));

class spaceShuttle {
	constructor(targetPlace) {
		this.targetPlace = targetPlace;
	}
}
let za = new spaceShuttle("Demo Test!");
// console.log(za.targetPlace);

function makeClass() {
	class Theclass {
		constructor(temp) {
			this._temp = (5 / 9) * (temp - 10);
		}
		get temperature() {
			return this._temp;
		}
		set temperature(updateTemp) {
			this._temp = updateTemp;
		}
	}
	return Theclass;
}

let Theclass = makeClass();
// console.log("CLASS:", Theclass);
// console.log("MAKECLASS:", makeClass());

let thermos = new Theclass(75);
// console.log("THERMOS:", thermos);

let temp = thermos.temperature;
// console.log("TEMP: ", temp);

thermos.temperature = 25;

temp = thermos.temperature;
// console.log("TEMP2: ", temp);
