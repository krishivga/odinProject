// TODO: Create Reset functionality
// TODO: Create Delete functionality
// TODO: Add buttons for numbers and symbols
// Making  Calculator
// Event listeners
const getOperation = function() {
    add_button.addEventListener("click", function() {
        processOperation("+");
    })
    
    subtract_button.addEventListener("click", function() {
        processOperation("-");
    })

    multiply_button.addEventListener("click", function() {
        processOperation("*");
    })

    divide_button.addEventListener("click", function() {
        processOperation("/");
    })
}

// Take inputs from calculator_body
const enter_number = function () {
    key_0.addEventListener("click", function() {
        if (firstClickDone === false) {
            current_number = "0";
            firstClickDone = true;
        } else {
            current_number = current_number + "0";
        }
        displayText(current_number);
    })

    key_1.addEventListener("click", function() {
        if (firstClickDone === false) {
            current_number = "1";
            firstClickDone = true;
        } else {
            current_number = current_number + "1";
        }
        displayText(current_number);
    })

    key_2.addEventListener("click", function() {
        if (firstClickDone === false) {
            current_number = "2";
            firstClickDone = true;
        } else {
            current_number = current_number + "2";
        }
        displayText(current_number);
    })

    key_3.addEventListener("click", function() {
        if (firstClickDone === false) {
            current_number = "3";
            firstClickDone = true;
        } else {
            current_number = current_number + "3";
        }
        displayText(current_number);
    })

    key_4.addEventListener("click", function() {
        alert("Number 4 pressed!");
        current_number += "4";
    })

    key_5.addEventListener("click", function() {
        alert("Number 5 pressed!");
        current_number += "5";
    })
    
    key_6.addEventListener("click", function() {
        alert("Number 6 pressed!");
        current_number += "6";
    })

    key_7.addEventListener("click", function() {
        alert("Number 7 pressed!");
        current_number += "7";
    })

    key_8.addEventListener("click", function() {
        alert("Number 8 pressed!");
        current_number += "8";
    })

    key_9.addEventListener("click", function() {
        alert("Number 9 pressed!");
        current_number += "9";
    })

    // Doing operations if this is the second number pressed
}

// Creating a calculator
const addNumbers = function (first_number, previous_number) {
    return first_number + previous_number;
};

const subtractNumbers = function (first_number, previous_number) {
    return first_number - previous_number;
};

const multiplyNumbers = function (first_number, previous_number) {
    return first_number * previous_number;
};

const divideNumbers = function (first_number, previous_number) {
    return first_number/previous_number;
};


const setPreviousNumber = function (current_number) {
    previous_number = Number(current_number);
};

// Input and Output Functions
const processOperation = function (operation) {
    // Checking for incorrect inputs
    let firstNumberPressed = false;

    switch(operation) {
        case "+":
            alert("stuff was added");
            if (previous_number === null) { // Only setting to previous number if no previous number is current stored
                setPreviousNumber(current_number)
                clearDisplayText()
            } else {
                current_number = addNumbers(current_number, previous_number);
                displayText(current_number);
                previous_number = null;
            }
            break;
        case "-":
            displayText(subtractNumbers(current_number, previous_number));
            break;
        case "*":
            displayText(multiplyNumbers(current_number, previous_number));
            break;
        case "/":
            displayText(divideNumbers(current_number, previous_number));
            break;
    }
}

// Displaying anything onto the screen
const displayText = function(content) {
    content = String(content);
    screen_text.textContent = content;
}

const clearDisplayText = function() {
    screen_text.textContent = "";
    current_number = "";
}

// Change calculator display
const change_display = function () {
    reset_button.addEventListener("click", function() {
        alert("Reset Complete!");
    });
    
    delete_button.addEventListener("click", function() {
        alert("Delete Complete!");
    });
}

// Global Variables
let current_number;
let previous_number = null;
let firstClickDone = false;

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
// Upper Buttons
const buttons_upper = document.createElement("div");
buttons_upper.className = "buttons-upper";
calculator_buttons.appendChild(buttons_upper);

const reset_button = document.createElement("button"); 
const delete_button = document.createElement("button");
const add_button = document.createElement("button");
const subtract_button = document.createElement("button");
const multiply_button = document.createElement("button");
const divide_button = document.createElement("button");
const equals_button = document.createElement("button");

reset_button.className = "upper-button";
delete_button.className = "upper-button";
add_button.className = "upper-button";
subtract_button.className = "upper-button";
multiply_button.className = "upper-button";
divide_button.className = "upper-button";
equals_button.className = "upper-button";


reset_button.id = "reset-button";
delete_button.id = "delete-button";
add_button.id = "add-button";
subtract_button.id = "subtract-button";
multiply_button.id = "multiply-button";
divide_button.id = "divide-button";
equals_button.id = "equals-button";

reset_button.textContent = "AC";
delete_button.textContent = "⌫";
add_button.textContent = "+";
subtract_button.textContent = "-";
multiply_button.textContent = "*";
divide_button.textContent = "÷";
equals_button.textContent = "=";

buttons_upper.appendChild(reset_button);
buttons_upper.appendChild(delete_button);
buttons_upper.appendChild(add_button);
buttons_upper.appendChild(subtract_button);
buttons_upper.appendChild(multiply_button);
buttons_upper.appendChild(divide_button);
buttons_upper.appendChild(equals_button);

// Buttons Body
const buttons_body = document.createElement("div");
buttons_body.className = "buttons-body";
calculator_buttons.appendChild(buttons_body);

const key_0 = document.createElement("button");
const key_1 = document.createElement("button");
const key_2 = document.createElement("button");
const key_3 = document.createElement("button");
const key_4 = document.createElement("button");
const key_5 = document.createElement("button");
const key_6 = document.createElement("button");
const key_7 = document.createElement("button");
const key_8 = document.createElement("button");
const key_9 = document.createElement("button");

key_0.className = "body-button";
key_1.className = "body-button";
key_2.className = "body-button";
key_3.className = "body-button";
key_4.className = "body-button";
key_5.className = "body-button";
key_6.className = "body-button";
key_7.className = "body-button";
key_8.className = "body-button";
key_9.className = "body-button";

key_0.textContent = "0";
key_1.textContent = "1";
key_2.textContent = "2";
key_3.textContent = "3";
key_4.textContent = "4";
key_5.textContent = "5";
key_6.textContent = "6";
key_7.textContent = "7";
key_8.textContent = "8";
key_9.textContent = "9";

buttons_body.appendChild(key_0);
buttons_body.appendChild(key_1);
buttons_body.appendChild(key_2);
buttons_body.appendChild(key_3);
buttons_body.appendChild(key_4);
buttons_body.appendChild(key_5);
buttons_body.appendChild(key_6);
buttons_body.appendChild(key_7);
buttons_body.appendChild(key_8);
buttons_body.appendChild(key_9);

// Input and Output Management
enter_number()
getOperation()