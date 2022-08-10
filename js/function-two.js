// Variable
let a = 10;
function abc() {
    a = 20;
}
console.log(a); //10
abc();
console.log(a); // 20


// Var 2
for(var z = 1; z < 5; z++) {
    console.log(z);
}

//closure
function qwe() {
    let r = 10;
    
    function asd() {
        //alert(r);
    }
    asd();
}
qwe();

// 1
function poi() {
    this.m = 12;
    this.n = 25;
    this.mnb = function() {
        console.log(this.m + this.n);
    }
    this.mnb();
}
poi();

// 2
function nameValue() {
    this.y;
    this.t;

    this.valueSet = function(o, p) {
        this.y = o;
        this.t = p;
    }
    this.displaySet = function() {
        console.log(this.y + this.t);
    }
}
let newValue = new nameValue();
newValue.valueSet(78, 45);
newValue.displaySet();

let nameTwo = new nameValue();
nameTwo.valueSet(89, 120);
nameTwo.displaySet();