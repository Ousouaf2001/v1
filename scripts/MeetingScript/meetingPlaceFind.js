$(document).ready(function(){
    function meetingPlaceFind() {
        //variable host declarer dans templateGenerator.js
		var HOST = "http://www.epavia.com/proxy/";
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          dataType: 'jsonp',
          jsonpCallback: 'meeting_places',
          url: HOST + "MeetingWebService/meetingPlaceFind.php",
          beforeSend: function(){
              $('.load_location').show();
          },
          success:function(result){
            $.each(result.meeting_places, function (index, item) {
                var li = ""+
				"<li class='list-group-item'>" +
                	"<span class='badge' style='background:white;color:grey;margin-top:5px;'>"+
                		"<font style='font-size:20px;'> " + item.type + "</font>"+
						"<i class='fa fa-trash delete' id='" + item.id +"' style='font-size:25px;color:#4B2618;'></i>"+
					"</span>"+
					"<b class='location' id='" + item.id +"'> " + item.name + "<i class='fa fa-circle' style='font-size:15px;color:#98BF0A'></i></b><br>"+
					"<font style='font-size:12px;color:grey;'> " + item.distance +" KM</font>"+
				"</li>";
                $('.list-menu-location').append(li);
            });
          },
          complete: function(){
              $('.load_location').hide();
          }
        });
    }



    meetingPlaceFind();

    $(document).on('click','.location', function(){
        document.location.href = 'locationdetails.html?meeting_place_id=' + $(this).attr('id'); 
    });
    $(document).on('click','.delete', function(){
        //document.location.href = 'locationdetails.html?meeting_place_id=' + $(this).attr('id'); 
        console.log($(this).attr('id'));
    });

});
