
let submitForm = document.getElementById('submitForm')
let selectValueOne = document.getElementById('valueOne')
let selectValueTwo = document.getElementById('valueTwo')
let submitButtoon = document.getElementById('submit')
let sendMessage = document.getElementById('message')

const getData = (event) => {
    event.preventDefault();
    let dataOne = selectValueOne.value;
    let dataTwo = selectValueTwo.value;
    if (isAnagram(dataOne, dataTwo)) {
        sendMessage.innerText = 'Yes, this is a Anagram';
        sendMessage.style.color = 'green';
    } else {
        sendMessage.innerText = 'Sorry, this not Anagram';
        sendMessage.style.color = 'red';
    }
    console.log()
}

submitForm.addEventListener('submit', getData);

const isAnagram = (one, two) => {
    let selectOne = one.trim().toLowerCase().split('').sort();
    let selectTwo = two.trim().toLowerCase().split('').sort();
    return Array.isArray(selectOne) && Array.isArray(selectTwo) &&
        selectOne.length === selectTwo.length &&
        selectOne.every((value, index) => value === selectTwo[index])
        ? true : false;
}

console.log()