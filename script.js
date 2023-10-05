/*
Function getComputerChoice
    Output random: rock, paper scissors

Function playGame
    Input computerSelection
    Input playerSelection
    Run toUpperCase() for playerSelection
    Return string "You win! X beats Y", "You lose! X beats Y"
*/
function getComputerChoice(){
    let randomChoice = ["ROCK","PAPER","SCISSOR"];
    const randomIndex = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomIndex];
}
function getPlayerChoice(){
    let playerChoice = prompt ("Rock, paper or scissor?");
    playerChoice=playerChoice.toUpperCase();
    if (playerChoice =="PAPER" 
    || playerChoice =="ROCK" 
    || playerChoice =="SCISSOR"){
        return playerChoice;
    }
    else {
        alert ("Invalid choice")
        return
    }

}
function playRound(computerChoice,playerChoice){
    if (playerChoice == "PAPER"){
        if (computerChoice == "PAPER"){
            console.log("Draw! " + playerChoice + " draws against " + computerChoice);
        }
        else if (computerChoice == "ROCK"){
            console.log("You win! " + playerChoice + " wins against " + computerChoice);
        }
        else if (computerChoice == "SCISSOR"){
            console.log("You lose! " + playerChoice + " loses against " + computerChoice);
        }
    }
    if (playerChoice == "ROCK"){
        if (computerChoice == "PAPER"){
            console.log("You lose! " + playerChoice + " loses against " + computerChoice);
        }
        else if (computerChoice == "ROCK"){
            console.log("Draw! " + playerChoice + " draws against " + computerChoice);
        }
        else if (computerChoice == "SCISSOR"){
            console.log("You win! " + playerChoice + " wins against " + computerChoice);
        }
    }
    if (playerChoice == "SCISSOR"){
        if (computerChoice == "PAPER"){
            console.log("You win! " + playerChoice + " wins against " + computerChoice);
        }
        else if (computerChoice == "ROCK"){
            console.log("You lose! " + playerChoice + " loses against " + computerChoice);
        }
        else if (computerChoice == "SCISSOR"){
            console.log("Draw! " + playerChoice + " draws against " + computerChoice);
        }
    }
}
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
playRound(computerChoice,playerChoice);