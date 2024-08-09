// Rock, Paper and Scissors game.
function getComputerChoice() {
    array = new Array("r", "p", "s"); // Arrays allow us to choose items based on index values.
    random_index = Math.floor(Math.random() * array.length) //Multiplying the random value (from 0 to 1) with the length and rounding it down gives us an adjusted index. 
    return array[random_index]; // We then select a random value from that index.
}

function getHumanChoice() {
    let choice;
    choice = prompt("Enter 'r', 'p' or 's' to choose Rock, Paper or Scissors: ");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "r" && computerChoice == "s") || (humanChoice == "p" && computerChoice == "r") || (humanChoice == "s" && computerChoice == "p")) {
        console.log("You win!") 
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else {
        console.log("You lose!")
    }
    console.log(humanChoice, computerChoice)
}

for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}