// Exercise 1.2: Increment and Decrement
console.log('\n--- Exercise 1.2: Increment and Decrement ---');

let x = 5;

// Predict output:
console.log('x++:', x++);  // Output: 5 (Returns value then increments)
console.log('x:', x);    // Output: 6
console.log('++x:', ++x);  // Output: 7 (Increments then returns value)
console.log('x:', x);    // Output: 7
console.log('x--:', x--);  // Output: 7 (Returns value then decrements)
console.log('--x:', --x);  // Output: 5 (Decrements then returns value)


// Exercise 1.3: Compound Assignment
console.log('\n--- Exercise 1.3: Compound Assignment ---');

let score = 100;

score += 50; // score = score + 50
console.log('After += 50:', score); // 150

score -= 25; // score = score - 25
console.log('After -= 25:', score); // 125

score *= 2; // score = score * 2
console.log('After *= 2:', score); // 250

score /= 5; // score = score / 5
console.log('After /= 5:', score); // 50

score %= 7; // score = score % 7
console.log('After %= 7:', score); // 1 (50 / 7 = 7 remainder 1)
