let fnum = "", snum = "", operator = null;
let shouldResetScreen = false;
const numButton = document.querySelectorAll(".inline-button");
const signButton = document.querySelectorAll(".inline-sign")
const screen = document.getElementById("display");
const curscreen = document.getElementById("cur-display")

numButton.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)

signButton.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)

function appendNumber(number) {
    if (curscreen.textContent === '0')
    {
        curscreen.textContent = number;
    }
    else if (word.endsWith("clear")){
        clear()
    }
    else
    {
        curscreen.textContent += number;
    }
}

function appendSign(sign) {
    word = screen.textContent;
    if (sign == '='){
        let first = word.slice;
    }
}

function clear() {
    screen.textContent = "0";
    fnum = 0;
    snum = 0;
    operator = null;
}

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function operate(a, b, sign){
    if (sign == "+"){
        return add(a,b);
    }else if (sign == "-"){
        return sub(a,b);
    }else if (sign == "/"){
        return div(a,b);
    }else{
        return mult(a,b);
    }
}
