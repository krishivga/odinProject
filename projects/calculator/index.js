// Odin Project-JS Basics: Calculator
// TODO: Style the calc
// TODO: Add decimals

// Input and Output
// Getting operations
const getOperationPress = function() {
    add_button.addEventListener("click", function() {
        current_operator = "+";
        previous_number = Number(current_number);
        current_number = ""
        clearDisplayText();
    })
    
    subtract_button.addEventListener("click", function() {
        current_operator = "-";
        previous_number = Number(current_number);
        current_number = ""
        clearDisplayText();
    })

    multiply_button.addEventListener("click", function() {
        current_operator = "*";
        previous_number = Number(current_number);
        current_number = "";
        clearDisplayText();
    })

    divide_button.addEventListener("click", function() {
        current_operator = "/";
        previous_number = Number(current_number);
        current_number = "";
        clearDisplayText();
    })
}

// Take inputs from calculator_body
const getNumberPress = function () {
    key_0.addEventListener("click", function() {
        current_number += "0";
        displayed_number += "0";
        displayText(current_number);
    })

    key_1.addEventListener("click", function() {
        current_number += "1";
        displayed_number += "1";
        displayText(current_number);
    })

    key_2.addEventListener("click", function() {
        current_number += "2";
        displayed_number += "2";
        displayText(current_number);
    })

    key_3.addEventListener("click", function() {
        current_number += "3";
        displayed_number += "3";
        displayText(current_number);
    })

    key_4.addEventListener("click", function() {
        current_number += "4";
        displayed_number += "4";
        displayText(current_number);
    })

    key_5.addEventListener("click", function() {
        current_number += "5";
        displayed_number += "5";
        displayText(current_number);

    })
    
    key_6.addEventListener("click", function() {
        current_number += "6";
        displayed_number += "6";
        displayText(current_number);
    })

    key_7.addEventListener("click", function() {
        current_number += "7";
        displayed_number += "7";
        displayText(current_number);
    })

    key_8.addEventListener("click", function() {
        current_number += "8";
        displayed_number += "8";
        displayText(current_number);
    })

    key_9.addEventListener("click", function() {
        current_number += "9";
        displayed_number += "9";
        displayText(current_number);
    })

    // Doing operations if this is the second number pressed
}

const getDisplayChange = function () {
    reset_button.addEventListener("click", function() {
        clearDisplayText()
        current_number = "";
        previous_number = null;
    });
    
    delete_button.addEventListener("click", function() {
    current_number = current_number.substring(0, current_number.length - 1);
    displayText(current_number);
    });

    equals_button.addEventListener("click", function(){
        setEqualsAnswer();
    })
}

// Displaying anything onto the screen
const displayText = function(content) {
    content = String(content);
    screen_text.textContent = content;
}

// Removing all display text
const clearDisplayText = function() {
    screen_text.textContent = "";
    displayed_number = "";
}

// Operator functions
const addNumbers = function (first_number, previous_number) {
    return previous_number + first_number;
};

const subtractNumbers = function (first_number, previous_number) {
    return  previous_number - first_number;
};

const multiplyNumbers = function (first_number, previous_number) {
    return previous_number * first_number;
};

const divideNumbers = function (first_number, previous_number) {
    return previous_number/first_number;
};

// Putting it all together - getting the display to work
const setEqualsAnswer = function () {
    let answer;

    if ((current_number === null) || (current_operator == null) || (previous_number === null)) { // Error check
        displayText(null);
    }

    switch (current_operator) { // 
        case "+":
            answer = addNumbers(Number(current_number), Number(previous_number))
            displayText(answer)
            current_number = answer;
            displayed_number = answer;
            current_operator = null;
            break;
        case "-":
            answer = subtractNumbers(Number(current_number), Number(previous_number));
            displayText(answer);
            displayed_number = answer;
            current_number = answer;
            current_operator = null;
            break;
        case "*":
            answer = multiplyNumbers(Number(current_number), Number(previous_number));
            displayText(answer)
            current_number = answer;
            displayed_number = answer;
            current_operator = null;
            break;
        case "/":
            answer = divideNumbers(Number(current_number), Number(previous_number));
            displayText(answer)
            displayed_number = answer;
            current_number = answer;
            current_operator = "";
            break;
    }
}

// Global Variables
// Math
let current_number = "";
let previous_number = null;
let current_operator = null;

// Events checking and display
let firstClickDone = false;
let displayed_number = "";

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
const screen_text = document.createElement("span");
screen_text.className = "screen-text"
calculator_screen.appendChild(screen_text);

// Buttons
// Upper Buttons
const buttons_upper = document.createElement("div");
buttons_upper.className = "buttons-upper";
calculator_buttons.appendChild(buttons_upper);

const reset_button = document.createElement("button"); 
const delete_button = document.createElement("button");

reset_button.className = "upper-button";
delete_button.className = "upper-button";

reset_button.id = "reset-button";
delete_button.id = "delete-button";

reset_button.textContent = "AC";
delete_button.textContent = "⌫";

buttons_upper.appendChild(reset_button);
buttons_upper.appendChild(delete_button);

// Buttons Body
const buttons_body = document.createElement("div");
buttons_body.className = "buttons-body";
calculator_buttons.appendChild(buttons_body);

const buttons_keys = document.createElement("div");
const buttons_operators = document.createElement("div");
buttons_keys.className = "buttons-keys";
buttons_operators.className = "buttons-operators";
buttons_body.appendChild(buttons_keys);
buttons_body.appendChild(buttons_operators);

// Keys
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
const key_decimal = document.createElement("button");

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
key_decimal.className = "body-button";

key_1.textContent = "1";
key_2.textContent = "2";
key_3.textContent = "3";
key_4.textContent = "4";
key_5.textContent = "5";
key_6.textContent = "6";
key_7.textContent = "7";
key_8.textContent = "8";
key_9.textContent = "9";
key_0.textContent = "0";
key_decimal.textContent = ".";

buttons_keys.appendChild(key_1);
buttons_keys.appendChild(key_2);
buttons_keys.appendChild(key_3);
buttons_keys.appendChild(key_4);
buttons_keys.appendChild(key_5);
buttons_keys.appendChild(key_6);
buttons_keys.appendChild(key_7);
buttons_keys.appendChild(key_8);
buttons_keys.appendChild(key_9);
buttons_keys.appendChild(key_0);
buttons_keys.appendChild(key_decimal);

// Operators
const add_button = document.createElement("button");
const subtract_button = document.createElement("button");
const multiply_button = document.createElement("button");
const divide_button = document.createElement("button");
const equals_button = document.createElement("button");

add_button.className = "operator-button";
subtract_button.className = "operator-button";
multiply_button.className = "operator-button";
divide_button.className = "operator-button";
equals_button.className = "operator-button";

add_button.id = "add-button";
subtract_button.id = "subtract-button";
multiply_button.id = "multiply-button";
divide_button.id = "divide-button";
equals_button.id = "equals-button";

add_button.textContent = "+";
subtract_button.textContent = "-";
multiply_button.textContent = "*";
divide_button.textContent = "÷";
equals_button.textContent = "=";

buttons_operators.appendChild(add_button);
buttons_operators.appendChild(subtract_button);
buttons_operators.appendChild(multiply_button);
buttons_operators.appendChild(divide_button);
buttons_operators.appendChild(equals_button);

// Input and Output Management
getNumberPress()
getOperationPress()
getDisplayChange()