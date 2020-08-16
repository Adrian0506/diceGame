/* Project Created By adrian.
The purpose of this game is to roll a dice with 2 players. You roll 2 dice and you have to get 2 numbers that will add up to the score 
listed above. If you do get 2 numbers that add up to the value you will win the game. Each player has one turn. */


var currentPlayer, currentValue;

currentPlayer = 1;
// Initialize the Game.

init();


function init () {
    currentValue = Math.floor(Math.random() * 12) + 1;
   if (currentValue === 1) {
       currentValue++;
   }
 document.getElementById('value').innerHTML = 'Get the value: ' + currentValue
 document.getElementById('currentPlayer').innerHTML = 'It is players 1 turn.'
 document.getElementById('currentPlayer').style.color = 'red'
 document.getElementById('Restart').style.display = 'none'
 document.getElementById('roll').style.display = 'inline'
 document.getElementById('dices').src = 'dice-1.png'
 document.getElementById('dices2').src = 'dice-1.png'  
 }


document.getElementById('roll').addEventListener('click', function () {
    let randomize = Math.floor(Math.random () * 6) + 1;
    let randomize2 = Math.floor(Math.random () * 6) + 1
    document.getElementById('dices').src = 'dice-' + randomize + '.png'
    document.getElementById('dices2').src = 'dice-' + randomize2 + '.png'
    if (randomize + randomize2 === currentValue) {
        document.getElementById('currentPlayer').innerHTML = `Player ${currentPlayer} has won the game.`
        document.getElementById('roll').style.display = 'none';
        document.getElementById('Restart').style.display = 'inline'
        document.getElementById('currentPlayer').style.color = 'gold'

    } else if (currentPlayer === 1) {
         currentPlayer = 2;
         document.getElementById('currentPlayer').style.color = 'green'
         document.getElementById('currentPlayer').innerHTML = '<em> It is players 2 turn. </em>'
    } else if (currentPlayer === 2) {
        currentPlayer = 1;
        document.getElementById('currentPlayer').style.color = 'red'
        document.getElementById('currentPlayer').innerHTML = '<em> It is players 1 turn. </em>'
    }
});

document.getElementById('Restart').addEventListener('click', init);





