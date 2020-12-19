
let result = 0;
let leftValue = null;
let rightValue = null;
let lastoperator = ' = ';
let operator = ' = ';
let tempInput = [];


const currentinput = document.querySelector("#currentinput");
const historyinput = document.querySelector("#historyinput");

const buttonClear = document.querySelector("#buttonClear");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const button0 = document.querySelector("#button0");
const buttonDecimal = document.querySelector("#buttonDecimal");
const buttonBackspace = document.querySelector("#buttonBackspace");
const buttonSign = document.querySelector("#buttonSign");
const buttonAdd = document.querySelector("#buttonAdd");
const buttonSubtract = document.querySelector("#buttonSubtract");
const buttonMultiply = document.querySelector("#buttonMultiply");
const buttonDivide = document.querySelector("#buttonDivide");
const buttonPower = document.querySelector("#buttonPower");
const buttonEquals = document.querySelector("#buttonEquals");

buttonClear.addEventListener('click', () => clearAll());
button1.addEventListener('click', () => { updateInput('1') });
button2.addEventListener('click', () => { updateInput('2') });
button3.addEventListener('click', () => { updateInput('3') });
button4.addEventListener('click', () => { updateInput('4') });
button5.addEventListener('click', () => { updateInput('5') });
button6.addEventListener('click', () => { updateInput('6') });
button7.addEventListener('click', () => { updateInput('7') });
button8.addEventListener('click', () => { updateInput('8') });
button9.addEventListener('click', () => { updateInput('9') });
button0.addEventListener('click', () => { updateInput('0') });
buttonDecimal.addEventListener('click', () => { updateInput('.') });
buttonBackspace.addEventListener('click', () => { pressBack() });
buttonSign.addEventListener('click', () => { changeSign()});


buttonAdd.addEventListener('click', () => { chooseOperator(lastoperator, ' + '); });
buttonSubtract.addEventListener('click', () => { chooseOperator(lastoperator, ' - '); });
buttonMultiply.addEventListener('click', () => { chooseOperator(lastoperator, ' * '); });
buttonDivide.addEventListener('click', () => { chooseOperator(lastoperator, ' / '); });
buttonPower.addEventListener('click', () => { chooseOperator(lastoperator, ' ^ '); });

buttonEquals.addEventListener('click', () => {
    if (operator == ' = ') {
        console.log('need more input');
        
        return;
    } else {
        rightValue = Number(currentinput.textContent);
        if(lastoperator == ' / ' && rightValue == 0){

            alert('ERROR: Cannot divide by 0');
            clearAll();
            return;
        }
        result = operate(leftValue, rightValue, operator);
        leftValue = result;
        operator = ' = ';
        lastoperator = ' = ';
        currentinput.textContent = result;
        historyinput.textContent += rightValue + operator;
        

        console.log(leftValue, rightValue, lastoperator, operator);


    }

});

function chooseOperator(lastoper, currentoper) {

    if (lastoper == ' = ') {
        leftValue = Number(currentinput.textContent);
        operator = currentoper; console.log(lastoperator, operator);
        lastoperator = operator; console.log(lastoperator, operator);

        currentinput.textContent = '0';
        historyValue = leftValue + operator;
        historyinput.textContent = historyValue;

    } else {
        rightValue = Number(currentinput.textContent);
        if(lastoperator == ' / ' && rightValue == 0){

            alert('ERROR: Cannot divide by 0');
            clearAll();
            return;
        }
        result = operate(leftValue, rightValue, lastoperator);
        operator = currentoper;

        console.log(leftValue + lastoperator + rightValue + ' results to: ' + result + '  ' + lastoperator, operator);

        lastoperator = operator;
        leftValue = result;
        currentinput.textContent = '0';
        historyinput.textContent = result + operator;


    }
}

function clearAll() {
    result = 0;
    leftValue = null;
    rightValue = null;
    operator = ' = ';
    lastoperator = ' = ';
    currentinput.textContent = '0';
    historyinput.textContent = '';
    console.log('left value: ' + leftValue + ' right value: ' + rightValue + ' operator: ' + lastoperator, operator);
}


function pressBack(){
    
    if(currentinput.textContent == '0')
        return;

    tempInput = currentinput.textContent.split('');
    tempInput.pop();
    console.table(tempInput);

    if(tempInput.length == 0)
        currentinput.textContent = '0';
    else
        currentinput.textContent = tempInput.join('');

    tempInput = [];
}

function changeSign(){
    if(currentinput.textContent == '0')
        return;
    
    tempInput = currentinput.textContent.split('');

    if(tempInput[0] == '-')
        tempInput.shift();
    else  
        tempInput.unshift('-');

    currentinput.textContent = tempInput.join('');
    tempInput = [];
    


    
}

function updateInput(val) {

    if (operator == ' = ') {
        clearAll();
        operator = '';
    }

    if (currentinput.textContent == '0') {
        if (val == '.')
            currentinput.textContent += val;
        else
            currentinput.textContent = val;
    }
    else {

        switch (val) {
            case '1':
                currentinput.textContent += 1;
                break;
            case '2':
                currentinput.textContent += 2;
                break;
            case '3':
                currentinput.textContent += 3;
                break;
            case '4':
                currentinput.textContent += 4;
                break;
            case '5':
                currentinput.textContent += 5;
                break;
            case '6':
                currentinput.textContent += 6;
                break;
            case '7':
                currentinput.textContent += 7;
                break;
            case '8':
                currentinput.textContent += 8;
                break;
            case '9':
                currentinput.textContent += 9;
                break;
            case '0':
                currentinput.textContent += 0;
                break;
            case '.':
                if (currentinput.textContent.includes('.')) {
                    break;
                } else {
                    currentinput.textContent += '.';
                }
                break;
        }
    }

}

function operate(val1, val2, oper) {

    let answer = 0;

    switch (oper) {
        case ' + ':
            answer = add(val1, val2);
            return answer;
        case ' - ':
            answer = subtract(val1, val2);
            return answer;
        case ' * ':
            answer = multiply(val1, val2);
            return answer;
        case ' / ':
            answer = divide(val1, val2);
            return answer;
        case ' ^ ':
            answer = power(val1, val2);
            return answer;

    }

}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

