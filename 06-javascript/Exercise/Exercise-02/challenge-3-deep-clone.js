// Challenge 3: Deep Clone
console.log('--- Challenge 3: Deep Clone ---');

let original = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'gaming']
};

function deepClone(obj) {
    // Basic recursion for objects and arrays
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle Array
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // Handle Object
    const cloned = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}


let cloned = deepClone(original);
cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

console.log('Original City:', original.address.city);  // 'New York'
console.log('Cloned City:', cloned.address.city);      // 'Boston'
console.log('Original Hobbies:', original.hobbies);    // ['reading', 'gaming']
console.log('Cloned Hobbies:', cloned.hobbies);        // ['reading', 'gaming', 'swimming']
