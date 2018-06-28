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
    var apiKey = "BQBe1GwJebNeGhezXbytKxGTiy-DJcWqiO15nJ1UeSmWtlOP62guGdV12UvwBBugDFvRTjXb5BU8iYqlh5inPfhv2QYKB5vy8z-kifL_6IUHZH8xGIug3PkogcGa8D368SKzdsb3lFwlKg2bHvjDDohjE5OarqPbSuEZDwhyrLOB2ZUUUxYCdmgQ7ilGlwSGR3AgtBLrD3YbDJHO_zHdugyF9tbEkHO6unjmOMAQ_-xKq0hNHmhk6WvP0kxWwgSr1gQRATc";

    
    // la variable search se declarará antes y guardará el valor del input del buscador
    // search = encodeURIComponent(search);// parsea el valor del input si tiene espacios.

    $.ajax({
        url: 'https://api.spotify.com/v1/search?q=sad%20music%20&type=track&market=mx&limit=3',

        headers: {
            'Authorization': 'Bearer ' + apiKey
        },
        success: function(response){
            console.log(response);
            var data = [];
            var template = '<iframe src="https://open.spotify.com/embed/track/{{id}}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
            var $containerSongs = $("#music-area");
            console.log(template);

            response.tracks.items.forEach( function(song){
                data.push(song.id);
                
                console.log(data);
            });

            var filledTemplate = fillTemplate(template, data);
            // $containerSongs.append(filledTemplate);




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

    function fillTemplate(template, data) {
        var finalTemplate = "";
        console.log(template); 
        // var finalTemplate ="";
        for(var index in data){
            console.log(template); 
            console.log("lala");
            var value = data[index];
            console.log(value)
            // template = template.replace(new RegExp('{{'+index+'}}', 'g'), escapeHtml(value) );
            finalTemplate = template.replace('{{id}}', value);
            console.log(finalTemplate);

            $("#song").append(finalTemplate)
        };
        
        // return template;
    };
    
    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    };


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


