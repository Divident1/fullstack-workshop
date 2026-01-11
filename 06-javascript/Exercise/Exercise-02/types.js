// Part 2: Primitive Data Types

// Exercise 2.1: Type Identification
console.log('--- Exercise 2.1: Type Identification ---');

let a = 42;
let b = 'Hello';
let c = true;
let d = null;
let e = undefined;
let f = Symbol('id');
let g = 9007199254740991n;

console.log('typeof a (42):', typeof a);           // number
console.log('typeof b ("Hello"):', typeof b);      // string
console.log('typeof c (true):', typeof c);         // boolean
console.log('typeof d (null):', typeof d);         // object (Known JS bug)
console.log('typeof e (undefined):', typeof e);    // undefined
console.log('typeof f (Symbol):', typeof f);       // symbol
console.log('typeof g (BigInt):', typeof g);       // bigint

// Question: Why does typeof null return "object"?
// Answer: It's a historical bug in the first implementation of JavaScript that was never fixed to maintain backward compatibility.

// Exercise 2.2: Type Conversion Challenge
console.log('\n--- Exercise 2.2: Type Conversion Challenge ---');

// String to Number
let str1 = "123";
let num1a = Number(str1);
let num1b = parseInt(str1);
let num1c = +str1;
console.log('String to Number ("123"):', num1a, num1b, num1c);

let str2 = "45.67";
let num2 = parseFloat(str2);
console.log('String to Float ("45.67"):', num2);

let str3 = "abc";
let num3 = Number(str3);
console.log('String to Number ("abc"):', num3); // NaN

// Number to String
let age = 25;
let ageStr1 = String(age);
let ageStr2 = age.toString();
console.log('Number to String (25):', typeof ageStr1, ageStr1, typeof ageStr2, ageStr2);

// To Boolean
let val1 = 0;       // false
let val2 = "";      // false
let val3 = "hello"; // true
let val4 = null;    // false

console.log('Boolean(0):', Boolean(val1));
console.log('Boolean(""):', Boolean(val2));
console.log('Boolean("hello"):', Boolean(val3));
console.log('Boolean(null):', Boolean(val4));

// Exercise 2.3: Truthy and Falsy Values
console.log('\n--- Exercise 2.3: Truthy and Falsy Values ---');

function checkTruthy(value) {
    return value ? "truthy" : "falsy";
}

console.log('0:', checkTruthy(0));             // falsy
console.log('"":', checkTruthy(""));           // falsy
console.log('"0":', checkTruthy("0"));         // truthy
console.log('[]:', checkTruthy([]));           // truthy
console.log('{}:', checkTruthy({}));           // truthy
console.log('null:', checkTruthy(null));       // falsy
console.log('undefined:', checkTruthy(undefined)); // falsy
console.log('NaN:', checkTruthy(NaN));         // falsy
console.log('-1:', checkTruthy(-1));           // truthy
console.log('" ":', checkTruthy(" "));         // truthy
