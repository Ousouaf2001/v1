

	
    function AddNotifications() {
    	var url = window.location.search;
     var m_id = url.substring(url.lastIndexOf("=")+1);
	 var id_utilisateur = sessionStorage.getItem("identifiant");

	
	var urlWS = "http://api.chessfamily.net/api/query";
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"notification_add",
				member_id:id_utilisateur,
				receiver_id:m_id,
				message:'test notification lotfi'
			},
            dataType:"json",
          success:function(result){
                
				console.log(result);
          }
        });
    }

	