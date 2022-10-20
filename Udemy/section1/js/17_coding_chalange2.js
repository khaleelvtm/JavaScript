/* ------------------------------------------------
17. Coding Challenge 2
--------------------------------------------------*/
let johnScore = (89 + 120 + 103) / 3;
let mikeScore = (116 + 94 + 123) / 3;
let meryScore = (97 + 134 + 105) / 3;

console.log(johnScore, mikeScore, meryScore);

/*if (johnScore > mikeScore) {
    console.log('Win average team John ' + johnScore);
} else if (mikeScore > johnScore) {
    console.log('Win average team in Mike ' + mikeScore);
} else {
    console.log('This match draw');
}*/

if (johnScore > mikeScore && johnScore > meryScore) {
    console.log('John\'s team win with ' + johnScore + ' points');
} else if (mikeScore > johnScore && mikeScore > meryScore) {
    console.log('Mike\'s team win with ' + mikeScore + ' points');
} else if (meryScore > johnScore && meryScore > mikeScore) {
    console.log('Mery\'s team win with ' + meryScore + ' points');
} else {
    console.log('This match is Draw');
}

////