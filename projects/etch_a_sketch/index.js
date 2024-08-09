const sketchContainer = document.querySelector(".container");
let sketchCell;

for (let divCount = 0; divCount < 256; divCount++) { // 16 x 16 = 256
    sketchCell = document.createElement("div"); // appendChild removes value from original location, need to make a new one for each iteration of loop
    sketchCell.setAttribute("class", "cell");
    sketchContainer.appendChild(sketchCell);
}
