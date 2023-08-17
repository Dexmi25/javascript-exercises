// First use the rest operator as argument
const removeFromArray = function(array, ...args) {

// then make a new empty array
   const newArray = [];

// use the .forEach to check through the array
   array.forEach((item) => {

// use the if statement to push every element into
// the new array and unless it is included in the function
// arguments, so we can create a new array without
// those we removed
    if (!args.includes(item)) {
        newArray.push(item);
    }
   });
   return newArray;
  };



// Do not edit below this line
module.exports = removeFromArray;
