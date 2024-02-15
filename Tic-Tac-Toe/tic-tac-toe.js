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
        for (let i = 0; i < 9; i ++){
            Gameboard.update(i, "")
        }
        Gameboard.render()
    }
    
    const handleClick = (event) => {
        let index = parseInt(event.target.id.split("-")[1])

        if (Gameboard.getGameboard()[index] !== "") {
            return
        }

        Gameboard.update(index, players[currentplayer].mark)
        currentplayer = currentplayer === 0 ? 1 : 0
    }

    return {
        start,
        handleClick,
        restart
    }
})()
const restartButton = document.querySelector("#restartbutton")
restartButton.addEventListener("click", () => {
    Game.restart()
})
const startButton = document.querySelector("#startbutton")
startButton.addEventListener("click", () => {
    Game.start()
})