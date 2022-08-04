// Function
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 25));


function eaq(z, x) {
    console.log(z + x);
}

eaq(12, 34);

// Function 2
// let qwe = function(q, w) {
//     return q + w;
// }

function abc(v, t) {
    console.log(v(10, 20));
    console.log(t(10, 20));
}

//abc(qwe);

abc(function(q, w){
    return q + w;
}, function(q, w){
    return q * w;
})

function poi() {
    xyz();
    console.log('this is poi');
}

function xyz() {
    console.log('this is xyz');
}

poi();