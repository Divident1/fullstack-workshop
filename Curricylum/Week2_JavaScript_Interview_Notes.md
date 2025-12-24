# Week 2: JavaScript & Bootstrap 5 - Interview Preparation Notes

> **Purpose:** Comprehensive notes for interview preparation covering JavaScript fundamentals, DOM, Async JS, Bootstrap 5, and jQuery.

---

# 📅 MONDAY: JavaScript Fundamentals & Objects

---

## 1. Framework vs Library

| **Aspect** | **Library** | **Framework** |
|------------|-------------|---------------|
| **Control** | You call the library code | Framework calls your code (Inversion of Control) |
| **Flexibility** | More flexible, use what you need | Follows strict structure |
| **Examples** | jQuery, Lodash, React (core) | Angular, Vue, Next.js |

### 🎯 Interview Question:
**Q: What is the difference between a framework and a library?**
> **A:** A library is a collection of pre-written code that developers call when needed (you are in control). A framework provides a complete structure and dictates the architecture - it calls your code (Inversion of Control). For example, jQuery is a library where you call `$.ajax()`, while Angular is a framework that manages your component lifecycle.

---

## 2. Variables: var, let, const

### Comparison Table

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function scoped | Block scoped | Block scoped |
| Hoisting | Yes (initialized as `undefined`) | Yes (but in TDZ) | Yes (but in TDZ) |
| Re-declaration | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |
| Re-assignment | ✅ Allowed | ✅ Allowed | ❌ Not allowed |

### Temporal Dead Zone (TDZ)
The period between entering scope and declaration where `let`/`const` cannot be accessed.

```javascript
console.log(a); // undefined (hoisted)
console.log(b); // ReferenceError: Cannot access 'b' before initialization
var a = 10;
let b = 20;
```

### 🎯 Interview Questions:

**Q: What is hoisting in JavaScript?**
> **A:** Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the compile phase. `var` declarations are hoisted and initialized with `undefined`. `let` and `const` are hoisted but remain in a "Temporal Dead Zone" until the line of declaration is executed, causing a ReferenceError if accessed before.

**Q: Why should we prefer `let` and `const` over `var`?**
> **A:** 
> 1. Block scoping prevents accidental variable leakage
> 2. No re-declaration prevents bugs from duplicate variable names
> 3. `const` enforces immutability for references
> 4. TDZ catches errors early instead of silently returning `undefined`

---

## 3. Data Types

### Primitive Types (7 types)
Stored directly in memory (stack). Immutable.

| Type | Example | typeof Result |
|------|---------|---------------|
| String | `"Hello"` | `"string"` |
| Number | `42`, `3.14` | `"number"` |
| Boolean | `true`, `false` | `"boolean"` |
| Undefined | `undefined` | `"undefined"` |
| Null | `null` | `"object"` ⚠️ (historical bug) |
| Symbol | `Symbol("id")` | `"symbol"` |
| BigInt | `9007199254740991n` | `"bigint"` |

### Reference Types
Stored as references in memory (heap).

| Type | Example | typeof Result |
|------|---------|---------------|
| Object | `{ name: "John" }` | `"object"` |
| Array | `[1, 2, 3]` | `"object"` |
| Function | `function() {}` | `"function"` |

### 🎯 Interview Questions:

**Q: What is the difference between `null` and `undefined`?**
> **A:** 
> - `undefined`: Variable declared but not assigned a value. It's the default value.
> - `null`: Intentional absence of value. Assigned explicitly by the developer.
> - `typeof undefined` returns `"undefined"`, `typeof null` returns `"object"` (legacy bug).
> - `null == undefined` is `true`, but `null === undefined` is `false`.

**Q: What is the difference between primitive and reference types?**
> **A:** Primitives are stored directly in the stack and are immutable (changes create new values). Reference types store a pointer in the stack that references data in the heap. When you copy a reference type, you copy the pointer, not the data, so changes affect the original.

```javascript
// Primitive - copied by value
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (unchanged)

// Reference - copied by reference
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name); // "Jane" (changed!)
```

---

## 4. Operators

### Comparison Operators: `==` vs `===`

