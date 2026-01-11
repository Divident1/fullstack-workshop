// Part 3: Logical Operators

// Exercise 3.1: Logical Evaluation
console.log('--- Exercise 3.1: Logical Evaluation ---');

console.log('true && true:', true && true);     // true
console.log('true && false:', true && false);    // false
console.log('false || true:', false || true);    // true
console.log('!true:', !true);            // false
console.log('!(5 > 3):', !(5 > 3));        // false ( !(true) )

// Short-circuit evaluation
console.log('0 && "Hello":', 0 && "Hello");      // 0 ( Stops at first falsy value)
console.log('1 && "Hello":', 1 && "Hello");      // "Hello" (Returns last truthy value)
console.log('0 || "Default":', 0 || "Default");    // "Default" (Stops at first truthy value)
console.log('"Value" || "Default":', "Value" || "Default"); // "Value"

// Exercise 3.2: Access Control
console.log('\n--- Exercise 3.2: Access Control ---');

function canAccess(user) {
    // Return true if:
    // - user is logged in (isLoggedIn: true) AND
    // - user is either an admin (role: 'admin') OR has permission (hasPermission: true)

    return user.isLoggedIn && (user.role === 'admin' || user.hasPermission);
}

// Test cases
let user1 = { isLoggedIn: true, role: 'admin', hasPermission: false };
let user2 = { isLoggedIn: true, role: 'user', hasPermission: true };
let user3 = { isLoggedIn: false, role: 'admin', hasPermission: true };
let user4 = { isLoggedIn: true, role: 'user', hasPermission: false };

console.log('user1 (Admin, No Perm):', canAccess(user1)); // true
console.log('user2 (User, Perm):', canAccess(user2)); // true
console.log('user3 (Not Logged In):', canAccess(user3)); // false
console.log('user4 (User, No Perm):', canAccess(user4)); // false


// Exercise 3.3: Nullish Coalescing vs OR
console.log('\n--- Exercise 3.3: Nullish Coalescing vs OR ---');

let value1 = 0;
let value2 = '';
let value3 = null;
let value4 = undefined;

console.log("0 || 'default':", value1 || 'default');      // 'default' (0 is falsy)
console.log("0 ?? 'default':", value1 ?? 'default');      // 0 (0 is not nullish)

console.log("'' || 'default':", value2 || 'default');     // 'default' ('' is falsy)
console.log("'' ?? 'default':", value2 ?? 'default');     // '' ('' is not nullish)

console.log("null || 'default':", value3 || 'default');   // 'default'
console.log("null ?? 'default':", value3 ?? 'default');   // 'default' (null is nullish)

// Explanation:
// Use || when you want to treat 0 and empty strings as invalid/"false" values.
// Use ?? when you only want to fall back if the value is strictly null or undefined.
