/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var activePalyer, scores, currentScore, roundScore, isGamePlayActive, lastRollValue, targetScore;
initiliseGame();

/*

// normal function: functions with a name and can be reused

function handleClick() {
    var dice = (Math.floor(Math.random() * 6 )) +1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

}

document.querySelector('.btn-roll').addEventListener('click', handleClick);
*/


// Anonymous function: function that dont have name and can not be reused

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (isGamePlayActive) {
        var dice0 = (Math.floor(Math.random() * 6)) + 1;
        var dice0DOM = document.querySelector('.dice-0');
        dice0DOM.style.display = 'block';
        dice0DOM.src = 'dice-' + dice0 + '.png';

        var dice1 = (Math.floor(Math.random() * 6)) + 1;
        var dice1DOM = document.querySelector('.dice-1');
        dice1DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1 + '.png';

        if (dice0 != 1 || dice1 != 1) {
            if ((dice0 + dice1) === 12) {
                scores[activePalyer] = 0;
                nextPalyer();
            }
            roundScore = roundScore + dice0 + dice1;
            document.querySelector('#current-' + activePalyer).textContent = roundScore;
        } else {
            nextPalyer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (isGamePlayActive) {
        var score = scores[activePalyer];
        score = score + roundScore;
        scores[activePalyer] = score;
        document.getElementById('score-' + activePalyer).textContent = score;
        if (scores[activePalyer] >= targetScore) {
            document.getElementById('name-' + activePalyer).innerHTML = '<em> Player ' + (activePalyer + 1) + ' Wins !! </em>'
            isGamePlayActive = false;
        } else {
            nextPalyer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', initiliseGame);


function nextPalyer() {
    activePalyer === 0 ? activePalyer = 1 : activePalyer = 0;
    roundScore = 0;
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}

function initiliseGame() {
    targetScore = prompt('Initilizing Game, please enter target score:');

    // validate the target
    targetScore = parseInt(targetScore, 10) || 100;
    
    scores = [0, 0];
    activePalyer = 0;
    roundScore = 0;
    isGamePlayActive = true;
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}











