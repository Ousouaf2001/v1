$(document).ready(function(){
    function memberFind() {
          
          var url = window.location.search;
  
          var m_id = url.substring(url.lastIndexOf("=")+1);

          var dataString = 'authentication=chessfemily&action=member_get&id_member='+m_id;

        var HOST = "http://www.epavia.com/proxy/";
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_get_language',
          url: HOST + "MemberWebService/MemberGetLanguage.php",
          success:function(result){
              $.each(result.member_languages, function (index, item) {
                $('.lang').append("<b>" + item.label + " | </b>");
            });
          }
        });
    }



    memberFind();
});
