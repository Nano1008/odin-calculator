const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const modulo = function (a, b) {
    return a % b;
}

const operate = function (operator, operand1, operand2) {
    switch (operator) {
        case "+":
            return add(operand1, operand2)
            break;
        case "-":
            return subtract(operand1, operand2);
            break;
        case "*":
            return multiply(operand1, operand2);
            break;
        case "/":
            return divide(operand1, operand2);
            break;
        case "%":
            return modulo(operand1, operand2);
            break;
        default:
            return "Not a valid operator!";
            break;
    }
}

const buttons = document.querySelectorAll("button");
let display = document.querySelector("#display");
let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", e => {
        const value = e.target.textContent;

        if (value === "C") {
            expression = "";
            display.value = expression;
        } else if (value === "=") {
            const operand1 = parseInt(expression.charAt(0));
            const operator = expression.charAt(1);
            const operand2 = parseInt(expression.charAt(2));
            const result = operate(operator, operand1, operand2);
            display.value = result;

        } else {
            expression += value;
            display.value = expression;
        }
    })
});