| Operator | Name | Type Coercion |
|----------|------|---------------|
| `==` | Loose Equality | ✅ Yes |
| `===` | Strict Equality | ❌ No |

```javascript
console.log(5 == "5");   // true (string coerced to number)
console.log(5 === "5");  // false (different types)
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

### 🎯 Interview Question:
**Q: Why should we always use `===` instead of `==`?**
> **A:** `===` (strict equality) checks both value AND type, preventing unexpected type coercion bugs. `==` can lead to confusing results like `"0" == false` being `true`. Best practice is to always use `===` for predictable comparisons.

---

## 5. Control Flow

### if-else, switch, Ternary
```javascript
// if-else
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else {
    grade = 'C';
}

// switch (use for multiple discrete values)
switch (day) {
    case 'Monday':
        console.log('Start of week');
        break;
    default:
        console.log('Regular day');
}

// Ternary (for simple conditions)
const status = age >= 18 ? 'Adult' : 'Minor';
```

### Loops
```javascript
// for loop
for (let i = 0; i < 5; i++) { }

// while loop
while (condition) { }

// do-while (executes at least once)
do { } while (condition);

// for...of (for iterables like arrays)
for (const item of array) { }

// for...in (for object keys)
for (const key in object) { }
```

### 🎯 Interview Question:
**Q: What is the difference between `for...in` and `for...of`?**
> **A:** 
> - `for...in` iterates over **enumerable property keys** (including inherited). Best for objects.
> - `for...of` iterates over **iterable values** (arrays, strings, Maps, Sets). Cannot be used on plain objects directly.

```javascript
const arr = ['a', 'b', 'c'];
for (let i in arr) console.log(i); // "0", "1", "2" (indices as strings)
for (let v of arr) console.log(v); // "a", "b", "c" (values)
```

---

## 6. JavaScript Objects

### Object Creation Methods
```javascript
// 1. Object Literal (most common)
const person = {
    name: "Gotam",
    age: 25,
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

// 2. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const p1 = new Person("Gotam", 25);

// 3. Object.create()
const personProto = { greet() { console.log("Hi"); } };
const p2 = Object.create(personProto);

// 4. ES6 Class
class PersonClass {
    constructor(name) {
        this.name = name;
    }
}
```

### Accessing Properties
```javascript
console.log(person.name);       // Dot notation
console.log(person["name"]);    // Bracket notation (dynamic keys)
```

### The `this` Keyword
`this` refers to the object that is executing the current function.

```javascript
const obj = {
    name: "Gotam",
    regularFunc: function() {
        console.log(this.name); // "Gotam" (this = obj)
    },
    arrowFunc: () => {
        console.log(this.name); // undefined (this = global/window)
    }
};
```

### 🎯 Interview Questions:

**Q: Explain the `this` keyword in JavaScript.**
> **A:** `this` refers to the execution context of a function:
> 1. **Global context:** `this` refers to the global object (`window` in browser).
> 2. **Object method:** `this` refers to the object calling the method.
> 3. **Constructor:** `this` refers to the newly created instance.
> 4. **Arrow function:** `this` is lexically bound (inherits from parent scope).
> 5. **Explicit binding:** `call()`, `apply()`, `bind()` can set `this` explicitly.

**Q: What is the difference between `call()`, `apply()`, and `bind()`?**
> **A:** All three are used to explicitly set `this`:
> - `call(thisArg, arg1, arg2)`: Invokes immediately with arguments passed individually.
> - `apply(thisArg, [args])`: Invokes immediately with arguments as an array.
> - `bind(thisArg)`: Returns a NEW function with `this` bound, doesn't invoke immediately.

```javascript
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const user = { name: "Gotam" };

greet.call(user, "Hello");   // "Hello, Gotam"
greet.apply(user, ["Hi"]);   // "Hi, Gotam"
const boundGreet = greet.bind(user);
boundGreet("Hey");           // "Hey, Gotam"
```

---

# 📅 TUESDAY: Functions, DOM & Events

---

## 1. Function Types

### Function Declaration (Hoisted)
```javascript
greet("Gotam"); // Works! (hoisted)

function greet(name) {
    return `Hello, ${name}`;
}
```

### Function Expression (Not Hoisted)
```javascript
// greet("Gotam"); // Error! Not hoisted

const greet = function(name) {
    return `Hello, ${name}`;
};
```

### Arrow Functions (ES6)
```javascript
// Concise syntax
const add = (a, b) => a + b;

// With body
const greet = (name) => {
    return `Hello, ${name}`;
};

// Single param (parentheses optional)
const square = x => x * x;
```

**Key Differences of Arrow Functions:**
1. No own `this` (lexical binding)
2. No `arguments` object
3. Cannot be used as constructors (`new`)
4. No `prototype` property

---

## 2. Callbacks

A callback is a function passed into another function as an argument to be executed later.

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // "Data received" after 1 second
});
```

---

## 3. Closures

A closure is a function that remembers and accesses variables from its outer (lexical) scope even after the outer function has finished executing.

```javascript
function createCounter() {
    let count = 0; // Private variable
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### Use Cases:
1. **Data Privacy:** Creating private variables
2. **Function Factories:** Creating specialized functions
3. **Maintaining State:** In callbacks and event handlers

### 🎯 Interview Questions:

**Q: What is a closure and why is it useful?**
> **A:** A closure is a function bundled with references to its surrounding state (lexical environment). It allows a function to access variables from an outer scope even after that scope has closed. Closures are useful for:
> - Data encapsulation and privacy
> - Creating function factories
> - Maintaining state in async operations
> - Implementing the module pattern

**Q: What will be the output?**
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```
> **A:** Output: `3 3 3`. Because `var` is function-scoped, by the time the timeout executes, the loop has completed and `i` is 3. To fix, use `let` (block-scoped) or create a closure with an IIFE.

---

## 4. IIFE (Immediately Invoked Function Expression)

A function that runs immediately after it is defined.

```javascript
(function() {
    console.log("I run immediately!");
})();

// With arrow function
(() => {
    console.log("Arrow IIFE!");
})();

// Named IIFE with parameters
(function init(name) {
    console.log(`Hello, ${name}`);
})("Gotam");
```

### Use Cases:
1. Avoid polluting the global namespace
2. Create private scope
3. Module pattern (before ES6 modules)

---

## 5. DOM (Document Object Model)

The DOM is a programming interface that represents HTML as a tree of objects that JavaScript can manipulate.

### Selecting Elements

```javascript
// By ID (returns single element)
document.getElementById("header");

// By Class (returns HTMLCollection - live)
document.getElementsByClassName("item");

// By Tag (returns HTMLCollection - live)
document.getElementsByTagName("div");

// By CSS Selector (returns first match)
document.querySelector(".item");

// By CSS Selector (returns NodeList - static)
document.querySelectorAll(".item");
```

### Modifying Content

```javascript
const element = document.getElementById("box");

// Text content (ignores HTML)
element.textContent = "Hello";

// HTML content (parses HTML)
element.innerHTML = "<strong>Hello</strong>";

// Attributes
element.setAttribute("data-id", "123");
element.getAttribute("data-id");
element.removeAttribute("data-id");

// Classes
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");

// Styles
element.style.color = "red";
element.style.backgroundColor = "blue";
```

### Creating & Removing Elements

```javascript
// Create
const newDiv = document.createElement("div");
newDiv.textContent = "New Element";
newDiv.classList.add("box");

// Append
document.body.appendChild(newDiv);
document.body.append(newDiv, anotherDiv); // Multiple elements

// Insert at specific position
parent.insertBefore(newDiv, referenceElement);

// Remove
newDiv.remove();
parent.removeChild(childElement);
```

---

## 6. DOM Traversal

```javascript
const element = document.querySelector(".item");

// Parent
element.parentNode;
element.parentElement;

// Children
element.children;           // HTMLCollection
element.childNodes;         // NodeList (includes text nodes)
element.firstElementChild;
element.lastElementChild;

// Siblings
element.nextElementSibling;
element.previousElementSibling;
```

### 🎯 Interview Question:
**Q: What is the difference between `innerHTML`, `innerText`, and `textContent`?**
> **A:**
> - `innerHTML`: Gets/sets HTML markup. Parses and renders HTML tags.
> - `textContent`: Gets/sets text, ignoring HTML. Includes hidden elements and whitespace.
> - `innerText`: Gets/sets visible text only. Triggers reflow (slower). Respects CSS (e.g., `display: none`).

---

## 7. Events and Event Listeners

### Adding Event Listeners

```javascript
const button = document.getElementById("btn");

// Method 1: addEventListener (recommended)
button.addEventListener("click", function(event) {
    console.log("Clicked!");
    console.log(event.target); // Element that triggered event
});

// Method 2: Inline (not recommended)
// <button onclick="handleClick()">Click</button>

// Method 3: Property
button.onclick = function() { };
```

### Common Events
| Event Type | Events |
|------------|--------|
| Mouse | `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove` |
| Keyboard | `keydown`, `keyup`, `keypress` |
| Form | `submit`, `input`, `change`, `focus`, `blur` |
| Window | `load`, `resize`, `scroll`, `DOMContentLoaded` |

### Event Object Properties

```javascript
element.addEventListener("click", function(e) {
    e.target;          // Element that triggered the event
    e.currentTarget;   // Element the listener is attached to
    e.type;            // Type of event ("click")
    e.preventDefault();  // Prevent default behavior
    e.stopPropagation(); // Stop event bubbling
});
```

### Event Bubbling vs Capturing

Events propagate in two phases:
1. **Capturing Phase:** From window down to target (rarely used)
2. **Bubbling Phase:** From target up to window (default)

```javascript
// Bubbling (default)
element.addEventListener("click", handler, false);

// Capturing
element.addEventListener("click", handler, true);
```

### Event Delegation

Attach a single listener to a parent element instead of multiple listeners to child elements.

```javascript
// Instead of adding listener to each <li>
document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        console.log("Clicked:", e.target.textContent);
    }
});
```

### 🎯 Interview Questions:

**Q: What is event delegation and why is it useful?**
> **A:** Event delegation is a technique where you attach a single event listener to a parent element instead of attaching multiple listeners to child elements. It leverages event bubbling. Benefits:
> 1. Memory efficient (fewer listeners)
> 2. Works with dynamically added elements
> 3. Less code to manage

**Q: What is the difference between `event.target` and `event.currentTarget`?**
> **A:** 
> - `event.target`: The actual element that triggered the event (e.g., the clicked button).
> - `event.currentTarget`: The element the event listener is attached to (might be a parent in delegation).

---

## 8. Debugging JavaScript

### Console Methods
```javascript
console.log("General output");
console.error("Error message");
console.warn("Warning message");
console.table([{a: 1}, {a: 2}]); // Tabular format
console.time("timer"); // Start timer
console.timeEnd("timer"); // End timer
console.trace(); // Stack trace
console.dir(object); // Object properties
```

### Browser DevTools
1. **Elements Tab:** Inspect/modify DOM and CSS
2. **Console Tab:** Run JS, view logs
3. **Sources Tab:** Set breakpoints, step through code
4. **Network Tab:** Monitor HTTP requests

### Breakpoints
- Set in Sources tab by clicking line number
- `debugger;` statement in code

---

# 📅 WEDNESDAY: Arrays & JSON

---

## 1. JavaScript Arrays

Arrays are ordered collections of values.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

// Access
console.log(fruits[0]);      // "Apple"
console.log(fruits.length);  // 3

// Check if array
Array.isArray(fruits);       // true
```

### Mutating Methods (modify original array)

```javascript
const arr = [1, 2, 3];

arr.push(4);       // Add to end → [1, 2, 3, 4]
arr.pop();         // Remove from end → [1, 2, 3]
arr.unshift(0);    // Add to start → [0, 1, 2, 3]
arr.shift();       // Remove from start → [1, 2, 3]
arr.splice(1, 1);  // Remove 1 element at index 1 → [1, 3]
arr.reverse();     // Reverse → [3, 1]
arr.sort();        // Sort → [1, 3]
```

### Non-Mutating Methods (return new array)

```javascript
const arr = [1, 2, 3];

arr.concat([4, 5]);      // [1, 2, 3, 4, 5]
arr.slice(1, 3);         // [2, 3] (from index 1 to 3, exclusive)
arr.join("-");           // "1-2-3"
arr.includes(2);         // true
arr.indexOf(2);          // 1
arr.find(x => x > 1);    // 2 (first match)
arr.findIndex(x => x > 1); // 1 (index of first match)
```

---

## 2. Higher-Order Array Methods

### forEach() - Execute for each element
```javascript
const nums = [1, 2, 3];
nums.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});
// Does NOT return anything (undefined)
```

### map() - Transform each element
```javascript
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);
// [2, 4, 6] - Returns NEW array
```

### filter() - Filter by condition
```javascript
const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(num => num % 2 === 0);
// [2, 4] - Returns NEW array with elements that pass test
```

### reduce() - Reduce to single value
```javascript
const nums = [1, 2, 3, 4];
const sum = nums.reduce((accumulator, current) => {
    return accumulator + current;
}, 0); // 0 is initial value
// 10

