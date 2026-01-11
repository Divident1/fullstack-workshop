// Challenge 2: Data Pipeline
console.log('--- Challenge 2: Data Pipeline ---');

function createPipeline(...operations) {
    return function (data) {
        return operations.reduce((result, operation) => operation(result), data);
    };
}

// Create operations
const filterInStock = products => products.filter(p => p.inStock);
const sortByPrice = products => [...products].sort((a, b) => a.price - b.price);
const getNames = products => products.map(p => p.name);
const takeFirst = n => items => items.slice(0, n);

// Create pipeline
const getTopCheapestInStock = createPipeline(
    filterInStock,
    sortByPrice,
    takeFirst(3),
    getNames
);

console.log('Pipeline Result (3 Cheapest In-Stock):', getTopCheapestInStock(products));

