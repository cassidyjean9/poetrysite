

// POEM PAGE
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


$(document).ready(function(){

    var rootRef = firebase.database().ref().child("poems")
    rootRef.on("child_added", snap => {
        
        var titlesVar = snap.val().title;
        var poemVar = snap.val().poem;
        var authorVar = snap.val().author;
        // console.log("titlesVar= " + titlesVar)
        // var i;
        // for (i = 0; i < titlesVar.length; i++) {
            $(".poems-display").append("<h1 class='titles-style'>" + titlesVar + "</h1>" 
            + "<p class='poems-style'>" + poemVar + "</p>" + 
            "<p class='author-style'>" + "- " + authorVar + "</p>")
        // }
        console.log(snap.val().title);
    })
})