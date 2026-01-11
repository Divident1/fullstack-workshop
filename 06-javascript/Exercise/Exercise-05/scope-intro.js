// Part 1: Understanding Scope

// Exercise 1.1: Global vs Local Scope
console.log('--- Exercise 1.1: Global vs Local Scope ---');

// Scenario 1
let message = 'Global';

function showMessage() {
    console.log(message);
}

console.log('Scenario 1 Output:');
showMessage(); // Output: 'Global'


// Scenario 2
let greeting = 'Hello';

function changeGreeting() {
    let greeting = 'Hi'; // Local variable shadows global
    console.log('Inside function:', greeting);
}

console.log('Scenario 2 Output:');
changeGreeting(); // Output: 'Hi'
console.log('Outside function:', greeting); // Output: 'Hello' (Global unchanged)


// Scenario 3
let count = 0;

function increment() {
    count = count + 1; // Modifies global variable
}

console.log('Scenario 3 Output:');
increment();
increment();
console.log('Count:', count); // Output: 2


// Exercise 1.2: Block Scope
console.log('\n--- Exercise 1.2: Block Scope ---');

// Scenario 1
let x = 1;

if (true) {
    let x = 2; // Block scoped, shadow outer x
    console.log('Inside if:', x); // 2
}

console.log('Outside if:', x); // 1


// Scenario 2
for (let i = 0; i < 3; i++) {
    console.log('Inside loop:', i);
}
// console.log('Outside loop:', i); // ReferenceError: i is not defined (block scoped)
console.log('Outside loop check: i is not accessible here because it was declared with let inside the loop structure.');

// Scenario 3
{
    let secret = 'password123';
    const API_KEY = 'abc123';
    var exposed = 'visible';
}

console.log('Exposed (var):', exposed); // Output: 'visible' (var is function/global scoped, not block scoped)
// console.log(secret); // ReferenceError: secret is not defined
console.log('Secret/API_KEY check: secret and API_KEY are not accessible here because they are block scoped (let/const).');


// Exercise 1.3: var vs let vs const Scope
console.log('\n--- Exercise 1.3: var vs let vs const Scope ---');

// Scenario 1: var in loop
console.log('Scenario 1 (var in loop):');
for (var i = 0; i < 3; i++) {
    // var is function scoped, so 'i' is shared across all iterations.
    // By the time the timeout runs, the loop has finished and i is 3.
    setTimeout(() => console.log('var:', i), 100);
}
// Expected: var: 3, var: 3, var: 3

// Scenario 2: let in loop
console.log('Scenario 2 (let in loop):');
for (let j = 0; j < 3; j++) {
    // let is block scoped, so a new 'j' binding is created for each iteration.
    setTimeout(() => console.log('let:', j), 100);
}
// Expected: let: 0, let: 1, let: 2

// Scenario 3: Function scope
function testVar() {
    if (true) {
        var innerVar = 'accessible';
    }
    console.log('testVar innerVar:', innerVar); // Output: 'accessible' (var ignores block scope)
}
testVar();

function testLet() {
    if (true) {
        let innerLet = 'limited';
    }
    // console.log(innerLet); // ReferenceError
    console.log('testLet check: innerLet is not accessible outside the if block.');
}
testLet();
