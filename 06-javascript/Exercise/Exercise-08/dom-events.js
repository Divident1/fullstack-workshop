// Part 1: DOM Selection
console.log('--- Part 1: DOM Selection ---');

// 1. The element with id "app"
const app = document.getElementById('app');
console.log('1. #app:', app);

// 2. The first h1 element
const heading = document.querySelector('h1');
console.log('2. first h1:', heading);

// 3. All elements with class "nav-link" (returns NodeList)
const navLinks = document.querySelectorAll('.nav-link');
console.log('3. .nav-link elements:', navLinks);

// 4. The nav-link with class "active"
const activeLink = document.querySelector('.nav-link.active');
console.log('4. .nav-link.active:', activeLink);

// 5. All article elements with class "card"
const cards = document.querySelectorAll('article.card');
console.log('5. article.card elements:', cards);

// 6. The card with data-id="2"
const secondCard = document.querySelector('.card[data-id="2"]');
console.log('6. Card with data-id="2":', secondCard);

// 7. All paragraph elements inside .card elements
const cardParagraphs = document.querySelectorAll('.card p');
console.log('7. Paragraphs inside cards:', cardParagraphs);


// Part 2: DOM Manipulation
console.log('\n--- Part 2: DOM Manipulation ---');

// Problem 2.1: Create and Append Elements
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Create image
    const img = document.createElement('img');
    // Using placeholder since we don't have actual images
    img.src = 'https://via.placeholder.com/150';
    img.alt = product.name;

    // Create title
    const h3 = document.createElement('h3');
    h3.textContent = product.name;

    // Create price
    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = `$${product.price}`;

    // Create button
    const btn = document.createElement('button');
    btn.className = 'add-to-cart';
    btn.textContent = 'Add to Cart';

    // Append all
    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(btn);

    return card;
}

const product = { name: 'Laptop', price: 999.99, image: 'laptop.jpg' };
const card = createProductCard(product);
document.getElementById('product-container').appendChild(card);


// Problem 2.2: Modify Existing Elements
const box = document.getElementById('box');

// 1. Change the text content
function changeText(element, newText) {
    if (element) element.textContent = newText;
}
changeText(box, "Hello, World!");

// 2. Add a class
function addClass(element, className) {
    if (element) element.classList.add(className);
}
// addClass(box, 'highlight');

// 3. Toggle a class
function toggleClass(element, className) {
    if (element) element.classList.toggle(className);
}
// toggleClass(box, 'highlight');

// 4. Set multiple styles
function setStyles(element, styles) {
    if (!element) return;
    Object.assign(element.style, styles);
}
// setStyles(box, { backgroundColor: 'blue', color: 'white', padding: '10px' });

// 5. Set a data attribute
function setDataAttribute(element, key, value) {
    if (element) element.setAttribute(`data-${key}`, value);
}
setDataAttribute(box, 'test', '123');


// Problem 2.3: Remove and Replace
// These functions are called by buttons in HTML for demonstration

function removeSecondItem() {
    const list = document.getElementById('list');
    const items = list.getElementsByTagName('li');
    if (items.length >= 2) {
        list.removeChild(items[1]); // Remove 2nd item (index 1)
    }
}

function replaceFirstItem() {
    const list = document.getElementById('list');
    const firstItem = list.firstElementChild;
    if (firstItem) {
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item 1';
        list.replaceChild(newItem, firstItem);
    }
}

function insertBeforeLast(text) {
    const list = document.getElementById('list');
    const lastItem = list.lastElementChild;
    const newItem = document.createElement('li');
    newItem.textContent = text;

    if (lastItem) {
        list.insertBefore(newItem, lastItem);
    } else {
        list.appendChild(newItem);
    }
}

function clearList() {
    const list = document.getElementById('list');
    list.innerHTML = ''; // Most efficient way to clear
}


// Part 3: Event Handling
console.log('\n--- Part 3: Event Handling ---');

// Problem 3.1: Basic Events
const btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', () => {
        console.log('Button clicked!');
        btn.textContent = 'Clicked!';
    });

    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = 'lightgreen';
    });

    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '';
    });
}

// Problem 3.2: Event Object
const searchForm = document.getElementById('search-form');
if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 1. Prevent submission

        const input = document.getElementById('search-input');
        const value = input.value; // 2. Get value

        console.log('Search Query:', value); // 3. Log value

        input.value = ''; // 4. Clear input
    });
}

// Problem 3.3: Event Delegation
const todoList = document.getElementById('todo-list');
if (todoList) {
    todoList.addEventListener('click', (event) => {
        // Check if clicked element has class 'delete'
        if (event.target.classList.contains('delete')) {
            // Remove the parent li
            const li = event.target.parentElement;
            li.remove();
            console.log('Task removed via delegation');
        }
    });
}

// Problem 3.4: Keyboard Events
document.addEventListener('keydown', (event) => {
    // Log key (avoid spamming too much in valid input typing)
    // console.log('Key pressed:', event.key);

    if (event.key === 'Escape') {
        alert('Escape key pressed! (Simulating modal close)');
    }
});


// Part 4: Practical Exercises
console.log('\n--- Part 4: Practical Exercises ---');

// Problem 4.1: Interactive Counter
const counterEl = document.getElementById('counter');
if (counterEl) {
    const countDisplay = document.getElementById('count');
    const decBtn = document.getElementById('decrement');
    const incBtn = document.getElementById('increment');

    let count = 0;

    // Initial state check
    decBtn.disabled = true;

    incBtn.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
        decBtn.disabled = false;
    });

    decBtn.addEventListener('click', () => {
        if (count > 0) {
            count--;
            countDisplay.textContent = count;
        }
        if (count === 0) {
            decBtn.disabled = true;
        }
    });
}

// Problem 4.2: Toggle Visibility
const toggleBtn = document.getElementById('toggle-btn');
const detailsDiv = document.getElementById('details');

if (toggleBtn && detailsDiv) {
    toggleBtn.addEventListener('click', () => {
        const isHidden = detailsDiv.classList.contains('hidden');

        if (isHidden) {
            detailsDiv.classList.remove('hidden');
            toggleBtn.textContent = 'Hide Details';
        } else {
            detailsDiv.classList.add('hidden');
            toggleBtn.textContent = 'Show Details';
        }
    });
}

// Problem 4.3: Form Validation Display
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset errors
        usernameError.textContent = '';
        emailError.textContent = '';
        usernameInput.classList.remove('invalid');
        emailInput.classList.remove('invalid');

        // Validate Username
        if (usernameInput.value.trim().length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters.';
            usernameInput.classList.add('invalid');
            isValid = false;
        }

        // Validate Email (Simple check for '@')
        if (!emailInput.value.includes('@')) {
            emailError.textContent = 'Please enter a valid email address.';
            emailInput.classList.add('invalid');
            isValid = false;
        }

        if (isValid) {
            console.log('Form Submitted Successfully!');
            console.log('Username:', usernameInput.value);
            console.log('Email:', emailInput.value);
            // Optionally clear form
            signupForm.reset();
        }
    });
}
