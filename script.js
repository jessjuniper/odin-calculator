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
let decMarker = false;

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
add click functionality to decimal button, on click check if display already has
decimal, if so exit, if displayNum is null or 0 set displaynum to 0.0 and set decimal marker for true
so numbutton can add the decimal point for later input, else just concat the decimal point and also
set decimal marker true for the next number input
*/
let decButton = document.querySelector(".decButton");
decButton.addEventListener("click", ()=> {
    if (displayNum === 0.0){
        return;
    }
    else if (!displayNum){
        displayBox.textContent = "0.";
        displayNum = 0.0;
        decMarker = true;
    }
    else if (displayNum){
        displayBox.textContent = displayNum.toString().concat(".");
        decMarker = true;
    }
});

/*
check for displaynum, if it already exists allow multiple numbers to be entered and stored
else just store the single digit, always display whatever the displaynum is
*/
function display(number) {
    if (decMarker) {
        displayNum = parseFloat(displayNum.toString().concat(".",number.textContent));
        decMarker = false;
    }
    else if (displayNum){
        displayNum = parseFloat(displayNum.toString().concat(number.textContent));
    }
    else {
        displayNum = parseFloat(number.textContent);
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
            displayNum = null; //need this or display breaks
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
                decMarker = false;
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
        decMarker = false;
    }
});

//on clear button click reset all variables and display
let clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", ()=>{
    firstNum = null;
    secondNum = null;
    operator = null;
    displayNum = null;
    decMarker = false;
    displayBox.textContent = "0";
});