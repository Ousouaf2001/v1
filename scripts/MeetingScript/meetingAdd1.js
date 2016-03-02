function AddMeetingPlace() {
    if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
  	}else if(sessionStorage.getItem("identifiant")!= null){
  		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
  	}	
    var name_meeting = document.getElementById("name_meeting").value;
    var adress_meeting = document.getElementById("champ_adress").value;
    var latitude_meeting = document.getElementById("latitude_meeting").value;
    var longitude_meeting = document.getElementById("longitude_meeting").value;
    var country_meeting = document.getElementById("country_meeting").value;
    var meetingType = document.getElementById("meetingType").value;
    //var status_meeting = document.getElementById("status_meeting").value;



   if((name_meeting=="")||(meetingType=="")){
		$('.MeetingPlace_info_requis').fadeIn(500).delay(2000).fadeOut(500);
	}else{ 
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
            country_id:country_meeting,
    				type_id:meetingType,
    				status:1
    				},
            dataType:"json",
            success:function(result){
                  if(result.success == 1){
                      console.log(result);
                      //$('#champ_meeting').val(result.id);
					            $('#affiche_success').fadeIn(500).delay(2000).fadeOut(500);
                      setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                  }else{
                      $('.MeetingPlace_info_requis').fadeIn(500).delay(2000).fadeOut(500);
                  }
            }
        });
	}
    
    return false;
}
