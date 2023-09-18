// Declare a variable using let inside a block scope and attempt to log its value to the console before it is
// assigned a value to demonstrate the temporal dead zone.

{
    console.log("Before assignment:", tdzVar); 
    let tdzVar = "I am inside the Temporal Dead Zone";
    console.log("After assignment:", tdzVar);
  }
  
  console.log("Outside block:", tdzVar);
  