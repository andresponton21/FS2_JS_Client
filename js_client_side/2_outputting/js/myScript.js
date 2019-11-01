function myMessage(){
    var message;
    message = document.getElementById("msgBox");
    message.innerHTML = "Wolcome User";}
try {
    myMessage();
}
catch (err) {
    document.getElementById("p1").innerHTML = err.message;

}
finally {
    console.log('ok');
}

