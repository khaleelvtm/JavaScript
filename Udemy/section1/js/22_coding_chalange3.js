/* ------------------------------------------------
21. Coding Chalange 3
--------------------------------------------------*/

/// Solution
function tipCalculater(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill > 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
    
}

let bill = [124, 48, 268];
let tips =  [tipCalculater(bill[0]), tipCalculater(bill[1]), tipCalculater(bill[2])];

let finalValue = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(tips, finalValue);