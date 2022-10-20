/* ------------
10.Operation Precedence 
--------------*/
let now = 2018;
let yearJohn = 1989;
let fullAge = 18;
let isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);

// Group
let ageJohn = now - yearJohn;
let ageMark = 35;
let average = (ageJohn + ageMark) / 2;

console.log(average);

// Multiple
let x, y;
x = y = (5 + 6) * 4 - 6;
console.log(x, y);
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);