const regexp = /[a-z]/im;

const str1 = "This is Catfdfdf";
const str2 = "Catefdfs is the best pet";
const str3 = "This is Bat";
const str4 = `
	good meat
	is always good
`;

const resultOne = regexp.test(str1);
console.log(resultOne);

const resultTwo = regexp.test(str2);
console.log(resultTwo);

const resultThree = regexp.test(str3);
console.log(resultThree);

const resultFour = regexp.test(str4);
console.log(resultFour);
