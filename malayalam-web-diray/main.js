
let selectList = document.getElementById('listItem');
let numberItem = ['One', 'Two', 'Three', 'Four', 'Five'];

for (let items of numberItem) {
    let list = document.createElement('li');
    list.innerHTML = items;
    selectList.appendChild(list);
    console.log(list);
}

numberItem.forEach(function(items, index) {
    let list = document.createElement('li');
    list.innerHTML = `${index + 1} ${items}`;
    selectList.appendChild(list);
})

let allItems = document.querySelectorAll('li');
let newArr = [];

allItems.forEach(function(item, index) {
    let listText = item.innerHTML;
    newArr.push(listText);
})

console.log(newArr);

function makeaTea() {
    console.log('one data')
    console.log('two list')
    console.log('therd function')
    console.log('forth input')
    console.log('fifth col')
}
makeaTea()

