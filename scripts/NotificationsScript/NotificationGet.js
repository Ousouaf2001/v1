
// JavaScript Document
$(document).ready(function(){

	if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}
	lang = localStorage.getItem("DefaultLanguage");
	var NotificationSended = "";
	var noNotification = "";
	switch(lang){
		case 'fr':
			NotificationSended = "vous à envoyer une notification.";
			noNotification = "Aucune Notification Trouvée!";
			break;
		case 'en':
			NotificationSended = "sent you a notification.";
			noNotification = "No Notification found!";
			break; 
	}
	
	
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
					var notif = "<div class='notification notif_lu' id='" + item.id +"'>"+
						              "<div class='row'>"+
						                  "<div class='sender_profile col-xs-3' id='" + item.sender_id +"'>"+
						                      "<img src='"+this.sender_photo+"' class='img-responsive img-circle' style='width:50px;height:50px;'>"+
						                  "</div>"+
						                  "<div class='notif_sender col-xs-9' >"+
						                      "<p>"+
						                          "<b>"+ 
						                          	this.sender_name+" "+this.sender_last_name +
						                          "</b>&nbsp;"+
						                          "<i>"+NotificationSended+"</i><br/>"+
						                          //this.message+
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

    $(document).on('click','.notif_lu', function(){
        var notifId = $(this).attr('id');
        if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	
       
        $.ajax({
            type:"POST",
            url:urlWS,
            data:{
	        authentication:"chessfemily",
	        action:"notification_read",
	        member_id:id_utilisateur,
	        notification_id:notifId,
	        },
	            dataType:"json",
	          success:function(result){
	            console.log(result);
	          }
	     });
    });
});

    $(document).on('click','.notif_sender', function(){
			document.location.href = 'messages_detail.html?sender_id=' + $(this).attr('id'); 
			//console.log($(this).attr('id'));
		});

    $(document).on('click','.sender_profile', function(){
			document.location.href = 'profile.html?sender_id=' + $(this).attr('id'); 
		});


