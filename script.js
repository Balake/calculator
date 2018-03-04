
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