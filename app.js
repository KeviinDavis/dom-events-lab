/*-------------------------------- Constants --------------------------------*/
const numberButtons = document.querySelectorAll('.button.number');
const operatorButtons = document.querySelectorAll('.button.operator');
const equalsButton = document.querySelector('.button.equals');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let currentNumber = '';
let storedNumber = '';
let operator = '';

/*----------------------------- Event Listeners -----------------------------*/
numberButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        currentNumber += event.target.innerText;
        display.innerText = currentNumber;
    });
});

operatorButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        storedNumber = currentNumber;
        operator = event.target.innerText;
        currentNumber = '';
        display.innerText = '';
    });
});

equalsButton.addEventListener('click', function() {
    let result;
    const num1 = parseFloat(storedNumber);
    const num2 = parseFloat(currentNumber);

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }

    display.innerText = result;
    currentNumber = result.toString();  // Set currentNumber to the result for continued operations
    storedNumber = '';
    operator = '';
});

/*-------------------------------- Functions --------------------------------*/
// Additional functions can be defined here if needed
