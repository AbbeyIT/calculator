const display = document.querySelector('.calc-screen')
const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const displayResult = document.querySelector(".result");
// const lastOperationScreen = document.querySelector('.lastOperationScreen')
// const currentOperationScreen = document.querySelector('.currentOperationScreen')
const modifier = document.querySelectorAll('.modifier')
const clear = document.querySelector('#clear')
const operator = document.querySelectorAll('.operator')
const numbers = document.querySelectorAll('.number')
const equals = document.querySelector('#equals')
const decimal = document.querySelector('.decimal')
const percent = document.querySelector('#percent');
let displayVal1 = display1.textContent;
let displayVal2 = display1.textContent;

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
        haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
        return;
        }
        dis2Num += e.target.innerText;
        display2.innerText = dis2Num;
        // console.log();
    });
});

operator.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
            clearVar(operationName);
            lastOperation = operationName;
            console.log(result);
    });
});

function clearVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    display1.innerText = dis1Num;
    display2.innerText = "";
    dis2Num = "";
    displayResult.innerText = result;
}

function mathOperation() {
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
// operation();

equals.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    displayResult.innerText = "";
    dis2Num = result;
    dis1Num = "";
});

clear.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    display1.innerText = "";
    display2.innerText = "";
    result = "";
    displayResult.innerText = "";
});

clear.addEventListener("click", () => {
    display2.innerText = "";
    dis2Num = "";
});

percent.addEventListener('click', () => {
    displayVal1 = display1.textContent;
    displayVal1 = +displayVal1 / 100;
    display1.textContent = displayVal1;
});

percent.addEventListener('click', () => {
    displayVal2 = display2.textContent;
    displayVal2 = +displayVal2 / 100;
    display2.textContent = displayVal2;
});

window.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ) {
        clickButtonEl(e.key);
        // console.log(e.key)
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
        clickOperation(e.key);
    } else if (e.key === "*") {
        clickOperation("x");
        // console.log(e.key)
    } else if (e.key == "Enter" || e.key === "=") {
        clickEqual();
    }
  // console.log(e.key)
});
function clickButtonEl(key) {
    numbers.forEach((button) => {
        if (button.innerText === key) {
        button.click();
        }
});
}
function clickOperation(key) {
    operator.forEach((operation) => {
        if (operation.innerText === key) {
        operation.click();
        }
    });
}
function clickEqual() {
    equals.click();
}



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
