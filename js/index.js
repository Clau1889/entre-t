document.getElementById("login").addEventListener('click',function (){
    //console.log('click');
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(function(result){})
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location="app.html";
    } else {
      console.log('desloggeado');
    }
});

document.getElementById("logout").addEventListener('click',function (){
    //console.log('click');
    firebase.auth().signOut();
});