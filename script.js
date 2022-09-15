let playerSelection;
let playerScore = 0;
let computerScore = 0;


const container = document.querySelector('.container');
const card = document.querySelector('.card');
const options = document.querySelectorAll('.option');
const selection = document.getElementById('selection');
const result = document.getElementById('result');
const cardBack = document.querySelector('.card__face--back');


const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');


// create click even for each option
[...options].forEach((option)=>option.addEventListener('click', (e)=>playRound(e.target.id, getComputerChoice())));


function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerSelection = '';
}

function getComputerChoice(){
    // store options in array
    const options = ['rock','paper','scissors'];

    // return random option
    return options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    // declare outcome as boolean
    const outcome = true;
            
    // display selection
    selection.innerHTML = `<p>Your selection: ${playerSelection}</p><p>Computer selection: ${computerSelection}</p>`;

    // traverse possible outcomes and return result
    switch(outcome){
        case (playerSelection == 'rock' && computerSelection == 'scissors'):
        case (playerSelection == 'paper' && computerSelection == 'rock'):
        case (playerSelection == 'scissors' && computerSelection == 'paper'):
            playerScore+=1;
            result.innerHTML = '<p style="color:green;">Result: You win this round!</p>';
            break;
        case (playerSelection == 'rock' && computerSelection == 'paper'):
        case (playerSelection == 'paper' && computerSelection == 'scissors'):
        case (playerSelection == 'scissors' && computerSelection == 'rock'):
            computerScore+=1;
            result.innerHTML = '<p style="color:red;">Result: You lost this round!</p>';
            break;
        case(playerSelection == computerSelection):
            result.innerHTML = '<p>Result: Draw!</p>';
            break;
        default:
            result.innerHTML = '<p>Result: Invalid!</p>';
            break;
    }

        playerScoreDisplay.innerHTML = `<p>Your score = ${playerScore}</p>`;
        computerScoreDisplay.innerHTML = `<p>Computer score = ${computerScore}</p>`;


        // end game if score of 5 is reached
        if(computerScore === 5){
            cardBack.setAttribute('style','display:block;');
            card.classList.toggle('is-flipped');
            document.getElementById('winOrLose').textContent = 'You Lose!';
            resetGame();
        }
        else if(playerScore === 5){
            cardBack.setAttribute('style','display:block;');
            card.classList.toggle('is-flipped');
            document.getElementById('winOrLose').textContent = 'You Win!';
            resetGame();
        }
}
   

// New game function which resets the variables.
  document.getElementById('newGame').addEventListener( 'click', function() {
    selection.innerHTML = '';
    result.innerHTML = '';
    cardBack.setAttribute('style','display:none;');
    playerScoreDisplay.innerHTML = '';
    computerScoreDisplay.innerHTML = '';
    card.classList.toggle('is-flipped');
  });







