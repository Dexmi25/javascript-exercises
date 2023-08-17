    // Define the repeatString function with the
    // arguments `str` and `num`
const repeatString = function(str, num) {
    
    // First check if the num is less than 0
    // so it will return a string 'ERROR' if it is    
    if (num < 0) {
        return 'ERROR';
    }

    // In this make a new variable and assign it to an
    // empty string to store the repeated string.
    let repeatedString = '';

    // Now make a loop that append the value of str to repeatedString
    // and repeat it by the num times.
    for (let i = 0; i < num; i++) {
        repeatedString += str;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
