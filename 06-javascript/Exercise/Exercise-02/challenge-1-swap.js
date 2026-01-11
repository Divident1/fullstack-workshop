// Challenge 1: Variable Swap (Without third variable)
console.log('--- Challenge 1: Variable Swap ---');

let x = 5;
let y = 10;
console.log(`Before swap: x = ${x}, y = ${y}`);

// Method 1: Arithmetic (for numbers)
// x = x + y; // 15
// y = x - y; // 15 - 10 = 5
// x = x - y; // 15 - 5 = 10

// Method 2: Destructuring assignment (Modern JS - Recommended)
[x, y] = [y, x];

console.log(`After swap: x = ${x}, y = ${y}`);
