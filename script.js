let currentValue = 0;
function yo() {
    currentValue = currentValue*10+1;
    document.getElementById("div2").innerHTML = currentValue;
    document.getElementById("AC").innerHTML = "C"; 
} 
function yo2() {
    currentValue = currentValue*10+2;
    document.getElementById("div2").innerHTML = currentValue; 
    document.getElementById("AC").innerHTML = "C";
} 
function yo3() {
    currentValue = currentValue*10+3;
    document.getElementById("div2").innerHTML = currentValue; 
    document.getElementById("AC").innerHTML = "C";
} 
function yo4() {
    currentValue = currentValue*10+4;
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
}
function yoNegative() {
    currentValue = currentValue*-1;
    document.getElementById("div2").innerHTML = currentValue;
}
function yoPercent() {
    currentValue = currentValue*0.01;
    document.getElementById("div2").innerHTML = currentValue;
}

function changeAC() {
    let ac = document.getElementById("AC").innerHTML;
}
