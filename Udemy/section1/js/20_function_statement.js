/* ------------------------------------------------
20. Function Statement and expression
--------------------------------------------------*/
let moreJob = function (job, firstName) {
    switch (job) {
        case 'Teacher':
            return firstName + ' is class teaching';
        case 'Driver':
            return firstName + ' driving to calicut';
        case 'Designer':
            return firstName + ' Design good website';
        default:
            return firstName + ' nothing working job!';
    }
}

console.log(moreJob('Teacher', 'John'));
console.log(moreJob('Driver', 'Mike'));
console.log(moreJob('Designer', 'Stalin'));
console.log(moreJob('Tester', 'Willims'));