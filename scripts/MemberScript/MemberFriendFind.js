$(document).ready(function(){

    function memberFriendFind() {
        //variable host declarer dans templateGenerator.js
		var HOST = "http://www.epavia.com/proxy/";
        var id_utilisateur = sessionStorage.getItem("identifiant");
        var dataString = 'authentication=chessfemily&action=friends&id_utilisateur='+id_utilisateur;
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_find_friend',
          url: HOST + "MemberWebService/MemberFriendFind.php",
          beforeSend: function(){
              $('.load_players').show();
          },
          success:function(result){
            $.each(result.friends, function (index, item) { 
              var li = "<div class='col-xs-6 item' id='"+ item.friend_id +"'><div class='panel panel-default' style='background:#E5E5E5'><div class='panel-heading' style='background:#965A36;color:white;font-size:15px;'><b>" + item.name +" "+ item.last_name + "</b><font> "+ item.last_name + " </font><font class='pull-right'> "+ item.distance + " KM </font></div><div class='panel-body' style='padding:0;'><img src='"+ item.image + "' class='img-responsive  center-block' style='widht:200px; height:150px;'></div><div class='panel-footer' style='background:#F1D6A1'><i class='fa fa-gamepad' style='font-size:25px;color:grey;'></i><i class='fa fa-star-o pull-right' style='font-size:25px;color:grey;'></i></div></div></div>";     
                $('.players').append(li);
            });
          },
          complete: function(){
              $('.load_players').hide();
          }
        });
    }



    memberFriendFind();


    $(document).on('click','.item', function(){
        document.location.href = 'profile.html?id_member=' + $(this).attr('id'); 
    });
});
