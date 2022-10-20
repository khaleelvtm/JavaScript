/* ------------------------------------------------
21. Arrays
--------------------------------------------------*/

// Ini
let name = ['John', 'Mike', 'Sweet'];
let years = new Array(1991, 1985, 2003);

console.log(name);
console.log(name.length);
console.log(name[2]);

// Murtate
name[2] = 'Meery';
name[5] = 'Saheer';
console.log(name);

// Deffernt data 
let smooth = ['Sameer', 24, 'Sahal', 2003, 'Mike'];
console.log(smooth);

// Add Array
smooth.push('Blue');
smooth.unshift('Mr.')
console.log(smooth);

// Remove array
smooth.pop();
smooth.pop();
smooth.shift();
console.log(smooth);

console.log(smooth.indexOf('Sahal'));

let isDesigner = smooth.indexOf('Sahal') === -1 ? 'John is NOT a Designer' : 'John is a Designer';
console.log(isDesigner);
