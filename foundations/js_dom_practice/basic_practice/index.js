// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph_red = document.createElement("p");
paragraph_red.textContent = "Hey, I'm red!";
paragraph_red.setAttribute("style", "color: red;")
container.appendChild(paragraph_red);
