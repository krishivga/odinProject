const add = function(value1, value2) {
	return value1 + value2;
};

const subtract = function(value1, value2) {
	return value1 - value2;
};

const sum = function(array) {
	return array.reduce((total, value) => {
        return value + total;
    }, 0);
};

const multiply = function(array) {
    return array.reduce((total, value) => {
        return total * value;
    }, 1)
};

const power = function(value1, value2) {
	return value1 ** value2
};

const factorial = function(value) {
    let factorial_numbers = Array.from({length: value + 1}, (x, i) => i); // Creating an array from .from
    factorial_numbers = factorial_numbers.filter(number => number != 0);

    return factorial_numbers.reduce((total, value) => {
        return total * value;
    }, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};