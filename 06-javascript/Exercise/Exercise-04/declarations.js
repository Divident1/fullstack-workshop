// Part 1: Function Declarations

// Exercise 1.1: Basic Functions
console.log('--- Exercise 1.1: Basic Functions ---');

// 1. Write a function that takes a name and returns a greeting
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Write a function that calculates the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// 3. Write a function that converts Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 4. Write a function that checks if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Test your functions
console.log(greet('Alice'));           // "Hello, Alice!"
console.log(calculateArea(5, 3));      // 15
console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212
console.log(isEven(4));                // true
console.log(isEven(7));                // false


// Exercise 1.2: Multiple Parameters
console.log('\n--- Exercise 1.2: Multiple Parameters ---');

// 1. Calculate the volume of a box
function calculateVolume(length, width, height) {
    return length * width * height;
}

// 2. Create a full name from parts
function createFullName(firstName, middleName, lastName) {
    return `${firstName} ${middleName} ${lastName}`;
}

// 3. Calculate total price with tax
function calculateTotal(price, quantity, taxRate) {
    const subtotal = price * quantity;
    const tax = subtotal * taxRate;
    return subtotal + tax;
}

// Test
console.log(calculateVolume(2, 3, 4));              // 24
console.log(createFullName('John', 'William', 'Doe')); // "John William Doe"
console.log(calculateTotal(10, 3, 0.1));            // 33


// Exercise 1.3: Default Parameters
console.log('\n--- Exercise 1.3: Default Parameters ---');

// 1. Greet with default name
function greetUser(name = 'Guest') {
    return `Hello, ${name}!`;
}

// 2. Power function with default exponent of 2
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// 3. Create user with defaults
function createUser(username, role = 'user', isActive = true) {
    return {
        username: username,
        role: role,
        isActive: isActive
    };
}

// Test
console.log(greetUser());          // "Hello, Guest!"
console.log(greetUser('Alice'));   // "Hello, Alice!"
console.log(power(3));             // 9
console.log(power(3, 3));          // 27
console.log(createUser('john'));   // { username: 'john', role: 'user', isActive: true }
console.log(createUser('admin', 'admin', true)); // { username: 'admin', role: 'admin', isActive: true }
