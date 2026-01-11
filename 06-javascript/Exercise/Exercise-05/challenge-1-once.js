// Challenge 1: Create a Once Function
console.log('--- Challenge 1: Once Function ---');

function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }
        return result;
    };
}

const initialize = once(() => {
    console.log('Initializing...');
    return 'Initialized';
});

console.log('Call 1:', initialize()); // "Initializing..." then "Initialized"
console.log('Call 2:', initialize()); // Just "Initialized"
console.log('Call 3:', initialize()); // Just "Initialized"
