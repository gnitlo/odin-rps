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
    let computerChoice = ["ROCK","PAPER","SCISSOR"];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}
let computerChoice = getComputerChoice();
console.log(computerChoice)