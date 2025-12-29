function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

function runConverter() {
    console.log("Temperature Converter");
    console.log("---------------------");

    var choice = prompt("What do you want to convert?\n1 = Celsius to Fahrenheit\n2 = Fahrenheit to Celsius");

    if (choice != "1" && choice != "2") {
        alert("Wrong choice! Enter 1 or 2 only.");
        return;
    }

    var temp = prompt("Enter temperature:");
    temp = parseFloat(temp);

    if (isNaN(temp)) {
        alert("Please enter a valid number!");
        return;
    }

    var result;
    var output;

    if (choice == "1") {
        result = celsiusToFahrenheit(temp);
        output = temp + " Celsius = " + result.toFixed(2) + " Fahrenheit";
    } else {
        result = fahrenheitToCelsius(temp);
        output = temp + " Fahrenheit = " + result.toFixed(2) + " Celsius";
    }

    console.log(output);
    alert(output);
}

function showExamples() {
    console.log("Some Examples:");
    console.log("--------------");

    console.log("Celsius to Fahrenheit:");
    console.log("0 C = " + celsiusToFahrenheit(0).toFixed(2) + " F");
    console.log("20 C = " + celsiusToFahrenheit(20).toFixed(2) + " F");
    console.log("37 C = " + celsiusToFahrenheit(37).toFixed(2) + " F");
    console.log("100 C = " + celsiusToFahrenheit(100).toFixed(2) + " F");

    console.log("");

    console.log("Fahrenheit to Celsius:");
    console.log("32 F = " + fahrenheitToCelsius(32).toFixed(2) + " C");
    console.log("68 F = " + fahrenheitToCelsius(68).toFixed(2) + " C");
    console.log("98.6 F = " + fahrenheitToCelsius(98.6).toFixed(2) + " C");
    console.log("212 F = " + fahrenheitToCelsius(212).toFixed(2) + " C");
}

showExamples();
