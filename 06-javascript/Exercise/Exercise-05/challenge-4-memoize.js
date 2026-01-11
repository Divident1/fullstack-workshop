// Challenge 4: Memoization with Closure
console.log('--- Challenge 4: Memoization with Closure ---');

function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            // console.log('Fetching from cache:', key);
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

let callCount = 0;
const expensiveSquare = memoize((n) => {
    callCount++;
    console.log('Computing square of', n);
    return n * n;
});

console.log('Call 5:', expensiveSquare(5)); // "Computing..." then 25
console.log('Call 5 again:', expensiveSquare(5)); // Just 25
console.log('Call 10:', expensiveSquare(10)); // "Computing..." then 100
console.log('Call 5 again:', expensiveSquare(5)); // Just 25
console.log('Function actual calls:', callCount); // 2
