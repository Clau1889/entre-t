$(document).ready(function () {

    // // ******************FUNCION PARA SPLASH******************//
    // setTimeout(function () {
    //     $('#splash').fadeOut(500);
    // }, 1000);
});    

/*
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {opacity: 0.8});
});*/

document.getElementById("btn-signup").addEventListener('click',function(){
    //console.log("sign up");
    $('#modal-SignUp').modal('show');
});

document.getElementById("btn-login").addEventListener('click',function(){
    console.log('login');
    /*var provider = new firebase.auth.GoogleAuthProvider();*/
    
    /* firebase.auth().signInWithPopup(provider)
    .then(function(result){
        saveUser(result.user);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });*/

});

document.getElementById("btn-logout").addEventListener('click',function (){
    console.log('logout');
    //firebase.auth().signOut();
});

/*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    window.location="app.html";
    } else {
    console.log('desloggeado');
    }
});*/

