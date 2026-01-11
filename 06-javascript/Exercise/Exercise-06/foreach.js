// Part 1: forEach

// Exercise 1.1: Basic Iteration
console.log('--- Exercise 1.1: Basic Iteration ---');

// 1. Log each product name
console.log('Product Names:');
products.forEach(product => {
    console.log(product.name);
});

// 2. Log each number squared
console.log('\nNumbers Squared:');
numbers.forEach(number => {
    console.log(number * number);
});

// 3. Log each user's name and city
console.log('\nUser Locations:');
users.forEach(user => {
    console.log(`${user.name} lives in ${user.city}`);
});

// 4. Calculate total price of all products
let total = 0;
products.forEach(product => {
    total += product.price;
});
console.log('\nTotal Price:', total);


// Exercise 1.2: forEach with Index
console.log('\n--- Exercise 1.2: forEach with Index ---');

// 1. Log each product with its position
console.log('Numbered Products:');
products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name}`);
});

// 2. Log only products at even indices
console.log('\nProducts at Even Indices (0, 2, ...):');
products.forEach((product, index) => {
    if (index % 2 === 0) {
        console.log(`Index ${index}: ${product.name}`);
    }
});

// 3. Create a numbered list of user names
console.log('\nUser List:');
users.forEach((user, index) => {
    console.log(`#${index + 1}: ${user.name}`);
});
