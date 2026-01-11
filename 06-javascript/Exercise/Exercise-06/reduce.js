// Part 5: reduce

// Exercise 5.1: Basic Reductions
console.log('--- Exercise 5.1: Basic Reductions ---');

// 1. Sum all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum);

// 2. Sum all product prices
const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
console.log('Total Price:', totalPrice);

// 3. Find maximum number
const max = numbers.reduce((acc, curr) => Math.max(acc, curr), numbers[0]);
console.log('Max Number:', max);

// 4. Find minimum price
const minPrice = products.reduce((acc, p) => Math.min(acc, p.price), products[0].price);
console.log('Min Price:', minPrice);

// 5. Count products in stock
const stockCount = products.reduce((acc, p) => acc + (p.inStock ? 1 : 0), 0);
console.log('Stock Count:', stockCount);

// 6. Calculate average rating
const totalRating = products.reduce((acc, p) => acc + p.rating, 0);
const avgRating = totalRating / products.length;
console.log('Average Rating:', avgRating);


// Exercise 5.2: Reduce to Objects
console.log('\n--- Exercise 5.2: Reduce to Objects ---');

// 1. Create object mapping product id to name
const idToName = products.reduce((acc, product) => {
    acc[product.id] = product.name;
    return acc;
}, {});
console.log('ID to Name Map:', idToName);

// 2. Group products by category
const byCategory = products.reduce((acc, product) => {
    // If category array doesn't exist, create it
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
}, {});
console.log('Grouped by Category:', byCategory);

// 3. Count products per category
const categoryCount = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
}, {});
console.log('Category Counts:', categoryCount);

// 4. Create user lookup by id
const userLookup = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});
console.log('User Lookup:', userLookup);


// Exercise 5.3: Advanced Reduce
console.log('\n--- Exercise 5.3: Advanced Reduce ---');

// 1. Calculate total value of in-stock items only
const inStockValue = products.reduce((acc, p) => {
    return p.inStock ? acc + p.price : acc;
}, 0);
console.log('In-Stock Value:', inStockValue);

// 2. Find the product with highest rating
const bestProduct = products.reduce((best, p) => {
    return (best.rating > p.rating) ? best : p;
}, products[0]);
console.log('Best Product:', bestProduct);

// 3. Create a summary object
const summary = products.reduce((acc, product) => {
    return {
        totalProducts: acc.totalProducts + 1,
        totalValue: acc.totalValue + product.price,
        inStockCount: acc.inStockCount + (product.inStock ? 1 : 0),
        sumRating: acc.sumRating + product.rating // Intermediate sum
    };
}, { totalProducts: 0, totalValue: 0, inStockCount: 0, sumRating: 0 });

// Finalize average
summary.avgRating = summary.sumRating / summary.totalProducts;
delete summary.sumRating; // Clean up intermediate prop if desired

console.log('Products Summary:', summary);
