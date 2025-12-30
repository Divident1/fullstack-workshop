let isUserValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmValid = false;

const pwdInput = document.getElementById("pwd1");
const confirmPwdInput = document.getElementById("confirm-pwd");
const scoreMsg = document.getElementById("password_score");
const pwdMsg = document.getElementById("pwdV");
const errorMsg = document.getElementById("invalid_user");
const confirmMsg = document.getElementById("conpwdV");

const checkFormValidity = () => {
    const statuses = [isUserValid, isEmailValid, isPasswordValid, isConfirmValid];
    document.getElementById("submitbtn").disabled = !statuses.every(status => status === true);
};

// Validation rules for basic fields
const basicFields = [
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
    }
];

basicFields.forEach(field => {
    const input = document.getElementById(field.id);
    const msg = document.getElementById(field.msgId);
    input.addEventListener("blur", () => {
        const valid = field.regex.test(input.value);
        msg.textContent = valid ? `` : field.error;
        field.setValid(valid);
        checkFormValidity();
    });
});

// Password validation rules
const passwordRules = [
    { test: (pw) => pw.length >= 8, score: 20, error: `Too short (min 8 characters)` },
    { test: (pw) => pw.length >= 12, score: 10 },
    { test: (pw) => /[A-Z]/.test(pw), score: 15, error: `No uppercase letter` },
    { test: (pw) => /[a-z]/.test(pw), score: 15, error: `No lowercase letter` },
    { test: (pw) => /\d/.test(pw), score: 15, error: `No number` },
    { test: (pw) => /[!@#$%^&*()_+\-=]/.test(pw), score: 15, error: `No special character` }
];

const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

const validatePassword = (pwd) => {
    let result = passwordRules.reduce((acc, rule) => {
        if (rule.test(pwd)) {
            acc.score += rule.score;
        } else if (rule.error) {
            acc.errors.push(rule.error);
        }
        return acc;
    }, { score: 0, errors: [] });

    if (commonPasswords.includes(pwd.toLowerCase())) {
        result.score -= 30;
        result.errors.push(`Common/Weak password`);
    }

    result.score = Math.max(0, Math.min(result.score, 100));
    result.isValid = result.score >= 70;
    return result;
};

pwdInput.addEventListener("input", () => {
    const result = validatePassword(pwdInput.value);
    scoreMsg.textContent = `Strength: ${result.score}/100`;

    if (result.isValid) {
        pwdMsg.textContent = `Strong password ✅`;
        pwdMsg.style.color = `green`;
        errorMsg.textContent = ``;
        isPasswordValid = true;
    } else {
        pwdMsg.textContent = ``;
        errorMsg.textContent = result.errors.join(`, `);
        isPasswordValid = false;
    }
    checkFormValidity();
});

confirmPwdInput.addEventListener("blur", () => {
    isConfirmValid = pwdInput.value === confirmPwdInput.value;
    confirmMsg.textContent = isConfirmValid ? `` : `Passwords do not match`;
    checkFormValidity();
});