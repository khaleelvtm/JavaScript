
// const colorPattern = (color) => {
//     let time = 0;
//     for (let i = 1; i < color.length; i++) {
//         for (let j = i; j <= i + 1; j++) {
//             if (color[i] !== color[j]) {
//                 time++;
//             }
//         }
//     }
//     let colorTime = color.length * 2;
//     return colorTime + time;
// }

// let result = colorPattern(['blue', 'green', 'green']);
// console.log(result);





const colorPattern = (colors) => {
    return colors.map((color, index, arr) => (color !== arr[index + 1] ? 1 : 0))
        .slice(0, -1)
        .reduce((acc, num) => acc + num, colors.length * 2);
}

let result = colorPattern(['blue', 'green', 'green', 'red', 'yellow']);
console.log(result);



// let colorItem = (arr) => arr.reduce((total, item, i) => total + 2 + (arr[i - 1] !== item) - 1);

// console.log(colorItem(['blue', 'green', 'green', 'red', 'yellow']));

