// Part 2: Function Expressions

// Exercise 2.1: Anonymous Functions
console.log('--- Exercise 2.1: Anonymous Functions ---');

// Convert these function declarations to function expressions

// Declaration: function add(a, b) { return a + b; }
// Expression:
const add = function (a, b) {
    return a + b;
};

// Declaration: function multiply(a, b) { return a * b; }
// Expression:
const multiply = function (a, b) {
    return a * b;
};

// Declaration: function isPositive(num) { return num > 0; }
// Expression:
const isPositive = function (num) {
    return num > 0;
};

console.log('Add(2,3):', add(2, 3));
console.log('Multiply(4,5):', multiply(4, 5));
console.log('isPositive(-1):', isPositive(-1));


// Exercise 2.2: Hoisting Difference
console.log('\n--- Exercise 2.2: Hoisting Difference ---');

// Scenario 1: Function Declaration (Hoisted)
try {
    console.log(funcDeclaration());
} catch (e) {
    console.error(e.message);
}

function funcDeclaration() {
    return 'Declaration works!';
}

// Scenario 2: Function Expression (Not Hoisted)
try {
    console.log(funcExpression()); // Throws ReferenceError/TypeError because var is undefined or const is uninitialized (TDZ)
} catch (e) {
    console.error('Error calling expression before define:', e.message);
}

const funcExpression = function () {
    return 'Expression works!';
};

// Explanation:
// Function declarations are "hoisted" to the top of their scope, so they can be called before they appear in the code.
// Function expressions assigned to variables (const/let) are not hoisted in the same way. The variable declaration might be hoisted (if var), but the assignment happens at runtime. If const/let, they are in the Temporal Dead Zone (TDZ).
