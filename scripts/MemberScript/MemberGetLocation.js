
        var id_utilisateur = sessionStorage.getItem("identifiant");
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
				  //alert('MeetingGetLocation '+result.location.latitude);
                $('#getlat').val(result.location.latitude);
                $('#getlong').val(result.location.longitude);
                
              },
              complete: function(){
                  $('.load_players').hide();
              }
        }
    );