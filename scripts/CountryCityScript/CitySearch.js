
$(document).ready(function(){
  $("#search-box").keyup(function(){
    var urlWS="http://api.chessfamily.net/api/query";
    $.ajax({
    type:"POST",
                url:urlWS,
                data:{
                    authentication:"chessfemily",
                    action:"city_search",
                    city:$(this).val()
                  },
    success: function(data){
      console.log(data.city.latitude);
    }
    });
  });
});

function selectCountry(val) {
$("#search-box").val(val);
$("#suggesstion-box").hide();
}