function editEvent() {
    
    var id_utilisateur = sessionStorage.getItem("identifiant");
    var type_event = document.getElementById("type_event_modif").value;
    var type_meeting = document.getElementById("type_meeting_modif").value;
    var name = document.getElementById("name_modif").value;
    var organizer = document.getElementById("organizer_modif").value;
    var start_date = document.getElementById("start_date_modif").value;
    var end_date = document.getElementById("end_date_modif").value;
    var is_rated = document.getElementById("is_rated_modif").value;
    var description = document.getElementById("description_modif").value;
    var prize_fund = document.getElementById("prize_fund_modif").value;
    var phone_number = document.getElementById("phone_number_modif").value;
    var email = document.getElementById("email_modif").value;
    var website = document.getElementById("website_modif").value;

	var urlWS = "http://api.chessfamily.net/api/query";

	$.ajax({
		type:"POST",
		url:urlWS,
		data:{
			authentication:"chessfemily",
			action:"event_edit",
			announcer_id:id_utilisateur,
			//event_id:,
			type_id:type_event, 
			meeting_placeid:type_meeting,
			name:name,
			organizer:organizer,
			start_date:start_date,
			end_date:end_date,
			is_rated:is_rated,
			description:description,
			prize_fund:prize_fund,
			phone_number:phone_number,
			email:email,
			website:website
			},
		dataType:"json",
		  success:function(result){
			 console.log(result);
		  },
		  error:function(msg){
			 console.log(msg);
		  }
	});
        
    
    return false;
}