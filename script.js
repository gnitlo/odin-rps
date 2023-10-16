function getComputerChoice(){
    let randomChoice = ["ROCK","PAPER","SCISSOR"];
    const randomIndex = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomIndex];
}
// function getPlayerChoice(){
//     let playerChoice = prompt ("Rock, paper or scissor?");
//     playerChoice=playerChoice.toUpperCase();
//     if (playerChoice =="PAPER" 
//     || playerChoice =="ROCK" 
//     || playerChoice =="SCISSOR"){
//         return playerChoice;
//     }
//     else {
//         alert ("Invalid choice")
//         playerLoss++;
//         return
//     }
// }
const playPaper = document.getElementById("inputPaper");
playPaper.addEventListener("click", () => {
    playRound(getComputerChoice(),"PAPER");
});

const playRock = document.getElementById("inputRock");
playRock.addEventListener("click", () => {
    playRound(getComputerChoice(),"ROCK");
});

const playScissor = document.getElementById("inputScissor");
playScissor.addEventListener("click", () => {
    playRound(getComputerChoice(),"SCISSOR");
});

function playRound(computerChoice,playerChoice){
    const result = document.querySelector("#result")
    if (playerChoice == "PAPER"){
        if (computerChoice == "PAPER"){
            result.textContent=`Draw! ${playerChoice} draws against ${computerChoice}`;
            playerDraw++;
        }
        else if (computerChoice == "ROCK"){
            result.textContent=`You win! ${playerChoice} wins against ${computerChoice}`;
            playerWin++;
        }
        else if (computerChoice == "SCISSOR"){
            result.textContent=`You lose! ${playerChoice} loses against ${computerChoice}`;
            playerLoss++;
        }
    }
    if (playerChoice == "ROCK"){
        if (computerChoice == "PAPER"){
            result.textContent=`You lose! ${playerChoice} loses against ${computerChoice}`;
            playerLoss++;
        }
        else if (computerChoice == "ROCK"){
            result.textContent=`Draw! ${playerChoice} draws against ${computerChoice}`;
            playerDraw++;
        }
        else if (computerChoice == "SCISSOR"){
            result.textContent=`You win! ${playerChoice} wins against ${computerChoice}`;
            playerWin++;
        }
    }
    if (playerChoice == "SCISSOR"){
        if (computerChoice == "PAPER"){
            result.textContent=`You win! ${playerChoice} wins against ${computerChoice}`;
            playerWin++;
        }
        else if (computerChoice == "ROCK"){
            result.textContent=`You lose! ${playerChoice} loses against ${computerChoice}`;
            playerLoss++;
        }
        else if (computerChoice == "SCISSOR"){
            result.textContent=`Draw! ${playerChoice} draws against ${computerChoice}`;
            playerDraw++;
        }
    }
}
let playerWin = 0;
let playerLoss = 0;
let playerDraw = 0;

// for (let i = 0; i < 5; i++){
//     let computerChoice = getComputerChoice();
//     let playerChoice = getPlayerChoice();
//     playRound(computerChoice,playerChoice);
// }
// console.log(`Game over! You won ${playerWin} times, you lost ${playerLoss} times and the round ended in a draw ${playerDraw} times.`)