/* ------------------------------------------------
15. Ternary Operation and Switch Statement
--------------------------------------------------*/
// Ternary
let firstName = 'Saheer';
let age = 14;

age >= 18 ? console.log(firstName + ' Drink tea.') : console.log(firstName + ' Drink Juise');

let drink = age >= 18 ? 'Tea' : 'Juise';
console.log(drink);

// Switch
let job = 'Designer';
switch (job) {
    case 'Teacher':
        console.log(firstName + ' is a Teacher');
        break;
    case 'Driver':
        console.log(firstName + ' is a Driver');
        break;
    default:
        console.log(firstName + ' is a Default');
}

// 
switch (true) {
    case age < 13:
        console.log(firstName + ' is a Boy.');
        break;
    case age <= 20 && age > 30:
        console.log(firstName + ' is a Teenager');
        break;
    default:
        console.log(firstName + ' is a Man');
}