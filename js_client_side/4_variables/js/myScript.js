

    var transport, text, ext, i, number;
    transport = ["car", "boat", "airplane", "train"];
    number = [1,2,3,4];
    ext = transport.length;
    
try {
    text = "<ul>";
    for (i = 0; i < ext; i++) {
        
        text += "<li>" + number[i]+". " +transport[i]+"</li>";
    
}
    text += "</ul>";

    document.getElementById("array").innerHTML = text;
    
}
catch (err) {
    document.getElementById("msgBox").innerHTML = err.message;
}
finally {
    console.log('everything is ok');
}
