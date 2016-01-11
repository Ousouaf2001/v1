// JavaScript Document
$(document).ready(function(){
	var current_title = $(document).attr('title');

	/*if(current_title=='Profile Details'){
		var url = window.location.search;
    	var id_utilisateur = url.substring(url.lastIndexOf("=")+1);//1;
	}else{
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}*/
	var id_utilisateur = 4;
	/*if(id_utilisateur==NULL || id_utilisateur==""){
		$(location).attr('href',"index.html");
		alert("Veuillez entrer vos Login/Password");
	}*/
	
	var urlWS = "http://api.chessfamily.net/api/query";
    function MessagesGetAll() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"messages",
				member_id:id_utilisateur,
				perpage:10,
				page:1},
				
            dataType:"json",
			
          beforeSend: function(){
              $('.affiche_detail_message').hide();
              $('.load_detail_message').show();
          },
          success:function(result){
                     $('#messages_list').html("");  
			  $.each(result.messages, function (index, item) { 
			  		//alert(item.toSource());
				  
				  $('#messages_list').append(+
				  "<li class='listmsg'>"+
					 "<div class='col-xs-3'>"+
						"<img src='"+item.sender_photo+"' alt='' class='imgmsg'>"+
					 "</div>"+
					 "<div class='col-xs-6 textlistmsg'>"+
						  "<span><b>"+item.sender_name+" "+item.sender_last_name+"</b></span>"+
						  "<span><img src='image/active.png' alt='' style='width: 10px;'></span>"+
						  "<br><h6>"+item.message+"</h6>"+
					 "</div>"+
					 "<div class='col-xs-3 datemsg'>"+
						"<span>"+item.date+"</span>"+
					 "</div>"+
				   "</li>"+
				  "");
				  
				  
			  });  
          },
          complete: function(){
              $('.load_detail_message').hide();
              $('.affiche_detail_message').show();
          }
        });
    }



    MessagesGetAll();

});
