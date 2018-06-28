$(document).ready(function(){

    //INICIO CÓDIGO VIDEO
    var apiKey = 'AIzaSyDEVJfSyHmltO9EDu1Q1MEFqGDl6xEuNLM';

    $('#search-button').click(function(){
        var search = $('#search-text').val();
        $('#characters-container').html('');
        $('#search-text').val('');

        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?type=video&q='+search+'&maxResults=5&part=snippet&key=' + apiKey,
            success: function(response){
    
            var template = $('#template-character').html();
            var $characters = $('#characters-container');
    
            response.items.forEach(function(character){
                    console.log(character.snippet.title);
    
                    var data = {
                        video: 'https://www.youtube.com/embed/'+character.id.videoId,
                        title: character.snippet.title
                    };
                    
                    var filledTemplate = fillTemplate(template, data); 
                    
                    $characters.append(filledTemplate);
            });
            function fillTemplate(template, data) {
                for(var index in data){
                    //console.log(index);
                    //console.log(data);
                    var value = data[index];
                    template = template.replace(new RegExp('{{'+index+'}}', 'g'), escapeHtml(value) );
                };
                return template;
            }
            function escapeHtml(str) {
                var div = document.createElement('div');
                div.appendChild(document.createTextNode(str));
                return div.innerHTML;
            }
        }
    });

    });
    //TERMINO CÓDIGO VIDEO

    //**************************CÓDIGO AMBAR**********************************************
    //COMIENZA CÓDIGO SPOTIFY
    var apiKey = "BQAnCSZCdJIrG3djPLvmdT67c5jKa6RuMRTUPVuMBjywkqA6O4Bsz3FZ_r5tZMvnc6g265246IaAS0PnIfeMy0UcYobLgqMjwXx8BisrsgTum4B8Hk6JZnh11VVmmXTrrg1CRV4d4oDhY56xeTHUYgzmuYUKJLS0bpqFxcdr0E-erHQ91p277uTUWXay_dHLM1itWXIIpARPtfVSaoCJrhky7bqdhby5T8j2XLa9QWJZbmfK75WBbxixcYrHd4LFlHWM-5o";

    
    // la variable search se declarará antes y guardará el valor del input del buscador
    // search = encodeURIComponent(search);// parsea el valor del input si tiene espacios.

    $.ajax({
        url: 'https://api.spotify.com/v1/search?q=sad%20music%20&type=track&market=mx&limit=3',

        headers: {
            'Authorization': 'Bearer ' + apiKey
        },
        success: function(response){
            console.log(response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if(xhr.status == 401){
                console.log("token expirado");
            } else {
                alert(xhr.status);
                alert(thrownError);
            }
            
        }
    });


    //TERMINA CÓDIGO SPOTIFY
    //**************************SE CIERRA CÓDIGO AMBAR*****************************************


    // document.getElementById("logout").addEventListener('click',function (){
    // //console.log('click');
    // firebase.auth().signOut();
    // });

});

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       //console.log(user);
//       //console.log(user.displayName);
//       //console.log(user.photoURL);
//       //console.log(user.uid)
//     } else {
//       console.log('desloggeado');
//       window.location="index.html";
//     }
// });


