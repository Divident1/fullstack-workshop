// Implement these without using the native methods
function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    // Handle case where initialValue is not provided
    if (initialValue === undefined) {
        if (arr.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = arr[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

function myFlat(arr, depth = 1) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        // Check if element is an array and we still have depth to flatten
        if (Array.isArray(arr[i]) && depth > 0) {
            // Recursively flatten
            const flattened = myFlat(arr[i], depth - 1);
            // Push all elements from the flattened array to the result
            for (let j = 0; j < flattened.length; j++) {
                result.push(flattened[j]);
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

// Tests
console.log('myMap:', myMap([1, 2, 3], x => x * 2));           // [2, 4, 6]
console.log('myFilter:', myFilter([1, 2, 3, 4], x => x > 2));     // [3, 4]
console.log('myReduce:', myReduce([1, 2, 3], (a, b) => a + b, 0)); // 6
console.log('myFind:', myFind([1, 2, 3], x => x > 1));          // 2
console.log('myEvery (all > 0):', myEvery([1, 2, 3], x => x > 0)); // true
console.log('myEvery (all > 1):', myEvery([1, 2, 3], x => x > 1)); // false
console.log('mySome (any > 2):', mySome([1, 2, 3], x => x > 2));  // true
console.log('mySome (any > 3):', mySome([1, 2, 3], x => x > 3));  // false
console.log('myFlat depth 1:', myFlat([1, [2]], 1)); // [1, 2]
console.log('myFlat depth 2:', myFlat([1, [2, [3, [4]]]], 2));          // [1, 2, 3, [4]]