// Real-world: Group by category
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" }
];

const grouped = products.reduce((acc, product) => {
    const key = product.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(product);
    return acc;
}, {});
// { Electronics: [...], Clothing: [...] }
```

### Chaining Methods
```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
    .filter(n => n % 2 === 0)  // [2, 4, 6]
    .map(n => n * 2)           // [4, 8, 12]
    .reduce((sum, n) => sum + n, 0); // 24
```

### 🎯 Interview Questions:

**Q: What is the difference between `map()` and `forEach()`?**
> **A:**
> - `map()` returns a new array with transformed elements. Use when you need to transform data.
> - `forEach()` returns `undefined`. Use for side effects (logging, updating external variables).
> - `map()` is chainable, `forEach()` is not.

**Q: Explain `reduce()` with an example.**
> **A:** `reduce()` iterates through an array and accumulates values into a single result. It takes a callback with an accumulator and current value, plus an optional initial value. Example: Summing numbers, grouping objects, flattening arrays.

---

## 3. JSON (JavaScript Object Notation)

JSON is a text format for storing and transporting data.

### JSON Syntax Rules
- Data is in key/value pairs
- Keys must be strings with double quotes
- Values can be: string, number, boolean, null, array, object
- No functions, undefined, or trailing commas

```json
{
    "name": "Gotam",
    "age": 25,
    "isStudent": true,
    "courses": ["JavaScript", "React"],
    "address": {
        "city": "Mumbai"
    }
}
```

### JSON Methods

```javascript
// Object to JSON String
const obj = { name: "Gotam", age: 25 };
const jsonString = JSON.stringify(obj);
// '{"name":"Gotam","age":25}'

