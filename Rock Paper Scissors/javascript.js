console.log("Ilyas  (Basket)");
const results = ["Scissors", "Rock", "Paper"];
function getComputedChoice(results){
    let index = Math.floor(Math.random()*results.length);
    return results[index];
}
function playRound(array, Computer){
    let ComputerAnswer = Computer(array);
    let PlayerAnswer = prompt("Please choose: Rock, Paper or Scissors")
    ComputerAnswer = ComputerAnswer.toLowerCase();
    PlayerAnswer = PlayerAnswer.toLowerCase();
    console.log("Computer's choice: " + ComputerAnswer);
    console.log("Player's choice: " + PlayerAnswer);
    if (ComputerAnswer == PlayerAnswer){
        resultofthegame = "TIE";
    }else if (ComputerAnswer == "rock" && PlayerAnswer == "scissors"){
        resultofthegame = "Computer Wins";
    }else if (ComputerAnswer == "scissors" && PlayerAnswer == "rock"){
        resultofthegame = "Player Wins";
    }else if (ComputerAnswer == "scissors" && PlayerAnswer == "paper"){
        resultofthegame = "Computer Wins";
    }else if (ComputerAnswer == "paper" && PlayerAnswer == "scissors"){
        resultofthegame = "Player Wins";
    }else if (ComputerAnswer == "paper" && PlayerAnswer == "rock"){
        resultofthegame = "Computer Wins";
    }else{
        resultofthegame = "Player Wins";
    }
    return resultofthegame;
}
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
game(playRound, 5, results, getComputedChoice);