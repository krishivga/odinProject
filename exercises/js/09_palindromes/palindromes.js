const palindromes = function (word) {
    word = word.toLowerCase().split("").filter((letter) => "abcdefghijklmnopqrstuvwxyz0123456789".includes(letter)).join("");
    console.log(word);
    let reversed_word = word.split("").reverse().join("");
    return word === reversed_word;
};

// Do not edit below this line
module.exports = palindromes;