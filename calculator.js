// Calculator Variables
let operand1 = 0;
let operand2 = 0;
let operator = null;

// Display
let display = document.querySelector(`.display>p`);

// Operands
let btnArray = [];
for(i=0; i<10; i++) {
    btnArray.push(document.querySelector(`#btn${i}`));
}

// Operators
let operations = ['add', 'subtract', 'multiply', 'divide'];
let operatorArray = [];
for(i=0; i<4; i++) {
    operatorArray.push(document.querySelector(`#button-${operations[i]}`))
}

// Actions
let clearAction = document.querySelector(`#button-clear`);
let calculateAction = document.querySelector(`#button-calc`);

// Operation Functions
function add(num1, num2) { return num1 + num2; }
function subtract(num1, num2) { return num1 - num2; }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { return num1 / num2; }

function operate(op1, op2, operator) {
    if (operator == "+") { return add(op1, op2); } 
    else if (operator == "-") { return subtract(op1, op2); } 
    else if (operator == "x") { return multiply(op1, op2); } 
    else if (operator == "/") { return divide(op1, op2); }
}

// Operator Function
function updateOperatorStatus() {
    for(i=0; i<4; i++) {
        operatorArray[i].style["background-color"] = "orange";
    }

    if(operator == "+") {
        operatorArray[0].style["background-color"] = "green";
    } else if(operator == "-") {
        operatorArray[1].style["background-color"] = "green";
    } else if(operator == "x") {
        operatorArray[2].style["background-color"] = "green";
    } else if(operator == "/") {
        operatorArray[3].style["background-color"] = "green";
    }
}

// Attach Operand Listeners
for(i=0; i<10; i++) {
    btnArray[i].addEventListener("click", (event) => {
        newInput = parseInt(event.target.innerText);

        if(operator == null) {
            operand1 = (operand1 * 10) + newInput;
            display.innerText = operand1;
        } else {
            operand2 = (operand2 * 10) + newInput;
            display.innerText = operand2;
        }
    });
}

// Attach Operator Listeners
for(i=0; i<4; i++) {
    operatorArray[i].addEventListener("click", (event) => {
        operator = event.target.innerText;
        console.log(event.target.innerText);
        updateOperatorStatus();
    });
}

// Attach Action Listeners
clearAction.addEventListener("click", () => {
    operand1 = 0;
    operand2 = 0;
    operator = null;
    updateOperatorStatus();
    display.innerHTML = operand1;
});
calculateAction.addEventListener("click", () => {
    if(operator != null) {
        operand1 = operate(operand1, operand2, operator);
        operand2 = 0;
        operator = null;
        updateOperatorStatus();
        display.innerHTML=operand1;
    }
});


