// Part 8: Method Chaining

// Exercise 8.1: Combine Methods
console.log('--- Exercise 8.1: Combine Methods ---');

// 1. Get names of in-stock electronics, sorted alphabetically
const result1 = products
    .filter(p => p.inStock)
    .filter(p => p.category === 'Electronics')
    .map(p => p.name)
    .sort();
console.log('In-stock Electronics Names:', result1);

// 2. Get total price of all in-stock items with rating >= 4
const result2 = products
    .filter(p => p.inStock)
    .filter(p => p.rating >= 4)
    .reduce((acc, p) => acc + p.price, 0);
console.log('Total Price (In-stock, Rated>=4):', result2);

// 3. Get top 3 most expensive products (names only)
const result3 = [...products] // Create copy to avoid mutating original with sort
    .sort((a, b) => b.price - a.price)
    .slice(0, 3)
    .map(p => p.name);
console.log('Top 3 Expensive Product Names:', result3);

// 4. Get active users from NY, sorted by age, return their names
const result4 = users
    .filter(u => u.isActive)
    .filter(u => u.city === 'New York')
    .sort((a, b) => a.age - b.age)
    .map(u => u.name);
console.log('Active NY Users by Age:', result4);

// 5. Calculate average price of electronics
const electronics = products.filter(p => p.category === 'Electronics');
const result5 = electronics.length > 0
    ? electronics.reduce((acc, p) => acc + p.price, 0) / electronics.length
    : 0;
console.log('Average Price of Electronics:', result5);


// Exercise 8.2: Real-World Scenarios
console.log('\n--- Exercise 8.2: Real-World Scenarios ---');

// 1. E-commerce: Get cart summary
const cart = [
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 1 },
    { productId: 5, quantity: 3 }
];

const cartSummary = cart
    .map(item => {
        const product = products.find(p => p.id === item.productId);
        return {
            ...item,
            name: product.name,
            unitPrice: product.price,
            total: product.price * item.quantity
        };
    })
    .reduce((summary, item) => ({
        items: [...summary.items, item],
        totalQuantity: summary.totalQuantity + item.quantity,
        totalPrice: summary.totalPrice + item.total
    }), { items: [], totalQuantity: 0, totalPrice: 0 });

console.log('Cart Summary:', cartSummary);


// 2. Analytics: Get category statistics
const categoryStats = products.reduce((stats, product) => {
    if (!stats[product.category]) {
        stats[product.category] = { count: 0, totalValue: 0, sumRating: 0, inStockCount: 0 };
    }

    const cat = stats[product.category];
    cat.count++;
    cat.totalValue += product.price;
    cat.sumRating += product.rating;
    if (product.inStock) cat.inStockCount++;

    // We can calculate averages at the end or on the fly (less efficient for exact avg, so usually post-process)
    return stats;
}, {});

// Post-processing for averages
for (const cat in categoryStats) {
    categoryStats[cat].avgRating = categoryStats[cat].sumRating / categoryStats[cat].count;
    categoryStats[cat].inStockPercentage = (categoryStats[cat].inStockCount / categoryStats[cat].count) * 100;
    delete categoryStats[cat].sumRating;
}
console.log('Category Stats:', categoryStats);


// 3. Dashboard: Get user engagement report
// Active users, grouped by city, count and avg age
const engagementReport = Object.values(users
    .filter(u => u.isActive)
    .reduce((cityGroups, user) => {
        if (!cityGroups[user.city]) {
            cityGroups[user.city] = { city: user.city, count: 0, sumAge: 0 };
        }
        cityGroups[user.city].count++;
        cityGroups[user.city].sumAge += user.age;
        return cityGroups;
    }, {}))
    .map(group => ({
        city: group.city,
        userCount: group.count,
        avgAge: group.sumAge / group.count
    }));

console.log('Engagement Report:', engagementReport);
