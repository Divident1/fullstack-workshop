// Part 5: Control Flow - Conditionals

// Exercise 5.1: Grade Calculator
console.log('--- Exercise 5.1: Grade Calculator ---');

function getLetterGrade(score) {
    if (score < 0 || score > 100) return 'Invalid';
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

console.log('95:', getLetterGrade(95));  // 'A'
console.log('83:', getLetterGrade(83));  // 'B'
console.log('72:', getLetterGrade(72));  // 'C'
console.log('65:', getLetterGrade(65));  // 'D'
console.log('45:', getLetterGrade(45));  // 'F'
console.log('105:', getLetterGrade(105)); // 'Invalid'
console.log('-5:', getLetterGrade(-5));  // 'Invalid'


// Exercise 5.2: Day of Week (Switch)
console.log('\n--- Exercise 5.2: Day of Week (Switch) ---');

function getDayType(dayNumber) {
    let type;
    switch (dayNumber) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            type = 'Weekday';
            break;
        case 6:
        case 7:
            type = 'Weekend';
            break;
        default:
            type = 'Invalid';
    }
    return type;
}

console.log('1 (Mon):', getDayType(1)); // 'Weekday'
console.log('5 (Fri):', getDayType(5)); // 'Weekday'
console.log('6 (Sat):', getDayType(6)); // 'Weekend'
console.log('7 (Sun):', getDayType(7)); // 'Weekend'
console.log('0:', getDayType(0)); // 'Invalid'


// Exercise 5.3: Leap Year
console.log('\n--- Exercise 5.3: Leap Year ---');

function isLeapYear(year) {
    // divisible by 4 AND (NOT divisible by 100 OR divisible by 400)
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
}

console.log('2024:', isLeapYear(2024)); // true
console.log('2023:', isLeapYear(2023)); // false
console.log('2000:', isLeapYear(2000)); // true
console.log('1900:', isLeapYear(1900)); // false
