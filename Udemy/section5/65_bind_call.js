/* -------------------------------- 
65. Bind, Call and apply
---------------------------------*/

let john = {
    name: 'John',
    age: 26,
    job: 'Teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'Formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gendilmen! I\'m ' + this.name + ', I\'m ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'Normal') {
            console.log('Hey! Whats up I\'m ' + this.name + ', I\'m ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + ' .');
        }
    }
};

let mike = {
    name: 'Mike',
    age: 29,
    job: 'Designer'
}

john.presentation('Formal', 'Morning');
john.presentation.call(mike, 'Normal', 'Afternoon');

let johnFrendly = john.presentation.bind(john, 'Normal');
johnFrendly('Night');

let mikeFormal = john.presentation.bind(mike, 'Formal');
mikeFormal('Morning');


// Age Calculate
let years = [1990, 1980, 1965, 2000, 1995];

function arrCalc(arr, fu) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fu(arr[i]));
    }
    return arrRes;
};
function ageCalculate(el) {
    return 2005 - el;
}
function fullAge(limit, el) {
    return el >= limit;
}

let ages = arrCalc(years, ageCalculate);
let fullJapan = arrCalc(ages, fullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);