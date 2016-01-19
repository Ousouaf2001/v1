$(document).ready(function(){
    function memberFind() {
          
          if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	
          
          var dataString = 'authentication=chessfemily&action=member_get&id_member='+id_utilisateur;
          /*var password = document.getElementById("password").value; 
          var password_conf = document.getElementById("password_conf").value;*/
        //variable host declarer dans templateGenerator.js
		var HOST = "http://www.epavia.com/proxy/";
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_get',
          url: HOST + "MemberWebService/MemberGet.php",
          success:function(result){

              $('#name').val(result.member.name);
              $('#last_name').val(result.member.last_name);
              $('#email').val(result.member.email);
              $('#birthday').val(result.member.birthday);
              
          }
        });
    }



    memberFind();
});
