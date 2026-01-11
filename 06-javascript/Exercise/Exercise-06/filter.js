// Part 3: filter

// Exercise 3.1: Basic Filtering
console.log('--- Exercise 3.1: Basic Filtering ---');

// 1. Get products in stock
const inStock = products.filter(p => p.inStock);
console.log('In Stock:', inStock);

// 2. Get products under $200
const affordable = products.filter(p => p.price < 200);
console.log('Affordable (<$200):', affordable);

// 3. Get electronics
const electronics = products.filter(p => p.category === 'Electronics');
console.log('Electronics:', electronics);

// 4. Get even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log('Even Numbers:', evens);

// 5. Get active users
const activeUsers = users.filter(u => u.isActive);
console.log('Active Users:', activeUsers);

// 6. Get users from New York
const newYorkers = users.filter(u => u.city === 'New York');
console.log('New Yorkers:', newYorkers);


// Exercise 3.2: Complex Filtering
console.log('\n--- Exercise 3.2: Complex Filtering ---');

// 1. Get electronics that are in stock
const availableElectronics = products.filter(p => p.category === 'Electronics' && p.inStock);
console.log('Available Electronics:', availableElectronics);

// 2. Get products with rating >= 4.5 and in stock
const topRatedAvailable = products.filter(p => p.rating >= 4.5 && p.inStock);
console.log('Top Rated Analysis:', topRatedAvailable);

// 3. Get products between $100 and $500
const midRange = products.filter(p => p.price >= 100 && p.price <= 500);
console.log('Mid-Range ($100-$500):', midRange);

// 4. Get active users over 30
const activeOver30 = users.filter(u => u.isActive && u.age > 30);
console.log('Active users over 30:', activeOver30);

// 5. Get products NOT in Electronics category
const nonElectronics = products.filter(p => p.category !== 'Electronics');
console.log('Non-Electronics:', nonElectronics);
