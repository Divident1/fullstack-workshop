const memoize = (fn, options = {}) => {
    const { maxSize = Infinity, ttl = Infinity } = options;
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args);
        const now = Date.now();

        if (cache.has(key)) {
            const { value, timestamp } = cache.get(key);

            // Check for expiration
            if (now - timestamp < ttl) {
                // Refresh LRU position by deleting and re-setting
                cache.delete(key);
                cache.set(key, { value, timestamp }); // Could update timestamp to now? Usually TTL is from creation, LRU is from access. I'll keep timestamp as creation time for TTL.
                return value;
            } else {
                cache.delete(key);
            }
        }

        const result = fn(...args);

        
        if (cache.size >= maxSize) {
            // Map.keys().next().value gives the first inserted key (since we re-insert on access, this works as LRU)
            const oldestKey = cache.keys().next().value;
            cache.delete(oldestKey);
        }

        cache.set(key, { value: result, timestamp: now });
        return result;
    };
};

// Test setup
const expensiveFn = (n) => {
    console.log('Computing...');
    return n * n;
};

// 1. Basic Caching
console.log('--- Basic Cache Test ---');
const memoized = memoize(expensiveFn, { maxSize: 100, ttl: 60000 });

console.log('Call 1 (5):', memoized(5)); // "Computing..." then 25
console.log('Call 2 (5):', memoized(5)); // 25 (cached, no log)
console.log('Call 3 (6):', memoized(6)); // "Computing..." then 36

// 2. TTL Test
console.log('\n--- TTL Test ---');
const fastExpireFn = memoize(expensiveFn, { ttl: 500 }); // 500ms TTL

console.log('TTL Call 1 (10):', fastExpireFn(10)); // Computing
console.log('TTL Call 2 (10) immediate:', fastExpireFn(10)); // Cached

setTimeout(() => {
    console.log('TTL Call 3 (10) after 600ms:', fastExpireFn(10)); // Should re-compute
}, 600);

// 3. MaxSize Test
console.log('\n--- MaxSize Test ---');
const smallCacheFn = memoize(expensiveFn, { maxSize: 2 });

console.log('Size Call 1 (1):', smallCacheFn(1)); // Cache: [1]
console.log('Size Call 2 (2):', smallCacheFn(2)); // Cache: [1, 2]
console.log('Size Call 3 (3):', smallCacheFn(3)); // Cache: [2, 3] (1 evicted)
console.log('Size Call 4 (1):', smallCacheFn(1)); // Should re-compute 1