// JSON String to Object
const parsed = JSON.parse(jsonString);
// { name: "Gotam", age: 25 }

// Pretty print with indentation
JSON.stringify(obj, null, 2);
```

### 🎯 Interview Question:
**Q: What is the difference between JSON and a JavaScript Object?**
> **A:**
> - JSON is a text format; JS Object is a data structure.
> - JSON keys must be double-quoted strings; JS objects can have unquoted keys.
> - JSON cannot contain functions, undefined, or Date objects.
> - JSON is language-independent; JS objects are specific to JavaScript.

---

# 📅 THURSDAY: Asynchronous JavaScript

---

## 1. Synchronous vs Asynchronous

### Synchronous (Blocking)
Code executes line by line. Each line waits for the previous to complete.

```javascript
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3
```

### Asynchronous (Non-Blocking)
Code can run in the background. Doesn't block execution.

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Output: 1, 3, 2
```

---

## 2. Call Stack, Web APIs, Callback Queue, Event Loop

### The JavaScript Runtime

```
┌─────────────────────────────────────────────────────────────┐
│                        JavaScript Engine                     │
│  ┌─────────────────┐        ┌─────────────────────────────┐ │
│  │   Call Stack    │        │         Memory Heap         │ │
│  │                 │        │    (Object Storage)         │ │
│  │  [function()]   │        │                             │ │
│  │  [global()]     │        │                             │ │
│  └─────────────────┘        └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      Browser/Node APIs                       │
│         setTimeout, fetch, DOM events, etc.                  │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     Callback Queue                           │
│    [callback1] → [callback2] → [callback3]                   │
└─────────────────────────────────────────────────────────────┘
                          │
              ◄───────────┘
              │
       ┌──────────────┐
       │  Event Loop  │  ← Checks if Call Stack is empty
       └──────────────┘
```

