$(document).ready(function(){
    //variable host declarer dans templateGenerator.js
	var HOST = "http://www.epavia.com/proxy/";
    function meetingType() {
        
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          dataType: 'jsonp',
          jsonpCallback: 'meeting_place_type',
          url: HOST + "MeetingWebService/meetingType.php",
          success:function(result){
            $.each(result.meeting_place_type, function (index, item) { 
                $('#type_meeting').append("<option value='" + item.id + "'>" + item.label +"</option>");
                
                $('#type_meeting_modif').append("<option value='" + item.id + "'>" + item.label +"</option>");
                $('#meetingType').append("<option value='" + item.id + "'>" + item.label +"</option>");
                $('#meetingType_edit').append("<option value='" + item.id + "'>" + item.label +"</option>");
            });

            
          }
        });
    }



    meetingType();
});
