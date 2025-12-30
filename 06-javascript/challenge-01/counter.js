let count = 0;
let step = 1;

const display = document.getElementById("val");

// Utility function using template literal
const updateDisplay = () => {
    display.textContent = `${count}`;
};

// Counter action buttons
const actionButtons = [
    { id: "add", change: () => count += step, color: "green" },
    { id: "sub", change: () => count -= step, color: "red" },
    { id: "reset", change: () => count = 0, color: "black" }
];

actionButtons.forEach(({ id, change, color }) => {
    const btn = document.getElementById(id);
    btn.style.color = color;
    btn.addEventListener("click", () => {
        change();
        updateDisplay();
    });
});

// Step selection buttons using array method
const stepValues = [
    { id: "one", value: 1 },
    { id: "five", value: 5 },
    { id: "ten", value: 10 }
];

stepValues.forEach(({ id, value }) => {
    document.getElementById(id).addEventListener("click", () => {
        step = value;
        console.log(`Step updated to: ${step}`);
    });
});
