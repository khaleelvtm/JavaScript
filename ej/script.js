/*
a = 5;
b = 12;
let number = a + b;

console.log(number);

while (number < 25) {
    console.log(number);
    number++;
}


let data = "this is a string";
data = data.charAt(2);

console.log(data);

let number = Math.E;

console.log("math:", Math);
console.log("E:", Math.E);
console.log("LN2:", Math.LN2);
console.log("LN10:", Math.LN10);
console.log("LOG2E:", Math.LOG2E);
console.log("LOG10E:", Math.LOG10E);
console.log("PI:", Math.PI);
console.log("SQRT2:", Math.SQRT2);
console.log("SQRT1_2:", Math.SQRT1_2);

console.log("----------------------------------------------------------------");

console.log("abs:", Math.abs(5 - 8));


let todaydate = new Date();
console.log(todaydate.getFullYear());


let button = document.querySelector(".btn");
let content = document.querySelector(".content");
let select = document.getElementById("section");

button.addEventListener("click", () => {
    let newContent = document.createTextNode("This is demo content");
    content.appendChild(newContent);

    let createID = document.createAttribute("id");
    createID.value = "demoId";
    content.setAttributeNode(createID);

    // Sibiling
    let sibling = select.previousElementSibling;
    sibling.style.color = "blue";

    console.log(select.previousSibling);
});
*/

function validationForm() {
    let inputs = document.querySelectorAll("input");
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "" || inputs[i].value.length < 5) {
            alert("Please type your " + inputs[i].placeholder);
            return false;
        }
    }
}

confirm("start new data");

// EPI: 45
