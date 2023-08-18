const sumAll = function(min, max) {

// This check if the value is a number
// it will error when value is a string or an array
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

// This check the value of both number to be
// above 0 and return error if its a negative number
    if (min < 0 || max < 0) return "ERROR";

// We use the array destructuring syntax to swap
// the values of min and max
    if (min > max) [min, max] = [max, min];

// Create the sum variable, and in here store the number
// that is loop and added to 0, until min is greater than
// or equal to max
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
