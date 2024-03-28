function Capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function ReverseString(word){
    let reversed = '';

    for(let i = word.length - 1; i >= 0; i--){
        reversed += word[i];
    }
    return reversed;
}

const Calculator = {
    add: function(a, b) {
        return a+b;
    },
    substruct: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        if(b==0){
            return false;
        }
        return a/b;
    }
}

module.exports = {Capitalize, ReverseString, Calculator};