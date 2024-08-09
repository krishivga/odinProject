const sketchContainer = document.querySelector(".container");
let sketchCell;

// Reset button takes prompt and creates new grid based on that
let reset_button = document.querySelector(".reset");

createNewGrid()

reset_button.addEventListener("click", function () {
    // Prompt the user for a grid size
    let gridSize = prompt("Enter a value above 0 and below 100 to create a new grid of that size: ");
    
    // Validate the user input
    if (gridSize > 0 && gridSize < 100) { 
        createNewGrid(Number(gridSize)); 
    } else {
        alert("Invalid input. Please enter a number between 1 and 99.");
    }
});

function createNewGrid(gridSize = 16) {
    for (let divCount = 0; divCount < (gridSize * gridSize); divCount++) { // 16 x 16 = 256
        sketchCell = document.createElement("div"); // appendChild removes value from original location, need to make a new one for each iteration of loop
        sketchCell.setAttribute("class", "cell");
        sketchContainer.appendChild(sketchCell);
    }
    let sketchCells = document.querySelectorAll(".cell"); // Array of all the cells
    sketchCells.forEach(function (cell) {
        cell.addEventListener("mouseenter", function () {
            cell.setAttribute("style", "background-color: black;");
        })
    })
}