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

display();

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

function display() {
    let numButtons = document.querySelectorAll(".numButton");
    let display = document.querySelector(".display");
    numButtons.forEach((button)=>{
        button.addEventListener("click", ()=>{
            displayNum = button.textContent;
            display.textContent = displayNum;
        });
    });
}