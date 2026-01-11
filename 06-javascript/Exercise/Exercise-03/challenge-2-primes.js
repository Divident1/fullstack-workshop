// Challenge 2: Prime Numbers
console.log('--- Challenge 2: Prime Numbers ---');

function findPrimes(limit) {
    const primes = [];

    // Check numbers from 2 up to limit
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;

        // Basic primality test: check divisibility from 2 up to sqrt(num)
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}

console.log(findPrimes(30));
// Expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
