// Define reverseString to argument `str`
const reverseString = function(str) {

// Make a new array and call it letters
// this is where we are gonna store each
// letter in the string
    let letters = [];

// Use the for loop to check the characters 
// of a string in reverse order

// let i = str.length -1; start the loop with
// str.length -1 because array indices are zero-based.

// i >= 0; this check as long as the value of i is
// greater than or equal to 0 the loop will continue

// i--; decrease 1 every loop. This also make the loop
// moves backwards through the characters of the string.
    for (let i = str.length -1; i >= 0; i--) {

// Now push the indices that the loop access
// inside the letters array
        letters.push(str[i]);
    }

// In here use the .join method and use an empty string `''`
// as a separator, it means that the array elements will be
// joined directly without any characters in betweem.
    return letters.join('');

};

// Do not edit below this line
module.exports = reverseString;
