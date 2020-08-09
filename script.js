let currentValue = 0;
let operator = null; // this is what operation you will be doing like +,-,x,/ 
let operand1=0;
let operand2=0;
let decimal=zero;

function yoPlus() {
    operator = "+";
    operand1 = currentValue;
    currentValue = 0;
}
function yoMinus() {
    operator = "-";
    operand1 = currentValue;
    currentValue = 0;
}
function yoMultiply() {
    operator = "*"
    operand1 = currentValue;
    currentValue = 0;
}
function yoDivide() {
    operator = "/"
    operand1 = currentValue;
    currentValue = 0;
}
function yoEqual() {  // make this all working... 
    operand2 = currentValue;
    if (operator === '+') {
        currentValue = operand1 + operand2;
    } else if (operator === '-') {
        currentValue = operand1 - operand2;
    } else if (operator === '*') {
        currentValue = operand1 * operand2; 
    } else if (operator === '/') {
        currentValue = operand1/operand2;
    } else {
        // hw harder one... what do you do for all other cases?
    }
    document.getElementById("div2").innerHTML = currentValue;
    document.getElementById("AC").innerHTML = "C";   
}
function yo() {
    if (decimal === non-zero) {
        currentValue = Number.parseInt(currentValue) + 1*0.1;
    } else {
        currentValue = currentValue*10+1;
    }
    document.getElementById("div2").innerHTML = currentValue;
    document.getElementById("AC").innerHTML = "C"; 
} 
function yo2() {
    if (decimal === non-zero) {
        currentValue =  Number.parseInt(currentValue) + 2*0.1;
    } else {
        currentValue = currentValue*10+2;
    }
   
    document.getElementById("div2").innerHTML = currentValue; 
    document.getElementById("AC").innerHTML = "C";
} 
function yo3() {
    if (decimal === non-zero) {
        currentValue = Number.parseInt(currentValue) + 3*0.1;
    } else {
        currentValue = currentValue*10+3;
    }
   
    document.getElementById("div2").innerHTML = currentValue; 
    document.getElementById("AC").innerHTML = "C";
} 
function yo4() {
    if (decimal === non-zero) {
        currentValue = Number.parseInt(currentValue) + 4*0.1;
    } else {
        currentValue = currentValue*10+4;
    }
    
    document.getElementById("div2").innerHTML = currentValue; 
    document.getElementById("AC").innerHTML = "C";
} 
function yo5() {
    currentValue = currentValue*10+5;
    document.getElementById("div2").innerHTML = currentValue; 
    document.getElementById("AC").innerHTML = "C";
} 
function yo6() {
    currentValue = currentValue*10+6;
    document.getElementById("div2").innerHTML = currentValue; 
    document.getElementById("AC").innerHTML = "C";
} 
function yo7() {
    currentValue = currentValue*10+7;
    document.getElementById("div2").innerHTML = currentValue; 
    document.getElementById("AC").innerHTML = "C";
} 
function yo8() {
    currentValue = currentValue*10+8;
    document.getElementById("div2").innerHTML = currentValue; 
    document.getElementById("AC").innerHTML = "C";
} 
function yo9() {
    currentValue = currentValue*10+9;
    document.getElementById("div2").innerHTML = currentValue; 
    document.getElementById("AC").innerHTML = "C"; 
} 
function yo0() {
    currentValue = currentValue*10;
    document.getElementById("div2").innerHTML = currentValue; 
} 
function yoAC() {
    currentValue = 0;
    document.getElementById("div2").innerHTML = currentValue;
    document.getElementById("AC").innerHTML = "AC";
    operator = null;
    operand1=0;
    operand2=0;
    decimal=zero;
}
function yoNegative() {
    currentValue = currentValue*-1;
    document.getElementById("div2").innerHTML = currentValue;
}
function yoPercent() {
    currentValue = currentValue*0.01;
    document.getElementById("div2").innerHTML = currentValue;
}

function yoDecimal() {
    if (decimal === non-zero){
        return;
    }
    currentValue = currentValue + ".";
    document.getElementById("div2").innerHTML = currentValue;
}

function changeAC() {
    let ac = document.getElementById("AC").innerHTML;
}

// test cases:
// '1234567890PM' ==> show -123,456,789
// '0PM' ==> show -0
// '0.000000PM' ==> show -0.000000
// '.2xPM' ==> show -0  (*****)
// '0.' ==> show 0.
// '.10' ==> show 0.10
// '1.0' ==> show 1.0
// '1.02' ==> show 1.02 
// '1.0.' ==> show 1.0
// '1.0PM2' ==> show -1.02
// '1.0PM+' ==> show -1.0
// '1.0PM++' ==> show -1 (**-1.0)
// '1.0====' ==> show 1.0
// '1+2+3=' ==> show 6
// '1+2+3+' ==> show 6
// '1+2+3+4=' ==> show 10
// '1+2+3+4+' ==> show 10 
// '1+2+3+4+=' ==> show 20
// '1+2==' ==> 5
// '1+2+==' ==> 9
// '1+2+3+4=+=' ==> show 20
// '2x3==' ==> 18
// '2x3x=' ==> 36
// '1+2x3=' ==> 7
// '1+2x3==' ==> 21
// '1+2+x3=' ==> 7 (when x is hit, display reverts from 3 to 2) (**)
// '1+2=.3=' ==> 3.3 ?? iphone shows 2.3 
