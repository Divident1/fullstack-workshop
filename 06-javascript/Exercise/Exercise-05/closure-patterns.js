// Part 4: Practical Closure Patterns


console.log('--- Exercise 4.1: Private Variables ---');

function createBankAccount(initialBalance) {
    let balance = initialBalance;
    const transactions = [];

    return {
        deposit: function (amount) {
            balance += amount;
            transactions.push({ type: 'deposit', amount });
            return balance;
        },
        withdraw: function (amount) {
            if (amount > balance) {
                return "Insufficient funds";
            }
            balance -= amount;
            transactions.push({ type: 'withdraw', amount });
            return balance;
        },
        getBalance: function () {
            return balance;
        },
        getTransactionHistory: function () {
            return [...transactions]; // Return copy to prevent mutation
        }
    };
}

const account = createBankAccount(1000);
console.log('Initial Balance:', account.getBalance());      // 1000
console.log('Deposit 500:', account.deposit(500));      // 1500
console.log('Withdraw 200:', account.withdraw(200));     // 1300
console.log('Withdraw 2000:', account.withdraw(2000));    // "Insufficient funds"
console.log('Final Balance:', account.getBalance());      // 1300
console.log('History:', account.getTransactionHistory());
console.log('Direct balance access:', account.balance);           // undefined (private)


// Exercise 4.2: Function Factory
console.log('\n--- Exercise 4.2: Function Factory ---');

// 1. Create a discount calculator factory
function createDiscountCalculator(discountPercent) {
    return function (price) {
        return price - (price * (discountPercent / 100));
    };
}

const tenPercentOff = createDiscountCalculator(10);
const twentyPercentOff = createDiscountCalculator(20);

console.log('10% off 100:', tenPercentOff(100));    // 90
console.log('20% off 100:', twentyPercentOff(100)); // 80

// 2. Create a range checker factory
function createRangeChecker(min, max) {
    return function (num) {
        return num >= min && num <= max;
    };
}

const isValidAge = createRangeChecker(0, 120);
const isValidScore = createRangeChecker(0, 100);

console.log('Age 25 valid?', isValidAge(25));    // true
console.log('Age 150 valid?', isValidAge(150));   // false
console.log('Score 85 valid?', isValidScore(85));  // true

// 3. Create a prefix logger factory
function createLogger(prefix) {
    let logCount = 0;

    const logger = function (message) {
        logCount++;
        console.log(`${prefix} ${message}`);
    };

    logger.getLogCount = () => logCount;

    return logger;
}

const infoLogger = createLogger('[INFO]');
const errorLogger = createLogger('[ERROR]');

infoLogger('Server started');
infoLogger('Processing request');
errorLogger('Connection failed');
console.log('Info logs:', infoLogger.getLogCount());  // 2
console.log('Error logs:', errorLogger.getLogCount()); // 1


// Exercise 4.3: Event Handler Closures
console.log('\n--- Exercise 4.3: Event Handler Closures ---');

function createButtonHandler(buttonId, action) {
    let clickCount = 0;

    return function handleClick() {
        clickCount++;
        console.log(`Button ${buttonId} clicked ${clickCount} times. Action: ${action}`);
    };
}

const saveHandler = createButtonHandler('save-btn', 'Saving document');
const deleteHandler = createButtonHandler('delete-btn', 'Deleting item');

saveHandler();
saveHandler();
deleteHandler();
saveHandler();
