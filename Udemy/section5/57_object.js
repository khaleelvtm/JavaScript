
/* -------------------------------- 
57. Objects
---------------------------------*/

let Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function() {
    console.log(2010 - this.yearOfBirth);
}
Person.prototype.lastName = 'Smith';

let john = new Person('JOhn', 1995, 'Driver');
let mark = new Person('Mark', 1965, 'Designer');
let miller = new Person('Miller', 2001, 'Teacher');


john.calculateAge();
mark.calculateAge();
miller.calculateAge();
console.log(john.lastName);
console.log(mark.lastName);
console.log(miller.lastName);