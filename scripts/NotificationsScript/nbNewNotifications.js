// JavaScript Document
$(document).ready(function(){
	var id_utilisateur = 5;//sessionStorage.getItem("identifiant");

	
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