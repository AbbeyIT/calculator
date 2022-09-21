const display = document.querySelector('.calc-screen')
const lastOperationScreen = document.querySelector('.lastOperationScreen')
const currentOperationScreen = document.querySelector('.currentOperationScreen')
const modifier = document.querySelectorAll('.modifier')
const operator = document.querySelectorAll('.operator')
const number = document.querySelectorAll('.number')
const equal = document.querySelector('.equal')
const decimal = document.querySelector('.decimal')

// let screen = document.querySelector('.calc-screen');
// let displayValue = screen.textContent;
let displayNum1 = '';
let num2 = '';
let result = null;
let lastOperation = ''
let dot = false;

number.forEach(num => {
    num.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !dot) {
            dot = true;
        }
        else if(e.target.innerText === '.' && fot) {
            return;
        }
        displayNum1 += e.target.innerText;
        display.innerText = displayNum1;
    })
})

operator.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if(!displayNum1) result;
        dot = false;
        const operationName = e.target.innerText;
        if(displayNum1 && num2 && lastOperation) {
            mathOperation();
        }
        else {
            result = parseFloat(displayNum1);
        }
        clearVar(operationName);
        console.log(result);
    })
})

function clearVar(name = '') {
    num2 += displayNum1 + '' + name + '';
    display.innerText = num2;
    displayNum1 = '';
}

function mathOperation() {
    if(lastOperation) {
        if (lastOperation === "x") {
            result = parseFloat(result) * parseFloat(dis2Num);
        } else if (lastOperation === "+") {
            result = parseFloat(result) + parseFloat(dis2Num);
        } else if (lastOperation === "-") {
            result = parseFloat(result) - parseFloat(dis2Num);
        } else if (lastOperation === "/") {
            result = parseFloat(result) / parseFloat(dis2Num);
        } else if (lastOperation === "%") {
            result = parseFloat(result) % parseFloat(dis2Num);
        }
    }
}






// let screen = document.querySelector('.calc-screen');
// let displayValue = screen.textContent;

// const add = function(a, b) {
//     return a + b;
// }

// const sub = function(a, b) {
//     return a - b;
// }

// const multiply = function(a, b) {
//     let product = a * b;
//     return product;
// }

// const divide = function(a, b) {
//     let quotient = a / b;
//     return quotient;
// }

// function operate (a, b, operator) {
//     switch(operator) {
//         case 'add': 
//             return add(a, b);
//             break;
//         case 'sub': 
//             return sub(a, b);
//             break;
//         case'multiply': 
//             return parseFloat(multiply(a, b).toFixed(6));
//             break;
//         case 'divide':
//             if (b === 0) {
//                 return 'underfined'
//             }
//             else {
//                 return parseFloat(divide(a, b).toFixed(6));
//             }
//     }
// }

// let screen = document.querySelector('.calc-screen');
// let displayValue = screen.textContent;
// let operator;
// let num1;
// let num2;

// const numbers = document.querySelector('number')
// const display = document.querySelector('.calc-screen')
// numbers.addEventListener('click', event => {
//     if (!event.target.closest('button')) return

//     const num = event.target
//     const numValue = num.textContent
//     const displayValue = display.textContent
    
//     display.textContent = numValue
// })

// let numbers = document.querySelectorAll('.number')
// for(let button of numbers) {
//     button.addEventListener('click', () => {
        
//     })
// }


// const operators = document.querySelector('.operator');
// for (let button of operators) {
//     black.addEventListener('click', () => {

//     });
// }
