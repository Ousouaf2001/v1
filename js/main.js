// preparing language file
var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['fr']=new Array();

aLangKeys['en']['Email']='Email';
aLangKeys['en']['Get info']='Get info';




aLangKeys['fr']['Email']='Adresse email';
aLangKeys['fr']['Get info']='Les infos';


$(document).ready(function() {

    // onclick behavior
    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id
        sessionStorage.setItem("lang", lang);
        


        // translate all translatable elements
        $('.ok').each(function(i){
          lang1 = sessionStorage.getItem("lang");
          $(this).text(aLangKeys[lang1][ $(this).attr('key') ]);
        });

    } );

});


$(function(){
		$('.ok').each(function(i){
          lang1 = sessionStorage.getItem("lang");
          $(this).text(aLangKeys[lang1][ $(this).attr('key') ]);
        });

});