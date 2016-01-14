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
    var latitude = $_GET('lat2');
    var longitude = $_GET('long2');
    var distance = $_GET('distance2');
    var meeting_type = $_GET('meeting_type');
    var status = $_GET('status');
      
        
        var urlWS="http://api.chessfamily.net/api/query";
        $.ajax(
        {

            type:"POST",
            url:urlWS,
            data:{
            authentication:"chessfemily",
            action:"find_meeting_places",
            distance:distance,
            latitude:latitude,
            longitude:longitude,
            meeting_place_type_id:meeting_type,
            status:status

          },
            dataType:"json",
              beforeSend: function(){
              $('.load_events').show();
          },
          success:function(result){
           
            /**/
          if(result.success == 1){
            $.each(result.meeting_places, function (index, item) { 
              var li = "<li class='list-group-item' id='" + item.id + "'>" +
                        
                        "<span class='badge' style='background:white;'>" +
                            "<i class='fa fa-trash delete' id='" + item.id +"' style='font-size:25px;color:#4B2618;' ></i>" +
                        "</span>" +
                        "<b class='location' id='"+ item.id +"'>" + item.name +
                            " <i class='fa fa-circle' style='font-size:15px;color:#98BF0A'></i>" +
                        "</b>" +
                        "<br>" +
                        "<font style='font-size:12px;color:grey;'> "+ item.start_date + "   8:00PM - " + item.end_date + "   2:00AM</font>" +
                    "</li>";  

                $('.list-menu-location').append(li);
                $('.fav_event').hide();

            });
          }else{
            $('.list-menu-location').html('no place');
          }
          },
          complete: function(){
              $('.load_events').hide();
          }
        }
    );


    $(document).on('click','.location', function(){
        document.location.href = 'locationdetails.html?meeting_place_id=' + $(this).attr('id'); 
    });
    $(document).on('click','.delete', function(){
        //document.location.href = 'locationdetails.html?meeting_place_id=' + $(this).attr('id'); 
        console.log($(this).attr('id'));
    });


