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

//start with all variables at null
let firstNum = null; 
let secondNum = null;
let operator = null;
let displayNum = null;

//operate function to call later
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

/*
add click functionality to  number buttons, on click run display function
with button text content as input, also check whether to fill firstnum or secondnum
*/
let numButtons = document.querySelectorAll(".numButton");
let displayBox = document.querySelector(".display");
numButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        display(button);
        numCheck();
    });
});

/*
check for displaynum, if it already exists allow multiple numbers to be entered and stored
else just store the single digit, always display whatever the displaynum is
*/
function display(number) {
    if (displayNum){
        displayNum = parseInt(displayNum.toString().concat(number.textContent));
    }
    else {
        displayNum = parseInt(number.textContent);
    }
    displayBox.textContent = displayNum;
}

/*
add click functionality to operator buttons, on click 
check if operator exists and if secondnum is empty, if so just set operator and leave,
else check if dividing by zero, if so set operator and display error message,
else check if operator is already filled (and implicitly if secondnum is also filled)
this meets criteria to run operate and does so, rounds decimal if needed, displays result
and resets the variables except firstnum which is now the result, also sets operator,
all else just set operator
*/
let opButtons = document.querySelectorAll(".opButton");
opButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
            //displayNum = null; can't remember why i added this it seems redundant
            if (operator && secondNum == null) {
                operator = button.textContent;
            }
            else if (secondNum == 0 && operator == "/") {
                operator = button.textContent;
                displayBox.textContent = "Don't divide by zero!!"
            }
            else if (operator) {
                let result = operate(firstNum,secondNum,operator);
                if (result % 1 != 0) {
                    result = result.toPrecision(9);
                }
                displayBox.textContent = result;
                firstNum = result;
                secondNum = null;
                displayNum = null;
                operator = button.textContent;
            }
            else {
                operator = button.textContent;
            }
    });
});

/*
check which variable to fill when display is being updated
if firstnum and operator are filled then fill secondnum, else
just fill firstnum
*/
function numCheck() {
    if (firstNum && operator) {
        secondNum = displayNum;
    }
    else {
        firstNum = displayNum;
    }
}

/*
on equal button click check if operator is empty or if only firstnum is filled,
if true cant operate so just exit, else if dividing by zero display error message,
else do the operation, round decimal, display result, set firstnum to result and reset
the other variables
*/
let equalButton = document.querySelector(".equalButton");
equalButton.addEventListener("click", ()=>{
    if (!operator || (firstNum && secondNum == null)) {
        return;
    }
    else if (secondNum == 0 && operator == "/") {
        displayBox.textContent = "Don't divide by zero!!"
    }
    else {
        let result = operate(firstNum,secondNum,operator);
        if (result % 1 != 0) {
            result = result.toPrecision(9);
        }
        displayBox.textContent = result;
        firstNum = result;
        secondNum = null;
        operator = null;
        displayNum = null;
    }
});

//on clear button click reset all variables and display
let clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", ()=>{
    firstNum = null;
    secondNum = null;
    operator = null;
    displayNum = null;
    displayBox.textContent = "0";
});