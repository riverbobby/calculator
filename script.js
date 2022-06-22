function operate(a, b, operator) {
    let result = "";

    if (operator === '+') {
        result = add(a, b);
    }else if (operator === '-') {
        result = subtract(a, b);
    }else if (operator === '*') {
        result = multiply(a, b);
    }else if (operator === '/') {
        result = divide(a, b);
    }else {
        result = "Unknown ERROR";
    }

}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Divide by zero ERROR";
    }else {
        return a / b;
    }
}

function refreshDisplay() {

}