function check_age() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("of_age").innerHTML = can_vote + " to vote.";
}

function Chair(Height, Style, Color, Size) {
    this.Chair_Height = Height;
    this.Chair_Style = Style;
    this.Chair_Color = Color;
    this.Chair_Size = Size;
}

var Herman_Miller = new Chair(35, "Ergonomic", "Black", "Medium");
var Bedford = new Chair(33, "Traditional High Back", "Brown", "Large");
var CXO = new Chair(36, "Mesh", "White", "Medium");

function chair_select() {
    document.getElementById("New_and_This").innerHTML =
    "The Herman Miller Office is " + Herman_Miller.Chair_Size + 
    " in size and about " + Herman_Miller.Chair_Height + 
    "in high. It comes in " + Herman_Miller.Chair_Color +
    " with an " + Herman_Miller.Chair_Style + " Back.";
}

function Nested() {
    document.getElementById("nested_function").innerHTML = Count();
    function Count() {
        var Start = 0;
        function add_one() { 
            Start += 1;
        }
        add_one();
        return Start;
    }
}
