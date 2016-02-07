
function memberSetLocation() {
	navigator.geolocation.getCurrentPosition(onSuccess,onError);
	
}
function onSuccess(position) {
		var latitude = position.coords.latitude;//document.getElementById("lat").value;//Long;
		var longitude = position.coords.longitude;//document.getElementById("long").value;//Lat;
		if(localStorage.getItem("identifiantLocal")!= null){
				var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
			}else if(sessionStorage.getItem("identifiant")!= null){
				var id_utilisateur = sessionStorage.getItem("identifiant");//4;
			}	
		var urlWS = "http://api.chessfamily.net/api/query";
		$.ajax({
			type:"POST",
			url:urlWS,
			data:{
				authentication:"chessfemily",
				action:"member_location_set",
				member_id:id_utilisateur,
				latitude:latitude,
				longitude:longitude
			},
			dataType:"json",
			beforeSend: function(){
				  $('#set_location').hide();
				  $('.load_memberSetLocation').show();
			  },
			success:function(result){
				  $('#messagemapsuccess').fadeIn(500).delay(700).fadeOut(500);
				  $('#lat').html(latitude);
				  $('#long').html(longitude);
			},
			error:function(e){
				$('#messagemaperror').fadeIn(500).delay(700).fadeOut(500);
				
			},
			complete: function(){
				  $('.load_memberSetLocation').hide();
				  $('.mapcursor').css('color','#582D1C');
				  $('#set_location').show();
			  }
		});
	}
function onError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
}

