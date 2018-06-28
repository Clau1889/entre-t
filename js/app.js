$(document).ready(function(){
    var apiKey = "BQA39EPb8DyNpLMU7RmcJ397_57DxY4039UrbGqCnbskgz4wGQIEom-iStWdoLo2WHIOMunyW3UTuhMEt7hZerf4PYtw1WL0n0Ky_X6VMTg0SHXDNSo3xQ7Omwo9otKkJE6_mSKOaUl4wV6EblJeeOuIKEid8qxgAHKcG2jniNV4S9pdrYmvwYJy9Xw4x7JDE4v9hWnAjfyWGDZyO7x_joBzs0X_KRleJhPDd5CIG2http817MpF1cU3DcXT3TyjZRVK3oM";

    $.ajax({
        url: 'https://api.spotify.com/v1/search?q=maroon%20five&type=track&market=mx&limit=20',

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

    document.getElementById("logout").addEventListener('click',function (){
    //console.log('click');
    firebase.auth().signOut();
    });

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

