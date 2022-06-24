//global variables
let tempNum = "";
let num1 = 0;
let num2 = 0;
let operator = "";

//select elements
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const point = document.querySelector('#point');
const equals = document.querySelector('#equals');
disabled(equals);

//add event handlers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => clickedNumber(e.target));
}
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', (e) => clickedOperator(e.target));
}
equals.addEventListener('click', clickedEquals);
clear.addEventListener('click', () => window.location.reload()); 

function operate(a, b, operator) {
    let result = "";

    if (operator === '+') {
        result = add(a, b).toString();
    }else if (operator === '-') {
        result = subtract(a, b).toString();
    }else if (operator === 'x') {
        result = multiply(a, b).toString();
    }else {
        result = divide(a, b).toString();
    }
    if (result === 'ERROR') {
        refreshDisplay(result);
        disableAll();
    }else {
        if (result.length > 10) {
            let index = result.indexOf('.');
            if (index === -1 || index > 9) {
                result = 'OVERFLOW';
                disableAll();
            }else {
                let num = +result;
                result = num.toFixed(9-index);
            }
        }
        tempNum = result;
        num1 = +result;
        num2 = 0;

        refreshDisplay(result);
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
        return "ERROR";
    }else {
        return a / b;
    }
}

function refreshDisplay(show) {
    const display = document.querySelector('#display');
    display.textContent = show;
}

function clickedNumber(button) {
    if (button.id === "point") {
        disabled(button);
    }
    tempNum += button.textContent;
    refreshDisplay(tempNum);
    if (tempNum.length > 9 || tempNum.length > 1 && tempNum[tempNum.length-2] === '.'){
        numbers.forEach(disabled);
    }
    if (tempNum !== "" && operator !== "" && button.id !== "point") {
        enabled(equals);
    }
}

function clickedOperator(button) {
    num1 = +tempNum;
    tempNum = "";
    operator = button.textContent;
    refreshDisplay(operator);
    numbers.forEach(enabled);
    operators.forEach(disabled);
}

function clickedEquals(button) {
    num2 = +tempNum;
    numbers.forEach(disabled);
    operators.forEach(enabled);
    operate(num1, num2, operator);
}

function disabled(button) {
    button.disabled = true;
}

function enabled(button) {
    button.disabled = false;
}

function disableAll() {
    numbers.forEach(disabled);
    operators.forEach(disabled);
    disabled(equals);
}