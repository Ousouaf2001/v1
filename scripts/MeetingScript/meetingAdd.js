function AddMeetingPlace() {
    
    var id_utilisateur = sessionStorage.getItem("identifiant");
    var name_meeting = document.getElementById("name_meeting").value;
    var adress_meeting = document.getElementById("adress_meeting").value;
    var latitude_meeting = document.getElementById("latitude_meeting").value;
    var longitude_meeting = document.getElementById("longitude_meeting").value;
    var meetingType = document.getElementById("meetingType").value;
    var status_meeting = document.getElementById("status_meeting").value;






// Returns successful data submission message when the entered information is stored in database.
    var dataString = 'authentication=chessfemily&action=meeting_place_add&added_bymemberid='+id_utilisateur+
                     '&administrator_id='+id_utilisateur + 
                     '&name='+name_meeting+
                     '&address='+adress_meeting + 
                     '&latitude='+latitude_meeting+
                     '&longitude='+longitude_meeting +
                     '&type_id='+meetingType +
                     '&status='+status_meeting;

    
        //variable host declarer dans templateGenerator.js
		var HOST = "http://www.epavia.com/proxy/";
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'meeting_place_add',
          url: HOST + "MeetingWebService/meetingAdd.php",
          success:function(result){
                  if(result.success == 1){
                      //$('.testlogin').html(' success connexion');
                      $('.info_requis').fadeOut();
                      $('.inscritok').fadeIn();
                      $('.inscritok').fadeOut(4000);
                      
                  }else{
                      $('.info_requis').fadeIn();
                  }
                  

                  
          }
        });
        
    
    return false;
}
