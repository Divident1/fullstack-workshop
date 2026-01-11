// Challenge 4: Debounce Function
console.log('--- Challenge 4: Debounce Function ---');

const debounce = (fn, delay) => {
    let timeoutId;

    return function (...args) {
        // Clear the previous timer if it exists
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timer
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};

// Usage example (integrated with the HTML input)
// Check if running in browser
if (typeof document !== 'undefined') {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const handleSearch = debounce((e) => {
            console.log('Searching for:', e.target.value);
        }, 500); // 500ms delay

        searchInput.addEventListener('input', handleSearch);
        console.log('Debounce handler attached to input field. Type to test.');
    }
}
