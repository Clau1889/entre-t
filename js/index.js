$(document).ready(function () {

    // // ******************FUNCION PARA SPLASH******************//
    // setTimeout(function () {
    //     $('#splash').fadeOut(500);
    // }, 1000);
});    

document.getElementById("btn-signup").addEventListener('click',function(){
    //console.log("sign up");
    $('#modal-SignUp').modal('show');
    
    /*firebase.auth().signInWithPopup(provider).then(function (result) {
        saveNewUsers(email, passwordUser);

        var emailUser = $('#input-email').val();
        var passwordUser = $('#input-password').val();
    };

    firebase.database().ref("users/"+ user.uid).set(userInfo);

    $('#input-email').val('');
    $('#input-password').val('');*/

});

/* Función para guardar usuarios nuevos en database 
function saveNewUsers(email,password){
};*/



document.getElementById("btn-login").addEventListener('click',function(){
    //console.log('login');
    
    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
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
    });

});

document.getElementById("btn-logout").addEventListener('click',function (){
    //console.log('logout');
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    window.location="app.html";
    } else {
    console.log('desloggeado');
    }
});

