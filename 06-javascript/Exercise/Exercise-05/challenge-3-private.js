// Challenge 3: Private Class-like Structure
console.log('--- Challenge 3: Private Class-like Structure ---');

function createPerson(name, age) {
    // Private variables
    let _name = name;
    let _age = age;

    return {
        getName: function () {
            return _name;
        },
        getAge: function () {
            return _age;
        },
        setName: function (newName) {
            if (newName && typeof newName === 'string') {
                _name = newName;
            }
        },
        setAge: function (newAge) {
            if (newAge >= 0 && newAge <= 150) {
                _age = newAge;
            } else {
                console.warn('Invalid age');
            }
        },
        birthday: function () {
            _age++;
        },
        introduce: function () {
            return `Hi, I'm ${_name} and I'm ${_age} years old.`;
        }
    };
}

const person = createPerson('John', 25);
console.log('Name:', person.getName());     // "John"
console.log('Age:', person.getAge());      // 25
person.birthday();
console.log('Age after birthday:', person.getAge());      // 26
person.setAge(200);                // Should warn
console.log('Age after invalid set:', person.getAge());      // 26
person.setAge(30);
console.log('Age after valid set:', person.getAge());      // 30
console.log(person.introduce());
console.log('Direct access name:', person.name);          // undefined
console.log('Direct access _name:', person._name);         // undefined
