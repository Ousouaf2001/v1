$(document).ready(function(){


    var id_utilisateur = sessionStorage.getItem("identifiant");
    var dataString = 'authentication=chessfemily&action=events_favorite&member_id='+id_utilisateur ;
    //variable host declarer dans templateGenerator.js
	var HOST = "http://www.epavia.com/proxy/";
    function eventFavorite() {
        
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'favorite_events',
          url: HOST + "EventWebService/eventFavorite.php",
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
                        "<font style='font-size:12px;color:grey;'> "+ item.start_date + "   8:00PM - " + item.end_date + "   2:00AM</font>" +
                    "</li>";  

                $('.list-menu-events').append(li);
                $('.fav_event').hide();

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
        //document.location.href = 'eventdetails.html?event_id=' + $(this).attr('id'); 
        var eventId = $(this).attr('id');
        var id_utilisateur = sessionStorage.getItem("identifiant");
        var dataStringDelete = 'authentication=chessfemily&action=events_favorite_delete&member_id='+id_utilisateur+'&event_id='+eventId;
        

        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataStringDelete,
          dataType: 'jsonp',
          jsonpCallback: 'eventFovoriteDelete',
          url: HOST + "EventWebService/eventFavoriteDelete.php",
          success:function(result){
            $('.msg_delete').show();
            
            location.reload();
          }
        });




    });
});
