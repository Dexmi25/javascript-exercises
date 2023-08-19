// Use sequence as argument for the function
const fibonacci = function(sequence) {

// Check the sequence if below 0
    if (sequence < 0) return "OOPS";

// Check if sequence is equal to 0
    if (sequence === 0) return 0;

// make a variable that store the Fibonacci numbers
// make the firstSeq to 1 and the secondSeq to 0
    let firstSeq = 1;
    let secondSeq = 0;

// Start the for loop from i = 2 because the initial values
// for the sequence is already set (firstSeq and secondSeq)
    for (let i = 2; i <= sequence; i++) {

// make a variable that store the sum of the firstSeq and secondSeq (current)
        let current = firstSeq + secondSeq;

// update the secondSeq to be the previous firstSeq
        secondSeq = firstSeq;

// and update the firstSeq to hold the current calculated value
        firstSeq = current;
    }

    return firstSeq;
};

// Do not edit below this line
module.exports = fibonacci;
