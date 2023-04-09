// Password check
const isLowerCase = (userInput) => {
    let lowerCas = /^[a-z]+$/g;
    return lowerCas.test(userInput);
}

const seccretPassword = (userInput) => {
    if (!isLowerCase(userInput) || userInput.length !== 9) {
        console.log('Bang Bang Bang!');
    } else {
        let splitItem = userInput.match(/.{1,3}/g);
        let [one, two, three] = splitItem;

        let x = one.split('')[0].charCodeAt() - 96;
        let y = one.split('')[2].charCodeAt() - 96;
        let store = `${x}${one.split('')[1]}${y}`;

        console.log(x, y);

        let testDemo = one.split('')[1];
        console.log(testDemo);

        let reverse = two.split('').reverse().join('');
        let nextLeter = three.split('').map((letter) => {
            if (letter === 'z') return 'a';
            return String.fromCharCode(letter.charCodeAt() + 1);
        });
        let nextLeterResult = nextLeter.join('');
        let finalPassword = `${reverse}${nextLeterResult}${store}`;
        console.log(finalPassword);
    }
}

seccretPassword('ghtredfvb')