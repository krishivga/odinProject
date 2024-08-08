// your JavaScript file
// Main container managing DOM items
const container = document.querySelector("#container");

// First div containing text content
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// A red paragraph
const paragraph_red = document.createElement("p");
paragraph_red.textContent = "Hey, I'm red!";
paragraph_red.setAttribute("style", "color: red;")
container.appendChild(paragraph_red);

// A blue header
const header_blue = document.createElement("h3");
header_blue.setAttribute("style", "color: blue;");
header_blue.textContent = "I'm a blue H3!";
container.appendChild(header_blue);

// A pink div containing content
const div_pink = document.createElement("div");
div_pink.setAttribute("style", "border: 1px solid black; background-color: pink;");

// A header for the div
const header_div = document.createElement("h1");
header_div.textContent = "I'm in a div!";
div_pink.appendChild(header_div);

// A paragraph for the div
const paragraph_div = document.createElement("p");
paragraph_div.textContent = "ME TOO!";
div_pink.appendChild(paragraph_div);

// Adding the div to the container
container.appendChild(div_pink)

// Creating a button to test out Event Listeners
const onclick_button = document.createElement("button");
onclick_button.setAttribute("style", "  background: white; border: solid 2px black; padding: .375em 1.125em; font-size: 1rem;");
onclick_button.textContent = "Click me!";
container.appendChild(onclick_button);

// Creating an event listener to check when button is clicked.
onclick_button.addEventListener("click", function() {
    console.log("Button clicked!");
})
