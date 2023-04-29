/*
function theLocation() {
    let city = "San Francisco";

    return {
        get: function () {
            console.log(city);
        },
        set: function (newCity) {
            city = newCity;
        },
    };
}

let newPlace = theLocation();
newPlace.get();
newPlace.set("Berlin");
newPlace.get();

*/

let myObjct = {
    name: "John",
    age: 26,
    city: "San Francisco",
    news() {
        console.log("This is the new news");
    },
};

let mikObject = new Object();
mikObject.name = "Mike";
mikObject.news = function () {
    console.log("Demo Object");
};

console.log("john", myObjct);
myObjct.news();

console.log("mike", mikObject);
mikObject.news();
