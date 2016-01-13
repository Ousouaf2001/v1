// JavaScript Document
$(document).ready(function(){
	//var current_title = $(document).attr('title');
	var url = window.location.search;
	var id_receiver = url.substring(url.lastIndexOf("=")+1);//1;
	var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	if(id_receiver!=""){
		var DataJSON = {
				authentication:"chessfemily",
				action:"messages",
				member_id:id_utilisateur,
				friend_id:id_receiver,
				perpage:10,
				page:1}
				
	}else{
		var DataJSON = {
				authentication:"chessfemily",
				action:"messages",
				member_id:id_utilisateur,
				perpage:10,
				page:1}
		$(document).on('click','.message_item', function(){
			document.location.href = 'messages_detail.html?receiver_id=' + $(this).attr('id'); 
		});
	}
	//var id_utilisateur = 4;
	/*if(id_utilisateur==NULL || id_utilisateur==""){
		$(location).attr('href',"index.html");
		alert("Veuillez entrer vos Login/Password");
	}*/
	
	var urlWS = "http://api.chessfamily.net/api/query";
    function MessagesGetAll() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:DataJSON,
            dataType:"json",
			
          beforeSend: function(){
              $('.affiche_detail_message').hide();
              $('.load_detail_message').show();
          },
          success:function(result){
              $('#messages_list').html("");  
			  $.each(result.messages, function (index, item) { 
			  	if(id_receiver==""){
					if(item.sender_id!=id_utilisateur){
				  $('#messages_list').append('<li class="listmsg message_item" id="'+item.sender_id+'">'+
					 "<div class='col-xs-3'>"+
						"<img src='"+item.sender_photo+"' alt='' class='imgmsg'>"+
					 "</div>"+
					 "<div class='col-xs-9 textlistmsg'>"+
						  "<span><b>"+item.date+"</b></span> - <span><b>"+item.sender_name+" "+item.sender_last_name+"</b></span><br />"+
						  "<span><b>Objet : </b>"+item.object+"</span><br />"+
						  "<span><b>Message : </b>"+item.message+"</span><br />"+
					 "</div>"+
				  "</li>"+
				  "");
				}
				}else{
					$('#messages_list').append('<li class="listmsg message_item" id="'+item.sender_id+'">'+
					 "<div class='col-xs-3'>"+
						"<img src='"+item.sender_photo+"' alt='' class='imgmsg'>"+
					 "</div>"+
					 "<div class='col-xs-9 textlistmsg'>"+
						  "<span><b>"+item.sender_name+" "+item.sender_last_name+"</b></span><br />"+
						  "<span><b>To : </b>"+item.receiver_name+" "+item.receiver_last_name+"</span><br />"+
						  "<span><b>Date de réception :</b>"+item.date+"</span><br />"+
						  "<span><b>Objet : </b>"+item.object+"</span><br />"+
						  "<span><b>Message : </b>"+item.message+"</span><br />"+
					 "</div>"+
				  "</li>"+
				  "");
				}
				  
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
