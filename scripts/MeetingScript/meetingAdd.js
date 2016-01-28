function AddMeetingPlace() {
    
  navigator.geolocation.getCurrentPosition(onSuccess);
  function onSuccess(position) {

    if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	
    var name_meeting = document.getElementById("name_meeting").value;
    var adress_meeting = document.getElementById("adress_meeting").value;
    var latitude_meeting = position.coords.latitude;
    var longitude_meeting = position.coords.longitude;
    var meetingType = document.getElementById("meetingType").value;
    var status_meeting = document.getElementById("status_meeting").value;



    
        var urlWS = "http://api.chessfamily.net/api/query";
		
        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"meeting_place_add",
				added_bymemberid:id_utilisateur,
				administrator_id:id_utilisateur,
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
                      //$('.inscritok').show();
                      $('#myModal').modal('hide');
                  }else{
                    $('.info_requis').show();
                  }
                  

                  
          }
        });
        
    
    return false;
}
}
