

var carName = "Ferrari";

var name = "John";
var x=5;
try {

function sqnumber(x){
    return x*x
}

    document.getElementById("function1").innerHTML = `the square number of ${x} is ${sqnumber(x)}`;
    

    
    
}
catch (err) {
    document.getElementById("msgBox").innerHTML = err.message;
}
finally {
    console.log('everything is ok');
}


function sayName(name) {
    return name;

}
document.getElementById("txt").innerHTML = `hello my name is ${sayName(name)}`;





function myCar(carName) {
    return carName
}
document.getElementById("car").innerHTML =`${myCar(carName)} is a cool brand`;
