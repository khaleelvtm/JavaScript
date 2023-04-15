const zeroToEnd = (numbers) => {
    console.log('og:', numbers);
    numbers.map((num) => {
        return num === 0
            ? (numbers.push(num), numbers.splice(numbers.indexOf(num), 1))
            : null;
    })
    return numbers;
}

console.log(zeroToEnd([1, 2, 0, 0, 5, 0, 4]));