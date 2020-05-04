const ftoc = function(fahrenheit) {
  let input = fahrenheit * 1;
  let result = ((input-32)/1.8);
  let finalResult = +result.toFixed(1);
  return finalResult;
  }

const ctof = function(celsius) {
  let input = celsius * 1;
  let result = (input*1.8) + 32;
  let finalResult = +result.toFixed(1);
  return finalResult;
}

module.exports = {
  ftoc,
  ctof
}
