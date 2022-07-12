"use strict";

function computerPlay() {
    let choice = Math.random()

    if (choice <= 0.333 && choice >= 0) {return "rock"}
    else if (choice <= 0.666 && choice > 0.333) {return "paper"}
    else if (choice <= 1 && choice > 0.666) {return "scissors"}
};

