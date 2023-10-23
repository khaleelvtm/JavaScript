//Arrays and Loop
/*
let newArray = [12, 34, 56];

console.log(newArray);
console.log(newArray[2]);

newArray[0] = 89;
console.log(newArray);

let arrayTwo = [25, "start", true, { name: "John" }, [22, 33]];
console.log(arrayTwo);

console.log(Array.isArray([33, 45]));

arrayTwo.push("start");
console.log(arrayTwo);

arrayTwo.splice(0, 2);
console.log(arrayTwo);
*/
/*
let todoList = [];
let todoValue = document.querySelector(".todo-value");
let todoListItems = document.querySelector(".todo-list");
let todoDate = document.querySelector(".todo-date");

function randerTodoItem() {
	let todoHTML = "";
	for (let i = 0; i < todoList.length; i++) {
		let todoIndex = todoList[i];
		let { name, date } = todoIndex;
		let html = `
			<li>
				${name} ${date}
				<button onclick="todoList.splice(${i}, 1); randerTodoItem()">Delete</button>
			</li>
		`;
		todoHTML += html;
	}
	todoListItems.innerHTML = todoHTML;
	console.log(todoHTML);
}

randerTodoItem();
function todoAddItem() {
	let name = todoValue.value;
	let date = todoDate.value;
	todoList.push({
		name,
		date,
	});
	todoValue.value = "";
	randerTodoItem();
}
*/
/*
let loop = 1;
while (loop <= 10) {
	console.log(loop);
	loop++;
}

let forList = ["Watch", "TV", "AC", "Mobile"];
console.log(forList);

for (let i = 0; i < forList.length; i++) {
	console.log(forList[i]);
}

let numbers = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
	total += numbers[i];
}
console.log(total);

let numberTwo = [];
for (let i = 0; i < numbers.length; i++) {
	numberTwo.push(numbers[i] * 2);
}
console.log(numberTwo);
*/
/*
let news = ["qq", "ee", "rr"];
let newsHTML = "";

for (let i = 0; i < news.length; i++) {
	let newslist = news[i];
	let html = `<p>${newslist}</p>`;
	newsHTML += html;
}
console.log(newsHTML);
*/
/*
// Chalange - A
let nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

// Chalange - B
function getLadtValue(array) {
	let lastNumb = array.length - 1;
	return array[lastNumb];
}

console.log(getLadtValue([11, 22, 44, 66]));
console.log(getLadtValue(["hi", "Hello", "Good", "Love", "Nature"]));

// Chalange - C
function arraySwap(array) {
	let firstArr = array[0];
	let lastIndex = array.length - 1;
	let lastArray = array[lastIndex];

	array[0] = lastArray;
	array[lastIndex] = firstArr;

	return array;
}
console.log(arraySwap([2, 4, 5, 6, 7]));

// Chalange - D
for (let i = 0; i <= 10; i += 2) {
	console.log(i);
}

// Chalange - E
for (let i = 5; i >= 0; i--) {
	console.log(i);
}

// Chalange - F
let dOne = 0;
while (dOne < 10) {
	dOne += 2;
	console.log(dOne);
}

let dTwo = 5;
while (dTwo > 0) {
	dTwo--;
	console.log(dTwo);
}

// Chalange - G
let inArr = [2, 4, 6];
let newArr = [];
for (let i = 0; i < inArr.length; i++) {
	newArr.push(inArr[i] + 2);
}
console.log(newArr);

// Chalange - H
function addOne(array) {
	let addArr = [];
	for (let i = 0; i < array.length; i++) {
		addArr.push(array[i] + 2);
	}

	return addArr;
}
console.log(addOne([3, 4, 5]));

// Chalange - I
function addNumber(array, num) {
	let numberArr = [];
	for (let i = 0; i < array.length; i++) {
		numberArr.push(array[i] + num);
	}

	return numberArr;
}
console.log(addNumber([11, 22, 33, 44], 2));

// Chalange - J
function addArrys(arry1, arry2) {
	let result = [];
	for (let i = 0; i < arry1.length; i++) {
		result.push(arry1[i] + arry2[i]);
	}
	return result;
}
console.log("RESULT:", addArrys([10, 20, 30], [5, 6, 7]));

// Chalange - K
function countPositive(nums) {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			result++;
		}
	}

	return result;
}
console.log("POS:", countPositive([2, -1, 4, 6]));

// Chalange - L
function minMax(nums) {
	let result = {
		min: null,
		max: null,
	};
	for (let i = 0; i < nums.length; i++) {
		let value = nums[i];
		console.log("e:", value);
		
		if (result.min === null || value < result.min) {
			result.min = value;
		}
		if (result.max === null || value > result.max) {
			result.max = value;
		}
	}
	
	return result;
}
console.log(minMax([3, -1, 6, 4]));
console.log(minMax([]));
console.log(minMax([3]));


// Chalange - N
function countWords(words) {
	let result = {};
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		if (!result[word]) {
			result[word] = 1;
		} else {
			result[word]++;
		}
	}
	
	return result;
}

console.log(countWords(["apple", "grape", "apple", "apple"]));
*/
/*
let oneArray = [2, 4, 6];
let twoArray = oneArray.slice();
twoArray.push(8);

console.log(oneArray);
console.log(twoArray);

let [one, two] = [2, 3, 5];
console.log(two);

for (let i = 1; i <= 10; i++) {
	if (i % 3 === 0) {
		continue;
	}
	console.log(i);
	// if (i === 7) {
	// 	break;
	// }
}

let d = 1;
while (d <= 10) {
	if (d % 3 === 0) {
		d++;
		continue;
	}
	console.log(d);
	d++;
}

function doubleArry(num) {
	let numsDouble = [];
	for (let i = 0; i < num.length; i++) {
		let n = num[i];
		if (n === 0) {
			return numsDouble;
		}
		numsDouble.push(n * 3);
	}

	return numsDouble;
}
console.log(doubleArry([2, 3, 4]));
console.log(doubleArry([4, 6, 0, 8]));
*/

