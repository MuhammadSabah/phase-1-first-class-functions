// Define the receivesAFunction function
function receivesAFunction(callback) {
  // Call the provided callback function
  callback();
}

// Example usage
function myCallback() {
  console.log("Inside myCallback function");
}

// Call receivesAFunction and pass myCallback as the argument
receivesAFunction(myCallback);

// Define the returnsANamedFunction function
function returnsANamedFunction() {
  // Define and return a named function
  return function namedFunction() {
    console.log("This is a named function");
  };
}

// Example usage
const myFunction = returnsANamedFunction();
myFunction(); // Output: This is a named function

// Define the returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function () {
    console.log("This is an anonymous function");
  };
}

// Example usage
const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction(); // Output: This is an anonymous function
