
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
				perpage:30,
				page:1},
            dataType:"json",

          beforeSend: function(){
              $('.affiche_detail_Notification').hide();
              $('.load_detail_Notification').show();
          },
          success:function(result){
			  
			  if(result.success==1){
				  $.each(result.notifications, function (index, item) {
					var notif = "<div class='notification'>"+
						              "<div class='row'>"+
						                  "<div class='col-xs-3'>"+
						                      "<img src='"+this.receiver_photo+"' class='img-responsive img-circle' style='width:50px;height:50px;'>"+
						                  "</div>"+
						                  "<div class='col-xs-9'>"+
						                      "<p>"+
						                          "<b>"+ 
						                          	this.sender_name+" "+this.sender_last_name +
						                          "</b>&nbsp;"+
						                          "<i>vous à envoyer une notification : </i><br/>"+
						                          this.message+
											   "</p>"+
						                  "</div>"+
						              "</div>"+
					            "</div>"
						
					$('.Notification_list').append(notif);
					

				  });
			  }else{
				  $('.Notification_list').html("Pas de Notification");
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
