// Part 3: Closures Basics

// Exercise 3.1: Simple Closures
console.log('--- Exercise 3.1: Simple Closures ---');

// Closure 1
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log('counter1():', counter1()); // 1
console.log('counter1():', counter1()); // 2
console.log('counter2():', counter2()); // 1 (independent state)
console.log('counter1():', counter1()); // 3


// Closure 2
function greetMaker(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = greetMaker('Hello');
const sayHi = greetMaker('Hi');

console.log(sayHello('Alice')); // "Hello, Alice!"
console.log(sayHi('Bob'));      // "Hi, Bob!"
console.log(sayHello('Charlie')); // "Hello, Charlie!"


// Exercise 3.2: Create Your Own Closures
console.log('\n--- Exercise 3.2: Create Your Own Closures ---');

// 1. Create a function that returns a counter with increment, decrement, and getValue
function createAdvancedCounter(initialValue = 0) {
    let count = initialValue;

    return {
        increment: () => {
            count++;
            return count;
        },
        decrement: () => {
            count--;
            return count;
        },
        getValue: () => count,
        reset: () => {
            count = initialValue;
            return count;
        }
    };
}

const counter = createAdvancedCounter(10);
console.log('getValue:', counter.getValue()); // 10
counter.increment();
counter.increment();
console.log('After 2 increments:', counter.getValue()); // 12
counter.decrement();
console.log('After decrement:', counter.getValue()); // 11
counter.reset();
console.log('After reset:', counter.getValue()); // 10


// 2. Create a function that tracks how many times it's been called
function createCallTracker(fn) {
    let callCount = 0;

    const wrapper = function (...args) {
        callCount++;
        return fn(...args);
    };

    wrapper.getCallCount = () => callCount;

    return wrapper;
}

const trackedAdd = createCallTracker((a, b) => a + b);
console.log('trackedAdd(1, 2):', trackedAdd(1, 2));        // 3
console.log('trackedAdd(3, 4):', trackedAdd(3, 4));        // 7
console.log('Call count:', trackedAdd.getCallCount()); // 2


// 3. Create a function that remembers its previous result
function createRememberingFunction(fn) {
    let previousResult = undefined;

    const wrapper = function (...args) {
        const result = fn(...args);
        wrapper.previousResult = previousResult;
        previousResult = result; // Store current result for next time (or store previousResult BEFORE updating? Instruction implies getting the old result)
        // Adjusting interpretation: wrapper.previousResult should expose the result of the LAST call.
        // Actually, the example shows: 
        // 1st call -> returns 10. previousResult is undefined.
        // 2nd call -> returns 14. previousResult is 10.
        // So we need to expose the PREVIOUS result on the function object.

        return result;
    };

    // Initialize property
    wrapper.previousResult = undefined;

    return wrapper;
}

const rememberingDouble = createRememberingFunction(x => x * 2);
console.log('Double(5):', rememberingDouble(5));            // 10
console.log('Previous Result:', rememberingDouble.previousResult); // undefined
console.log('Double(7):', rememberingDouble(7));            // 14
console.log('Previous Result:', rememberingDouble.previousResult); // 10
