function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return 0;
    }
    var bmi = weight / (height * height);
    return bmi;
}

function getCategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function runCalculator() {
    console.log("BMI Calculator");
    console.log("--------------");

    var weight = prompt("Enter weight in kg:");
    weight = parseFloat(weight);

    var height = prompt("Enter height in meters (e.g. 1.75):");
    height = parseFloat(height);

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers!");
        return;
    }

    var bmi = calculateBMI(weight, height);
    var category = getCategory(bmi);

    var message = "Your BMI is: " + bmi.toFixed(2);
    message = message + "\nCategory: " + category;

    if (category == "Underweight") {
        message = message + "\nAdvice: Eat more healthy food.";
    } else if (category == "Normal weight") {
        message = message + "\nAdvice: Keep it up!";
    } else if (category == "Overweight") {
        message = message + "\nAdvice: Exercise more.";
    } else {
        message = message + "\nAdvice: See a doctor.";
    }

    console.log(message);
    alert(message);
}

function showExamples() {
    console.log("Examples:");

    var w1 = 70;
    var h1 = 1.75;
    var bmi1 = calculateBMI(w1, h1);
    console.log("Weight " + w1 + ", Height " + h1 + " -> BMI: " + bmi1.toFixed(2) + " (" + getCategory(bmi1) + ")");

    var w2 = 95;
    var h2 = 1.75;
    var bmi2 = calculateBMI(w2, h2);
    console.log("Weight " + w2 + ", Height " + h2 + " -> BMI: " + bmi2.toFixed(2) + " (" + getCategory(bmi2) + ")");
}

showExamples();
