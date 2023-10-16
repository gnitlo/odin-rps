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
    if (roundCount>3){
        document.querySelector('#inputRock').disabled = true;
        document.querySelector('#inputPaper').disabled = true;
        document.querySelector('#inputScissor').disabled = true;
    
    }
    const result = document.querySelector("#result")
    if (playerChoice == "PAPER"){
        if (computerChoice == "PAPER"){
            result.textContent=`Draw! ${playerChoice} draws against ${computerChoice}`;
            playerDraw++;
            finishedRound();
        }
        else if (computerChoice == "ROCK"){
            result.textContent=`You win! ${playerChoice} wins against ${computerChoice}`;
            playerWin++;
            finishedRound();
        }
        else if (computerChoice == "SCISSOR"){
            result.textContent=`You lose! ${playerChoice} loses against ${computerChoice}`;
            playerLoss++;
            finishedRound();
        }
    }
    if (playerChoice == "ROCK"){
        if (computerChoice == "PAPER"){
            result.textContent=`You lose! ${playerChoice} loses against ${computerChoice}`;
            playerLoss++;
            finishedRound();
        }
        else if (computerChoice == "ROCK"){
            result.textContent=`Draw! ${playerChoice} draws against ${computerChoice}`;
            playerDraw++;
            finishedRound();
        }
        else if (computerChoice == "SCISSOR"){
            result.textContent=`You win! ${playerChoice} wins against ${computerChoice}`;
            playerWin++;
            finishedRound();
        }
    }
    if (playerChoice == "SCISSOR"){
        if (computerChoice == "PAPER"){
            result.textContent=`You win! ${playerChoice} wins against ${computerChoice}`;
            playerWin++;
            finishedRound();
        }
        else if (computerChoice == "ROCK"){
            result.textContent=`You lose! ${playerChoice} loses against ${computerChoice}`;
            playerLoss++;
            finishedRound();
        }
        else if (computerChoice == "SCISSOR"){
            result.textContent=`Draw! ${playerChoice} draws against ${computerChoice}`;
            playerDraw++;
            finishedRound();
        }
    }
}
let roundCount=0;
let playerWin=0;
let playerLoss=0;
let playerDraw=0;
const score = document.querySelector("#score");
function finishedRound(){
    roundCount ++;
score.textContent=`You have played ${roundCount}/5 rounds, you have won ${playerWin} times, lost ${playerLoss} times and draw ${playerDraw} times.`
}