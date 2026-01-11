// Part 4: Ternary and Optional Chaining

// Exercise 4.1: Ternary Operator
console.log('--- Exercise 4.1: Ternary Operator ---');

// 1.
let age = 20;
let status = (age >= 18) ? 'adult' : 'minor';
console.log(`Age: ${age}, Status: ${status}`);

// 2.
let score = 75;
let result = (score >= 60) ? 'pass' : 'fail';
console.log(`Score: ${score}, Result: ${result}`);

// 3. (Nested ternary)
let marks = 85;
let grade = (marks >= 90) ? 'A' :
    (marks >= 80) ? 'B' :
        (marks >= 70) ? 'C' : 'F';
console.log(`Marks: ${marks}, Grade: ${grade}`);


// Exercise 4.2: Optional Chaining
console.log('\n--- Exercise 4.2: Optional Chaining ---');

let company = {
    name: 'TechCorp',
    address: {
        city: 'New York',
        zip: '10001'
    },
    employees: [
        { name: 'John', department: 'Engineering' },
        { name: 'Jane', department: 'Marketing' }
    ]
};

// 1. company.address.street (doesn't exist)
console.log('company.address.street:', company.address?.street); // undefined

// 2. company.ceo.name (doesn't exist)
console.log('company.ceo.name:', company.ceo?.name); // undefined

// 3. First employee's name
console.log('First employee name:', company.employees?.[0]?.name); // John

// 4. Third employee's name (index 2, doesn't exist)
console.log('Third employee name:', company.employees?.[2]?.name); // undefined

// 5. company.getInfo() (method doesn't exist)
console.log('company.getInfo():', company.getInfo?.()); // undefined
