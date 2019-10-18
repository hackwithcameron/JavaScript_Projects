function Call_loop() {
    var Digit = " ";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function len() {
    var str = "I am hungry";
    var len = str.length;
    document.getElementById("Len").innerHTML = len;
}


var Insturments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Flute"];
var Content = " ";
var Y;
function for_loop() {
    for (Y = 0; Y < Insturments.length; Y++) {
        Content += Insturments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_function() {
    var catPics = [];
    catPics[0] = "sleeping";
    catPics[1] = "playing";
    catPics[2] = "eating";
    catPics[3] = "purring";
    document.getElementById("Array").innerHTML = "in this picture, the cat is " + catPics[3] + ".";
}

function Car() {
    const Cars = {color:"red", make:"Jeep", design:"SUV"};
    Cars.design = "Truck";
    Cars.price = "$50,000";
    document.getElementById("Constant").innerHTML = Cars.make + " makes a " + Cars.design + "<br>at " + Cars.price + " they are much too expensive for me.";
}

function Show_nums() {
    var x = 12;
    document.write(x);
    {
        let x = 24;
        document.write("<br>" + x);
    }
    document.write("<br>" + x);
}

function string_function(name) {
    return "Hello, " + name + " nice to meet you.";   
}  
var q = string_function("Cameron"); 

document.write(q);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.write("<br>" + car.description());

function for_loop() {
    var text = "";
    for (i = 0; i < 10; i++) {
        if (i === 7) {
            break;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("count_to_7").innerHTML = text;
}

function continue_loop() {
    var text = "";
    for (i = 0; i < 11; i++) {
        if (i === 5) {
            continue;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("skip_5").innerHTML = text;
}
