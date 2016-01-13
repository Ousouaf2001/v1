function memberSetLocation() {
	navigator.geolocation.getCurrentPosition(onSuccess);
	function onSuccess(position) {
		
	
	
	
	var latitude = position.coords.latitude;//document.getElementById("lat").value;//Long;
	var longitude = position.coords.longitude;//document.getElementById("long").value;//Lat;
	var member_id = sessionStorage.getItem("identifiant");
	var urlWS = "http://api.chessfamily.net/api/query";
	$.ajax({
		type:"POST",
		url:urlWS,
		data:{
			authentication:"chessfemily",
			action:"member_location_set",
			member_id:member_id,
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