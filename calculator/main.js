let firstnum, secondnum, operator;

document.addEventListener("DOMContentLoaded", function() {
    const numButton = document.querySelectorAll(".inline-button");
    const screen = document.getElementById("display");
    numButton.forEach((button) =>
        button.addEventListener('click', () => appendNumber(button.textContent))
    )
    function appendNumber(number) {
        screen.textContent += number;
    }
});





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
