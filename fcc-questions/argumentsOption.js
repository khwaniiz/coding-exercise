// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {

    //get values from arguments
   const [first, second] = Object.values(arguments)
   console.log(first, second)

   if(typeof first !== 'number') {
       return undefined
   }

   const addSecond = second => typeof second === 'number' ? first + second : 'undefined';

    if(second !== undefined) {
        return addSecond(second)
    } else {
        return addSecond
    }

  }
  
  console.log(addTogether("http://bit.ly/IqT6zt"));