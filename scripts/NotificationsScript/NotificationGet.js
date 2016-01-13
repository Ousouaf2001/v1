
// JavaScript Document
$(document).ready(function(){

	var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	var urlWS = "http://api.chessfamily.net/api/query";
    function NotificationGetByIdMember() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"notifications",
				member_id:id_utilisateur,
				perpage:10,
				page:1},
            dataType:"json",

          beforeSend: function(){
              $('.affiche_detail_Notification').hide();
              $('.load_detail_Notification').show();
          },
          success:function(result){
			  
			  if(result.success==1){
				  $.each(result.notifications, function (index, item) {
					$('#Notification_list').append("<div class='container'>"+
							"<div class='col-xs-3'><img src='"+this.receiver_photo+"' width='50' /></div>"+
						  "<div class='col-xs-9'><b>"+this.sender_name+" "+this.sender_last_name+"</b> vous à envoyer une notification avec le message suivant : <br/>"+this.message+"</div>"+
						"</div>");
						
						//"Receiver Full Name ="+this.receiver_name+""+this.receiver_last_name+"<br/>"+
				  });
			  }else{
				  $('#Notification_list').html("Pas de Notification");
			  }
	  
          },
          complete: function(){
              $('.load_detail_Notification').hide();
              $('.affiche_detail_Notification').show();
          }
        });
    }



    NotificationGetByIdMember();

});
