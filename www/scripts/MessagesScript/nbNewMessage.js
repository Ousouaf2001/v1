// JavaScript Document
$(document).ready(function(){
	var id_utilisateur = sessionStorage.getItem("identifiant");

	
	var urlWS = "http://api.chessfamily.net/api/query";
    function nbNewMessage() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"not_read_messages",
				member_id:id_utilisateur
			},
            dataType:"json",
          success:function(result){
                
				$('.nbNewMessage').html(result.nb_messages);
          }
        });
    }

	nbNewMessage();
	setInterval(function(){
		 nbNewMessage();
	},15000);

});
