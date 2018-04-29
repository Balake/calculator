const display = document.querySelector('#display-text');
const buttons = document.querySelectorAll('button');

const operators = ['+', '-', '*', '/', '='];

let currentValue = '0';
let operator = '';
let previousValue = '';
let lastButtonPressed = '';

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => updateDisplay(event.srcElement.id));
}

document.addEventListener("keypress", (event) => {
    if (!isNaN(event.key)) {
        updateDisplay(event.key);
    } else if(operators.indexOf(event.key) > -1) {
        updateDisplay(event.key);
    } else if (event.key = "Enter") {
        updateDisplay("=");
    }
})


function addition(n, m) {
    return Number(n) + Number(m);
}

function subtraction(n, m) {
    return Number(n) - Number(m);
}

function multipy(n, m) {
    return n * m; 
}

function divide(n , m) {
    if (m == 0) {
        return 'ERROR';
    } else {
        return n / m;
    }
}

function operate(o, n, m) {
    switch (o)  {
        case '+': return addition(n, m);
        case '-': return subtraction(n, m);
        case '*': return multipy(n, m);
        case '/': return divide(n, m);
    }
}
 

function updateDisplay(x) {
    // clear button has been pressed
    if (x == 'clear') {
        currentValue = '0';
        operator = '';
    } else if (display.textContent == 'ERROR'){
        currentValue = '0';
        operator = '';
        display.textContent = '0';
        updateDisplay(x);
    // the button pressed is a number
    } else if(!operators.includes(x) && x != '.') {
        (currentValue == '0' && x == 0) ? currentValue : (currentValue == '0' && x != 0) ? currentValue = x : currentValue += x;   
    } else if(x == '.') {
        (currentValue.indexOf('.') > -1) ? currentValue : currentValue += x;
    // the button pressed is an operator and an operator hasn't been pressed yet 
    } else if(operators.includes(x) && operator == '') {
        console.log("First operator pressed");
        previousValue = currentValue;
        currentValue = '0';
        operator = x;
        lastButtonPressed = x;
        return;
    } else if(x == '=' && lastButtonPressed != '=') {
        console.log("Calculating because '=' was pressed...");
        currentValue = operate(operator, previousValue, currentValue);
        operator = '';
    
    // the button pressed is an operator and an operator has been pressed before (chaining operations)
    } else if (operators.includes(x) && operator != '' && x != lastButtonPressed) {
        console.log(operator, currentValue, previousValue);
        currentValue = operate(operator, previousValue, currentValue);
        operator = '';
    }
    display.textContent = currentValue;
    lastButtonPressed = x;
}