let humanScore = 0
let computerScore = 0

const gameScore = document.querySelector(".game-status")
const gameStatus = document.querySelector(".verdict")
const gameButtons = document.querySelectorAll("button")

// console.log(gameButtons)

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
    gameButtons.forEach((button) => { 
        // if(button.hidden) {
        //     button.hidden = false
        // } else {
        //     button.hidden = true
        // }
    })

}

function endGame() {
    console.log("Game Finished")
    
}

function playGame() {
    startGame()
    console.log("This game will have 5 rounds")
    console.log("Let's start")
    console.log(`Current score is: You - ${humanScore}     Computer - ${computerScore}`)
    gameButtons.forEach((button) => {
        button.addEventListener("click", () => {
            gameScore.textContent = `You: ${humanScore}  |  Computer: ${computerScore}`
            const humanChoice = button.className
            const computerChoice = getComputerChoice()
            playRound(humanChoice, computerChoice)
            gameScore.textContent = `You: ${humanScore}  |  Computer: ${computerScore}`
            if(gameFinished()) {
                endGame()
            }
        })
    })
}


function main() {

    playGame()
}

main()