const displayController = (() => {
    const renderMessage = (message) => {
        document.querySelector("#message").innerHTML = message
    };
    return {
        renderMessage,
    };
})();

const Gameboard = (() => {
    let gameboard = ["","","","","","","","",""]

    const render = () => {
        let boardHTML = ""
        gameboard.forEach((sign,index) => {
            boardHTML += `<div class = "sign" id = "sign-${index}">${sign}</div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML
        const signs = document.querySelectorAll(".sign")
        signs.forEach((sign) => {
            sign.addEventListener("click", Game.handleClick)
        })
    }
    
    const update = (index, value) => {
        gameboard[index] = value
        render()
    }

    const getGameboard = () => gameboard

    return {
        render,
        update,
        getGameboard
    }
})();

const createPlayer = (name,mark) => {
    return {
        name,
        mark
    }
}

const Game = (() => {
    let players = []
    let currentplayer
    let gameover

    const start = () => {
        players = [
            createPlayer("Player1", "X"),
            createPlayer("Player1", "0")
        ]
        currentplayer = 0
        gameover = false
        Gameboard.render()
    }

    const restart = () => {
        gameover = false
        for (let i = 0; i < 9; i ++){
            Gameboard.update(i, "")
        }
        Gameboard.render()
        document.querySelector("#message").innerHTML = ""
    }
    
    const handleClick = (event) => {
        if(gameover){
            return
        }
        let index = parseInt(event.target.id.split("-")[1])

        if (Gameboard.getGameboard()[index] !== "") {
            return
        }

        Gameboard.update(index, players[currentplayer].mark)
        
        if (checkForWin(Gameboard.getGameboard())) {
            gameover = true
            displayController.renderMessage(`${players[currentplayer].mark} won!`)
        }
        else if (checkForTie(Gameboard.getGameboard()))
        {
            gameover = true
            displayController.renderMessage("Tie")
        }
    currentplayer = currentplayer === 0 ? 1 : 0   
    }

    return {
        start,
        handleClick,
        restart
    }
})()

function checkForWin (board) {
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    for (let i = 0; i < winningCombinations.length; i++){
        const [a,b,c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]){
            return true
        }
    }
    return false
}

function checkForTie (board) {
    return board.every(cell => cell !== "")
}

const restartButton = document.querySelector("#restartbutton")
restartButton.addEventListener("click", () => {
    Game.restart()
})
const startButton = document.querySelector("#startbutton")
startButton.addEventListener("click", () => {
    Game.start()
})