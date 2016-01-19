
    var latitude = document.getElementById("lat").value;
    var longitude = document.getElementById("long").value;
    var urlWS = "http://api.chessfamily.net/api/query";
    $.ajax(
            {

                type:"POST",
                url:urlWS,
                data:{
                    authentication:"chessfemily",
                    action:"geolocation",
                    member_id:id_utilisateur,
                    longitude:longitude,
                    latitude:latitude
                  },
                dataType:"json",
                  success:function(result){
            
                    $('#pays').val('Tunisie');

                  }
            }
        );