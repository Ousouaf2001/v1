function AddPublication() {
    var urlWS="http://api.chessfamily.net/api/query";
    var status = document.getElementById("statusinput").value;
    if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	
	
		if(status == ''){
				$('#messagee').fadeIn(500);
					$('#messagee').fadeOut(1000);
		}else{

			$.ajax({
	
				type:"POST",
				url:urlWS,
				data:{authentication:"chessfemily",
					action:"member_publication_add",
					member_id:id_utilisateur,
					formatted_text:status,
					visibility:1
				},
				dataType:"json",
				success:function(result){
					
					$('#message').fadeIn(500);
					$('#message').fadeOut(1000);
					$('#statusinput').val('');
				}
			});

		}
	

   
    
}
