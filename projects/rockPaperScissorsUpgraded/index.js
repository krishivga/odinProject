// Setting up DOM
let elementClicked = false;

// Checking for user input
function getHumanChoice(elementClicked){
    const choiceRock = document.querySelector(".button-rock");
    const choicePaper = document.querySelector(".button-paper");
    const choiceScissors = document.querySelector(".button-scissors");
    elementClicked = false;

    let rock = choiceRock.addEventListener("click", function (){
        elementClicked = true;
        return "r"
    });
    let paper = choicePaper.addEventListener("click", function (){
        elementClicked = true;
        return "p"
    });
    let scissors = choiceScissors.addEventListener("click", function (){
        elementClicked = true;
        return "s"
    });
}

// Generates a computer choice
function getComputerChoice() {
    array = new Array("r", "p", "s"); // Arrays allow us to choose items based on index values.
    random_index = Math.floor(Math.random() * array.length) //Multiplying the random value (from 0 to 1) with the length and rounding it down gives us an adjusted index. 
    return array[random_index]; // We then select a random value from that index.
}

// Displays computer choice based on option taken
function displayComputerChoice(computerChoice) {
    const computerChoiceDisplay = document.querySelector("#choice-text");
    if (computerChoice === "r") {
        computerChoiceDisplay.textContent = "Rock";
    } else if (computerChoice === "p") {
        computerChoiceDisplay.textContent = "Paper";
    } else if (computerChoice === "s") {
        computerChoiceDisplay.textContent = "Scissors";
    }
}

// Rock, Paper and Scissors game.
function playRound(humanChoice, computerChoice) {
    let resultDisplay = document.querySelector(".result-text");
    if ((humanChoice == "r" && computerChoice == "s") || (humanChoice == "p" && computerChoice == "r") || (humanChoice == "s" && computerChoice == "p")) { // Organising all win conditions into one condition for readability
        resultDisplay.textContent = "You win!";
        resultDisplay.setAttribute("style", "color: #3cb371");
    } else if (humanChoice === computerChoice) {
        resultDisplay.textContent = "Tie!";
        resultDisplay.setAttribute("style", "color: #fada5e");
    } else {
        resultDisplay.textContent = "You lose!";
        resultDisplay.setAttribute("style", "color: #86011");
    }
}

// Game resets every minute
function playGame(playRound, elementClicked, displayComputerChoice) { 
    if (elementClicked === true) {
        displayComputerChoice
        playRound
    }
}

// Implementing it
let computerChoice = getComputerChoice()
playGame(playRound(getHumanChoice(elementClicked), computerChoice), elementClicked, displayComputerChoice(computerChoice));