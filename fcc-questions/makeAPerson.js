// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast
    };
    this.getFirstName = function() {
        return firstAndLast.split(' ')[0]
    }
    this.getLastName = function() {
        return firstAndLast.split(' ')[1]
    }
    this.setFirstName = function(name) {
        firstAndLast = name + ' ' + firstAndLast.split(' ')[1]
    }

    this.setLastName = function(name) {
        firstAndLast = firstAndLast.split(' ')[0] + ' ' + name
    }

    this.setFullName = function(name) {
        firstAndLast = name
    }
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  console.log(bob.setFirstName('Boat'));