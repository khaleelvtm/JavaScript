/* ------------------------------------------------
26. Coding Chalange 4
--------------------------------------------------*/

//
let mark = {
    firstName: 'Mark',
    mass: 67,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
let john = {
    firstName: 'John',
    mass: 72,
    height: 1.56,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


if (mark.calcBMI() > john.calcBMI()){
    console.log(mark.firstName + ' Is higher BMI of ' + mark.bmi);
} else if (john.bmi > mark.bmi) {
    console.log(john.firstName + ' Is higher BMI of ' + john.bmi);
} else {
    console.log('They have the same!');
}