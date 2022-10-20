/* ------------------------------------------------
25. Objects and Method
--------------------------------------------------*/

// Method
let johnList = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1985,
    family: ['tony', 'ramesh', 'sumi'],
    job: 'Teacher',
    isMarried: true,
    calcAge: function() {
        this.age = 2022 - this.birthYear;
    }
}

johnList.calcAge();
console.log(johnList);