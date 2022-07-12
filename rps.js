"use strict";

function computerPlay() {
    let choice = Math.random()

    if (choice <= 0.333 && choice >= 0) {return "rock"}
    else if (choice <= 0.666 && choice > 0.333) {return "paper"}
    else if (choice <= 1 && choice > 0.666) {return "scissors"}
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`
    } else if ((playerSelection == "rock" && computerSelection == "paper") ||
               (playerSelection == "paper" && computerSelection == "scissors") ||
               (playerSelection == "scissors" && computerSelection == "rock")) {
        return `You lose! ${playerSelection.toUpperCase()} loses to ${computerSelection.toUpperCase()}.`
    } else if ((playerSelection == "rock" && computerSelection == "rock") ||
               (playerSelection == "paper" && computerSelection == "paper") ||
               (playerSelection == "scissors" && computerSelection == "scissors")) {
        return `It is a tie! ${playerSelection.toUpperCase()} ties with ${computerSelection.toUpperCase()}.`
    }
}

function game(rounds) {
    console.log("Lets play a game of Rock Paper Scissors!")
    for (let i = 1; i <= rounds; i++) {
        console.log(`Round: ${i}`);
        let playerSelection = prompt("Please enter your play.", "");
        console.log(playRound(playerSelection, computerPlay()));
    }
}

game(5);

