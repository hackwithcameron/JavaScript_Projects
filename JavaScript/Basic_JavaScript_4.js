function food() {
    var Price = {
        Cheese:"$6.00",
        Bread:"$4.00",
        Milk:"$3.00",
        Banana:"$0.79"
    };
    delete Price.Cheese;
    document.getElementById("Dictionary").innerHTML = Price.Cheese;
}