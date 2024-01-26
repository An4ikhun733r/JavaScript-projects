let fnum = "";
let snum = "";
let operator = null;
let shouldResetScreen = false;
const numButton = document.querySelectorAll(".inline-button");
const signButton = document.querySelectorAll(".inline-sign")
const lastscreen = document.getElementById("display");
const curscreen = document.getElementById("cur-display")

numButton.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)

signButton.forEach((button) =>
    button.addEventListener('click', () => appendSign(button.textContent))
)

function appendNumber(number) {
    if (curscreen.textContent === '0')
    {
        curscreen.textContent = number;
    }
    else
    {
        curscreen.textContent += number;
    }
}

function appendSign(sign) {
    if(sign == "clear"){
        clear()
        return
    }
    if (sign == "="){
        snum = curscreen.textContent.slice(1);
        curscreen.textContent += sign;
        fnum = parseInt(fnum);
        snum = parseInt(snum);
        curscreen.textContent = operate(fnum, snum, prevsign);
        lastscreen.textContent = ""
        return
    }else{
        prevsign = sign
    }
    curscreen.textContent += sign;
    lastscreen.textContent = curscreen.textContent;
    fnum = lastscreen.textContent.slice(0, -1);
    curscreen.textContent = "‎ "
}

function clear() {
    curscreen.textContent = "0";
    lastscreen.textContent = "‎ ";
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
    }else if (sign == "÷"){
        return div(a,b);
    }else{
        return mult(a,b);
    }
}
