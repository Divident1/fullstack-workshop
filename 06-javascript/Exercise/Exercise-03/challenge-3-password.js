// Challenge 3: Validate Password
console.log('--- Challenge 3: Validate Password ---');

function validatePassword(password) {
    const errors = [];

    // 1. At least 8 characters
    if (password.length < 8) {
        errors.push('Too short');
    }

    // 2. Contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        errors.push('Missing uppercase');
    }

    // 3. Contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        errors.push('Missing lowercase');
    }

    // 4. Contains at least one number
    if (!/\d/.test(password)) {
        errors.push('Missing number');
    }

    // 5. Contains at least one special character (!@#$%^&*)
    if (!/[!@#$%^&*]/.test(password)) {
        errors.push('Missing special character');
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

console.log('Test "Abc123!@":', validatePassword('Abc123!@'));
// { isValid: true, errors: [] }

console.log('Test "abc":', validatePassword('abc'));
// { isValid: false, errors: ['Too short', 'Missing uppercase', 'Missing number', 'Missing special character'] }
