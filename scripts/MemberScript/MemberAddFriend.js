
    function MemberAddFriend() {
          
          var url = window.location.search;
          if(localStorage.getItem("identifiantLocal")!= null){
				var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
			}else if(sessionStorage.getItem("identifiant")!= null){
				var id_utilisateur = sessionStorage.getItem("identifiant");//4;
			}	
          var m_id = url.substring(url.lastIndexOf("=")+1);

          var dataString = 'authentication=chessfemily&action=friend_add&id_utilisateur='+id_utilisateur+'&friend_id='+m_id;

        //variable host declarer dans templateGenerator.js
		var HOST = "http://www.epavia.com/proxy/";
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_add_friend',
          url: HOST + "MemberWebService/MemberAddFriend.php",
          beforeSend: function(){
              //$('.icones_invit').html("<i class='fa fa-gamepad' style='font-size:20px;'></i>");

              $('.icones_ko').html("<img src='image/load.gif' width='20'>");
              //$('.load_profil_member').show();
          },
          success:function(result){
              if(result.success == 1){
                  $('#affiche_success').fadeIn(500).delay(2000).fadeOut(500);
                  $('.icones_ok').html("<i class='fa fa-gamepad' style='font-size:20px;'></i>");
                  $('.icones_ko').hide();

              }else{
                $('#affiche_error').fadeIn(500).delay(2000).fadeOut(500);
                $('.icones_ko').html("<i class='fa fa-gamepad' style='font-size:20px;'></i>");
              }
              console.log(result);
          }
        });

    }


