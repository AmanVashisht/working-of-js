// Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the
// function using the var keyword and log its value to the console before it is assigned a value to demonstrate
// variable hoisting.

function demonstrateVariableHoisting(num1, num2) {
    var result;
    console.log("Before assignment:", result);
    result = num1 + num2;
    console.log("After assignment:", result);
    return result;
  }
  
  const sum = demonstrateVariableHoisting(5, 10);
  console.log("Final result:", sum);
  