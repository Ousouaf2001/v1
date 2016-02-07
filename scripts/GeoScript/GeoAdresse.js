function GeoAdresse(){


    var adresse = document.getElementById("adress_meeting").value;
    var urlWS = "http://api.chessfamily.net/api/query";
    $.ajax(
            {

                type:"POST",
                url:urlWS,
                data:{
                    authentication:"chessfemily",
                    action:"geolocation",
                    address:adresse
                  },
                dataType:"json",
                  success:function(result){
                    console.log(result.success);
                    console.log(result.latitude);
                    $.each(result.city, function (index, item) {
                        console.log(item.city[0][1]);
                    });
                  }
            }
        );
}