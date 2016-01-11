$(document).ready(function(){

    /* variable host declarer dans templateGenerator.js */
	var url = window.location.search;
	var urlWS = "http://api.chessfamily.net/api/query";
	var id_utilisateur = sessionStorage.getItem("identifiant");
	var m_id = url.substring(url.lastIndexOf("=")+1);
	
    function EventAttendance() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"friends_in_meeting_place",
				member_id:id_utilisateur,
				meeting_place_id:m_id,
				perpage:3,
				page:1
				},
            dataType:"json",
          success:function(result){
			  alert(result.friends.toSource());
                 $.each(result.friends, function (index, item) { 
					$('#meetingFriendsDiv').append("<p><span><img src='"+item.photo+"' class='img-circle' width='50'></span>&nbsp;&nbsp;&nbsp;<span><b>"+item.name+" "+item.last_name+"</b></span></p>");
				});
				        
          }
        });
    }

    EventAttendance();
});
