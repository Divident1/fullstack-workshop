// Part 7: sort

// Exercise 7.1: Basic Sorting
console.log('--- Exercise 7.1: Basic Sorting ---');

// 1. Sort products by price (ascending)
const byPriceAsc = [...products].sort((a, b) => a.price - b.price);
console.log('Sort by Price (Asc):', byPriceAsc);

// 2. Sort products by price (descending)
const byPriceDesc = [...products].sort((a, b) => b.price - a.price);
console.log('Sort by Price (Desc):', byPriceDesc);

// 3. Sort products alphabetically by name
const byName = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log('Sort by Name:', byName);

// 4. Sort users by age
const byAge = [...users].sort((a, b) => a.age - b.age);
console.log('Sort Users by Age:', byAge);

// 5. Sort numbers in descending order
const numbersDesc = [...numbers].sort((a, b) => b - a);
console.log('Numbers Descending:', numbersDesc);


// Exercise 7.2: Complex Sorting
console.log('\n--- Exercise 7.2: Complex Sorting ---');

// 1. Sort products by category, then by price within category
const sortedProducts = [...products].sort((a, b) => {
    // First compare by category
    const categoryCompare = a.category.localeCompare(b.category);
    if (categoryCompare !== 0) return categoryCompare;

    // If same category, compare by price
    return a.price - b.price;
});
console.log('Sort by Category then Price:', sortedProducts);

// 2. Sort users: active users first, then by name
const sortedUsers = [...users].sort((a, b) => {
    // Active users come first (true (1) before false (0) -> NO, typically true=1, false=0.
    // If we want true first: b.isActive - a.isActive (1 - 0 = 1, so b comes first? No wait.)
    // Comparison: (a, b) -> neg if a < b, pos if a > b.
    // We want active (true) before inactive (false).
    // if a is true and b is false, we want a < b (negative).
    // true is not less than false numerically usually?
    // Let's rely on explicit logic:
    if (a.isActive && !b.isActive) return -1;
    if (!a.isActive && b.isActive) return 1;

    // Then sort by name
    return a.name.localeCompare(b.name);
});
console.log('Active First then Name:', sortedUsers);

// 3. Sort products by: in stock first, then by rating (desc)
const prioritySorted = [...products].sort((a, b) => {
    // In stock first
    if (a.inStock && !b.inStock) return -1;
    if (!a.inStock && b.inStock) return 1;

    // Then by rating desc
    return b.rating - a.rating;
});
console.log('In Stock then Rating Desc:', prioritySorted);
