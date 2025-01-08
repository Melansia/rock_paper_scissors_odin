# Rock Paper Scissors

Yet another tutorial project, nothing fancy just more practice,
For now, this game will be played entirely in the console. In future I'll be modifying it
and add a GUI. 

## Assignment

1. Setup the project structure
    - [x] Create a new Git repository for project.
    - [x] Create a blank HTML document with a script tag.
    - [x] Check if JavaScript is linked correctly:
    - [x] Write `console.log("Hello World")` in JavaScript.
    - [x] Check if “Hello World” is `logged` in the browser console once you open your webpage.
    - [x] Link to an external JavaScript file inside this script tag. Using an external JavaScript file keeps HTML file clean and organized.

    For now this game is played entirely via the console.

2. Write the logic to get the computer choice
    The game will be played against the computer. Write a function that randomly returns “rock”, “paper” or “scissors”.
    - [x] Create a new function named `getComputerChoice`.
    - [x] Write the code so that `getComputerChoice` will randomly return one of the following string values: “rock”, “paper” or “scissors”.
        > Hint: The `Math.random` method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
    - [x] Test that the function returns what is expected using `console.log` or the browser developer tools before advancing to the next step.

3. Write the logic to get the human choice
    The game will be played by a human player. Need to write a function that takes the user choice and returns it.
    - [x] Create a new function named `getHumanChoice`.
    - [x] `getHumanChoice` need to return one of the valid choices depending on what the user inputs.
        > Hint: Use the [`prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) method to get the user’s input.
    - [x] Test what the function returns by using `console.log`.

4. Declare the players score variables
    The game will keep track of the players score. Need variables to keep track of the players score.
    - [x] Create two new variables named `humanScore` and `computerScore` in the global scope and initialize those variables with the value of 0.

5. Write the logic to play a single round
   The game will be played round by round. Need a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
    - [x] Create a new function named `playRound`.
    - [x] Define two parameters for `playRound`: `humanChoice` and `computerChoice`. Use these two parameters to take the human and computer choices as arguments.
    - [x] Make function’s `humanChoice` parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    - [x] Write the code for `playRound` function to `console.log` a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    - [x] Increment the `humanScore` or `computerScore` variable based on the round winner.

6. Write the logic to play the entire game
    - [x] The game will play 5 rounds. Write a function named `playGame` that calls `playRound` to play 5 rounds, keeps track of the scores and declares a winner at the end.
    - [x] Create a new function named `playGame`.
    - [x] Move `playRound` function and score variables so that they’re declared inside of the new playGame function
    - [x] Play 5 rounds by calling `playRound` 5 times.
        > Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
    - [x] Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.

## Add a User Interface (UI)

In this step, the game will transition from a purely console-based experience to an interactive user interface. Players will be able to play the game by clicking buttons instead of using prompts.

### Assignment

1. **Create the UI structure**
   - [ ] Remove the logic that plays exactly five rounds.
   - [ ] Create three buttons in your HTML, one for each selection: "Rock", "Paper", and "Scissors".
   - [ ] Add a `div` element to the HTML to display the results of each round.

2. **Add interactivity to buttons**
   - [ ] Add an event listener to each button that calls your `playRound` function with the correct `playerSelection` when clicked.
       > Hint: You can pass the player's selection (`"rock"`, `"paper"`, or `"scissors"`) directly to the `playRound` function inside the event listener.

3. **Refactor console logs**
   - [ ] Change all `console.log` statements into DOM manipulation methods to display results in the new `div` element.
       > Hint: Use methods like `textContent` or `innerHTML` to update the content of the `div`.

4. **Implement the running score**
   - [ ] Display the player's and computer's scores in the UI by updating another section of the HTML.
   - [ ] Keep track of the scores as you did previously, but now update the displayed scores after each round.
       > Hint: Create separate `div` or `span` elements to display the `humanScore` and `computerScore`, and update their values programmatically.

5. **Announce the winner**
   - [ ] Once one player reaches 5 points, stop the game and display a message announcing the winner.
       > Hint: Add a conditional check inside your event listener to verify whether either score has reached 5 points. If true, disable further button clicks and display the winner.

6. **Optional cleanup**
   - [ ] Add a "Play Again" button to reset the game when the current game ends. 
       - [ ] Reset both scores to 0.
       - [ ] Clear the results and restart the game logic.