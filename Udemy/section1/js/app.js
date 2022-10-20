/* ------------------------------------------------
40. Diase Game
--------------------------------------------------*/

let score, roundScore, activePlayer, gamePlayer, previousDice;
innit();
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlayer) {
        // Random number
        let dice1 = Math.floor(Math.random() * 6 + 1 );
        let dice2 = Math.floor(Math.random() * 6 + 1 );

        // Display Number
        //let diceDOM = document.querySelector('.dice');
        //diceDOM.style.display = 'block';

        document.getElementById('diceOne').style.display = 'block';
        document.getElementById('diceTwo').style.display = 'block';
        document.getElementById('diceOne').src = 'dice-' + dice1 + '.png';
        document.getElementById('diceTwo').src = 'dice-' + dice2 + '.png';
        //diceDOM.src = 'dice-' + dice + '.png';

        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } else {
            nextPlayer();
        }

        // Update Number
        /*if (dice === 6 && previousDice === 6) {
            score[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } else {
            nextPlayer();
        }
        previousDice = dice;*/
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlayer) {
        score[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        // Input Score
        let scoreInput = document.querySelector('.score-set').value;
        let winningScore;

        if(scoreInput) {
            winningScore = scoreInput;
        } else {
            winningScore = 100;
        }
        
        // Winner
        if (score[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            //document.querySelector('.dice').style.display = 'none';
            diceNone();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlayer = false;
        } else {
            nextPlayer();
        }
    }
    
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceNone();
    //document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', innit);

function innit() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlayer = true;
    
    diceNone();
    //document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function diceNone() {
    document.getElementById('diceOne').style.display = 'none';
    document.getElementById('diceTwo').style.display = 'none';
}


let x = document.querySelector('.score-set').value;




//document.querySelector('#current-' + activePlayer).textContent = dice;

//let x = document.querySelector('#score-0').textContent;
//console.log(x);