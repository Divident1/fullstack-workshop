// Challenge 2: Type Checker Function
console.log('--- Challenge 2: Type Checker ---');

function getType(value) {
    if (value === null) {
        return "null";
    }
    if (Array.isArray(value)) {
        return "array";
    }
    return typeof value;
}

// Tests
console.log('getType(null):', getType(null));        // "null"
console.log('getType([1, 2, 3]):', getType([1, 2, 3]));   // "array"
console.log('getType({ a: 1 }):', getType({ a: 1 }));    // "object"
console.log('getType(() => {}):', getType(() => { }));    // "function"
console.log('getType(42):', getType(42));          // "number"
console.log('getType("hello"):', getType("hello"));     // "string"
