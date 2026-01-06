function createShoppingCart() {
    let items = [];
    let discount = 0;

    return {
        addItem: function (item) {
            const existingItem = items.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                items.push({ ...item });
            }
        },

        removeItem: function (id) {
            items = items.filter(item => item.id !== id);
        },

        updateQuantity: function (id, quantity) {
            const item = items.find(i => i.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },

        getItems: function () {
            return items;
        },

        getTotal: function () {
            const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const discountedTotal = total - (total * (discount / 100));
            // Rounding to 2 decimal places to match currency format expectations
            return Math.round(discountedTotal * 100) / 100;
        },

        getItemCount: function () {
            return items.reduce((count, item) => count + item.quantity, 0);
        },

        isEmpty: function () {
            return items.length === 0;
        },

        applyDiscount: function (code, percentage) {
            // We assume the code is valid since the challenge focus is on object methods
            discount = percentage;
        },

        clear: function () {
            items = [];
            discount = 0;
        }
    };
}

const cart = createShoppingCart();

cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
cart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 2 });
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 }); // Should increase quantity

console.log(cart.getItems());
// [{ id: 1, name: 'Laptop', price: 999, quantity: 2 }, { id: 2, name: 'Mouse', price: 29, quantity: 2 }]

cart.updateQuantity(1, 3);  // Set laptop quantity to 3
cart.removeItem(2);         // Remove mouse

console.log(cart.getTotal());        // 2997
console.log(cart.getItemCount());    // 3
console.log(cart.isEmpty());         // false

cart.applyDiscount('SAVE10', 10);    // 10% discount
console.log(cart.getTotal());        // 2697.30 (Note: console.log of number might print 2697.3)

cart.clear();
console.log(cart.isEmpty());         // true
