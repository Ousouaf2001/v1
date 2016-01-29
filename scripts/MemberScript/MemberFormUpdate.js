
$(document).ready(function(){
    function memberFind() {
          
          if(localStorage.getItem("identifiantLocal")!= null){
      			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
      		}else if(sessionStorage.getItem("identifiant")!= null){
      			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
      		}	
          
          /*var dataString = 'authentication=chessfemily&action=member_get&id_member='+id_utilisateur;
          var password = document.getElementById("password").value; 
          var password_conf = document.getElementById("password_conf").value;*/
        //variable host declarer dans templateGenerator.js
		var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"member_get",
				id:id_utilisateur
			},
            dataType:"json",
          success:function(result){
			  console.log(result);
				$('#NameUserTitle').html(result.member.name+" "+result.member.last_name);
              $('#name').val(result.member.name);
              $('#last_name').val(result.member.last_name);
              
              $('#birthday').val(result.member.birthday);
              $('#gender').val(result.member.gender);
              $('#country').val(result.member.residence_countryid);
			  
			  
              
              
          }
        });
    }



    memberFind();
});

