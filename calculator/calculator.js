function add (a,b) {
	const addition= (a*1) + (b*1);
	return addition;
}

function subtract (a,b) {
	const subtraction= (a*1) - (b*1);
	return subtraction;
}

function sum(array) {
  const operation = array.reduce((total, amount) => total + amount, 0);
  return operation;
}

function multiply (array) {
	let baseNumber = 1;
  for (let i = 0; i < array.length; i++) {
    let multiplier = array[i];
    baseNumber *= (multiplier*1)
	}
  return baseNumber;
}

function power(a,b) {
  let powerResult = Math.pow(a, b);
  return powerResult;
}

function factorial(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    let multiplier = i;
    result *= multiplier;
    }
  return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
