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
