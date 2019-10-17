var a = 25;

function Right() {
    var b = 34;
    var result = a + b;
    console.log(result);
    document.getElementById("log").innerHTML = result;
}

function Not_Right() {
    var c = 18;
    var result = b + c;
    document.getElementById("log2").innerHTML = result;
    console.log(result);
}

function get_time() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.getHours() + ":" + d.getMinutes();
}

function age_check() {
    var age = document.getElementById("age").value;
    if (age > 17) {
        document.getElementById("enter_id").innerHTML = "You are over 18yrs old.";
    }
    else {
        document.getElementById("enter_id").innerHTML = "You are under 18yrs old.";
    }
    console.log(age);
}