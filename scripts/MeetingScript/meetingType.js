$(document).ready(function(){
    //variable host declarer dans templateGenerator.js
     
    function meetingType() {
        var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
          type:"POST",
          url:urlWS,
          data:{
              authentication:"chessfemily",action:"meeting_place_type"
              },
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          dataType: 'json',
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
