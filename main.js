
let x , y, operator;
let displayValue

function add(x, y){
    return x + y
}

function subtract(x, y){
    return x - y
}

function multiply(x,y){
    return x * y
}

function divide(x,y){
    return x / y
}

function operate(x, y, operator){
    switch(operator){
        case '+':
            return add(Number(x), Number(y));
        case '-':
            return subtract(Number(x), Number(y));
        case '*':
            return multiply(Number(x), Number(y));
        case '/':
            return divide(Number(x), Number(y));
        default:
            return undefined
    }
}


    let displayField = document.querySelector('#displayfield');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function(e){
            displayField.innerHTML += ` ${e.target.id} `; 
            console.log('hello')
        })
    })