# Week 2 Curriculum Notes: JavaScript, DOM, Async, Bootstrap 5, & jQuery

This document covers the Week 2 curriculum day-by-day, with concepts, examples, and study cases for practice.

---

## **MONDAY: JavaScript Fundamentals & Objects**

### **1. Introduction**
*   **JavaScript:** A dynamic, lightweight, interpreted programming language used for web development.
*   **Frameworks vs. Libraries:**
    *   **Library:** A collection of pre-written code that you call (e.g., jQuery, React (core)). *You are in control.*
    *   **Framework:** A structured foundation that calls your code (e.g., Angular, Vue). *The framework is in control (Inversion of Control).*

### **2. Variables & Data Types**
*   **Variables:**
    *   `var`: Function scoped, hoisted, can be re-declared (Old School).
    *   `let`: Block scoped, re-assignable (Modern Standard).
    *   `const`: Block scoped, immutable reference (Modern Standard).
*   **Data Types:**
    *   **Primitive:** String, Number, Boolean, Null, Undefined, Symbol, BigInt.
    *   **Reference:** Objects, Arrays, Functions.

### **3. Operators & Control Flow**
*   **Operators:** Arithmetic (`+`, `-`, `%`), Logical (`&&`, `||`, `!`), Comparison (`==` vs `===`).
*   **Control Flow:**
    *   **If/Else & Switch:** Decision making.
    *   **Loops:** `for`, `while`, `do-while` for iteration.

### **4. JavaScript Objects**
*   **Creation:**
    ```javascript
    const person = {
        name: "Gotam",
        greet: function() {
            console.log("Hello, I am " + this.name);
        }
    };
    ```
*   **Properties & Methods:** Access via dot notation (`person.name`) or bracket notation (`person["name"]`).
*   **`this` Keyword:** Refers to the object executing the current function.

### **Monday Study Mode Use Case:**
> **Task:** Create a simple "Student Grade Calculator" script.
> 1.  Create an object named `student` with properties: `name`, `score`.
> 2.  Add a method strictly inside determining the grade (A, B, C) using `if-else` or `switch` based on `score`.
> 3.  Use `console.log` to print: "Gotam has a score of 85 and Grade B".

---

## **TUESDAY: Functions, DOM & Events**

### **1. Functions**
*   **Declaration:** `function name() {}` (Hoisted).
*   **Expression:** `const name = function() {}` (Not hoisted).
*   **Arrow Functions (ES6):** `const sum = (a, b) => a + b;` (Concise, lexical `this`).
*   **IIFE (Immediately Invoked Function Expression):** Runs as soon as it is defined.
    ```javascript
    (function() { console.log("I run immediately!"); })();
    ```
*   **Closures:** High-level concept where a function remembers the variables of its outer (enclosing) lexical scope even after execution.

### **2. The DOM (Document Object Model)**
*   **Selecting Elements:**
    *   `document.getElementById("id")`
    *   `document.querySelector(".class")`
    *   `document.querySelectorAll("div")`
*   **Modifying Content:** `element.innerHTML`, `element.textContent`, `element.style`.
*   **Traversing:** `parentNode`, `children`, `nextElementSibling`.

### **3. Events**
*   **Listeners:** `element.addEventListener('click', callback)`.
*   **Event Object:** Contains details about the event (target, type, keys pressed).

### **4. Debugging**
*   Use `console.log()`, `console.table()`, `console.error()`.
*   Use the browser's "Sources" tab to set **breakpoints**.

### **Tuesday Study Mode Use Case:**
> **Task:** Build a "Counter App".
> 1.  Create an HTML page with a number `0` and two buttons: `+` and `-`.
> 2.  Use `document.getElementById` to select elements.
> 3.  Add `click` event listeners.
> 4.  Update the DOM to reflect the new count.
> 5.  *Bonus:* Change the color to red if the number is negative using `style`.

---

## **WEDNESDAY: Arrays, JSON & Async Intro**

