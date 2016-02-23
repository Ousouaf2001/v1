
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
        	  if(result.member.availability == '1'){
                  $('.yourid').html("<i class='fa fa-circle' style='font-size:10px;color:#98BF0A'></i>");
              }else{
                $('.yourid').html("<i class='fa fa-circle' style='font-size:10px;color:red'></i>");
              }
			       $('#NameUserTitle').html(result.member.name+" "+result.member.last_name);
              $('#name').val(result.member.name);
              $('#last_name').val(result.member.last_name);
              
              $('#birthday').val(result.member.birthday);
              $('#gender').val(result.member.gender);
              $('#country').val(result.member.residence_countryid);
			  //alert(result.member.residence_countryid);
			  
			  if(result.member.is_player==1){$('#player').attr("checked",true);}else{$('#player').attr("checked",false);}
			  if(result.member.is_arbiter==1){$('#arbiter').attr("checked",true);}else{$('#arbiter').attr("checked",false);}
			  if(result.member.is_titled_player==1){$('#titled').attr("checked",true);}else{$('#titled').attr("checked",false);}
			  if(result.member.is_trainer==1){$('#trainer').attr("checked",true);}else{$('#trainer').attr("checked",false);}
			  
			  
			  $('#image').attr("src",result.member.image);
			  console.log($('#image').attr("src")+"test");
			  $('#titleProfile').val(result.member.title);
			  $('#TrainerLevelProfile').val(result.member.lesson_level);
			  
              
          }
        });
    }



    memberFind();
});

