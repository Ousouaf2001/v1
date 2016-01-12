$(document).ready(function(){
    function meetingPlaceFavorite() {
		
        var id_utilisateur = sessionStorage.getItem("identifiant");
		var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"meeting_place_favorite",
				member_id:id_utilisateur,
				perpage:10,
				page:1
				},
            dataType:"json",
          beforeSend: function(){
              $('.load_location').show();
          },
          success:function(result){
			  
            $.each(result.favorite_meeting_places, function (index, item) {
				//alert(item.toSource());
                var li = ""+
				"<li class='list-group-item'>" +
                	"<span class='badge' style='background:white;color:grey;margin-top:5px;'>"+
                		"<font style='font-size:20px;'> " + item.type + "</font>&nbsp;&nbsp;"+
						"<i class='fa fa-trash delete' id='" + item.meeting_place_id +"' style='font-size:25px;color:#4B2618;'></i>"+
					"</span>"+
					"<b class='location' id='" + item.meeting_place_id +"'> " + item.name + "&nbsp;&nbsp;<i class='fa fa-circle' style='font-size:15px;color:#98BF0A'></i></b><br>"+
					"<font style='font-size:12px;color:grey;'>" + item.distance +" KM</font>"+ // 
				"</li>";
                $('.list-menu-location').append(li);
            });
          },
          complete: function(){
              $('.load_location').hide();
          }
        });
    }



    meetingPlaceFavorite();

    $(document).on('click','.location', function(){
        document.location.href = 'locationdetails.html?meeting_place_id=' + $(this).attr('id'); 
    });
    $(document).on('click','.delete', function(){
        var LocationId = $(this).attr('id');
        var id_utilisateur = sessionStorage.getItem("identifiant");
       
        $.ajax({
          	type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"meeting_place_favorite_delete",
				member_id:id_utilisateur,
				meeting_place_id:LocationId
				},
            dataType:"json",
          success:function(result){
            $('.msg_delete').show();
            location.reload();
          }
        });
    });

});
