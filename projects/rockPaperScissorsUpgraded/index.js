// Setting up DOM
const choiceRock = document.querySelector(".button-rock");
const choicePaper = document.querySelector(".button-paper");
const choiceScissors = document.querySelector(".button-scissors");
const computerChoiceDisplay = document.querySelector("#choice-text");

// Checks if any of the buttons clicked
function getHumanChoice(rockElem, paperElem, scissorsElem) {
    let rock = rockElem.addEventListener("click", () => "r");
    let paper = paperElem.addEventListener("click", () => "p");
    let scissors = scissorsElem.addEventListener("click", () => "s");
    return rock ?? paper ?? scissors; // Returns the variable which is defined. 
}

// Generates a computer choice
function getComputerChoice() {
    array = new Array("r", "p", "s"); // Arrays allow us to choose items based on index values.
    random_index = Math.floor(Math.random() * array.length) //Multiplying the random value (from 0 to 1) with the length and rounding it down gives us an adjusted index. 
    return array[random_index]; // We then select a random value from that index.
}

// Displays computer choice based on option taken
function displayComputerChoice(computerChoice, computerChoiceDisplay) {
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
    if ((humanChoice == "r" && computerChoice == "s") || (humanChoice == "p" && computerChoice == "r") || (humanChoice == "s" && computerChoice == "p")) { // Organising all win conditions into one condition for readability
        console.log("You win!") 
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else {
        console.log("You lose!")
    }
    console.log(humanChoice, computerChoice) // Logging choices to see if it even works
}