### How It Works:
1. **Call Stack:** Tracks function execution (LIFO - Last In, First Out)
2. **Web APIs:** Handle async operations (setTimeout, fetch, DOM events)
3. **Callback Queue:** Holds callbacks ready to execute
4. **Event Loop:** Moves callbacks to Call Stack when Stack is empty

### 🎯 Interview Question:
**Q: Explain the Event Loop in JavaScript.**
> **A:** JavaScript is single-threaded but handles async operations via the Event Loop:
> 1. Synchronous code runs on the Call Stack
> 2. Async operations (setTimeout, fetch) are handled by Web APIs
> 3. When complete, callbacks are placed in the Callback Queue
> 4. The Event Loop continuously checks if the Call Stack is empty
> 5. If empty, it moves the first callback from the Queue to the Stack

---

## 3. Callbacks & Callback Hell

### Callbacks
```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
```

### Callback Hell (Pyramid of Doom)
```javascript
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            getYetMoreData(c, function(d) {
                // Deeply nested, hard to read/maintain
            });
        });
    });
});
```

---

## 4. Promises

A Promise represents the eventual completion (or failure) of an async operation.

### Promise States:
1. **Pending:** Initial state
2. **Fulfilled:** Operation completed successfully
3. **Rejected:** Operation failed

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;
    
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Cleanup"));
```

### Promise Methods

```javascript
// Promise.all - Wait for ALL to resolve (fails if any rejects)
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results));

