
const compose = (...fns) => (initialValue) => {
    return fns.reduceRight((acc, fn) => fn(acc), initialValue);
};


const pipe = (...fns) => (initialValue) => {
    return fns.reduce((acc, fn) => fn(acc), initialValue);
};

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const composed = compose(addOne, double, square);
console.log('Composed (3):', composed(3)); // 19

// Pipe example: starts with square, then double, then addOne
// pipe(square, double, addOne)(3)
// 1. square(3) = 9
// 2. double(9) = 18
// 3. addOne(18) = 19
const piped = pipe(square, double, addOne);
console.log('Piped (3):', piped(3)); // 19
