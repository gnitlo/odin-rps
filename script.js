let roundCount=0;
let playerWin=0;
let playerLoss=0;
let playerDraw=0;

const score = document.querySelector("#score");
const roundResult = document.querySelector("#roundResult");
const result = document.querySelector("#result")
const reset = document.getElementById("reset");

function getComputerChoice(){
    let randomChoice = ["ROCK","PAPER","SCISSOR"];
    const randomIndex = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomIndex];
}

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
    if (playerChoice == "PAPER"){
        if (computerChoice == "PAPER"){
            roundResult.textContent=`Draw! ${playerChoice} draws against ${computerChoice}`;
            playerDraw++;
            finishedRound();
        }
        else if (computerChoice == "ROCK"){
            roundResult.textContent=`You win! ${playerChoice} wins against ${computerChoice}`;
            playerWin++;
            finishedRound();
        }
        else if (computerChoice == "SCISSOR"){
            roundResult.textContent=`You lose! ${playerChoice} loses against ${computerChoice}`;
            playerLoss++;
            finishedRound();
        }
    }
    if (playerChoice == "ROCK"){
        if (computerChoice == "PAPER"){
            roundResult.textContent=`You lose! ${playerChoice} loses against ${computerChoice}`;
            playerLoss++;
            finishedRound();
        }
        else if (computerChoice == "ROCK"){
            roundResult.textContent=`Draw! ${playerChoice} draws against ${computerChoice}`;
            playerDraw++;
            finishedRound();
        }
        else if (computerChoice == "SCISSOR"){
            roundResult.textContent=`You win! ${playerChoice} wins against ${computerChoice}`;
            playerWin++;
            finishedRound();
        }
    }
    if (playerChoice == "SCISSOR"){
        if (computerChoice == "PAPER"){
            roundResult.textContent=`You win! ${playerChoice} wins against ${computerChoice}`;
            playerWin++;
            finishedRound();
        }
        else if (computerChoice == "ROCK"){
            roundResult.textContent=`You lose! ${playerChoice} loses against ${computerChoice}`;
            playerLoss++;
            finishedRound();
        }
        else if (computerChoice == "SCISSOR"){
            roundResult.textContent=`Draw! ${playerChoice} draws against ${computerChoice}`;
            playerDraw++;
            finishedRound();
        }
    }
}

reset.addEventListener("click", () => {
    resetGame();
});

function finishedRound(){
    roundCount ++;
    console.log(roundCount);
    if (roundCount>4){
        document.querySelector('#inputRock').disabled = true;
        document.querySelector('#inputPaper').disabled = true;
        document.querySelector('#inputScissor').disabled = true;
    };
    if (roundCount>4 && playerWin>playerLoss){
        result.innerHTML=`GAME OVER, YOU WIN!`
    }
    if (roundCount>4 && playerWin<playerLoss){
        result.innerHTML=`GAME OVER, YOU LOSE!`
    }
    if (roundCount>4 && playerWin==playerLoss){
        result.innerHTML=`GAME OVER, IT'S A DRAW!`
    }
    score.textContent=`You have played ${roundCount}/5 rounds, you have won ${playerWin} time(s), lost ${playerLoss} time(s) and the result was a draw ${playerDraw} time(s).`
}

function resetGame(){
    if (confirm("Are you sure you wish to reset?") == true){
        document.querySelector('#inputRock').disabled = false;
        document.querySelector('#inputPaper').disabled = false;
        document.querySelector('#inputScissor').disabled = false;
        score.textContent=``;
        roundResult.textContent=``;
        result.innerHTML=``;
        roundCount=0;
        playerWin=0;
        playerLoss=0;
        playerDraw=0;
    }
    else {
    }
}