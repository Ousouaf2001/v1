
    
    function memberFind() {
		$(location).attr('href',"searchPage.html");
        var latitude = document.getElementById("getlat").value;//"36.8040542603"
        var longitude = document.getElementById("getlong").value;//"10.1823110580"
        var distance = $("input[name=distance]:checked").val();//"1000"
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
				longitude:longitude},
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
                    console.log(result);
                }else{
                    $('.players').html('noooooooooo');
                }
              },
              complete: function(){
                  $('.load_players').hide();
              }
        }
    );

    }



    


    $(document).on('click','.item', function(){
        document.location.href = 'profile.html?id_member=' + $(this).attr('id'); 
    });

