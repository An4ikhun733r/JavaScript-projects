let fnum = "";
let snum = "";
let prevsign = "";
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
    if (curscreen.textContent === '0' || shouldResetScreen) {
        curscreen.textContent = number;
        shouldResetScreen = false;
    } else {
        curscreen.textContent += number;
    }
}

function isSign(sign){
    if (sign == '×' || sign == '+' || sign == '-' || sign == '÷'){
        return true
    }
    return false
}

function appendSign(sign) {
    if(sign == "clear"){
        clear()
        return
    }

    if (isSign(sign)){
        lastscreen.textContent = curscreen.textContent + sign;
        curscreen.textContent = "";
    }    

    fnum = lastscreen.textContent.slice(0, -1);

    if (sign == "="){
        snum = curscreen.textContent;
        fnum = parseFloat(fnum);
        snum = parseFloat(snum);
        alert(fnum)
        alert(snum)
        curscreen.textContent = operate(fnum, snum, prevsign);
        lastscreen.textContent = "";
        shouldResetScreen = false;
    }else{
        if (isSign(prevsign)){
            snum = curscreen.textContent;
            fnum = operate(parseFloat(fnum), parseFloat(snum), sign);
            curscreen.textContent = fnum + sign;
        }
        prevsign = sign;
    }
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
