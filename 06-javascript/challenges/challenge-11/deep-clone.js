function deepClone(obj) {
    // Handle null and primitives
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    // Handle Set
    if (obj instanceof Set) {
        return new Set([...obj].map(item => deepClone(item)));
    }

    // Handle Map
    if (obj instanceof Map) {
        return new Map([...obj].map(([key, value]) => [deepClone(key), deepClone(value)]));
    }

    // Handle Array
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // Handle Object
    const clonedObj = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

const original = {
    name: 'John',
    address: { city: 'New York', zip: '10001' },
    hobbies: ['reading', 'gaming'],
    metadata: { created: new Date(), tags: new Set(['user', 'admin']) }
};

const cloned = deepClone(original);
cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

console.log('Original City:', original.address.city);  // Still 'New York'
console.log('Original Hobbies:', original.hobbies);    // Still ['reading', 'gaming']
console.log('Cloned City:', cloned.address.city);
console.log('Cloned Hobbies:', cloned.hobbies);

// Verify Set deep copy
console.log('Original Tags size:', original.metadata.tags.size);
cloned.metadata.tags.add('guest');
console.log('Original Tags size after clone modification:', original.metadata.tags.size); // Should be same
console.log('Cloned Tags size:', cloned.metadata.tags.size); // Should be +1
