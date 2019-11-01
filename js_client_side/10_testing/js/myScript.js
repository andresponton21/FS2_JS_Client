// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC95EDvS-XfW8d6oNG_HZ8_02-GEOF50gk",
    authDomain: "testing-72d79.firebaseapp.com",
    databaseURL: "https://testing-72d79.firebaseio.com",
    projectId: "testing-72d79",
    storageBucket: "testing-72d79.appspot.com",
    messagingSenderId: "682668106977",
    appId: "1:682668106977:web:37ed702781308e162f83a0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');


document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInput('name');
    var lastname = getInput('lastname');

    saveMessage(name, lastname);

    document.querySelector('.alert').style.display='block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

    },3000);

    document.getElementById('form').reset();
}



function getInput(id){
    return document.getElementById(id).value;
}

function saveMessage(name, lastname){
    var newMessage = messagesRef.push();
    newMessage.set({
      name:name,
       lastname:lastname
   }
    );}