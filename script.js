let firstVar;
let secondVar;
let operator;
let displayNum;

let display = document.querySelector(".display");
let numButton = document.querySelectorAll(".numbutton");
let opButton = document.querySelectorAll(".opbutton");
let equalButton = document.querySelector(".equalbutton");

numButton.forEach((button)=> {
    button.addEventListener("click", ()=>{
        displayNum = parseInt(button.textContent);
        display.textContent = displayNum;
    });
});

opButton.forEach((button)=> {
    button.addEventListener("click", ()=>{
        operator = parseInt(button.textContent);
    })
});

equalButton.addEventListener("click", ()=>{
    if (!operator || !firstVar || !secondVar) {
        return;
    }
    else {
        displayNum = operate(firstVar,secondVar,operator);
        display.textContent = displayNum;
    }
});

clearButton.addEventListener("click", ()=> {
    operator = null;
    firstVar = null;
    secondVar = null;
    display.textContent = '';
})

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