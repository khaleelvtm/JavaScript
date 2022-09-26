/* ------------
13. if / else
--------------*/
let firstName = 'John';
let civilStatus = 'single';

if (civilStatus === 'Married') {
    console.log(firstName + ' is Married!');
} else {
    console.log(firstName + ' will holpfully marry soon :)');
}

let isMarried = true;

if (isMarried) {
    console.log(firstName + ' Is Married');
} else {
    console.log(firstName + 'Marry Soon :)');
}

//
let massMark = 72;
let heightMark = 1.56;

let massJhon = 68;
let heightJohn = 1.74;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJhon = massJhon / (heightJohn * heightJohn);

if (BMIMark > BMIJhon) {
    console.log('Mark\'s BMI is higher then Jhon\'s.' + BMIMark );
} else {
    console.log('Jhon\'s BMI is higher then Mark\'s.' + BMIJhon );
}