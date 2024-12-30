let humanScore = 0
let computerScore = 0
const options = ["rock", "paper", "scissors"]

function getComputerChoice(choice) {
    return choice[Math.floor((Math.random() * choice.length))]
}

function getHumanChoice() {
    let choice = prompt (`What's your play, ${[...options]} ?`)
    return choice.toLocaleLowerCase()
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


function playRound() {
    let capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()
    let computerChoice = getComputerChoice(options)
    let humanChoice = getHumanChoice()

    let whoWon = checkWin(humanScore, computerChoice)

    console.log(computerChoice)
    console.log(humanChoice)

    if (whoWon === null ) {
        console.log("Draw")
    } else if (whoWon) {
        console.log(`You Won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`)
        ++humanScore
    } else {
        console.log(`You Won! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`)
        ++computerScore
    }
}


function main() {

    console.log(`Current score is: You - ${humanScore}     Computer - ${computerScore}`)
    playRound()
    console.log(`Current score is: You - ${humanScore}     Computer - ${computerScore}`)
}

main()