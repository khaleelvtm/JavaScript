// Events
function buttonClick(x) {
    alert('My password : ' + x.value);
}

function keyPress(e,a) {
    console.log(e.target.value);
}

// Count
let countTime = 0;
function countClickFunction() {
    countTime++;
    document.getElementById('countNumber').innerHTML = countTime;
}