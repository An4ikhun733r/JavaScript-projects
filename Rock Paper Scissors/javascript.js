console.log("Ilyas  (Basket)");
const results = ["Scissors", "Rock", "Paper"];
function getComputedChoice(results){
    let index = Math.floor(Math.random()*results.length);
    return results[index];
}
const PlayerScore = document.getElementById("playerScore");
const ComputerScore = document.getElementById("computerScore");

let PScore = 0
let CScore = 0

function playRound(array, Computer, PAnswer){
    let CAnswer = Computer(array);
    CAnswer = CAnswer.toLowerCase();
    PAnswer = PAnswer.toLowerCase();
    if (CAnswer == PAnswer){
        resultofthegame = "TIE";
    }else if (CAnswer == "rock" && PAnswer == "scissors"){
        resultofthegame = "Computer Wins";
        CScore++;
    }else if (CAnswer == "scissors" && PAnswer == "rock"){
        resultofthegame = "Player Wins";
        PScore++;
    }else if (CAnswer == "scissors" && PAnswer == "paper"){
        resultofthegame = "Computer Wins";
        CScore++;
    }else if (CAnswer == "paper" && PAnswer == "scissors"){
        resultofthegame = "Player Wins";
        PScore++;
    }else if (CAnswer == "paper" && PAnswer == "rock"){
        resultofthegame = "Computer Wins";
        CScore++;
    }else{
        resultofthegame = "Player Wins";
        PScore++;
    }
    if(PScore == 5){
        alert("Player WINS!")
    }else if(CScore == 5){
        alert("Computer WINS!")
    }
    PlayerScore.textContent = `Player: ${PScore}`
    ComputerScore.textContent = `Computer: ${CScore}`
}


document.getElementById("rock").addEventListener("click", function() {
    playRound(results, getComputedChoice, "Rock")
})
document.getElementById("paper").addEventListener("click", function() {
    playRound(results, getComputedChoice, "Paper")
})
document.getElementById("scissors").addEventListener("click", function() {
    playRound(results, getComputedChoice, "Scissors")
})

function game(play, number, array, Computer){
    let ComputerCnt = 0;
    let PlayerCnt = 0;
    for (let i = 1; i <= number; i++){
        console.log("Game " + i + ": ")
        res = play(array,Computer);
        if (res == "Computer Wins"){
            ComputerCnt++;  
        }else if (res == "Player Wins"){
            PlayerCnt++;
        }
    }
    console.log("Score: ")
    console.log("Computer " + ComputerCnt + ":" + PlayerCnt + " Player")
}