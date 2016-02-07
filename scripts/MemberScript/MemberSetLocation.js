
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
				  $('.affiche_memberSetLocation').hide();
				  $('.load_memberSetLocation').show();
			  },
			success:function(result){
				  alert('Position Updated!');
			},
			error:function(e){
				alert('Erreur est survenue lors de l\'update de votre Position');
				
			},
			complete: function(){
				  $('.load_memberSetLocation').hide();
				  $('.affiche_memberSetLocation').show();
			  }
		});
	}
function onError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
}

