// Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.
// Use function expressions to define the function and call the function before it is declared to demonstrate
// hoisting.

// const result = multiplyNumbers(5, 10);
// console.log(result);

const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

const product = multiplyNumbers(20, 30);
console.log(product); 