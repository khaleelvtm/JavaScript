let userInput = document.getElementById("numberInput");
let addBtn = document.getElementById("btnAdd");
let substractBtn = document.getElementById("btnSubstract");
let multyplyBtn = document.getElementById("btnMultyply");
let divideBtn = document.getElementById("btnDivide");

const currentResultOutput = document.getElementById("currentResult");
const currentCalcOutput = document.getElementById("currentCalculation");

function outputResult(result, text) {
	currentResultOutput.textContent = result;
	currentCalcOutput.textContent = text;
}

// ---------------------------
let defultResult = 0;
let currentResult = defultResult;
let logData = [];

function getUserNumberInput() {
	return parseFloat(userInput.value);
}
function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logData.push(logEntry);
	console.log(logData);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumb) {
	let calcDescription = `${resultBeforeCalc} ${operator} ${calcNumb}`;
	outputResult(currentResult, calcDescription);
}

function add() {
	let enterNUmber = getUserNumberInput();
	let initalResult = currentResult;
	currentResult += enterNUmber;
	createAndWriteOutput("+", initalResult, enterNUmber);
	writeToLog("ADD", initalResult, enterNUmber, currentResult);
}
function substract() {
	let enterNUmber = getUserNumberInput();
	let initalResult = currentResult;
	currentResult -= enterNUmber;
	createAndWriteOutput("-", initalResult, enterNUmber);
	writeToLog("SUB", initalResult, enterNUmber, currentResult);
}
function multiply() {
	let enterNUmber = getUserNumberInput();
	let initalResult = currentResult;
	currentResult *= enterNUmber;
	createAndWriteOutput("*", initalResult, enterNUmber);
	writeToLog("MULTI", initalResult, enterNUmber, currentResult);
}
function divide() {
	let enterNUmber = getUserNumberInput();
	let initalResult = currentResult;
	currentResult /= enterNUmber;
	createAndWriteOutput("/", initalResult, enterNUmber);
	writeToLog("DIVIDE", initalResult, enterNUmber, currentResult);
}

addBtn.addEventListener("click", add);
substractBtn.addEventListener("click", substract);
multyplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
