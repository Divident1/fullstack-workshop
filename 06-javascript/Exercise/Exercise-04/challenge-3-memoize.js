// Challenge 3: Memoization
console.log('--- Challenge 3: Memoization ---');

const memoize = (fn) => {
    const cache = new Map();

    return (...args) => {
        // Create a unique key for the arguments
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            // console.log('Fetching from cache:', key);
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

// Test with an expensive function
const expensiveOperation = (n) => {
    console.log(`Computing expensive operation for ${n}...`);
    let result = 0;
    // Reduce loop size slightly so it's not too slow but still noticeable
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
};

const memoizedOperation = memoize(expensiveOperation);

console.log('First call 5:', memoizedOperation(5)); // "Computing..." then result
console.log('Second call 5:', memoizedOperation(5)); // Just result (cached)
console.log('First call 10:', memoizedOperation(10)); // "Computing..." then result
console.log('Second call 10:', memoizedOperation(10)); // Just result (cached)
