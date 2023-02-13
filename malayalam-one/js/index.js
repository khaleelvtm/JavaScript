function abc() {
    console.log('Function ABC');
}
console.log('Console One');
let a = 10;
let b = 23;
console.log('Console Two');
setTimeout (() => {
    console.log('Settime One');
}, 0);
console.log('Console Three');
setTimeout(() => {
    console.log('Settime Two');
}, 0);

new Promise((resolve, reject) => {
    resolve();
}).then(() => {
    console.log('Promis One');
})
abc();
