// Part 6: IIFE (Immediately Invoked Function Expression)

// Exercise 6.1: Basic IIFE
console.log('--- Exercise 6.1: Basic IIFE ---');

// 1. Simple log
(function () {
    console.log('Hello from IIFE!');
})();

// 2. Return a value
const config = (function () {
    return { debug: true, version: '1.0' };
})();
console.log('Config from IIFE:', config);

// 3. With parameters
(function (name) {
    console.log('Hello, ' + name + ' (from parameterized IIFE)');
})('World');


// Exercise 6.2: IIFE Module Pattern
console.log('\n--- Exercise 6.2: IIFE Module Pattern ---');

const Calculator = (function () {
    // Private variables
    let result = 0;
    const history = [];

    // Private function
    function addToHistory(operation) {
        history.push(operation);
    }

    // Public API
    return {
        add: function (n) {
            result += n;
            addToHistory(`add ${n}`);
            return result;
        },
        subtract: function (n) {
            result -= n;
            addToHistory(`subtract ${n}`);
            return result;
        },
        multiply: function (n) {
            result *= n;
            addToHistory(`multiply ${n}`);
            return result;
        },
        divide: function (n) {
            if (n !== 0) {
                result /= n;
                addToHistory(`divide ${n}`);
            } else {
                console.error("Cannot divide by zero");
            }
            return result;
        },
        getResult: function () {
            return result;
        },
        getHistory: function () {
            return [...history];
        },
        clear: function () {
            result = 0;
            // history.length = 0; // Optional clear history
            addToHistory('clear');
            return result;
        }
    };
})();

// Test
Calculator.add(10);
Calculator.multiply(2);
Calculator.subtract(5);
console.log('Result:', Calculator.getResult()); // 15
console.log('History:', Calculator.getHistory());
Calculator.clear();
console.log('After clear:', Calculator.getResult()); // 0
