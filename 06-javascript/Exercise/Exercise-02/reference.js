// Part 3: Reference Data Types

// Exercise 3.1: Objects
console.log('--- Exercise 3.1: Objects ---');

// 1. Create a person object
let person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};
console.log('Initial person:', person);

// 2. Add an email property
person.email = 'john@example.com';

// 3. Update the age
person.age = 31;

// 4. Delete the city property
delete person.city;

console.log('Updated person:', person);

// 5. Check if 'email' property exists
console.log('Has email:', 'email' in person); // true

// 6. Get all keys
console.log('Keys:', Object.keys(person));

// 7. Get all values
console.log('Values:', Object.values(person));


// Exercise 3.2: Arrays
console.log('\n--- Exercise 3.2: Arrays ---');

// 1. Create an array of 5 fruits
let fruits = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Pineapple'];
console.log('Initial fruits:', fruits);

// 2. Access the third fruit (index 2)
console.log('Third fruit:', fruits[2]);

// 3. Change first fruit
fruits[0] = 'Mango';

// 4. Add "grape" to the end
fruits.push('Grape');

// 5. Remove the last fruit
fruits.pop(); // Removes Grape

// 6. Add "kiwi" to the beginning
fruits.unshift('Kiwi');

console.log('Modified fruits:', fruits);

// 7. Find index of "Banana"
console.log('Index of Banana:', fruits.indexOf('Banana'));

// 8. Check if fruits is an array
console.log('Is Array (Array.isArray):', Array.isArray(fruits));
console.log('Is Array (instanceof):', fruits instanceof Array);


// Exercise 3.3: Reference vs Value
console.log('\n--- Exercise 3.3: Reference vs Value ---');

// Primitive
let a = 10;
let b = a;
a = 20;
console.log('a:', a); // 20
console.log('b:', b); // 10 (Value copy)

// Reference (Object)
let obj1 = { name: 'John' };
let obj2 = obj1;
obj1.name = 'Jane';
console.log('obj1.name:', obj1.name); // Jane
console.log('obj2.name:', obj2.name); // Jane (Reference copy)

// Reference (Array)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log('arr1:', arr1); // [1, 2, 3, 4]
console.log('arr2:', arr2); // [1, 2, 3, 4] (Reference copy)

// Questions Answers:
// 1. Why changing 'a' doesn't affect 'b'? 
//    Primitives are copied by value. 'b' stores a copy of the value 10.
// 2. Why changing obj1 affects obj2? 
//    Objects are accessed by reference. 'obj2' stores the memory address of the same object as 'obj1'.
// 3. How to create a true copy?
//    Shallow copy: Object.assign({}, obj) or {...obj}
//    Deep copy: JSON.parse(JSON.stringify(obj)) or using a library like Lodash or structuredClone()
