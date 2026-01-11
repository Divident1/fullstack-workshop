// Challenge 2: Create a Rate Limiter
console.log('--- Challenge 2: Rate Limiter ---');

function createRateLimiter(fn, limit, interval) {
    let calls = 0;

    // Reset calls every interval
    setInterval(() => {
        calls = 0;
    }, interval);

    return function (...args) {
        if (calls < limit) {
            calls++;
            return fn.apply(this, args);
        } else {
            console.warn('Rate limit exceeded');
            return false;
        }
    };
}

const limitedFetch = createRateLimiter(
    (url) => {
        console.log('Fetching:', url);
        return true;
    },
    3,  // 3 calls
    2000 // per 2 seconds (increased slightly for visibility in manual test)
);

console.log('Fetch 1:', limitedFetch('/api/1')); // Success
console.log('Fetch 2:', limitedFetch('/api/2')); // Success
console.log('Fetch 3:', limitedFetch('/api/3')); // Success
console.log('Fetch 4:', limitedFetch('/api/4')); // Fail

setTimeout(() => {
    console.log('Fetch 5 (after delay):', limitedFetch('/api/5')); // Success
}, 2100);
