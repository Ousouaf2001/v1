function MemberUpdateChessProfile() {


    var player = document.getElementById("player").checked;
    if(player == true){
      var player = 1;
    }else{
      var player = 0;
    }
    var arbiter = document.getElementById("arbiter").checked;
    if(arbiter == true){
      var arbiter = 1;
    }else{
      var arbiter = 0;
    }
    
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
                is_player:player,
                is_arbiter:arbiter,
                member_id:id_utilisateur
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
