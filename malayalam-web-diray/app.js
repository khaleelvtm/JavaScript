
let typeInput = document.getElementById('addInput');
let submitBtn = document.getElementById('submitBtn');
let itemList = document.getElementById('itemList');
let itemArr = [];

let itemInputdata;
let itemInputArr = [];

function setLocalData() {
    localStorage.setItem('itemvalue', JSON.stringify(itemInputArr));
}

function getLocalData() {
    if (localStorage.getItem('itemvalue')) {
        itemInputArr = JSON.parse(localStorage.getItem('itemvalue'));
        buldUI();
    } else {
        console.log('Data not found!');
    }
}

function buldUI() {
    itemList.textContent = '';
    itemInputArr.forEach((item) => {
        let addList = document.createElement('li');
        let addSpan = document.createElement('span');
        let deleteButton = document.createElement('button');
        let deditButton = document.createElement('button');
        
        addSpan.innerText = item;
        addList.appendChild(addSpan);
    
        addList.style.cssText = 'animation-name: slideIn;'
        itemList.appendChild(addList);
    
        typeInput.value = '';
        typeInput.focus();
        itemArr.push(addList.innerText);
    
        // Delete button
        deleteButton.classList.add('mdi', 'mdi-trash-can-outline');
        addList.appendChild(deleteButton);
        // Edit button
        deditButton.classList.add('mdi', 'mdi-square-edit-outline');
        addList.appendChild(deditButton);
    })
}


function addListItem() {
    itemInputdata = typeInput.value;
    itemInputArr.push(itemInputdata);
    console.log(itemInputArr);

    setLocalData();
    getLocalData();
}


function deleteListItem(event) {
    if (event.target.classList[1] === 'mdi-trash-can-outline') {
        let selectItem = event.target.parentElement;
        selectItem.classList.add('slide-out');
        document.addEventListener('transitionend', function() {
            selectItem.remove();
        })
    }
}

function editListItem(event) {
    if (event.target.classList[1] === 'mdi-square-edit-outline') {
        let editValue = prompt('Enter a value');
        let selectItem = event.target.parentElement;
        let spanElement = selectItem.querySelector('span');
        spanElement.textContent = editValue;
    }
}

submitBtn.addEventListener('click', addListItem);
typeInput.addEventListener('keyup', ({key}) => {
    if (key === 'Enter') {
        addListItem();
    }
})
itemList.addEventListener('click', deleteListItem);
itemList.addEventListener('click', editListItem);

getLocalData();
