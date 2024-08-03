const removeFromArray = function(array, ...items) {
  return array.filter(item => !items.includes(item));
}
  

// Do not edit below this line
module.exports = removeFromArray;
