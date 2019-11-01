

    var items, text, ext, i, numberArr, letter, number, text1, extn;
    items = ["paper", "pen", "notebook"];
    numberArr = [20,28,32];
    number=30;
    letter="p";
    ext = items.length;
    extn = numberArr.length;
    text = `the numbers less than ${number} are:`;
    text1 = `the words that start with the letter ${letter} are:`;

    
    
try {
//array of numbers
    text += "<ul>";
    for (i = 0; i < extn; i++) {
        if(number>numberArr[i]){
        text += "<li>" + numberArr[i] + "</li>";
        
    }
    else{
        text+=`<br> the number: ${numberArr[i]} is greater than ${number}`
    }
}
    text += "</ul>";

    document.getElementById("arrayn").innerHTML = text;

//array of words
    text1 += "<ul>";
    for (i = 0; i < ext; i++) {
        if (items[i]>=letter){
            text1 += "<li>" + items[i] + "</li>";
        }
        else {
            text1+=`<br> The word: ${items[i]} does not start with ${letter}`
        }
        
    }
    
    text1 += "</ul>";

    document.getElementById("arrayw").innerHTML = text1;
    
}
catch (err) {
    document.getElementById("msgBox").innerHTML = err.message;
}
finally {
    console.log('everything is ok');
}
