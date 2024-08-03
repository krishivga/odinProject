const convertToCelsius = function(temperature) {
  convertedTemperature = (temperature - 32) * (5/9);
  if (convertedTemperature === 0){
    return 0;
  }
  return (parseInt(convertedTemperature.toFixed(1) * 10)) / 10;
}
const convertToFahrenheit = function(temperature) {
  convertedTemperature = (temperature * (9/5)) + 32;
  if (convertedTemperature === 0){
    return 0;
  }
  return (parseInt(convertedTemperature.toFixed(1) * 10)) / 10;
};
  

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
