
    
function add() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function multi() {
    var multi = 2 * 3;
    document.getElementById("multi").innerHTML = "2 * 3 = " + multi;
}

function div() {
    var div = 100 / 50;
    document.getElementById("div").innerHTML = "100 * 50 = " + div;
}

function solve() {
    var solve = (10 * 10) + 14 / (3 **3);
    document.getElementById("solve").innerHTML = "(10 * 10) + 14 / (3 **3) = " + solve;
}

function function_for_remainder() {
    var remainder = 27 % 7;
    document.getElementById("remainder").innerHTML = "The remainder of 27 divided by 7 is " + remainder;
}

function negative() {
    var x = 27;
    document.getElementById("neg").innerHTML = -x;
}

function addone() {
    var x = 27;
    x++;
    document.getElementById("add").innerHTML = "27 + 1 = " + x;
}

function subone() {
    var x = 27;
    x--;
    document.getElementById("sub").innerHTML = "27 - 1 = " + x;
}

window.alert(Math.random() * 100)
document.write(Math.pow(6, 2))