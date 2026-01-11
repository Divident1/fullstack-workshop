// Part 1: Variable Declaration (var, let, const)

// Exercise 1.1: Basic Declarations
console.log('--- Exercise 1.1: Basic Declarations ---');

// 1. Declare a constant for PI with value 3.14159
const PI = 3.14159;
console.log('PI:', PI);

// 2. Declare a variable for a user's age that can be reassigned
let userAge = 25;
console.log('userAge:', userAge);

// 3. Declare a variable for a username without assigning a value
let username;
console.log('username:', username);

// 4. Try to reassign PI to 3.14 - what happens?
try {
    PI = 3.14;
} catch (error) {
    console.error('Error reassigning PI:', error.message);
}
// Result: TypeError: Assignment to constant variable.

// Exercise 1.2: Block Scope vs Function Scope
console.log('\n--- Exercise 1.2: Block Scope vs Function Scope ---');

function scopeTest() {
    var x = 1;
    let y = 2;
    const z = 3;

    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
        console.log('Inside block:', x, y, z); // Expected: 10, 20, 30
    }

    console.log('Outside block:', x, y, z); // Expected: 10, 2, 3
}

scopeTest();

// Questions Answers:
// Inside block: 10, 20, 30
// Outside block: 10, 2, 3
// Why different? 
// - 'var x' is function scoped, so the inner 'var x = 10' overwrites the outer 'var x = 1'.
// - 'let y' and 'const z' are block scoped, so the inner declarations are completely separate variables from the outer ones.
