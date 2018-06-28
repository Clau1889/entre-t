$(document).ready(function(){

    //INICIO CÓDIGO VIDEO
    var apiKey = 'AIzaSyDEVJfSyHmltO9EDu1Q1MEFqGDl6xEuNLM';

    $('#angry-button').click(function(){
    //MUESTRA DOCUMENTALES (ENOJO)
    $('#characters-container').html('');
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search?type=video&q=documentales&maxResults=3&part=snippet&key=' + apiKey,
        success: function(response){

        var template = $('#template-character').html();
        var $characters = $('#characters-container');

        response.items.forEach(function(character){

                var data = {
                    video: 'https://www.youtube.com/embed/'+character.id.videoId,
                    title: character.snippet.title
                };
                
                var filledTemplate = fillTemplate(template, data);
                $characters.append(filledTemplate);
        });
        }
    });
    });

    $('#sad-button').click(function(){
        //MUESTRA PELICULAS TRISTES (TRISTEZA)
        $('#characters-container').html('');
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?type=video&q=peliculatristecompleta&maxResults=3&part=snippet&key=' + apiKey,
            success: function(response){
    
            var template = $('#template-character').html();
            var $characters = $('#characters-container');
    
            response.items.forEach(function(character){
    
                    var data = {
                        video: 'https://www.youtube.com/embed/'+character.id.videoId,
                        title: character.snippet.title
                    };
                    
                    var filledTemplate = fillTemplate(template, data);
                    $characters.append(filledTemplate);
            });
            }
        });

        
    });

    $('#romance-button').click(function(){
        //MUESTRA PELICULAS ROMANTICAS (ROMANCE)
        $('#characters-container').html('');
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?type=video&q=pelicularomanticacompleta&maxResults=3&part=snippet&key=' + apiKey,
            success: function(response){
    
            var template = $('#template-character').html();
            var $characters = $('#characters-container');
    
            response.items.forEach(function(character){
    
                    var data = {
                        video: 'https://www.youtube.com/embed/'+character.id.videoId,
                        title: character.snippet.title
                    };
                    
                    var filledTemplate = fillTemplate(template, data);
                    $characters.append(filledTemplate);
            });
            }
        });  
    });

    $('#motivational-button').click(function(){
        //MUESTRA PELICULAS MOTIVACIONALES (MOTIVADO)
        $('#characters-container').html('');
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?type=video&q=peliculamotivadoracompleta&maxResults=3&part=snippet&key=' + apiKey,
            success: function(response){
    
            var template = $('#template-character').html();
            var $characters = $('#characters-container');
    
            response.items.forEach(function(character){
    
                    var data = {
                        video: 'https://www.youtube.com/embed/'+character.id.videoId,
                        title: character.snippet.title
                    };
                    
                    var filledTemplate = fillTemplate(template, data);
                    $characters.append(filledTemplate);
            });
            }
        });

        
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
    //TERMINO CÓDIGO VIDEO******

    //**************************CÓDIGO AMBAR**********************************************
    //COMIENZA CÓDIGO SPOTIFY
    /*
    var apiKey = "BQBC8KJxYcpXAs6_KRj0QsvdjqFW6qrJMmTYJ9d9QqYllzKj_oamVGRJPGAgYsvgfKmgC037YFwZTRQDLrQ53C0COVXiwqVBsYivr0TERnqhKsCzUEobLP62DdaW4qyQY4qJOTuvgksHaUm0_FdpCv0S5S8v_Vy2htAQHfULHpfAaS9l9IzZzpu2EtDRbkcE3wzsMba8ajpakhn1C6z96avZ0fEVhpziNPoLrw6fT0tBAmNJgcpwE4DErF0bxOsWYUGoMyg";

    
    // la variable search se declarará antes y guardará el valor del input del buscador
    // search = encodeURIComponent(search);// parsea el valor del input si tiene espacios.

    $.ajax({
        url: 'https://api.spotify.com/v1/search?q=sad&type=track&market=mx&limit=10',

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

*/
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