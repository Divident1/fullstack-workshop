// Part 4: Rest Parameters and Spread

// Exercise 4.1: Rest Parameters
console.log('--- Exercise 4.1: Rest Parameters ---');

// 1. Sum any number of arguments
const sumAll = (...numbers) => {
    // Return the sum of all numbers
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

// 2. Find the average
const average = (...numbers) => {
    // Return the average
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
};

// 3. First element and rest
const firstAndRest = (first, ...rest) => {
    // Return { first: first, rest: rest }
    return { first, rest };
};

// 4. Log with prefix
const logWithPrefix = (prefix, ...messages) => {
    // Log each message with the prefix
    messages.forEach(msg => console.log(`${prefix} ${msg}`));
};

// Test
console.log('sumAll(1, 2, 3, 4, 5):', sumAll(1, 2, 3, 4, 5));   // 15
console.log('average(10, 20, 30):', average(10, 20, 30));     // 20
console.log('firstAndRest(1, 2, 3, 4):', firstAndRest(1, 2, 3, 4)); // { first: 1, rest: [2, 3, 4] }
console.log('logWithPrefix:');
logWithPrefix('[INFO]', 'Starting', 'Processing', 'Done');
