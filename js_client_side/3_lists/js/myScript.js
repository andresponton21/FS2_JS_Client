function addalert(){alert('Here is your shopping list');}
try {
    addalert();
}
catch (err) {
    document.getElementById("msgBox").innerHTML = err.message;
}
finally {
    console.log('everything is ok');
}
