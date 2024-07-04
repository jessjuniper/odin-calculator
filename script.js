function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let firstVar = 0;
let secondVar = 0;
let operator = '';

function operate(firstVar, secondVar, operator) {
    if (operator == '+') {
        return add(firstVar, secondVar);
    }
    else if (operator == '-') {
        return subtract(firstVar, secondVar);
    }
    else if (operator == '*') {
        return multiply(firstVar, secondVar);
    }
    else if (operator == '/') {
        return divide(firstVar, secondVar);
    }
    else {
        console.log("Something's wrong!");
    }
}