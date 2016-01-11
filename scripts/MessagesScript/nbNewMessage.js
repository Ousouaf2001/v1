// JavaScript Document
$(document).ready(function(){
	var id_utilisateur = 5;

	
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
                //alert(result.nb_messages);
				$('.nbNewMessage').html(result.nb_messages);
          }
        });
    }


	setInterval(function(){
		 nbNewMessage();
	},15000);

});
