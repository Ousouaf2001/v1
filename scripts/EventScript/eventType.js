$(document).ready(function(){
    //variable host declarer dans templateGenerator.js
	var HOST = "http://www.epavia.com/proxy/";
    function eventType() {
        
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          dataType: 'jsonp',
          jsonpCallback: 'event_type',
          url: HOST + "EventWebService/eventType.php",
          success:function(result){
            $.each(result.event_type, function (index, item) { 
                $('#type_event').append("<option value='" + item.id + "'>" + item.label +"</option>");
                $('#type_event_modif').append("<option value='" + item.id + "'>" + item.label +"</option>");

            });

            
          }
        });
    }



    eventType();
});
