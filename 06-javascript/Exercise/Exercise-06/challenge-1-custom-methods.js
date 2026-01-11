// Challenge 1: Implement Your Own Methods
console.log('--- Challenge 1: Custom Methods ---');

// Implement myMap
function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

// Implement myFilter
function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Implement myReduce
function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    // If no initialValue provided, use first element as accumulator
    if (initialValue === undefined) {
        if (arr.length === 0) throw new TypeError('Reduce of empty array with no initial value');
        accumulator = arr[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

// Test
console.log('myMap [1,2,3] * 2:', myMap([1, 2, 3], x => x * 2)); // [2, 4, 6]
console.log('myFilter [1,2,3,4] > 2:', myFilter([1, 2, 3, 4], x => x > 2)); // [3, 4]
console.log('myReduce sum [1,2,3,4]:', myReduce([1, 2, 3, 4], (acc, x) => acc + x, 0)); // 10
console.log('myReduce max [1,5,3]:', myReduce([1, 5, 3], (acc, x) => Math.max(acc, x))); // 5 (no initial value test)
