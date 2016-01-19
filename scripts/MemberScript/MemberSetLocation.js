function memberSetLocation() {
	navigator.geolocation.getCurrentPosition(onSuccess);
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
		success:function(result){
			  alert('ok');
		},
		error:function(e){
			alert('no');
			
		}
	});
}
}