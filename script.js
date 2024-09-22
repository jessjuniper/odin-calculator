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
        numCheck();
    });
});

function display(number) {
    if (displayNum){
        displayNum = parseInt(displayNum.toString().concat(number.textContent));
    }
    else {
        displayNum = parseInt(number.textContent);
    }
    displayBox.textContent = displayNum;
}

let opButtons = document.querySelectorAll(".opButton");
opButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
            displayNum = null;
            if (operator && !secondNum) {
                operator = button.textContent;
            }
            else if (operator) {
                let result = operate(firstNum,secondNum,operator);
                displayBox.textContent = result;
                firstNum = result;
                secondNum = null;
                displayNum = null;
            }
            else {
                operator = button.textContent;
            }
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
    if (!operator || (firstNum && !secondNum)) {
        return;
    }
    else {
        let result = operate(firstNum,secondNum,operator);
        displayBox.textContent = result;
        firstNum = result;
        secondNum = null;
        operator = null;
        displayNum = null;
    }
});

let clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", ()=>{
    firstNum = null;
    secondNum = null;
    operator = null;
    displayNum = null;
    displayBox.textContent = "0";
});