// Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.

{
    console.log("Before 'let' declaration:", letVar); 
    let letVar = "I am a let variable";
  
    console.log("Before 'var' declaration:", varVar); 
    var varVar = "I am a var variable";
  
    // console.log("Before 'const' declaration:", constVar); 
    // const constVar = "I am a const variable";

    console.log("After 'let' declaration:", letVar); 
    console.log("After 'var' declaration:", varVar); 
    // console.log("After 'const' declaration:", constVar); 
  }
  
//   console.log("Outside 'var' block:", varVar); 
//   console.log("Outside 'let' block:", letVar); 
//   console.log("Outside 'const' block:", constVar); 
  