$(document).ready(function(){
    var apiKey = "BQCe-j3lY7L_WZ88QzCzir3UY2KjecsArRhAqVY32B-ndBMFEtALthjiNRzFZB9AcZbWrVQupzmEsLBM6Xjj37xDZ1aZyO3KEW0n2zWJx41cP5EglFB7Y6wjUM1ouP0vT3J8KxRRWvrbGMGgmpM-on7I5t7QZAgLr1ykYDQhWerfFlc_J6Fj5Ae5wGSmOA8PUAoO1wXJD1vAt-I4nYlGfWrZ8dD8rK8GKznpYJObaxPI3Dx0VROub5QCbkZ82axkUGKCALc";

    
    // la variable search se declarará antes y guardará el valor del input del buscador
    // search = encodeURIComponent(search);// parsea el valor del input si tiene espacios.

    $.ajax({
        url: 'https://api.spotify.com/v1/search?q=maroon%20five&type=track&market=mx&limit=10',

        headers: {
            'Authorization': 'Bearer ' + apiKey
          },
        success: function(response){
            console.log(response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });

    // document.getElementById("logout").addEventListener('click',function (){
    // //console.log('click');
    // firebase.auth().signOut();
    // });

});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //console.log(user);
      //console.log(user.displayName);
      //console.log(user.photoURL);
      //console.log(user.uid)
    } else {
      console.log('desloggeado');
      window.location="index.html";
    }
});

