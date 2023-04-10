
const awardPrize = (names) => {
    let [gold, silver, bronze] = Object.values(names).sort((one, two) => two - one);
    let nameArr = Object.entries(names);
    let result = nameArr.map(([name, score]) => {
        switch (score) {
            case gold: return [name, 'Gold'];
            case silver: return [name, 'Silver'];
            case bronze: return [name, 'Bronze'];
            default: return [name, 'Participation'];
        }
    })
    let finalResult = Object.fromEntries(result);
    console.log(finalResult);
}

awardPrize({
    John: 45,
    smith: 36,
    Mike: 41
})