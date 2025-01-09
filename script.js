// Basic operations
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    modulo: (a, b) => a % b,
}

const operate = (operator, operand1, operand2) => {
    switch (operator) {
        case "+":
            return operations.add(operand1, operand2);
            break;
        case "-":
            return operations.subtract(operand1, operand2);
            break;
        case "*":
            return operations.multiply(operand1, operand2);
            break;
        case "/":
            return operations.divide(operand1, operand2);
            break;
        case "%":
            return operations.modulo(operand1, operand2);
            break;
        default:
            return "Not a valid operator!";
            break;
    }
}

class Calculator {
    constructor(displayElement) {
        this.display = displayElement;
        this.expression = "";
    }

    isOperator(char) {
        return ['+', '-', '*', '/', '%'].includes(char);
    }

    hasCompleteExpression(expr) {
        return expr.split(/[\+\-\*\/\%]/).length >= 2;
    }

    updateDisplay() {
        this.display.value = this.expression;
    }

    evaluateExpression(expr) {
        const numbers = expr.split(/[\+\-\*\/\%]/).map(num => parseInt(num));
        const operators = expr.split("").filter(char => this.isOperator(char));

        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            result = operate(operators[i], result, numbers[i + 1]);
        }
        return result;
    }

    clear() {
        this.expression = "";
        this.updateDisplay();
    }

    calculate() {
        const result = this.evaluateExpression(this.expression);
        this.expression = String(result);
        this.updateDisplay();
    }

    updateExpression(val) {
        if (this.isOperator(val) && this.hasCompleteExpression(this.expression)) {
            const result = this.evaluateExpression(this.expression);
            this.expression = result + val;
        } else {
            this.expression += val;
        }
        this.updateDisplay();
    }

    handleInput(val) {
        if (val === 'C') {
            this.clear();
        } else if (val === "=") {
            this.calculate();
        } else {
            this.updateExpression(val);
        }
    }
}

function initCalculator() {
    const display = document.querySelector("#display");
    const calc = new Calculator(display);

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", e => {
            calc.handleInput(e.target.textContent);
        })
    })
}

document.addEventListener('DOMContentLoaded', initCalculator);