function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    switch (value){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function roundResult(playerSelection, computerSelection) {
    /* returns an int: 1 if player wins, -1 for loss and 0 for draw. */

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return 0;
    }

    let win;

    switch(playerSelection){
        case "rock":{
            win = computerSelection === "scissors";
            break;
        }
        
        case "paper":{
            win = computerSelection === "rock";
            break;
        }

        case "scissors":{
            win = computerSelection === "paper";
            break;
        }
    }

    return win? 1 : -1;
}

function logRound(playerSelection, computerSelection, result) {
    /* logs results of a round in the console */

    playerSelection = playerSelection.toLowerCase();

    if (result === 0){
        console.log(`Draw. You both picked ${playerSelection}.`);
        
    } else {
        let win = (result === 1);
        console.log(`You ${win? "win!" : "lose!"} ${capitalizeFirstLetter(playerSelection)} ${win? "beats" : "loses to"} ${computerSelection}.`);
    }
    return null;
}

function playRound(playerSelection, computerSelection, log = true){
    /* plays round with the optional argument of whether or not to log results */

    result = roundResult(playerSelection, computerSelection);

    if (log){
        logRound(playerSelection, computerSelection, result);
    }

    return result;
}

function logFinalScore(score, round_limit){
    if (score === 0){
        console.log(`After ${round_limit} rounds, your game ended in a draw.`)
    } else {
        console.log(`After ${round_limit} rounds, you ${score > 0 ? "won" : "lost"} the game with an overall score of ${score > 0 ? "+" : ""}${score}.`);
    }
    return null;

}

function game(){
    let score = 0;
    let round_limit = 5;
    for (let i =0 ; i < round_limit ; i++){
        let playerSelection = prompt("Choose rock paper or scissors!");
        playerSelection = playerSelection.toLowerCase();
        let result = playRound(playerSelection, getComputerChoice());
        score += result;

    }
    logFinalScore(score, round_limit);
}