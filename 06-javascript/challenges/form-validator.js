let isUserValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmValid = false;

const pwdInput = document.getElementById("pwd");
const confirmPwdInput = document.getElementById("confirm-pwd");
const confirmMsg = document.getElementById("conpwdV");

// Final check function
const checkFormValidity = () => {
    const isValid = [isUserValid, isEmailValid, isPasswordValid, isConfirmValid].every(v => v === true);
    document.getElementById("submitbtn").disabled = !isValid;
};

// Configuration for field validations
const validationRules = [
    {
        id: "user",
        msgId: "userV",
        regex: /^[a-zA-Z0-9]{3,15}$/,
        error: `Username must be 3–15 characters (letters & numbers only)`,
        setValid: (v) => isUserValid = v
    },
    {
        id: "email",
        msgId: "emailV",
        regex: /^[a-z0-9._%-]+@[a-z]+\.[a-z]{2,}$/,
        error: `Invalid email address format`,
        setValid: (v) => isEmailValid = v
    },
    {
        id: "pwd",
        msgId: "pwdV",
        regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&*]).{8,}$/,
        error: `Password must be 8+ chars with uppercase, lowercase, number & symbol`,
        setValid: (v) => isPasswordValid = v
    }
];

// Apply validations using array method
validationRules.forEach(rule => {
    const input = document.getElementById(rule.id);
    const msgArea = document.getElementById(rule.msgId);

    input.addEventListener("blur", () => {
        const isValid = rule.regex.test(input.value);
        msgArea.textContent = isValid ? `` : rule.error;
        rule.setValid(isValid);
        checkFormValidity();
    });
});

// Confirm Password specific logic
confirmPwdInput.addEventListener("blur", () => {
    isConfirmValid = pwdInput.value === confirmPwdInput.value;
    confirmMsg.textContent = isConfirmValid ? `` : `Passwords do not match`;
    checkFormValidity();
});