// Promise.allSettled - Wait for ALL to settle (fulfilled or rejected)
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));

// Promise.race - First to settle wins
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Promise.any - First to FULFILL wins (ignores rejections)
Promise.any([promise1, promise2])
    .then(result => console.log(result));
```

---

## 5. Async/Await

Syntactic sugar over Promises for cleaner async code.

```javascript
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

// Calling async function
fetchUserData().then(data => console.log(data));
```

### Key Points:
- `async` function always returns a Promise
- `await` pauses execution until Promise resolves
- Use `try/catch` for error handling
- `await` can only be used inside `async` functions (or at top-level in modules)

### 🎯 Interview Questions:

**Q: What is the difference between Promises and Async/Await?**
> **A:** Async/Await is syntactic sugar over Promises:
> - Promises use `.then()` and `.catch()` chaining
> - Async/Await uses `try/catch` blocks (looks synchronous)
> - Async/Await is more readable for sequential async operations
> - Both ultimately deal with Promises

**Q: How do you handle errors in async/await?**
> **A:** Use `try/catch` blocks around `await` statements. For multiple independent operations, you can also use `Promise.allSettled()` or individual `.catch()` on each promise.

---

## 6. Fetch API

The modern API for making HTTP requests.

```javascript
// GET Request
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

// POST Request
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Gotam' })
})
.then(response => response.json())
.then(data => console.log(data));

// With async/await
async function postData() {
    const response = await fetch('https://api.example.com/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Gotam' })
    });
    return await response.json();
}
```

---

## 7. ES6+ Features

### Destructuring
```javascript
// Array Destructuring
const [a, b] = [1, 2];

// Object Destructuring
const { name, age } = { name: "Gotam", age: 25 };

// With default values
const { city = "Unknown" } = {};
```

### Spread Operator (...)
```javascript
// Array spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Object spread (shallow copy)
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// Function arguments
Math.max(...arr1);
```

### Rest Parameters
```javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
sum(1, 2, 3, 4); // 10
```

### Template Literals
```javascript
const name = "Gotam";
const greeting = `Hello, ${name}!
This is a multiline string.`;
```

### Optional Chaining (?.)
```javascript
const user = { address: { city: "Mumbai" } };
console.log(user?.address?.city);   // "Mumbai"
console.log(user?.contact?.phone);  // undefined (no error)
```

### Nullish Coalescing (??)
```javascript
const value = null ?? "default"; // "default"
const zero = 0 ?? "default";     // 0 (only null/undefined trigger default)
```

---

# 📅 FRIDAY: Bootstrap 5 & jQuery

---

## 1. Introduction to Bootstrap 5

Bootstrap is a CSS framework for building responsive, mobile-first websites.

### CDN Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Content -->
    
    <!-- Bootstrap JS Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## 2. Grid System

Bootstrap's 12-column responsive grid system.

### Containers
```html
<!-- Fixed width (responsive breakpoints) -->
<div class="container">...</div>