### **1. JavaScript Arrays**
*   **Definition:** Ordered list of values.
*   **Higher Order Methods:**
    *   `forEach()`: Execute a function for every element.
    *   `map()`: Creates a NEW array by transforming every element.
    *   `filter()`: Creates a NEW array with elements that pass a test.
    *   `reduce()`: Reduces array to a single value (e.g., sum).

    ```javascript
    const nums = [1, 2, 3];
    const doubled = nums.map(n => n * 2); // [2, 4, 6]
    ```

### **2. JSON (JavaScript Object Notation)**
*   **Format:** Text format for storing/transporting data.
*   `JSON.stringify(obj)`: Object -> String.
*   `JSON.parse(string)`: String -> Object.

### **3. Async JavaScript Foundations**
*   **Synchronous:** Code executes line-by-line, blocking.
*   **Asynchronous:** Code executes later (e.g., API calls, timers), non-blocking.
*   **Call Stack:** Where function calls are tracked (LIFO).
*   **Web APIs / Callback Queue / Event Loop:** The mechanism that handles async operations in the browser.

### **Wednesday Study Mode Use Case:**
> **Task:** "Inventory Filter".
> 1.  Create an array of objects representing products: `[{name: "Laptop", price: 1000}, {name: "Mouse", price: 20}]`.
> 2.  Use `filter()` to find products cheaper than $50.
> 3.  Use `map()` to return a list of just the product names.
> 4.  Convert the final list to a JSON string and log it.

---

## **THURSDAY: Advanced Async & Bootstrap 5 Intro**

### **1. Advanced Asynchronous JS**
*   **Callbacks:** Function passed into another function to run later.
    *   *Problem:* **Callback Hell** (nested callbacks making code unreadable).
*   **Promises:** Objects representing the eventual completion (or failure) of an async operation. (`.then()`, `.catch()`).
*   **Async/Await:** Syntactic sugar over Promises for cleaner code.
    ```javascript
    async function getData() {
        try {
            let response = await fetch('https://api.example.com');
            let data = await response.json();
        } catch (error) {
            console.error(error);
        }
    }
    ```
*   **Fetch API:** The modern way to make network requests.
*   **ES6 Features:** Destructuring, Spread/Rest operators, Template Literals (` `).

### **2. Introduction to Bootstrap 5**
*   **Setup:** Add CDN link (CSS & JS Bundle) to `<head>`.
*   **Grid System:** The 12-column layout.
    *   `.container` (fixed width) vs `.container-fluid` (full width).
    *   `.row` and `.col`.
    *   **Breakpoints:** `col-sm` (Mobile), `col-md` (Tablet), `col-lg` (Desktop).

### **Thursday Study Mode Use Case:**
> **Task:** "User Card Fetcher".
> 1.  Use `fetch()` to get data from `https://jsonplaceholder.typicode.com/users/1`.
> 2.  Use `async/await` to handle the response.
> 3.  Display the user's name and email in a **Bootstrap Card** on the UI.
> 4.  Ensure the card handles responsive resizing (full width on mobile, 50% on desktop).

---

## **FRIDAY: Bootstrap Components & jQuery**

### **1. Bootstrap Components**
*   **Essentials:**
    *   **Navbar:** Responsive navigation headers.
    *   **Cards:** Flexible content containers.
    *   **Modals:** Pop-up dialogs.
    *   **Forms:** Styled inputs, validation styles.
    *   **Typography & Utilities:** Classes like `text-center`, `mt-5` (margin-top), `p-3` (padding), `d-flex` (flexbox).

### **2. jQuery**
*   **What is it?** A fast, small, feature-rich JS library. (Simplifies DOM manipulation).
*   **Selectors:** `$('div')`, `$('#id')`, `$('.class')`.
*   **Events:** `$('#btn').click(function() { ... })`.
*   **Effects:** `.hide()`, `.show()`, `.fadeIn()`, `.slideUp()`.
*   **AJAX:** `$.get()`, `$.post()`, `$.ajax()`.

### **Friday Study Mode Use Case:**
> **Task:** "Dynamic Dashboard".
> 1.  Build a Navbar and a Grid of Cards using Bootstrap.
> 2.  Include a button "Load More Info" inside a card.
> 3.  Using **jQuery**, add a click event to that button that uses `$.get()` or `.load()` (simulated) or simply uses a jQuery effect like `.slideToggle()` to reveal hidden details inside the card.
