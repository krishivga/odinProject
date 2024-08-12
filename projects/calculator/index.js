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
        alert("Error")
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

// Input and Output Management
let operation = prompt("Enter the operation you want (+, -, * or /): ");
let first_number = prompt("Enter the first number: ");
let second_number = prompt("Enter the second number: ");

processOperation(operation, first_number, second_number, screen_text);