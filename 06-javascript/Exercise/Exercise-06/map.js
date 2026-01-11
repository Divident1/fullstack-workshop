
// Exercise 2.1: Transformations
console.log('--- Exercise 2.1: Transformations ---');

// 1. Get array of product names
const productNames = products.map(product => product.name);
console.log('Product Names:', productNames);

// 2. Get array of prices with 10% discount
const discountedPrices = products.map(product => product.price * 0.9);
console.log('Discounted Prices:', discountedPrices);

// 3. Double each number
const doubled = numbers.map(num => num * 2);
console.log('Doubled Numbers:', doubled);

// 4. Create array of user display strings
const userDisplays = users.map(user => `${user.name} (${user.age})`);
console.log('User Displays:', userDisplays);

// 5. Create simplified product objects
const simplified = products.map(product => ({
    name: product.name,
    price: product.price
}));
console.log('Simplified Products:', simplified);


// Exercise 2.2: Complex Transformations
console.log('\n--- Exercise 2.2: Complex Transformations ---');

// 1. Add a 'displayPrice' property formatted as currency
const withDisplayPrice = products.map(product => ({
    ...product,
    displayPrice: `$${product.price.toFixed(2)}`
}));
console.log('With Display Price:', withDisplayPrice);

// 2. Create product cards HTML
const productCards = products.map(product => `
<div class="product">
  <h3>${product.name}</h3>
  <p>$${product.price}</p>
</div>
`.trim());
console.log('Product Cards HTML:', productCards);

// 3. Calculate age in 10 years for all users
const usersInFuture = users.map(user => ({
    ...user,
    ageIn10Years: user.age + 10
}));
console.log('Users in 10 Years:', usersInFuture);
