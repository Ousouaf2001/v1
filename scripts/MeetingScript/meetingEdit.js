function editMeetingPlace() {
    
    var id_utilisateur = sessionStorage.getItem("identifiant");
    var id_meeting = document.getElementById("id_meeting_edit").value;
    var name_meeting = document.getElementById("name_meeting_edit").value;
    var adress_meeting = document.getElementById("adress_meeting_edit").value;
    var latitude_meeting = document.getElementById("latitude_meeting_edit").value;
    var longitude_meeting = document.getElementById("longitude_meeting_edit").value;
    var meetingType = document.getElementById("meetingType_edit").value;
    var status_meeting = document.getElementById("status_meeting_edit").value;


// Returns successful data submission message when the entered information is stored in database.
    var dataString = 'authentication=chessfemily'+
                     '&action=meeting_place_edit'+
                     '&meeting_place_id='+id_meeting+
                     '&member_id='+id_utilisateur+
					 
                     '&name='+name_meeting+
                     '&address='+adress_meeting + 
                     '&latitude='+latitude_meeting+
                     '&longitude='+longitude_meeting +
                     '&type_id='+meetingType +
                     '&status='+status_meeting;
    
        
		var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"meeting_place_edit",
				meeting_place_id:id_meeting,
				member_id:id_utilisateur,
				name:name_meeting,
				address:adress_meeting, 
				latitude:latitude_meeting,
				longitude:longitude_meeting,
				type_id:meetingType,
				status:status_meeting
				},
            dataType:"json",
          success:function(result){
                  if(result.success == 1){
                      //$('.testlogin').html(' success connexion');
                      $('.info_requis').fadeOut();
                      $('.inscritok').fadeIn();
                      $('.inscritok').fadeOut(4000);
                  
                  }else{
                      $('.info_requis').fadeIn();
                  }
                  

                  
          },
          error:function(msg){
             console.log(msg);
          }
        });
        
    
    return false;
}
