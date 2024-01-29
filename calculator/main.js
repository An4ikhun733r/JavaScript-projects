let fnum = "";
let snum = "";
let prevsign = "";
let operator = null;
let shouldResetScreen = true;
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
    if (curscreen.textContent === '0') {
        curscreen.textContent = number;
    } else if (number == "="){
        snum = curscreen.textContent;
        fnum = parseFloat(fnum);
        snum = parseFloat(snum);
        curscreen.textContent = operate(fnum, snum, operator);
        lastscreen.textContent = "";
    } else {
        if (isSign(lastscreen.textContent[lastscreen.textContent.length-1]) && shouldResetScreen) {
            curscreen.textContent = number;
            shouldResetScreen = false;
            return
        }
        curscreen.textContent += number;
    }
    shouldResetScreen = true;
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

    if (sign == "delete"){
        curscreen.textContent = curscreen.textContent.slice(0,-1);
        return
    }

    operator = sign

    if (prevsign != operator && prevsign != "") {
        alert(prevsign)
        alert(operator)
        snum = curscreen.textContent;
        fnum = parseFloat(fnum);
        snum = parseFloat(snum);
        fnum = operate(fnum, snum, prevsign)
        curscreen.textContent = fnum;
        lastscreen.textContent = "";
        prevsign = ""
    }

    
    if (isSign(sign)){
        lastscreen.textContent = curscreen.textContent + sign;
    }    

    fnum = lastscreen.textContent.slice(0, -1);
    prevsign = operator
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
