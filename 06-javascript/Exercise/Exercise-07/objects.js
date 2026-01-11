// Part 1: Object Basics

// Problem 1.1: Create a Book Object
console.log('--- Problem 1.1: Create a Book Object ---');

const book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 310,
    isRead: false,
    getSummary: function () {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
};

console.log('Book Title:', book.title);
console.log('Summary:', book.getSummary());


// Problem 1.2: Dynamic Property Access
console.log('\n--- Problem 1.2: Dynamic Property Access ---');

const user = {
    name: 'Alice',
    address: {
        city: 'Seattle',
        zip: '98101'
    }
};

function getProperty(obj, path) {
    if (!obj || !path) return undefined;

    // Split path by dot and traverse
    const keys = path.split('.');
    let current = obj;

    for (const key of keys) {
        if (current === undefined || current === null) {
            return undefined;
        }
        current = current[key];
    }

    return current;
}

console.log("name:", getProperty(user, 'name'));           // 'Alice'
console.log("address.city:", getProperty(user, 'address.city'));   // 'Seattle'
console.log("address.country:", getProperty(user, 'address.country')); // undefined
console.log("phone.number:", getProperty(user, 'phone.number'));   // undefined


// Part 2: Object Methods and this
console.log('\n--- Part 2: Object Methods and this ---');

// Problem 2.1: Counter Object
console.log('--- Problem 2.1: Counter Object ---');

const counter = {
    count: 0,
    increment: function () {
        this.count++;
    },
    decrement: function () {
        this.count--;
    },
    reset: function () {
        this.count = 0;
    },
    getCount: function () {
        return this.count;
    }
};

counter.increment();
counter.increment();
console.log('Count (2):', counter.getCount());
counter.decrement();
console.log('Count (1):', counter.getCount());
counter.reset();
console.log('Count (0):', counter.getCount());


// Problem 2.2: Calculator Object
console.log('\n--- Problem 2.2: Calculator Object ---');

const calc = {
    result: 0,
    add: function (n) {
        this.result += n;
        return this; // Enable chaining
    },
    subtract: function (n) {
        this.result -= n;
        return this;
    },
    multiply: function (n) {
        this.result *= n;
        return this;
    },
    divide: function (n) {
        if (n !== 0) {
            this.result /= n;
        } else {
            console.error('Division by zero');
        }
        return this;
    },
    getResult: function () {
        return this.result;
    },
    reset: function () {
        this.result = 0;
        return this;
    }
};

// ((10 - 2) * 3) / 4 = 6
const result = calc.add(10).subtract(2).multiply(3).divide(4).getResult();
console.log('Calc Result:', result); // 6


// Part 3: Destructuring
console.log('\n--- Part 3: Destructuring ---');

// Problem 3.1: Basic Destructuring
console.log('--- Problem 3.1: Basic Destructuring ---');

const product = {
    id: 101,
    name: 'Laptop',
    price: 999,
    specs: {
        ram: '16GB',
        storage: '512GB SSD'
    }
};

const { name, price } = product;
const { ram } = product.specs;

console.log('Name:', name);
console.log('Price:', price);
console.log('RAM:', ram);


// Problem 3.2: Destructuring with Defaults and Renaming
console.log('\n--- Problem 3.2: Destructuring with Defaults and Renaming ---');

const config = {
    theme: 'dark',
    fontSize: 14
};

const {
    theme: colorTheme,
    fontSize,
    language = 'en',
    debugMode = false
} = config;

console.log('colorTheme:', colorTheme); // 'dark'
console.log('fontSize:', fontSize);     // 14
console.log('language:', language);     // 'en'
console.log('debugMode:', debugMode);   // false


// Problem 3.3: Function Parameter Destructuring
console.log('\n--- Problem 3.3: Function Parameter Destructuring ---');

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'editor' }
];

function formatUser({ name, email, role = 'user' }) {
    return `${name} (${role}): ${email}`;
}

users.forEach(u => console.log(formatUser(u)));


// Part 4: Object Operations
console.log('\n--- Part 4: Object Operations ---');

// Problem 4.1: Merge Objects
console.log('--- Problem 4.1: Merge Objects ---');

const defaults = { theme: 'light', notifications: true, language: 'en' };
const userPrefs = { theme: 'dark', fontSize: 16 };

const finalSettings = {
    ...defaults,
    ...userPrefs,
    timestamp: new Date().toISOString()
};

console.log('Final Settings:', finalSettings);


// Problem 4.2: Object Transformation
console.log('\n--- Problem 4.2: Object Transformation ---');

const students = [
    { id: 1, name: 'Alice', scores: [85, 90, 78] },
    { id: 2, name: 'Bob', scores: [70, 75, 80] },
    { id: 3, name: 'Charlie', scores: [90, 95, 88] }
];

function transformStudents(studentArray) {
    return studentArray.reduce((acc, student) => {
        const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
        // Keep 2 decimal places if needed, or number
        acc[student.name] = Number(average.toFixed(2));
        return acc;
    }, {});
}

// Result: { Alice: 84.33, Bob: 75, Charlie: 91 }
console.log('Student Averages:', transformStudents(students));
