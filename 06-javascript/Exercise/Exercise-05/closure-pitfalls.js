
console.log('--- Exercise 5.1: The Classic Loop Problem ---');

// Problem: All logs show 3
function problemLoop() {
    console.log('Problem Loop (all 3s):');
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log('Problem:', i);
        }, i * 100);
    }
}
problemLoop();

// Fix 1: Using let
function fixWithLet() {
    console.log('Fix 1 (let):');
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log('Let Fix:', i);
        }, (i * 100) + 500); // Delay so it prints after problem loop
    }
}
fixWithLet();

// Fix 2: Using IIFE
function fixWithIIFE() {
    console.log('Fix 2 (IIFE):');
    for (var i = 0; i < 3; i++) {
        (function (index) {
            setTimeout(function () {
                console.log('IIFE Fix:', index);
            }, (i * 100) + 1000); // Delay more
        })(i);
    }
}
fixWithIIFE();

// Fix 3: Using a closure helper
function fixWithClosure() {
    function createLogger(index) {
        return function () {
            console.log('Closure Helper Fix:', index);
        };
    }

    console.log('Fix 3 (Helper):');
    for (var i = 0; i < 3; i++) {
        setTimeout(createLogger(i), (i * 100) + 1500); // Delay even more
    }
}
fixWithClosure();


// Exercise 5.2: Preserving this
console.log('\n--- Exercise 5.2: Preserving this ---');

const person = {
    name: 'John',
    hobbies: ['reading', 'gaming'],

    // Problem: this is undefined inside the callback function (in strict mode) or window object
    showHobbiesProblem: function () {
        console.log('Problem:');
        try {
            this.hobbies.forEach(function (hobby) {
                console.log(this.name + ' likes ' + hobby); // Error or undefined
            });
        } catch (e) {
            console.log('Error caught:', e.message);
        }
    },

    // Fix 1: Arrow function (Lexical this)
    showHobbiesArrow: function () {
        console.log('Arrow Fix:');
        this.hobbies.forEach((hobby) => {
            console.log(this.name + ' likes ' + hobby);
        });
    },

    // Fix 2: Bind this
    showHobbiesBind: function () {
        console.log('Bind Fix:');
        this.hobbies.forEach(function (hobby) {
            console.log(this.name + ' likes ' + hobby);
        }.bind(this));
    },

    // Fix 3: Store this in variable
    showHobbiesVar: function () {
        console.log('Self/That Variable Fix:');
        const self = this;
        this.hobbies.forEach(function (hobby) {
            console.log(self.name + ' likes ' + hobby);
        });
    }
};

// Tests need slight delay to not overlap with loop logs too messily, but sync calls are fine
setTimeout(() => {
    console.log('--- Testing this binding ---');
    // person.showHobbiesProblem(); // Will likely log "undefined likes reading"
    person.showHobbiesArrow();
    person.showHobbiesBind();
    person.showHobbiesVar();
}, 2000);
