// Part 5: Return Values

// Exercise 5.1: Early Returns
console.log('--- Exercise 5.1: Early Returns ---');

// Refactored version:
function processUserRefactored(user) {
    if (!user) return 'No user provided';
    if (!user.isActive) return 'User inactive';
    if (!user.hasPermission) return 'No permission';

    return 'Access granted';
}

console.log('processUser(null):', processUserRefactored(null));
console.log('processUser({isActive: false}):', processUserRefactored({ isActive: false }));
console.log('processUser({isActive: true, hasPermission: false}):', processUserRefactored({ isActive: true, hasPermission: false }));
console.log('processUser({isActive: true, hasPermission: true}):', processUserRefactored({ isActive: true, hasPermission: true }));


// Exercise 5.2: Returning Objects
console.log('\n--- Exercise 5.2: Returning Objects ---');

// 1. Create a point
const createPoint = (x, y) => {
    return { x, y };
};

// 2. Parse a full name
const parseName = (fullName) => {
    const parts = fullName.split(' ');
    // Handle cases with no spaces or multiple spaces roughly
    return {
        firstName: parts[0] || '',
        lastName: parts.slice(1).join(' ') || ''
    };
};

// 3. Get array stats
const getStats = (numbers) => {
    if (numbers.length === 0) return { min: 0, max: 0, sum: 0, average: 0, count: 0 };

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = sum / numbers.length;
    const count = numbers.length;

    return { min, max, sum, average, count };
};

// Test
console.log('createPoint(5, 10):', createPoint(5, 10));    // { x: 5, y: 10 }
console.log('parseName("John Doe"):', parseName('John Doe')); // { firstName: 'John', lastName: 'Doe' }
console.log('getStats([1, 2, 3, 4, 5]):', getStats([1, 2, 3, 4, 5]));


// Exercise 5.3: Returning Functions
console.log('\n--- Exercise 5.3: Returning Functions ---');

// 1. Create a greeter for a specific greeting
const createGreeter = (greeting) => {
    return (name) => `${greeting}, ${name}!`;
};

const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');

console.log(sayHello('John'));  // "Hello, John!"
console.log(sayHi('Jane'));     // "Hi, Jane!"

// 2. Create a multiplier
const createMultiplier = (factor) => {
    return (num) => num * factor;
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log('double(5):', double(5));   // 10
console.log('triple(5):', triple(5));   // 15

// 3. Create a tax calculator
const createTaxCalculator = (taxRate) => {
    return (price) => price + (price * taxRate);
};

const calcWithGST = createTaxCalculator(0.18);
const calcWithVAT = createTaxCalculator(0.20);

console.log('calcWithGST(100):', calcWithGST(100));  // 118
console.log('calcWithVAT(100):', calcWithVAT(100));  // 120
