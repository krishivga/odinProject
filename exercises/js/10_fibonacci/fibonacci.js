const fibonacci = function(number) {
    number = Number(number);

    if (number < 0) {
        return "OOPS"
    } else if (number == 0) {
        return 0
    }

    let previousNumber = 0;
    let currentNumber = 1;
    for (let counter = 0; counter < number - 1; counter++) {
        let buffer = currentNumber;
        currentNumber += previousNumber;
        previousNumber = buffer;
        console.log(`${currentNumber} and ${previousNumber} and ${counter}`);
    }
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;