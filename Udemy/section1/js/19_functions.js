/* ------------------------------------------------
19. Functions
--------------------------------------------------*/
function calculateAge(currentYear) {
    return 2022 - currentYear;
}
let johnAge = calculateAge(1991);
console.log(calculateAge(1995));

//
function retirmentYear(year, firstName) {
    let age = calculateAge(year);
    let retairment = 55 - age;
    if (retairment > 0) {
        console.log(firstName + ' Retair in ' + retairment + ' years.');
    } else {
        console.log(firstName + ' is already retairment.');
    }
}

retirmentYear(1991, 'John');
retirmentYear(1955, 'Mike');
retirmentYear(1989, 'Rheem');