/*
// Chalange - O
let words = ["helo", "world", "search", "good"];
let index = -1;

for (let i = 0; i < words.length; i++) {
	if (words[i] === "search") {
		index = i;
	}
}
console.log(index);

words = ["not", "found"];
index = -1;

for (let i = 0; i < words.length; i++) {
	if (words[i] === "search") {
		index = i;
	}
}
console.log(index);

// Chalange - P
let searchArr = ["helo", "world", "search", "one", "search"];
let searchIndex = -1;

for (let i = 0; i < searchArr.length; i++) {
	if (searchArr[i] === "search") {
		searchIndex = i;
		break;
	}
}
console.log(searchIndex);

// Chalange - Q
function findIndex(arry, word) {
	let index = -1;
	for (let i = 0; i < arry.length; i++) {
		if (arry[i] === word) {
			return i;
		}
	}

	return index;
}
console.log(findIndex(["green", "red", "blue", "red"], "red"));
console.log(findIndex(["green", "red", "blue", "red"], "yellow"));

// Chalange - R
function removeEgg(arry) {
	let result = [];
	for (let i = 0; i < arry.length; i++) {
		if (arry[i] === "egg") {
			continue;
		}

		result.push(arry[i]);
	}
	return result;
}
console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

// Chalange - S
function foodRemove(food) {
	let result = [];
	let remove = 0;
	for (let i = 0; i < food.length; i++) {
		if (food[i] === "apple" && remove < 2) {
			remove++;
			continue;
		}
		result.push(food[i]);
	}

	return result;
}

console.log(foodRemove(["apple", "mango", "apple", "apple", "orange"]));

// Chalange - T & U
function removeNumber(number) {
	let numberCopy = number.slice();
	let reverseNumber = numberCopy.reverse();
	let result = [];
	let removeNumber = 0;

	for (let i = 0; i < reverseNumber.length; i++) {
		if (number[i] === "egg" && removeNumber < 2) {
			removeNumber++;
			continue;
		}
		result.push(number[i]);
	}

	return result.reverse();
}
let item = ["egg", "apple", "egg", "egg", "ham"];
console.log(removeNumber(item));
console.log(item);

// Chalange - V
for (let i = 1; i <= 20; i++) {
	//console.log("i:", i);
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

// Chalange - W
function findIndexTwo(arry, word) {
	for (let i = 0; i < arry.length; i++) {
		if (arry[i] === word) {
			return i;
		}
	}
	
	return -1;
}
function unique(arry) {
	let result = [];
	for (let i = 0; i < arry.length; i++) {
		let word = arry[i];
		
		if (findIndexTwo(result, word) === -1) {
			result.push(word);
		}
	}
	
	return result;
}

console.log(unique(["green", "red", "blue", "red"]));
console.log(unique(["green", "red", "blue", "red", "black"]));

function indexFind(findArry, findWord) {
	for (let i = 0; i < findArry.length; i++) {
		if (findArry[i] === findWord) {
			return i;
		}
	}
	
	return -1;
}
function indexUnique(indexArry) {
	let arrayResult = [];
	for (let i = 0; i < indexArry.length; i++) {
		let findWordTwo = indexArry[i];
		
		if (indexFind(arrayResult, findWordTwo) === -1) {
			arrayResult.push(findWordTwo);
		}
	}
	
	return arrayResult;
}

console.log(indexUnique(["one", "two", "one", "three", "two"]));
*/

// Chalange - X
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
let todoValue = document.querySelector(".todo-value");
let todoListItems = document.querySelector(".todo-list");
let todoDate = document.querySelector(".todo-date");

function randerTodoItem() {
	let todoHTML = "";

	for (let i = 0; i < todoList.length; i++) {
		let todoIndex = todoList[i];
		let { name, date } = todoIndex;
		let html = `
			<li>
				${name} ${date}
				<button onclick="todoList.splice(${i}, 1); randerTodoItem(); saveStorage()">Delete</button>
			</li>
		`;
		todoHTML += html;
	}

	todoListItems.innerHTML = todoHTML;
}

randerTodoItem();
function todoAddItem() {
	let name = todoValue.value;
	let date = todoDate.value;

	todoList.push({
		name,
		date,
	});
	todoValue.value = "";
	todoDate.value = "";

	randerTodoItem();
	saveStorage();
}
function saveStorage() {
	localStorage.setItem("todoList", JSON.stringify(todoList));
}
