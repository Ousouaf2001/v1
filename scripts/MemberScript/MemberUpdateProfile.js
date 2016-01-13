function MemberUpdateProfileFunction() {
    
    var name = document.getElementById("name").value;
    var last_name = document.getElementById("last_name").value;
    
    var password = document.getElementById("password").value;
    //var password_conf = document.getElementById("password_conf").value;
    var birthday = document.getElementById("birthday").value;
    var genre = document.getElementById("genre").value;
    var country = document.getElementById("country").value;
    var id_utilisateur = sessionStorage.getItem("identifiant");

// Returns successful data submission message when the entered information is stored in database.
    if(password == ''){
        var dataString = 'authentication=chessfemily&action=member_edit&name='+name+
                         '&last_name='+last_name+
                         '&birthday='+birthday+
                         '&gender='+genre+
                         '&residence_countryid='+country+
                         '&member_id='+id_utilisateur;


    }else{
        var dataString = 'authentication=chessfemily&action=member_edit&name='+name+
                         '&last_name='+last_name + 
                         '&password='+password +
                         '&birthday='+birthday +
                         '&gender='+genre+
                         '&residence_countryid='+country+
                         '&member_id='+id_utilisateur;
    }
    


        var HOST = "http://www.epavia.com/proxy/";
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_update',
          url: HOST + "MemberWebService/memberUpdate.php",
          success:function(result){
                  console.log('ok');

                  
          }
        });
        
    
    return false;
}
