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
const processOperation = function (operation, first_number, second_number) {
    // Checking for incorrect inputs
    if (!("+-*/".includes(operation))) {
        alert("Error")
        return;
    }

    first_number = Number(first_number);
    second_number = Number(second_number);

    switch(operation) {
        case "+":
            alert(addNumbers(first_number, second_number));
            break;
        case "-":
            alert(subtractNumbers(first_number, second_number));
            break;
        case "*":
            alert(multiplyNumbers(first_number, second_number));
            break;
        case "/":
            alert(divideNumbers(first_number, second_number));
            break;
    }
}

// Input and Output Management
let operation = prompt("Enter the operation you want (+, -, * or /): ");
let first_number = prompt("Enter the first number: ");
let second_number = prompt("Enter the second number: ");

processOperation(operation, first_number, second_number);
