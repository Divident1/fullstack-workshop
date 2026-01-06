// Debounce: execute after delay of inactivity
const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

// Throttle: execute at most once per interval
const throttle = (fn, interval) => {
    let lastTime = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastTime >= interval) {
            lastTime = now;
            fn(...args);
        }
    };
};

// Usage & Testing
const handleSearch = debounce((query) => {
    console.log('Searching:', query);
}, 300);

// Mocking window object for Node.js environment or just using meaningful logs
const handleScroll = throttle((position) => {
    console.log('Scroll position:', position);
}, 100);

// Test Debounce
console.log('--- Testing Debounce ---');
console.log('Type "a"');
handleSearch('a');
console.log('Type "ap"');
handleSearch('ap');
console.log('Type "app"');
handleSearch('app');
console.log('Type "appl"');
handleSearch('appl');
// Should only log "apple" (or "appl" if I stopped there) after 300ms

// Wait for debounce to finish before testing throttle to keep output clean,
// but for script efficiency we rely on the specific timestamps.
setTimeout(() => {
    console.log('\n--- Testing Throttle ---');
    // Simulate scrolling events firing rapidly
    let pos = 0;
    const scrollInterval = setInterval(() => {
        pos += 10;
        handleScroll(pos);
        if (pos >= 50) clearInterval(scrollInterval);
    }, 20); // Fire every 20ms, but throttle is 100ms.

    // Expected: Should fire initially, then skip calls until ~100ms passed.
}, 500);
