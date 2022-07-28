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
    

    // Update dialog
    let dialog = document.querySelector(".dialog");
    dialog.textContent = "Please make another selection to play another round.";
    

    // Update round
    
    let roundSpan = document.querySelector(".round");
    let round = roundSpan.textContent;
    round = +round + 1;
    roundSpan.textContent = round;

    // Update score

    if (result[4] == 'w') {
        let winsSpan = document.querySelector(".wins");
        let wins = winsSpan.textContent;
        wins = +wins + 1;
        winsSpan.textContent = wins;
        if (wins == 5) {
            endGame();
        }
    } else if (result[4] == 'l') {
        let lossesSpan = document.querySelector(".losses");
        let losses = lossesSpan.textContent;
        losses = +losses + 1;
        lossesSpan.textContent = losses;
    } else if (result[4] == 's') {
        let tiesSpan = document.querySelector(".ties");
        let ties = tiesSpan.textContent;
        ties = +ties + 1;
        tiesSpan.textContent = ties;
    }
    
    // Update result
    let resultSpan = document.querySelector(".result");
    resultSpan.textContent = result;

    // Show main
    let main = document.querySelector(".main");
    main.classList.remove("invisible");    
}

function endGame() {
    let dialog = document.querySelector(".dialog");
    dialog.textContent = "YOU WIN!!!!! Click RESTART GAME to play again.";

    buttons.forEach(button => button.classList.add("invisible"));

    let refreshBtn = document.createElement('button');
    refreshBtn.textContent = 'RESTART GAME';
    let body = document.querySelector('body');
    body.appendChild(refreshBtn);
    refreshBtn.addEventListener('click', () => {
        window.location.reload();
    })
}

// PROGRAM BEGINS

let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', (e) => {
    game(e.target.classList[0]);
}));
