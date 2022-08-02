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
            return 'You win!';
        case (playerSelection == 'rock' && computerSelection == 'paper'):
        case (playerSelection == 'paper' && computerSelection == 'scissors'):
        case (playerSelection == 'scissors' && computerSelection == 'rock'):
            return 'You Lose!';
        case(playerSelection == computerSelection):
            return 'Draw!';
        default:
            return 'Invalid Input';
    }

}

function game(){
    alert('Welcome to Rock-Paper-Scissors')
    let playerSelection;
    for(i=1;i<=5;i++){
        playerSelection = prompt('Enter your selection: ');
        console.log(playRound(playerSelection,getComputerChoice()));
    }
}







