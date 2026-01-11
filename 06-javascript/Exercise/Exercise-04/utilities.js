// Part 6: Practical Function Exercises

// Exercise 6.1: String Utilities
console.log('--- Exercise 6.1: String Utilities ---');

// 1. Capitalize first letter
const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// 2. Reverse a string
const reverse = (str) => {
    return str.split('').reverse().join('');
};

// 3. Count vowels
const countVowels = (str) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
};

// 4. Truncate with ellipsis
const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
};

// 5. Convert to camelCase
const toCamelCase = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
};

// Test
console.log('capitalize("hello"):', capitalize('hello'));          // "Hello"
console.log('reverse("hello"):', reverse('hello'));             // "olleh"
console.log('countVowels("hello world"):', countVowels('hello world'));   // 3
console.log('truncate("Hello World", 8):', truncate('Hello World', 8));   // "Hello..."
console.log('toCamelCase("hello world"):', toCamelCase('hello world'));   // "helloWorld"


// Exercise 6.2: Number Utilities
console.log('\n--- Exercise 6.2: Number Utilities ---');

// 1. Clamp a number between min and max
const clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
};

// 2. Check if a number is in range
const inRange = (num, min, max) => {
    return num >= min && num <= max;
};

// 3. Generate random integer in range
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 4. Round to decimal places
const roundTo = (num, decimals) => {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
};

// 5. Check if number is prime
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Test
console.log('clamp(15, 0, 10):', clamp(15, 0, 10));  // 10
console.log('inRange(5, 0, 10):', inRange(5, 0, 10)); // true
console.log('randomInt(1, 10):', randomInt(1, 10)); // Random number 1-10
console.log('roundTo(3.14159, 2):', roundTo(3.14159, 2)); // 3.14
console.log('isPrime(17):', isPrime(17));       // true
console.log('isPrime(4):', isPrime(4));        // false
