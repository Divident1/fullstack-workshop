// Part 2: Comparison Operators

// Exercise 2.1: Equality Challenge
console.log('--- Exercise 2.1: Equality Challenge ---');

// Loose equality (==) performs type conversion
console.log("5 == '5':", 5 == '5');           // true (string '5' converts to number 5)
console.log("0 == false:", 0 == false);       // true (false converts to 0)
console.log("null == undefined:", null == undefined); // true (special rule)
console.log("'' == false:", '' == false);     // true ('' converts to 0, false converts to 0)
console.log("[] == false:", [] == false);     // true ([] -> '' -> 0)
console.log("[] == 0:", [] == 0);             // true ([] -> '' -> 0)

// Strict equality (===) no type conversion
console.log("5 === '5':", 5 === '5');         // false (different types)
console.log("0 === false:", 0 === false);     // false (number vs boolean)
console.log("null === undefined:", null === undefined); // false
console.log("NaN === NaN:", NaN === NaN);     // false (NaN is not equal to anything, even itself)


// Exercise 2.2: Comparison Practice
console.log('\n--- Exercise 2.2: Comparison Practice ---');

let age = 25;
let name = "John";
let isStudent = true;
let score = 85.5;

// 1. Check if age is between 20 and 30 (inclusive)
console.log('Age 20-30:', age >= 20 && age <= 30); // true

// 2. Check if name is not "Admin"
console.log('Name not Admin:', name !== "Admin"); // true

// 3. Check if score is at least 60
console.log('Score >= 60:', score >= 60); // true

// 4. Check if isStudent is exactly true
console.log('isStudent === true:', isStudent === true); // true
