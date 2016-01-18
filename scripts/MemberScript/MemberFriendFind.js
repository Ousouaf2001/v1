$(document).ready(function(){

    function memberFriendFind() {
        //variable host declarer dans templateGenerator.js
		//alert("a");
		var urlWS = "http://api.chessfamily.net/api/query";
        var id_utilisateur = 5;//sessionStorage.getItem("identifiant");
        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"friends",
				member_id:id_utilisateur,
				page:1,
				perpage:10
				},
            dataType:"json",
		  
          beforeSend: function(){
              $('.load_players').show();
          },
		  beforeSend: function(){
              $('.affiche_friends').hide();
              $('.load_friends').show();
          },
          success:function(result){
			  //alert(result.toSource());
			  if(result.success==1){
				$.each(result.friends, function (index, item) { 
					//alert(item.toSource());
				  var li = "<div class='col-xs-6 item' id='"+ item.friend_id +"'>"+
				  		"<div class='panel panel-default' style='background:#E5E5E5'>"+
							"<div class='panel-heading' style='background:#965A36;color:white;font-size:15px;'>"+
								"<b>" + item.name +" "+ item.last_name + "</b>"+
								"<font> "+ item.last_name + " </font>"+
								"<font class='pull-right'> "+ item.distance + " KM </font>"+
							"</div>"+
							"<div class='panel-body' style='padding:0;'>"+
								"<img src='"+ item.image + "' class='img-responsive  center-block' style='widht:200px; height:150px;' />"+
							"</div>"+
							"<div class='panel-footer' style='background:#F1D6A1'>"+
								"<i class='fa fa-gamepad' style='font-size:25px;color:grey;'></i>"+
								"<i class='fa fa-star-o pull-right' style='font-size:25px;color:grey;'></i>"+
							"</div>"+
						"</div>"+
					"</div>";     
					$('.players').append(li);
				});
			  }else{
				  $('.players').html("Aucune résultat!!");
			  }
          },
          complete: function(){
               $('.load_friends').hide();
              $('.affiche_friends').show();
          }
        });
    }



    memberFriendFind();


    $(document).on('click','.item', function(){

	
        document.location.href = 'profile.html?id_member=' + $(this).attr('id'); 
    });
});
