const add = function(x, y) {
  return x + y;
	
};

const subtract = function(x, y) {
  return x - y;
	
};


// The .reduce function returns the accumulated value,
// which is the sum of all elements in the array
// array.reduce(callback(accumulator, currentValue, currentIndex, SourceArray), initialValue);

// Starts by setting the initial accumulator value to initialValue or the first element of array.
// then passing the callback function with the arguments.
// it performs an operation and returns the updated accumulator value.
// the return value becomes the accumulator for the next iteration.
// continues until all elements have been processed.
const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
	
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current);

};

const power = function(x, y) {
  return Math.pow(x, y);
	
};


// Starts by checking if n is equal to 0, then return it to 1;
// then if n is not equal to zero it proceeds with the for loop
const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  } 
  return product;
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
