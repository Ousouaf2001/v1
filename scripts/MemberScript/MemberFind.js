<<<<<<< HEAD
  function $_GET(param) {
    var vars = {};
    window.location.href.replace( 
      /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
      function( m, key, value ) { // callback
        vars[key] = value !== undefined ? value : '';
      }
    );

    if ( param ) {
      return vars[param] ? vars[param] : null;  
    }
    return vars;
  }
    var latitude = $_GET('lat');
    var longitude = $_GET('long');
    var distance = $_GET('distance');
    var age_from = $_GET('age_from');
    var age_to = $_GET('age_to');
    var gender = $_GET('gender');
    var profile = $_GET('profile');
      
        
		    var urlWS="http://api.chessfamily.net/api/query";
        $.ajax(
        {

            type:"POST",
            url:urlWS,
            data:{
    				authentication:"chessfemily",
    				action:"find_members",
    				distance:distance,
    				latitude:latitude,
    				longitude:longitude,
            age_min:age_from,
            age_max:age_to,
            gender:gender,
            profile:profile

          },
            dataType:"json",
              beforeSend: function(){
              $('.load_players').show();
              },
              success:function(result){
                if(result.success == 1){
                    $.each(result.members, function (index, item) { 
                      var li = ""+
                      "<div class='col-xs-6 item' id='"+ item.id +"'>"+
                        "<div class='panel panel-default' style='background:#E5E5E5'>"+
                        "<div class='panel-heading' style='background:#965A36;color:white;font-size:15px;'>"+
                          "<b>" + item.name +" "+ item.last_name + "</b></br>"+
                          "<font> "+ item.last_name + " </font>"+
                          "<font class='pull-right'> "+ item.distance + " KM </font>"+
                        "</div>"+
                        "<div class='panel-body' style='padding:0;'>"+
                          "<img src='"+ item.image + "' class='img-responsive  center-block' style='widht:200px; height:150px;'>"+
                        "</div>"+
                        "<div class='panel-footer' style='background:#F1D6A1'>"+
                          "<i class='fa fa-gamepad' style='font-size:25px;color:grey;'></i>"+
                          "<i class='fa fa-star-o pull-right' style='font-size:25px;color:grey;'></i>"+
                        "</div>"+//"</div>"+
                      "</div>";     
                          
                        $('.players').append(li);
                        
                    });
                    
                }else{
                    $('.players').html('no players');
                }
              },
              complete: function(){
                  $('.load_players').hide();
              }
        }
    );

   
 $(document).on('click','.item', function(){
        document.location.href = 'profile.html?id_member=' + $(this).attr('id'); 
=======
  function $_GET(param) {
    var vars = {};
    window.location.href.replace( 
      /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
      function( m, key, value ) { // callback
        vars[key] = value !== undefined ? value : '';
      }
    );

    if ( param ) {
      return vars[param] ? vars[param] : null;  
    }
    return vars;
  }
  
  if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
  	}else if(sessionStorage.getItem("identifiant")!= null){
  		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
  	}	
    var latitude = $_GET('lat');
    var longitude = $_GET('long');
    var distance = $_GET('distance');
    var age_from = $_GET('age_from');
    var age_to = $_GET('age_to');
    var gender = $_GET('gender');
    var profile = $_GET('profile');
      
        
		    var urlWS="http://api.chessfamily.net/api/query";
        $.ajax(
        {

            type:"POST",
            url:urlWS,
            data:{
    				authentication:"chessfemily",
    				action:"find_members",
    				distance:distance,
    				latitude:latitude,
    				longitude:longitude,
					member_id:id_utilisateur,
            age_min:age_from,
            age_max:age_to,
            gender:gender,
            profile:profile

          },
            dataType:"json",
              beforeSend: function(){
              $('.load_players').show();
              },
              success:function(result){
                if(result.success == 1){
                    $.each(result.members, function (index, item) { //.toFixed(2)
                      var li = ""+
                      "<div class='col-xs-6 item' id='"+ item.id +"'>"+
                        "<div class='panel panel-default' style='background:#E5E5E5'>"+
                        "<div class='panel-heading' style='background:#965A36;color:white;font-size:15px;'>"+
                          "<b>" + item.name +" "+ item.last_name + "</b></br>"+
                          "<font> "+ item.last_name + " </font>"+
                          "<font class='pull-right'> "+ item.distance + " KM </font>"+
                        "</div>"+
                        "<div class='panel-body' style='padding:0;'>"+
                          "<img src='"+ item.image + "' class='img-responsive  center-block' style='widht:200px; height:150px;'>"+
                        "</div>"+
                        "<div class='panel-footer' style='background:#F1D6A1'>"+
                          "<i class='fa fa-gamepad' style='font-size:25px;color:grey;'></i>"+
                          "<i class='fa fa-star-o pull-right' style='font-size:25px;color:grey;'></i>"+
                        "</div>"+//"</div>"+
                      "</div>";     
                          
						  
						  /*
						  <button class="btn text-uppercase" id="send_invitation" onclick="AddNotifications()" >
							  <div class="icones_chargement"></div>
							  <div class="icones_ok"></div>
							  <div class="icones_ko"><i class='fa fa-gamepad' style='font-size:20px;'></i></div>
							  <font class="text-uppercase"><b style="font-size:10px;">Play</b></font>
						  </button>
						  */
						  
						  
                        $('.players').append(li);
                        
                    });
                    
                }else{
                    $('.players').html('no players');
                }
              },
              complete: function(){
                  $('.load_players').hide();
              }
        }
    );

   
 $(document).on('click','.item', function(){
        document.location.href = 'profile.html?id_member=' + $(this).attr('id'); 
>>>>>>> 390c7d6688485d3483b24ac46b3e32e2ef2369a6
    });