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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return `Draw. You both picked ${playerSelection}.`;
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

    let output = `You ${win ? "win!" : "lose!"} ${capitalizeFirstLetter(playerSelection)} ${win ? "beats" : "loses to"} ${computerSelection}.`;
    return output;
}

function game(){
    for (let i =0 ; i < 5 ; i++){
        let playerSelection = prompt("Choose rock paper or scissors!");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}