
let operand1 = 0;
let operand2 = 0;
let operator = null;

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


