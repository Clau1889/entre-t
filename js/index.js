$(document).ready(function () {

    // // ******************FUNCION PARA SPLASH******************//
    // setTimeout(function () {
    //     $('#splash').fadeOut(500);
    // }, 1000);
});    

document.getElementById("btn-signup").addEventListener('click',function(){
    //console.log("sign up");
    $('#modal-SignUp').modal('show');
});
    
/* Variable global con la información del usuario */
var userInfo = {};

/* Función para guardar la info de los usuarios */
function saveUser(user) {
    var userInfo = {
        uid: user.uid,
        name: user.displayName,
        photo: user.photoURL,
    };

   firebase.database().ref("users/" + user.uid).set(userInfo);
};

var provider = new firebase.auth.GoogleAuthProvider();

$("btn-login").click(function(){
    //console.log('login');
    firebase.auth().signInWithPopup(provider).then(function(result){
        $('#btn-signup').hide();
        saveUser(result.user);
        //Sconsole.log(result.user);
        $('#photo-user').append("<img src='" + result.user.photoURL + "' />");
        //console.log(result.user.photoURL);
        $('.user-name').append(result.user.displayName);
        //console.log(result.user.displayName);
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

