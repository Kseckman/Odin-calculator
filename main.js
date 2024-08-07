let currentScreen = document.querySelector('.current');
let previousScreen = document.querySelector('.previous');
let numberButtons = document.querySelectorAll('.number-button');
let operators = document.querySelectorAll('.key-operator');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let decimal = document.querySelector('.decimal');

let previousValue ='';
let currentValue= '';
let operator='';
let displayValue='';

numberButtons.forEach(button => button.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = displayValue;
}))

function handleNumber(num){
    //if determins if its the first input or after an operator has been called
    if(previousValue != '' &&currentValue.length <=7 ){
        currentValue += num;
        displayValue = previousValue + ' ' + operator + ' ' + currentValue;
        console.log('new cur', currentValue)
    }else if(currentValue.length <=7){
        currentValue += num;
        displayValue =currentValue;
        console.log('cur', currentValue)
    }
}

operators.forEach(op => op.addEventListener('click', function(e){
    // if prevents multiple operators
    if(previousValue === ''){
        handleOperator(e.target.textContent)
        currentScreen.textContent = previousValue + " " + operator;
    }
    // previousScreen.textContent = previousValue + operator;
}))

function handleOperator(op){
    console.log(op)
        operator = op;
        //sets current value to the previous value and empties current for new input
        previousValue = currentValue;
        currentValue = '';
        console.log('prev',previousValue)
}

clear.addEventListener('click', function(){
    previousValue = '';
    currentValue = '';
    operator = '';
    displayValue = '';
    currentScreen.textContent = '0';
    // previousScreen.textContent = currentValue;
})

equal.addEventListener('click', function(){
    if(previousValue && currentValue && operator){
        operate()
        if(previousValue.length <=7){
            currentScreen.textContent = previousValue;
        } else{
            currentScreen.textContent = previousValue.slice(0, 7) + '...'
        }
        currentValue = currentScreen.textContent;
        previousValue ='';
        operator = '';
    }
})

function operate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === '+'){
        previousValue += currentValue;  
    }else if(operator === '-'){
        previousValue == currentValue; 
    }else if(operator === 'x'){
        previousValue *= currentValue; 
    }else if(operator === '+'){
        previousValue += currentValue;
    }else{
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
    console.log('sum', previousValue);
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

decimal.addEventListener('click', function(){
    showDecimal()
})

function showDecimal(){
    if(!currentValue.includes('.')){
        currentValue += '.'
        currentScreen.textContent = previousValue + ' ' + operator + ' ' + currentValue
    }
}