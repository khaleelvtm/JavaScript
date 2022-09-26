/* ------------------------------------------------
16. Truthy and Falsy Values
--------------------------------------------------*/
// Truthy
let height;
height = 23;
if (height || height === 0) {
    console.log('Variable is difinde');
} else {
    console.log('Variablr has NOT been difinde');
}

// Eqality oprations
if (height == '23') {
    console.log('This is == String ');
} else {
    console.log('Nan');
}