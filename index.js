// Define the receivesAFunction function
function receivesAFunction(callback) {
  // Call the callback function
  callback();
}

// Define the returnsANamedFunction function
function returnsANamedFunction() {
  // Define and return a named function
  function namedFunction() {
    console.log("This is a named function!");
  }
  return namedFunction;
}

// Define the returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
  // Return an anonymous function directly
  return function () {
    console.log("This is an anonymous function!");
  };
}

// Export these functions to be used in other modules if needed
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
