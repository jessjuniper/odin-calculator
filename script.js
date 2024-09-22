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

let firstNum = null;
let secondNum = null;
let operator = null;
let displayNum = null;

function operate(firstNum, secondNum, operator) {
    if (operator == "+") {
        return add(firstNum, secondNum);
    }
    else if (operator == "-") {
        return subtract(firstNum, secondNum);
    }
    else if (operator == "*") {
        return multiply(firstNum, secondNum);
    }
    else if (operator == "/") {
        return divide(firstNum, secondNum);
    }
}

let numButtons = document.querySelectorAll(".numButton");
let displayBox = document.querySelector(".display");
numButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        display(button);
    });
});

function display(number) {
    displayNum = parseInt(number.textContent);
    displayBox.textContent = displayNum;
    numCheck();
}

let opButtons = document.querySelectorAll(".opButton");
opButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        operator = button.textContent;
    });
});

function numCheck() {
    if (firstNum && operator) {
        secondNum = displayNum;
    }
    else {
        firstNum = displayNum;
    }
}

let equalButton = document.querySelector(".equalButton");
equalButton.addEventListener("click", ()=>{
    let result = operate(firstNum,secondNum,operator);
    let display = document.querySelector(".display");
    display.textContent = result;
});

let clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", ()=>{
    firstNum = null;
    secondNum = null;
    loperator = null;
    displayNum = null;
    displayBox.textContent = "0";
});