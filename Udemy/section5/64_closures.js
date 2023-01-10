/* -------------------------------- 
64. Closures
---------------------------------*/

function retirement(retirementAge) {
	let x = " years of left until retirement.";
	return function (yearsOfBirth) {
		let age = 2022 - yearsOfBirth;
		console.log(retirementAge - age + x);
	};
}

let retirementUS = retirement(65);
let retirementGM = retirement(60);
let retirementSP = retirement(68);

retirementUS(1991);
retirementGM(1991);
retirementSP(1991);


function interviewQuestion(job) {
	return function (name) {
        if (job === 'disigner') {
            console.log(name + ', can you please explain UI ?');
        } else if (job === 'designer') {
            console.log('What subject do you teach ' + name + '?');
        } else {
            console.log('Hello ' + name + ' what do you do?');
        }
    };
};

interviewQuestion('designer')('Mike');
