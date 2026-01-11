// Part 6: Control Flow - Loops

// Exercise 6.1: Loop Patterns
console.log('--- Exercise 6.1: Loop Patterns ---');

// Pattern 1: Print numbers 1-10
let p1 = [];
for (let i = 1; i <= 10; i++) p1.push(i);
console.log('1-10:', p1.join(' '));

// Pattern 2: Print even numbers 2-20
let p2 = [];
for (let i = 2; i <= 20; i += 2) p2.push(i);
console.log('Even 2-20:', p2.join(' '));

// Pattern 3: Print countdown 10-1
let p3 = [];
for (let i = 10; i >= 1; i--) p3.push(i);
console.log('Countdown:', p3.join(' '));

// Pattern 4: Multiplication table of 5
console.log('Multiplication Table of 5:');
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// Exercise 6.2: FizzBuzz
console.log('\n--- Exercise 6.2: FizzBuzz ---');

function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i);
    }
    console.log(result.join(', '));
}

fizzBuzz(15);


// Exercise 6.3: Array Iteration
console.log('\n--- Exercise 6.3: Array Iteration ---');

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// 1. Traditional for loop
console.log('Traditional For Loop:');
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

// 2. For...of loop
console.log('For...of Loop:');
for (const fruit of fruits) {
    console.log(fruit);
}

// 3. While loop (reverse)
console.log('While Loop (Reverse):');
let i = fruits.length - 1;
while (i >= 0) {
    console.log(fruits[i]);
    i--;
}

// 4. For...in loop
console.log('For...in Loop:');
for (const index in fruits) {
    console.log(`Index: ${index}`);
}


// Exercise 6.4: Break and Continue
console.log('\n--- Exercise 6.4: Break and Continue ---');

// 1. First number divisible by 7
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`First divisible by 7: ${i}`);
        break;
    }
}

// 2. Skip multiples of 3
let skipped3 = [];
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    skipped3.push(i);
}
console.log('1-20 skipping multiples of 3:', skipped3.join(', '));

// 3. Nested loop break
console.log('Nested Loop Break:');
outerLoop: for (let row = 1; row <= 5; row++) {
    let rowStr = '';
    for (let col = 1; col <= 5; col++) {
        if (row === 3 && col === 3) break outerLoop; // Break strict instructions say row 3 col 3 reached
        rowStr += '* ';
    }
    console.log(rowStr);
}

// Exercise 6.5: Sum and Average
console.log('\n--- Exercise 6.5: Sum and Average ---');

let numbers = [23, 45, 67, 12, 89, 34, 56, 78, 90, 11];

// 1. Sum
let sum = 0;
for (let n of numbers) sum += n;
console.log('Sum:', sum);

// 2. Average
let avg = sum / numbers.length;
console.log('Average:', avg);

// 3. Max
let max = numbers[0];
for (let n of numbers) if (n > max) max = n;
console.log('Max:', max);

// 4. Min
let min = numbers[0];
for (let n of numbers) if (n < min) min = n;
console.log('Min:', min);

// 5. Count above average
let count = 0;
for (let n of numbers) if (n > avg) count++;
console.log('Count above average:', count);
