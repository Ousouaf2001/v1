$(document).ready(function(){
    var id_utilisateur = sessionStorage.getItem("identifiant");
	var urlWS = "http://api.chessfamily.net/api/query";
    function eventFavorite() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"events_favorite",
				member_id:id_utilisateur,
				perpage:10,
				page:1
				},
            dataType:"json",
          beforeSend: function(){
              $('.load_events').show();
          },
          success:function(result){
           
            /**/
          if(result.success == 1){
            $.each(result.favorite_events, function (index, item) {
				
              var li = "<li class='list-group-item' id='" + item.event_id + "'>" +
                        
                        "<span class='badge' style='background:white;'>" +
                            "<i class='fa fa-trash delete' id='" + item.event_id +"' style='font-size:25px;color:#4B2618;' ></i>" +
                        "</span>" +
                        "<b class='events' id='"+ item.event_id +"'>" + item.name +
                            " <i class='fa fa-circle' style='font-size:15px;color:#98BF0A'></i>" +
                        "</b>" +
                        "<br>" +
                        "<font style='font-size:12px;color:grey;'> "+ item.start_date + " - " + item.end_date + "</font>" +
                    "</li>";  

                $('.list-menu-events').append(li);
                //$('.fav_event').hide();

            });
          }else{
            $('.fav_event').show();
          }
          },
          complete: function(){
              $('.load_events').hide();
          }
        });
    }



    eventFavorite();


    $(document).on('click','.events', function(){
        document.location.href = 'eventdetails.html?event_id=' + $(this).attr('id'); 
    });

    $(document).on('click','.delete', function(){
        var eventId = $(this).attr('id');
        var id_utilisateur = sessionStorage.getItem("identifiant");
       
        $.ajax({
          	type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"events_favorite_delete",
				member_id:id_utilisateur,
				event_id:eventId
				},
            dataType:"json",
          success:function(result){
            $('.msg_delete').show();
            location.reload();
          }
        });
    });
});