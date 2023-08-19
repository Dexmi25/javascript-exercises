const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

// Make a function that calculates the age with the arguments birth and death
// this represents the year of birth and year of death or the current year if not provided
const getAge = function (birth, death) {

// First check if the year of death is not provided
    if (!death) {

// then if not provided it will sets death to the current year by using
// the new Date().getFullYear() function.
        death = new Date().getFullYear();
    }

    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
