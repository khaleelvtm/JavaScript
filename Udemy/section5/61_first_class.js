/* -------------------------------- 
61. First class function
---------------------------------*/

let years = [1990, 1985, 2006, 1999, 2000];

function arrCalc(arr, fun) {
    let arrReport = [];
    for (let i = 0; i < arr.length; i++) {
        arrReport.push(fun(arr[i]));
    }
    return arrReport;
};

function ageCalculate(curentYear) {
    return 2022 - curentYear;
};

function isFullAge(el) {
    return el >= 23;
};

function maxHeart(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
};

let age = arrCalc(years, ageCalculate);
let fullAge = arrCalc(age, isFullAge);
let rates = arrCalc(age, maxHeart);

console.log(age);
console.log(fullAge);
console.log(rates);