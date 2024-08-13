// TODO: Create Reset functionality
//
// Creating a calculator
// Basic Calculator Functions
const addNumbers = function (first_number, second_number) {
    return first_number + second_number;
};

const subtractNumbers = function (first_number, second_number) {
    return first_number - second_number;
};

const multiplyNumbers = function (first_number, second_number) {
    return first_number * second_number;
};

const divideNumbers = function (first_number, second_number) {
    return first_number/second_number;
};

// Input and Output Functions
const processOperation = function (operation, first_number, second_number, display) {
    // Checking for incorrect inputs
    if (!("+-*/".includes(operation))) {
        display.textContent = "Error!";
        return;
    }

    // Calculation breaks w strings
    first_number = Number(first_number);
    second_number = Number(second_number);

    switch(operation) {
        case "+":
            display.textContent = addNumbers(first_number, second_number);
            break;
        case "-":
            display.textContent = subtractNumbers(first_number, second_number);
            break;
        case "*":
            display.textContent = multiplyNumbers(first_number, second_number);
            break;
        case "/":
            display.textContent = divideNumbers(first_number, second_number);
            break;
    }
}

// Dom Setup
// Setting up the two sections of calculator
const calculator_container = document.querySelector(".calculator-container");
const calculator_screen = document.createElement("div");
const calculator_buttons = document.createElement("div");
calculator_screen.className = "calculator-screen";
calculator_buttons.className = "calculator-buttons";
calculator_container.appendChild(calculator_screen);
calculator_container.appendChild(calculator_buttons);

// Setting up the screen
const screen_display = document.createElement("div");
screen_display.className = "screen-display";
calculator_screen.appendChild(screen_display);

const screen_text = document.createElement("span");
screen_text.className = "screen-text"
screen_display.appendChild(screen_text);

// Buttons
const buttons_upper = document.createElement("div");
const buttons_body = document.createElement("div");
buttons_upper.className = "buttons-upper";
buttons_body.className = "buttons-body";
calculator_buttons.appendChild(buttons_upper);
calculator_buttons.appendChild(buttons_body);

const reset_button = document.createElement("button"); 
const delete_button = document.createElement("button");
reset_button.className = "upper-button";
delete_button.className = "upper-button";
reset_button.id = "reset-button";
delete_button.id = "delete-button";
reset_button.textContent = "Reset";
delete_button.textContent = "Delete";
buttons_upper.appendChild(reset_button);
buttons_upper.appendChild(delete_button);


// Events listeners
const change_display = function () {
    reset_button.addEventListener("click", function() {
        alert("Reset Complete!");
    });
    
    delete_button.addEventListener("click", function() {
        alert("Delete Complete!");
    });
}

// Input and Output Management
let operation = prompt("Enter the operation you want (+, -, * or /): ");
let first_number = prompt("Enter the first number: ");
let second_number = prompt("Enter the second number: ");

change_display()

processOperation(operation, first_number, second_number, screen_text);

