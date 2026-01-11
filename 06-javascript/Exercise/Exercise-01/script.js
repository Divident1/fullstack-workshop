

const APP_NAME = 'My JavaScript App';
const VERSION = '1.0.0';
// Exercise 1.2: Basic Log
console.log('Hello from external file!');

// Part 2: Console Methods
// 1. Regular log
console.log('This is a log message');

// 2. Warning
console.warn('This is a warning');

// 3. Error
console.error('This is an error');

// 4. Info
console.info('This is info');

// 5. Log multiple values
console.log('Name:', 'John', 'Age:', 25);

// 6. Log an object
console.log({ name: 'John', age: 25 });

// 7. Table format
console.table([
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
]);

// Exercise 2.2: String Formatting
let name = 'Alice';
let age = 28;

// Template literal
console.log(`${name} is ${age} years old`);

// String concatenation
console.log(name + ' is ' + age + ' years old');

// Part 4: Comments and Code Organization example
console.log(`${APP_NAME} v${VERSION}`);

/**
 * Greets the user
 * @param {string} userName - The user's name
 * @returns {string} The greeting string
 */
function greet(userName) {
    return 'Hello, ' + userName;
}
