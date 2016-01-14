function AddPublication() {
    var urlWS="http://api.chessfamily.net/api/query";
    var status = document.getElementById("statusinput").value;
    var id_utilisateur = sessionStorage.getItem("identifiant");
	
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
