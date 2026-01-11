// Part 6: some and every

// Exercise 6.1: Testing Conditions
console.log('--- Exercise 6.1: Testing Conditions ---');

// some - returns true if at least one element matches

// 1. Check if any product is out of stock
const hasOutOfStock = products.some(p => !p.inStock);
console.log('Has out of stock product:', hasOutOfStock);

// 2. Check if any user is from Chicago
const hasChicagoUser = users.some(u => u.city === 'Chicago');
console.log('Has user from Chicago:', hasChicagoUser);

// 3. Check if any product costs over $1000
const hasExpensive = products.some(p => p.price > 1000);
console.log('Has product > $1000:', hasExpensive);

// every - returns true if all elements match

// 4. Check if all products have rating >= 3.5
const allGoodRating = products.every(p => p.rating >= 3.5);
console.log('All products rated >= 3.5:', allGoodRating);

// 5. Check if all numbers are positive
const allPositive = numbers.every(n => n > 0);
console.log('All numbers positive:', allPositive);

// 6. Check if all users have names
const allHaveNames = users.every(u => u.name && u.name.length > 0);
console.log('All users have names:', allHaveNames);


// Exercise 6.2: Validation Functions
console.log('\n--- Exercise 6.2: Validation Functions ---');

// 1. Check if cart has any item (non-empty)
function isCartValid(cart) {
    // A cart is valid if it has at least one item with quantity > 0
    return cart.some(item => item.quantity > 0);
}

// 2. Check if all required fields are filled
function isFormComplete(formData) {
    const requiredFields = ['name', 'email', 'phone'];
    return requiredFields.every(field =>
        formData[field] !== undefined &&
        formData[field] !== null &&
        String(formData[field]).trim() !== ''
    );
}

// Test
console.log('Form Complete (valid):', isFormComplete({ name: 'John', email: 'john@example.com', phone: '555-1234' })); // true
console.log('Form Complete (invalid):', isFormComplete({ name: 'John', email: '', phone: '555-1234' })); // false
console.log('Cart Valid (valid):', isCartValid([{ id: 1, quantity: 2 }, { id: 2, quantity: 0 }])); // true
console.log('Cart Valid (invalid):', isCartValid([{ id: 1, quantity: 0 }])); // false
