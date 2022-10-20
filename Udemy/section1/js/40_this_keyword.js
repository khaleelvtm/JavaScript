/* ------------------------------------------------
40. This Keyword
--------------------------------------------------*/

// calculateAge(1965);

// function calculateAge(year) {
// 	console.log(2006 - year);
// 	console.log(this);
// }

let john = {
    name: 'John',
    yearBirth: 1991,
    calculateAge: function() {
        console.log(this);
        console.log(this.yearBirth);
        console.log(this.name);

        /*function newTask() {
            console.log(this);
        }
        newTask()*/
    }
}
john.calculateAge()

let mike = {
    name: 'Mike',
    yearBirth: 1983,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge(this.name);