const leapYears = function(year) {
// If the year is divisible by 4, it's a potential leap year.
    return year % 4 === 0 

// If the year is divisible by 100 but not by 400, it's not a leap year.
// If the year is divisible by 400, it's a leap year.
    && (year % 100 !== 0
    || year % 400 === 0);

};

// Do not edit below this line
module.exports = leapYears;