<!-- Full width -->
<div class="container-fluid">...</div>

<!-- Breakpoint-specific -->
<div class="container-md">...</div>
```

### Rows and Columns
```html
<div class="container">
    <div class="row">
        <div class="col-md-6">50% on medium+</div>
        <div class="col-md-6">50% on medium+</div>
    </div>
</div>
```

### Responsive Breakpoints

| Breakpoint | Class Infix | Dimensions |
|------------|-------------|------------|
| Extra Small | (none) | <576px |
| Small | `sm` | ≥576px |
| Medium | `md` | ≥768px |
| Large | `lg` | ≥992px |
| Extra Large | `xl` | ≥1200px |
| XXL | `xxl` | ≥1400px |

```html
<!-- Full width on mobile, 50% on tablet, 33% on desktop -->
<div class="col-12 col-md-6 col-lg-4">Responsive Column</div>
```

---

## 3. Essential Components

### Typography
```html
<h1 class="display-1">Display Heading</h1>
<p class="lead">Lead paragraph with larger text.</p>
<p class="text-muted">Muted text color.</p>
<p class="fw-bold">Bold text.</p>
```

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline-danger">Outline Danger</button>
<button class="btn btn-lg">Large Button</button>
<button class="btn btn-sm">Small Button</button>
```

### Cards
```html
<div class="card" style="width: 18rem;">
    <img src="image.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Some text content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

### Forms
```html
<form>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email">
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Navbar
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### Modal
```html
<!-- Button trigger -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open Modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal Title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                Modal content goes here.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>
```

---

## 4. Utility Classes

### Spacing (Margin & Padding)
- Format: `{property}{sides}-{size}`
- Properties: `m` (margin), `p` (padding)
- Sides: `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (horizontal), `y` (vertical)
- Sizes: `0`, `1`, `2`, `3`, `4`, `5`, `auto`

```html
<div class="mt-3">Margin top 3</div>
<div class="px-4">Padding horizontal 4</div>
<div class="mb-auto">Margin bottom auto</div>
```

### Display
```html
<div class="d-none">Hidden</div>
<div class="d-block">Block</div>
<div class="d-flex">Flexbox</div>
<div class="d-none d-md-block">Hidden on small, visible on medium+</div>
```

### Flexbox
```html
<div class="d-flex justify-content-center align-items-center">
    Centered Content
</div>
<div class="d-flex flex-column">Vertical Stack</div>
```

### Text
```html
<p class="text-center">Centered text</p>
<p class="text-end">Right aligned</p>
<p class="text-uppercase">UPPERCASE</p>
<p class="text-truncate">Long text that will be truncated...</p>
```

### Background & Text Colors
```html
<div class="bg-primary text-white">Primary background</div>
<div class="bg-light text-dark">Light background</div>
```

---

## 5. jQuery

jQuery is a fast, small JavaScript library that simplifies DOM manipulation, event handling, and AJAX.

### CDN Setup
```html
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
```

### jQuery Selectors
```javascript
// Select elements (returns jQuery object)
$('#id');           // By ID
$('.class');        // By class
$('div');           // By tag
$('ul li');         // Descendants
$('input[type="text"]'); // By attribute
```

### DOM Manipulation
```javascript
// Get/Set Content
$('#box').text();           // Get text
$('#box').text('New text'); // Set text
$('#box').html('<b>Bold</b>'); // Set HTML
$('#input').val();          // Get input value

// Attributes
$('img').attr('src');
$('img').attr('src', 'new.jpg');

