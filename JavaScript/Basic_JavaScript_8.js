var part_1 = "How you";
var part_2 = ", doin'?";

document.write(part_1.concat(part_2));
document.write(part_1.slice(1, 7));

var temp_1 = "I hope you are having a pleasent day";
var i = temp_1.search("having");

document.write(i);
document.write(temp_1.toUpperCase())


function int_to_str() {
    var int_1 = 1234;
    document.getElementById("Change").innerHTML = int_1.toString();
}

function percision_Method() {
    var x = 1234.765642527635457686;
    document.getElementById("Percision").innerHTML = x.toPrecision(6);
}

function value_of() {
    var x = 12;
    document.getElementById("value").innerHTML = x.valueOf();
}