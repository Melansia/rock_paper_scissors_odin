let humanScore = 0
let computerScore = 0
const options = ["rock", "paper", "scissors"]

function getComputerChoice(choice) {
    return choice[Math.floor((Math.random() * choice.length))]
}

function checkInput(humanInput) {
    return options.includes(humanInput)
}

function getHumanChoice() {
    let choice = prompt (`What's your play, ${[...options]} ?`)
    while (true) {
        let humanInput = choice.toLocaleLowerCase()
        if (checkInput(humanInput)){
            break
        } else {
            choice = prompt (`Invalid choice, please chose one of the following, ${[...options]} ?`)
        }
    }
    return choice
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

    let whoWon = checkWin(humanChoice, computerChoice)

    console.log(computerChoice)
    console.log(humanChoice)

    if (whoWon === null ) {
        console.log("Draw")
    } else if (whoWon) {
        console.log(`Round Won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`)
        ++humanScore
    } else {
        console.log(`Round Lost! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`)
        ++computerScore
    }
}

function playGame() {
    console.log("This game will have 5 rounds")
    console.log("Let's start")
    for ( i = 1; i <= 6; i++ )  {
        console.log(`Current score is: You - ${humanScore}     Computer - ${computerScore}`)
        playRound()
    }

    if (humanScore > computerScore) {
        console.log(`Final score is: You - ${humanScore}     Computer - ${computerScore}`)
        console.log("You WON! Congratulation!")
    } else if( humanScore == computerScore) {
        console.log(`Final score is: You - ${humanScore}     Computer - ${computerScore}`)
        console.log("Thats a DRAW!")    
    } else {
        console.log("You lost, wish you better luck for the next time! Don't be shy give it another try.")
    }
}


function main() {

    playGame()
}

main()