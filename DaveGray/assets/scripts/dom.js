let selectList = document.getElementsByTagName("li");
console.log(selectList);

let eventList = document.querySelectorAll("li:nth-of-type(2n)");
console.log(eventList);

for (let i = 0; i < eventList.length; i++) {
	eventList[i].style.backgroundColor = "green";
}

console.log(eventList[0]);
console.log(eventList[0].parentElement);
console.log(eventList[0].parentElement.childNodes);
console.log(eventList[0].parentElement.hasChildNodes());
console.log(eventList[0].parentElement.lastChild);
console.log(eventList[0].parentElement.lastElementChild);
console.log(eventList[0].parentElement.children);
console.log(eventList[0].parentElement.firstChild);
console.log(eventList[0].parentElement.firstElementChild);
console.log(eventList[0].parentElement.nextSibling);
console.log(eventList[0].nextSibling);
console.log(eventList[0].nextElementSibling);
