// Challenge 1: Function Composition
console.log('--- Challenge 1: Function Composition ---');

// Create a function that composes multiple functions
const compose = (...functions) => {
    // Return a function that applies all functions right-to-left
    return (initialValue) => {
        return functions.reduceRight((acc, fn) => fn(acc), initialValue);
    };
};

// Simplified version using reduceRight directly on the arguments
// const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const composed = compose(addOne, double, square);
// Steps: square(3) -> 9, double(9) -> 18, addOne(18) -> 19
console.log('composed(3):', composed(3)); // 19
