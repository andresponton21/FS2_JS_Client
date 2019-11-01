
var str='Sing In';
var singIn = str.link("singin.html");
var about = 'Explore the website';
var singup = about.link("about.html");

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y= document.forms["myForm"]["lname"].value
    if (x == "" || y=="") {
        alert("Name and last name must be filled out");
        return false;
    }
    document.write(`Welcome ${x} ${y} you are signed up <br><br>${singIn}`);
    
}

function validateForm1() {
    var xx = document.forms["myForm1"]["user"].value;
    var yy = document.forms["myForm1"]["password"].value
    if (xx == "" || yy == "") {
        alert("User and password must be correct");
        return false;
    }
    document.write(`Welcome ${xx} you are signed in <br><br>${singup}`);

}

