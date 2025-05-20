console.log("Day 03");

// Operators - Symbols + - / % *
// Operands - x+y, here x and y are operands.
// Expression  x = 2 / 4 + 3 is an expression

// Arithmetic Operators
let a = 20;
let b = 10;

console.log("Add: ", a + b);
console.log("Sub: ", a - b);
console.log("Multiplication: ", a * b);
console.log("Quotient: ", a / b);
console.log("Remainder: ", a % b);

// exponential operator

let x = 2;
let y = 3;

console.log(`Exponent of ${x} and ${y}: `, x ** y);

// post increment and pre increment operator ---- same for the -- (decrement operator)
let count = 12;
console.log("Post increment: ", count++); // here first the count will be returned, then it increments the count
console.log("After postincrement: ", count);
console.log("Pre increment: ", ++count); // here the count is first incremented and returned as we are using pre increment operator

// Assignment Operators

console.log("*** Assignment Operators ***");

let n = 10;

n += 5; // n = n + 5 (15)
n - +2; // n = n - 2 (13)
n *= 2; // n = n * 2 (26)
n /= 4; // n = n / 4 (6.5)

// Comparison Operators

console.log("*** Comparison Operators ***");

// used for comparing values

45 == 34; // loosely equal operator
45 === 34; // strictly equal operator
console.log(0 == false); // here both the operands are converted to the same type by js, that's y returns true
console.log(0 === false); // this returns true only if both the operands are equal and of the same type.
console.log(3 == "3");

// if both operands are of different type it will return false.
// if both operands are null or undefined then it will return true.
// if one of the operands is NaN then it always return false whatever the other operand type is.

console.log(null === null);
console.log(undefined === undefined);

let obj1 = { name: "Kumar" };
let obj2 = { name: "Kumar" };

// here it returns false because both the objects are different. It compares the reference of the object so it returns false even the both the objects are referring to the same value.
console.log(obj1 === obj2);

// Logical Operators  --- use for boolean values

console.log("*** Logical Operators ***");

console.log("Cow" && "Buffalo"); // returns the second value if the first value is true
console.log("Cow" || "Buffalo"); // returns the first value if it is true
console.log(!true); // returns the opposite of the value

// op1 ?? op2; // nullish coalescing operator
// it returns the right-hand side operand if the left-hand side operand is null or undefined.

console.log("*** Conditional (ternary) Operators ***");

let age = 24;
console.log(age >= 60 ? "Senior Citizen" : "Non-senior Citizen");
 

console.log("*** Bitwise Operators ***"); 

// the operands are treated as 32 bits as 0s and 1s
/* example:

 10 in decimal
 10 in 32 bit representation of 0 and 1   
          8 4 2 1 0
          1 0 1 0 0  
*/

// & - bitwise AND  | - bitwise OR  ^  ~ << >>  