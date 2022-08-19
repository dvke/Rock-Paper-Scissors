let playerSelection;
let playerScore = 0;
let computerScore = 0;


const options = document.querySelectorAll('.option');

// create click even for each option
[...options].forEach((option)=>option.addEventListener('click', (e)=>playRound(e.target.id, getComputerChoice())));



function getComputerChoice(){
    // store options in array
    const options = ['rock','paper','scissors'];

    // return random option
    return options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    // display selection
    console.log(`Your selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);
    // declare outcome as boolean
    const outcome = true;

    // traverse possible outcomes and return result
    switch(outcome){
        case (playerSelection == 'rock' && computerSelection == 'scissors'):
        case (playerSelection == 'paper' && computerSelection == 'rock'):
        case (playerSelection == 'scissors' && computerSelection == 'paper'):
            playerScore+=1;
            console.log ('You win this round!');
            break;
        case (playerSelection == 'rock' && computerSelection == 'paper'):
        case (playerSelection == 'paper' && computerSelection == 'scissors'):
        case (playerSelection == 'scissors' && computerSelection == 'rock'):
            computerScore+=1;
            console.log('You Lost this round!');
            break;
        case(playerSelection == computerSelection):
            console.log('Draw!');
            break;
        default:
            console.log('Invalid Input');
            break;
    }

}

function playGame(){
    alert('Welcome to Rock-Paper-Scissors');
    while(playerScore < 5 || computerScore < 5){
        playerSelection = prompt('Enter your selection: ');
        if(playerSelection==null){
            console.log('Game cancelled');
            break;   
        }
        console.log(playRound(playerSelection,getComputerChoice()));
        console.log(`Your score = ${playerScore}`);
        console.log(`Computer score = ${computerScore}`);

        if(computerScore === 5){
            console.log('You lost the game!');
            break;
        }
        else if(playerScore === 5){
            console.log('You won the game!');
            break;
        }
    }

   
}







