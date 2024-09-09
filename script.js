let firstVar = 0;
let secondVar = 0;
let operator = '';
let displayNum = 5;

let display = document.querySelector(".display");
let numButton = document.querySelectorAll(".numbutton");
let opButton = document.querySelectorAll(".opbutton");

numButton.forEach((button)=> {
    button.addEventListener("click", ()=>{
        displayNum = parseInt(button.textContent);
    });
});

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