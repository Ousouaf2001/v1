// JavaScript Document
$(document).ready(function(){
	if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	

	
	var urlWS = "http://api.chessfamily.net/api/query";
    function nbNewNotifications() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"not_read_notifications",
				member_id:id_utilisateur
			},
            dataType:"json",
          success:function(result){
                
				$('.nbNewNotification').html(result.nb_notifications);
          }
        });
    }

	nbNewNotifications();
	setInterval(function(){
		 nbNewNotifications();
	},15000);

});
