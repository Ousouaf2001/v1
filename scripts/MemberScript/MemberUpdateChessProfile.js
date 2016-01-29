
function MemberUpdateChessProfile() {


    var player = document.getElementById("player").checked;
    if(player == true){var player = 1;}else{var player = 0;}
    var arbiter = document.getElementById("arbiter").checked;
    if(arbiter == true){var arbiter = 1;}else{var arbiter = 0;}
    var titled = document.getElementById("titled").checked;
    if(titled == true){var titled = 1;}else{var titled = 0;}
	var trainer = document.getElementById("trainer").checked;
    if(trainer == true){var trainer = 1;}else{var trainer = 0;}
	
	var titleProfile = document.getElementById("titleProfile").selected;
    if(titleProfile == true){var titleProfile = 1;}else{var titleProfile = 0;}
	var TrainerLevelProfile = document.getElementById("TrainerLevelProfile").selected;
    if(TrainerLevelProfile == true){var TrainerLevelProfile = 1;}else{var TrainerLevelProfile = 0;}
	
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
                action:"member_chess_profile_edit",
				member_id:id_utilisateur,
                is_player:player,
                is_arbiter:arbiter,
				is_titled_player:titled,
				title:titleProfile,
				is_trainer:trainer,
				lesson_level:TrainerLevelProfile
                
              },
              dataType:"json",
              success:function(result){
                  console.log(result);
              },
              error:function(e){
                console.log(e);
              }
    });
    return false;
    
}

