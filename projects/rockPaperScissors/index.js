// In this project, we create a rock paper scissors game
function getComputerChoice() {
  array = new Array("r","p","s") // Create a new array with the set of choices (rock, paper and scissors)
  return array[Math.floor(Math.random() * array.length)];
  // We chose a random number between 0 and 1, multiply it by the length of the array and round it down to get a random index.
}

function getHumanChoice() {
   return prompt("Enter 'r','p' or 's' to choose Rock, Paper or Scissors: ")
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice == "r" && computerChoice == "s") {
    console.log("You win! Rock beats Scissors!");
    return true;
   } 
  if (humanChoice == "p" && computerChoice == "r") {
    console.log("You win! Paper beats Rock!");
    return true;
   } 
  if (humanChoice == "s" && computerChoice == "p") {
    console.log("You win! Scissors beats Paper!");
    return true;
   } 
   if (computerChoice == "r" && humanChoice == "s") {
     console.log("You lose! Rock beats Scissors!");
     return false;
   }
   if (computerChoice == "p" && humanChoice == "r") {
     console.log("You lose! Paper beats Rock!");
     return false;
   }
    if (computerChoice == "s" && humanChoice == "p") {
     console.log("You lose! Scissors beats Paper!");
     return false;
   }
}

function playGame(games) {
  let playerScore = 0;
  let computerScore = 0;
  let score = 0;
  for (let i = 0; i < games; i++){
    score = playRound(getHumanChoice(),getComputerChoice());
    if (score == true) {
      playerScore++;
    } else {
      computerScore++;
    }
  }
  console.log(`The player has scored ${playerScore} points and the computer has scored ${computerScore} points out of ${games} many games.`)
}

playGame(5)
