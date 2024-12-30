console.log("Hello World")

function getComputerChoice(choice) {
    return choice[Math.floor((Math.random() * choice.length))]
}

function getHumanChoice() {
    let choice = prompt ("What's your play, 'rock', 'paper' or 'scissors' ?")
    return choice.toLocaleLowerCase()
}




function main() {
    const options = ["rock", "paper", "scissors"]

    console.log(getComputerChoice(options))
    console.log(getHumanChoice())  
}

main()