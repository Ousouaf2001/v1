

	
	
	
	
    function MessagesSend() {
        var id_utilisateur = sessionStorage.getItem("identifiant");//4;
        var url = window.location.search;
		var id_friend = url.substring(url.lastIndexOf("=")+1);
		var message = document.getElementById("textmessage").value;
		var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
            	authentication:"chessfemily",
				action:"send_message",
				member_id:id_utilisateur,
				receiver_id:id_friend,
				object:'objet',
				message:message
				},
            dataType:"json",
          success:function(result){
               $('#textmessage').val('');
               location.reload();
          },
        });
    }















