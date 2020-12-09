var config = {
    apiKey: "AIzaSyCYRLgj9PmNX0ZKNubxDIkgetUyOvyRNVI",
    authDomain: "poetrysite-95ac6.firebaseapp.com",
    databaseURL: "https://poetrysite-95ac6-default-rtdb.firebaseio.com",
    projectId: "poetrysite-95ac6",
    storageBucket: "poetrysite-95ac6.appspot.com",
    messagingSenderId: "869377772548",
    appId: "1:869377772548:web:21ee632815063705273951"
  };

  firebase.initializeApp(config)

//refernce poems collection 
var poemsRef = firebase.database().ref('poems');


// get values
document.getElementById('form').addEventListener('submit',
submitForm);


//submit form
function submitForm(e){
    e.preventDefault();

    //get values

    var title = getInputVal('inputTitle');
    var poem = getInputVal('inputPoem');
    var author = getInputVal('inputAuthor');

    console.log(title + poem + author)

    savePoem(title, poem, author);

    // //show alert
    // document.querySelector('.alert').getElementsByClassName.display = 'block';

    // // hide alert after 3 seconds

    // setTimeout(function(){

    //     document.querySelector('.alert').getElementsByClassName.display = 'none';
    // },3000)

    alert("Your poem has been submitted!");

    location.reload();
}


// funtion to get form values 

function getInputVal(id){
    return document.getElementById(id).value;
}

//  save poem to firebase

function savePoem(title, poem, author) {
    var newPoemRef = poemsRef.push();

    newPoemRef.set({
        title: title,
        poem: poem,
        author: author
    });
}


