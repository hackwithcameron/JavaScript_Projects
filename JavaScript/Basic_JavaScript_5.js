document.write(typeof("hello"));

function my_Function_1() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function_2() {
    document.getElementById("true").innerHTML = isNaN("hey");
}

function my_Function_3() {
    document.getElementById("false").innerHTML = isNaN(12345);
}

document.write(2E400);
document.write(-2E400);
document.write(2 < 4);
document.write(2 > 4);
console.log(2+5);
document.write("1" + 2 + "3");
console.log(5 > 7);
document.write(5 === 5);
document.write(5 === "7");
document.write(5 === "5");
document.write(5 === 7);

document.write((5 > 3) && (6 > 2));
document.write((2 > 3) || (2 > 2));
document.write(2 !== 3);