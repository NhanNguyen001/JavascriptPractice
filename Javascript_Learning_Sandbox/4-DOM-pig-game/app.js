/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'  

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// function btn(){
//     // Do something here
// }
// btn();

document.querySelector('.btn-roll').addEventListener('click', function btn(){

    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display  = 'block';
    diceDOM.src = 'dice-' + dice + '.png'

})