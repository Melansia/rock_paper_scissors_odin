let humanScore = 0
let computerScore = 0

const gameScore = document.querySelector(".game-status")
const gameStatus = document.querySelector(".verdict")
const gameButtons = document.querySelectorAll(".buttons button")
const gameStartButton = document.querySelector(".start-game")

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor((Math.random() * options.length))]
}

function checkWin(humanChoice, computerChoice) {
    if (humanChoice === computerChoice ) {
        return null
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return false
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return false
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return false
    } else {
        return true
    }
}


function playRound(humanChoice, computerChoice) {
    let capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()

    let whoWon = checkWin(humanChoice, computerChoice)

    console.log(computerChoice)
    console.log(humanChoice)

    if (whoWon === null ) {
        gameStatus.textContent = `It's a Draw.`
        console.log("Draw")
    } else if (whoWon) {
        gameStatus.textContent = `Round Won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`
        console.log(`Round Won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`)
        ++humanScore
    } else {
        gameStatus.textContent = `Round Lost! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
        console.log(`Round Lost! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`)
        ++computerScore
    }
}

function gameFinished() {
    return ( humanScore >= 5 || computerScore >= 5 )
}

function startGame() {
    gameStartButton.addEventListener("click", () => {
        humanScore = 0
        computerScore = 0
        gameStatus.textContent = "Choose your weapon!"
        gameScore.textContent = `You: ${humanScore}  |  Computer: ${computerScore}`
        gameButtons.forEach((button) => { 
            button.hidden = false
        })
        gameStartButton.setAttribute("hidden", true) 
    })
}

function endGameStats() {
    if (humanScore > computerScore) {
        gameStatus.textContent = "Hooray! You won!"
    } else {
        gameStatus.textContent = "Looks like Computer won this time."
    }
}


function endGame() {
    console.log("Game Finished")
    gameButtons.forEach((button) => { 
        button.hidden = true
    })
    gameStartButton.hidden = false
}

function playGame() {
    startGame() 
    gameButtons.forEach((button) => {
        button.addEventListener("click", () => {
            gameScore.textContent = `You: ${humanScore}  |  Computer: ${computerScore}`
            const humanChoice = button.className
            const computerChoice = getComputerChoice()
            playRound(humanChoice, computerChoice)
            gameScore.textContent = `You: ${humanScore}  |  Computer: ${computerScore}`
            if(gameFinished()) {
                endGameStats()
                endGame()
            }
        })
    })
}


function main() {

    playGame()
}

main()