function getComputerChoice() {
    num = Math.random();
    if (num >= 0.6) {
        return "Rock"
    }
    else if (num >= 0.3) {
        return "Paper"
    }
    else if (num >= 0) {
        return "Scissors"
    }

}
