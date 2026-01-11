// Part 2: Lexical Scope

// Exercise 2.1: Nested Functions
console.log('--- Exercise 2.1: Nested Functions ---');

const globalVar = 'I am global';

function outer() {
    const outerVar = 'I am outer';

    function middle() {
        const middleVar = 'I am middle';

        function inner() {
            const innerVar = 'I am inner';

            // Which variables can inner() access?
            console.log('Inner context:');
            console.log(globalVar);  // 'I am global'
            console.log(outerVar);   // 'I am outer'
            console.log(middleVar);  // 'I am middle'
            console.log(innerVar);   // 'I am inner'
        }

        inner();

        // Which variables can middle() access?
        console.log('Middle context:');
        console.log('Can access globalVar?', globalVar);
        console.log('Can access outerVar?', outerVar);
        console.log('Can access middleVar?', middleVar);
        // console.log(innerVar); // Error: innerVar is not defined
        console.log('Can access innerVar? No.');
    }

    middle();
}

outer();


// Exercise 2.2: Scope Chain
console.log('\n--- Exercise 2.2: Scope Chain ---');

let a = 1;

function first() {
    let b = 2;

    function second() {
        let c = 3;

        function third() {
            let d = 4;
            console.log('Third:', a + b + c + d); // 1 + 2 + 3 + 4 = 10
        }

        third();
        console.log('Second:', a + b + c); // 1 + 2 + 3 = 6
    }

    second();
    console.log('First:', a + b); // 1 + 2 = 3
}

first();
console.log('Global:', a); // 1
