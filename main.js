let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const choice = document.querySelector('#choice');
const winner = document.querySelector('#winner');
const overall = document.querySelector('#overall');
const score = document.querySelector('#score');

rock.addEventListener('click', () => playRound('rock', getComputerChoice()))
paper.addEventListener('click', () => playRound('paper', getComputerChoice()))
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()))

function playRound(humanChoice, computerChoice) {  

    if (playerScore >= 5)
    {
        playerScore = 0;
        computerScore = 0;
        overall.textContent = "Player scores 5, player won this game!";
    }
    else if (computerScore >= 5)
    {
        playerScore = 0;
        computerScore = 0;
        overall.textContent = "Computer scores 5, computer won this game!";
    }
    else {
        overall.textContent = ''
    }
    choice.textContent = 'human: ' + humanChoice + " | " + 'computer: ' + computerChoice
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        // Human wins
        winner.textContent = ('human wins!')
        playerScore++;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        // Human wins
        winner.textContent = ('human wins!')
        playerScore++;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        // Human wins
        winner.textContent = ('human wins!')
        playerScore++;
    }
    else if (humanChoice == computerChoice) {
        // Tie
        winner.textContent = ('tie!')
    }
    else {
        // Human Loses
        winner.textContent = ('computer wins!')
        computerScore++;
    }

    score.textContent = ('human: ' + playerScore.toString() +' | ' + 'computer: ' + computerScore.toString());
}


function getComputerChoice() {
    num = Math.random();
    if (num >= 0.6) {
        return "rock";
    }
    else if (num >= 0.3) {
        return "paper";
    }
    else if (num >= 0) {
        return "scissors";
    }

}