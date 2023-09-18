// Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. 'all the
// function before it is declared to demonstrate hoisting.

// addNumbers(num1, num2){
//     return num1+num2
// }

let resul= addNumbers(10,20)
console.log(resul)

const result = addNumbers(5, 10);
console.log(result);

function addNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addNumbers(20, 30);
console.log(sum); 