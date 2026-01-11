// Part 4: find and findIndex

// Exercise 4.1: Finding Single Items
console.log('--- Exercise 4.1: Finding Single Items ---');

// 1. Find the product named "Laptop"
const laptop = products.find(p => p.name === 'Laptop');
console.log('Laptop:', laptop);

// 2. Find the first product over $500
const expensive = products.find(p => p.price > 500);
console.log('First Expensive Product:', expensive);

// 3. Find user named "Charlie"
const charlie = users.find(u => u.name === 'Charlie');
console.log('Charlie:', charlie);

// 4. Find index of the Keyboard product
const keyboardIndex = products.findIndex(p => p.name === 'Keyboard');
console.log('Keyboard Index:', keyboardIndex);

// 5. Find first number greater than 5
const firstOver5 = numbers.find(n => n > 5);
console.log('First number > 5:', firstOver5);


// Exercise 4.2: Find with Default
console.log('\n--- Exercise 4.2: Find with Default ---');

// 1. Find product by ID (with default)
function findProductById(id) {
    const product = products.find(p => p.id === id);
    return product || { name: 'Product not found', price: 0 };
}

console.log('Product ID 1:', findProductById(1));  // Laptop
console.log('Product ID 99:', findProductById(99)); // Default object

// 2. Find user by name, return null if not found
function findUserByName(name) {
    const user = users.find(u => u.name === name);
    return user || null;
}

console.log('Find "Alice":', findUserByName('Alice'));
console.log('Find "Zoe":', findUserByName('Zoe'));
