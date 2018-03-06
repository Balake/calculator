
const display = document.querySelector('#display-text');
const buttons = document.querySelectorAll('button');

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => addToDisplay(event.srcElement.id));
}


function addition(n, m) {
    return n + m;
}

function subtraction(n, m) {
    return n - m;
}

function multipy(n, m) {
    return n * m; 
}

function divide(n , m) {
    return n / m;
}

function operate(o, n, m) {
    switch (o)  {
        case '+': return addition(n, m);
        case '-': return subtraction(n, m);
        case '*': return multipy(n, m);
        case '/': return divide(n, m);
    }
}
 

function addToDisplay(x) {
    (x == 'clear') ? display.textContent = '' : display.textContent += x; 
}