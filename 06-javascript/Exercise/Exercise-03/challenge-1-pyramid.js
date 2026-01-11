// Challenge 1: Number Pyramid
console.log('--- Challenge 1: Number Pyramid ---');

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = ' '.repeat(rows - i);
        let leftSide = '';
        for (let j = 1; j <= i; j++) leftSide += j;

        let rightSide = '';
        for (let j = i - 1; j >= 1; j--) rightSide += j;

        console.log(spaces + leftSide + rightSide);
    }
}

printPyramid(5);
