// Add 7 to a number
function add7(number) {
  return number + 7;
}

console.log(add7(7))
console.log("-----")

// Multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(5, 10))
console.log("------")

// Capitalize the first letter
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalize("PIZZA"))
console.log(capitalize("something"))
console.log("------")

// Finding the last letter of a string
function lastLetter(word) {
  return word[word.length - 1];
}

console.log(lastLetter("PIZZA"))
console.log(lastLetter("something"))
console.log("------")

