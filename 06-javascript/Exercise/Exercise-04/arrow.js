// Part 3: Arrow Functions

// Exercise 3.1: Convert to Arrow Functions
console.log('--- Exercise 3.1: Convert to Arrow Functions ---');

// 1. Traditional
// const double = function(n) { return n * 2; };
// Arrow:
const double = n => n * 2;

// 2. Traditional
// const greet = function(name) { return 'Hello, ' + name; };
// Arrow:
const greet = name => 'Hello, ' + name;

// 3. Traditional
// const sum = function(a, b) { return a + b; };
// Arrow:
const sum = (a, b) => a + b;

// 4. Traditional with no parameters
// const getTimestamp = function() { return Date.now(); };
// Arrow:
const getTimestamp = () => Date.now();


const createPair = (a, b) => ({ first: a, second: b }); // Wrap object in parens

console.log('double(4):', double(4));
console.log('greet("Bob"):', greet("Bob"));
console.log('sum(5,7):', sum(5, 7));
console.log('createPair(1,2):', createPair(1, 2));


// Exercise 3.2: Arrow Function Variations
console.log('\n--- Exercise 3.2: Arrow Function Variations ---');

// 1. Square a number
const square = n => n * n;

// 2. Check if number is negative
const isNegative = n => n < 0;

// 3. Get the length of a string
const getLength = str => str.length;

// 4. Return a random number
const getRandom = () => Math.random();

// 5. Triple a number and add 10
const tripleAndAdd = n => (n * 3) + 10;

console.log('square(5):', square(5));
console.log('isNegative(-5):', isNegative(-5));
console.log('getLength("hello"):', getLength("hello"));
console.log('tripleAndAdd(5):', tripleAndAdd(5));


// Exercise 3.3: Multi-line Arrow Functions
console.log('\n--- Exercise 3.3: Multi-line Arrow Functions ---');

// 1. Get the max of three numbers
const maxOfThree = (a, b, c) => {
    return Math.max(a, b, c);
};

// 2. Describe a person
const describePerson = (name, age, city) => {
    return `${name} is ${age} years old and lives in ${city}.`;
};

// 3. Calculate factorial
const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

// Test
console.log(maxOfThree(5, 9, 3));     // 9
console.log(describePerson('John', 25, 'NYC')); // "John is 25 years old and lives in NYC."
console.log(factorial(5));            // 120