// Classes
$('#box').addClass('active');
$('#box').removeClass('active');
$('#box').toggleClass('active');
$('#box').hasClass('active');

// CSS
$('#box').css('color', 'red');
$('#box').css({ color: 'red', fontSize: '20px' });

// Create/Insert Elements
$('<div class="new">New Element</div>').appendTo('body');
$('#box').append('<p>Appended</p>');
$('#box').prepend('<p>Prepended</p>');
$('#box').after('<p>After</p>');
$('#box').before('<p>Before</p>');

// Remove
$('#box').remove();
$('#box').empty(); // Clear children
```

### Events
```javascript
// Click
$('#btn').click(function() {
    console.log('Clicked!');
});

// Multiple events
$('#btn').on('click', function() { });
$('#btn').on('mouseenter mouseleave', function() { });

// Event delegation
$('#list').on('click', 'li', function() {
    console.log($(this).text());
});

// Document ready
$(document).ready(function() {
    // Code runs after DOM is loaded
});

// Shorthand
$(function() {
    // Same as $(document).ready()
});
```

### Effects
```javascript
// Show/Hide
$('#box').hide();
$('#box').show();
$('#box').toggle();

// Fade
$('#box').fadeIn(400);
$('#box').fadeOut(400);
$('#box').fadeToggle(400);

// Slide
$('#box').slideDown();
$('#box').slideUp();
$('#box').slideToggle();

// Animate
$('#box').animate({
    left: '250px',
    opacity: 0.5
}, 1000);

// Chaining
$('#box').fadeOut(500).fadeIn(500);
```

### AJAX with jQuery
```javascript
// GET request
$.get('https://api.example.com/data', function(data) {
    console.log(data);
});

// POST request
$.post('https://api.example.com/data', { name: 'Gotam' }, function(response) {
    console.log(response);
});

// Full AJAX
$.ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    },
    error: function(xhr, status, error) {
        console.error(error);
    }
});

// Load HTML into element
$('#content').load('page.html');
```

### DOM Traversal
```javascript
$('#box').parent();
$('#box').parents();
$('#box').children();
$('#box').find('span');
$('#box').siblings();
$('#box').next();
$('#box').prev();
$('#box').first();
$('#box').last();
$('#box').eq(2); // Element at index
```

### 🎯 Interview Questions:

**Q: What are the advantages of using jQuery?**
> **A:**
> 1. Simplified DOM manipulation and traversal
> 2. Cross-browser compatibility
> 3. Easy AJAX calls
> 4. Rich animation library
> 5. Large plugin ecosystem
> 6. Chaining methods

**Q: What is `$(document).ready()` and why is it important?**
> **A:** `$(document).ready()` ensures your jQuery code runs only after the DOM is fully loaded. This prevents errors from trying to manipulate elements that don't exist yet. It's similar to the `DOMContentLoaded` event in vanilla JavaScript.

**Q: What is the difference between `$(this)` and `this` in jQuery?**
> **A:** 
> - `this`: The native DOM element
> - `$(this)`: The DOM element wrapped in a jQuery object, giving access to jQuery methods

```javascript
$('#btn').click(function() {
    console.log(this);        // DOM element
    console.log($(this));     // jQuery object
    console.log($(this).text()); // jQuery method
});
```

---

# 🎯 Quick Reference: Top Interview Questions Summary

1. **var vs let vs const** - Scope, hoisting, re-declaration
2. **== vs ===** - Type coercion
3. **null vs undefined** - Intentional vs default absence
4. **Primitive vs Reference types** - Value vs pointer copy
5. **Closures** - Function remembering outer scope
6. **this keyword** - Execution context
7. **call, apply, bind** - Explicit this binding
8. **Event delegation** - Single parent listener
9. **Event bubbling vs capturing** - Propagation phases
10. **map vs forEach** - Returns new array vs undefined
11. **Promises vs async/await** - Syntax difference
12. **Event Loop** - Call stack, callback queue, Web APIs
13. **Hoisting** - Declarations moved to top
14. **Arrow functions** - Lexical this, no arguments
15. **IIFE** - Immediately invoked, private scope

---

> **Good luck with your interviews! 🚀**
