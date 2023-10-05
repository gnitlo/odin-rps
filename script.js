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
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

console.log(computerChoice)
console.log(playerChoice)