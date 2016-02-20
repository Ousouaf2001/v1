function editMeetingPlace() {
    navigator.geolocation.getCurrentPosition(onSuccess);
  function onSuccess(position) {
    if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	
    var id_meeting = document.getElementById("id_meeting_edit").value;
    var name_meeting = document.getElementById("name_meeting_edit").value;
    var adress_meeting = document.getElementById("adress_meeting_edit").value;
    var latitude_meeting = position.coords.latitude;
    var longitude_meeting = position.coords.longitude;
    var meetingType = document.getElementById("meetingType_edit").value;
    //var status_meeting = document.getElementById("status_meeting_edit").value;



        
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
    				status:1
    				},
            dataType:"json",
          success:function(result){
                  if(result.success == 1){
                      //$('.testlogin').html(' success connexion');
                      $('#affiche_successedit').fadeIn(500).delay(2000).fadeOut(500);
                      //$('#myModalEdit').modal('hide').delay(1000);
                      //setTimeout($('#myModalEdit').modal('hide'), 5000);
                      setTimeout(function() {$('#myModalEdit').modal('hide');}, 1000);
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
}