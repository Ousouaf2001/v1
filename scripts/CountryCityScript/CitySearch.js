
    $(function(){


    var urlWS = "http://api.chessfamily.net/api/query";
    $('#city').keyup(function(){
        $.ajax(
            {

                type:"POST",
                url:urlWS,
                data:{
                    authentication:"chessfemily",
                    action:"city_search",
                    city:$(this).val()
                  },
                dataType:"json",
                  success:function(result){
                
                    $('#city').val('tunis');

                  },
                  error:function(e){
                    console.log(e);
                  }
            }
        );
    });
    });