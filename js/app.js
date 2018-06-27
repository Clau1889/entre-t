document.getElementById("logout").addEventListener('click',function (){
    //console.log('click');
    firebase.auth().signOut();
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
