/* ------------------------------------------------
24. Objects and properties
--------------------------------------------------*/

// Objects
let johnList = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1991,
    family: ['Mike', 'Sahal', 'Saheer', 'Ramesh'],
    job: 'Teacher',
    isMarried: true
};

console.log(johnList);
console.log(johnList.family[0]);

console.log(johnList.job);
console.log(johnList['job']);

johnList.job = 'Designer';
johnList['isMarried'] = false;

console.log(johnList);

// New Object
let mikeList = new Object();
mikeList.firstName = 'Mike';
mikeList.birthYear = 2002;
mikeList['lastName'] = 'Tison';

console.log(mikeList);