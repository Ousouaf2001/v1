$(document).ready(function(){

    function MessageGetAll() {
		var urlWS = "http://api.chessfamily.net/api/query";
        if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	

        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"messages",
				member_id:id_utilisateur,
				page:1,
				perpage:10
				},
            dataType:"json",
	          success:function(result){
				  console.log(result);
	          }
        });
    }



    memberFriendFind();


    $(document).on('click','.item', function(){

	
        document.location.href = 'profile.html?id_member=' + $(this).attr('id'); 
    });
});
