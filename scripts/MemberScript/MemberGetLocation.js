
        if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	
		var urlWS = "http://api.chessfamily.net/api/query";
$.ajax(
        {

            type:"POST",
            url:urlWS,
            data:{authentication:"chessfemily",action:"member_location_get",member_id:id_utilisateur},
            dataType:"json",
            beforeSend: function(){
              $('.load_players').show();
              },
              success:function(result){
				
                $('#getlat').val(result.location.latitude);
                $('#getlong').val(result.location.longitude);
                $('#getlat1').val(result.location.latitude);
                $('#getlong1').val(result.location.longitude);

                $('#getlat2').val(result.location.latitude);
                $('#getlong2').val(result.location.longitude);


                $('#lat').val(result.location.latitude);
                $('#long').val(result.location.longitude);

              },
              complete: function(){
                  $('.load_players').hide();
              }
        }
    );