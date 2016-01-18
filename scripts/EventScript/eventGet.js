$(document).ready(function(){

    var url = window.location.search;
    var e_id = url.substring(url.lastIndexOf("=")+1);//1;
	
	var urlWS = "http://api.chessfamily.net/api/query";
    function eventGET() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{authentication:"chessfemily",action:"event_get",event_id:e_id},
            dataType:"json",
			
          beforeSend: function(){
              $('.affiche_detail_event').hide();
              $('.load_detail_event').show();
          },
          success:function(result){
                              $('.titre_haut').val(result.event.name);
                              $('.event_type').val(result.event.id);
                              $('.date_start').val(result.event.start_date);
                              $('.date_end').val(result.event.end_date);
                              $('.site').val(result.event.website);
                              $('.email').val(result.event.email);
                              $('.tel').val(result.event.phone_number);
                              $('#description').val(result.event.description);
							  $('address').val(result.event.adress);
							  //$('#img_event').attr("src",result.event.meeting_photos[0].image);
							  $.each(result.event.meeting_photos, function (index, item) { 
									$('.rslides').append("<li><img src='"+item.image+"' alt=''></li>")
								});
							  
							  
							  //alert(result.event.meeting_photos[0].image);		  
          },
          complete: function(){
              $('.load_detail_event').hide();
              $('.affiche_detail_event').show();
          }
        });
    }



    eventGET();

});
