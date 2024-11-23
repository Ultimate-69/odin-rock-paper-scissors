let playerScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        // Human wins
        console.log('human wins!')
        playerScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        // Human wins
        console.log('human wins!')
        playerScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        // Human wins
        console.log('human wins!')
        playerScore++;
    }
    else if (humanChoice == computerChoice) {
        // Tie
        console.log('tie!')
    }
    else {
        // Human Loses
        console.log('computer wins!')
        computerScore++;
    }
}


function getComputerChoice() {
    num = Math.random();
    if (num >= 0.6) {
        return "Rock";
    }
    else if (num >= 0.3) {
        return "Paper";
    }
    else if (num >= 0) {
        return "Scissors";
    }

}

function getHumanChoice() {
    choice = prompt('Rock, Paper, or Scissors?').toLowerCase().trim();

    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    }
    else
    {
        console.log('invalid input, defaulting to rock!');
        return "rock";
    }
}