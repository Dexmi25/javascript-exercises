const palindromes = function (string) {

// First convert all string .toLowerCase then .replace all character
// to empty string that is not lowercase letter or digit.
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

// then the return value will be split into array of individual character
// reverses the order of the array
// then joins the reversed array back into a single string
// lastly compares this reverse string with the original
// if they are equal return true if not false.
    return processedString.split("").reverse().join("") == processedString;

};

// Do not edit below this line
module.exports = palindromes;
