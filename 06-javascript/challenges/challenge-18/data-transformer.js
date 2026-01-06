const transform = (data) => ({
    filter: (fn) => transform(data.filter(fn)),

    map: (fn) => transform(data.map(fn)),

    // Sort mutates original array in JS, so we spread it first to avoid side effects if desired,
    // although the prompt says [...data].sort(fn) which is safe.
    sort: (fn) => transform([...data].sort(fn)),

    take: (n) => transform(data.slice(0, n)),

    groupBy: (key) => {
        const grouped = data.reduce((acc, item) => {
            const groupKey = item[key];
            if (!acc[groupKey]) {
                acc[groupKey] = [];
            }
            acc[groupKey].push(item);
            return acc;
        }, {});
        return transform(grouped);
    },

    value: () => data
});

const users = [
    { name: 'John', age: 30, dept: 'Engineering' },
    { name: 'Jane', age: 25, dept: 'Marketing' },
    { name: 'Bob', age: 35, dept: 'Engineering' },
    { name: 'Alice', age: 28, dept: 'Marketing' }
];

const result = transform(users)
    .filter(u => u.age > 25)
    .sort((a, b) => a.age - b.age)
    .map(u => u.name)
    .take(2)
    .value();

console.log('Result:', result);
// Expected based on logic:
// Filter > 25: John (30), Bob (35), Alice (28)
// Sort age: Alice (28), John (30), Bob (35)
// Map name: Alice, John, Bob
// Take 2: Alice, John

// Testing groupBy
const groupedByDept = transform(users)
    .groupBy('dept')
    .value();

console.log('Grouped by Dept:', JSON.stringify(groupedByDept, null, 2));
