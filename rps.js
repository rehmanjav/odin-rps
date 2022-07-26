"use strict";

function computerPlay() {
    let choice = Math.random()

    if (choice <= 0.333 && choice >= 0) {return "rock"}
    else if (choice <= 0.666 && choice > 0.333) {return "paper"}
    else if (choice <= 1 && choice > 0.666) {return "scissor"}
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")) {
        return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`
    } else if ((playerSelection == "rock" && computerSelection == "paper") ||
               (playerSelection == "paper" && computerSelection == "scissor") ||
               (playerSelection == "scissor" && computerSelection == "rock")) {
        return `You lose! ${playerSelection.toUpperCase()} loses to ${computerSelection.toUpperCase()}.`
    } else if ((playerSelection == "rock" && computerSelection == "rock") ||
               (playerSelection == "paper" && computerSelection == "paper") ||
               (playerSelection == "scissor" && computerSelection == "scissor")) {
        return `It is a tie! ${playerSelection.toUpperCase()} ties with ${computerSelection.toUpperCase()}.`
    }
}

function game(playerSelection) {
    let result = playRound(playerSelection, computerPlay());
    

    

    // if (result[4] == 'w') {
    //     wins += 1;
    // } else if (result[4] == 'l') {
    //     losses += 1;
    // } else if (result[4] == 's') {
    //     ties += 1;
    // }

    // Update dialog
    let dialog = document.querySelector(".dialog");
    dialog.textContent = "Please make another selection to play another round.";
    

    // Update round
    console.log('round ' + round);
    let round = document.querySelector(".round");

    // Update score
    console.log(`wins:${wins} losses:${losses} ties:${ties}`);
    let score = document.querySelector(".score");

    // Update result
    let resultSpan = document.querySelector(".result");
    resultSpan.textContent = result;
    
}

// PROGRAM BEGINS

let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', (e) => {
    game(e.target.classList[0]);
}));



