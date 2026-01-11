// Challenge 2: Curry Function
console.log('--- Challenge 2: Curry Function ---');

// Create a curry function that allows partial application
const curry = (fn) => {
    const arity = fn.length;

    return function curried(...args) {
        if (args.length >= arity) {
            return fn.apply(this, args);
        } else {
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
};

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log('curriedAdd(1)(2)(3):', curriedAdd(1)(2)(3));    // 6
console.log('curriedAdd(1, 2)(3):', curriedAdd(1, 2)(3));    // 6
console.log('curriedAdd(1)(2, 3):', curriedAdd(1)(2, 3));    // 6
console.log('curriedAdd(1, 2, 3):', curriedAdd(1, 2, 3));    // 6
