const display = document.querySelector('.calc-screen')
const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const displayResult = document.querySelector(".result");
// const lastOperationScreen = document.querySelector('.lastOperationScreen')
// const currentOperationScreen = document.querySelector('.currentOperationScreen')
const modifier = document.querySelectorAll('.modifier')
const clear = document.querySelector('#clear')
const negate = document.querySelector('#negate')
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
let haveNegative = false;

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

//Event listener for the negate button
negate.addEventListener("click", () => {
    //change the string to number to toggle between multiplied by a negative one then changed back to string.
    display2.innerText = (Number(display2.innerText)*-1).toString() ;
    //this allows display1 to display the number previously entered in display2
    display1.innerText = display2.innerText
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
