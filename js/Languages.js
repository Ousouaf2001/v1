// preparing language file
var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['fr']=new Array();

aLangKeys['en']['OR']='OR';
aLangKeys['en']['HERE']='Here';
aLangKeys['en']['Login_with']='Login With';
aLangKeys['en']['New_Sign_up']='New ? Sign up';




aLangKeys['fr']['OR']='OU';
aLangKeys['fr']['HERE']='Ici';
aLangKeys['fr']['Login_with']='Se Connecter avec';
aLangKeys['fr']['New_Sign_up']='Nouveau ? s\'enregistrer';


$(document).ready(function() {

    // onclick behavior
    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id
        sessionStorage.setItem("lang", lang);
        


        // translate all translatable elements
        $('.TranslationDiv').each(function(i){
          lang1 = sessionStorage.getItem("lang");
          $(this).text(aLangKeys[lang1][ $(this).attr('key') ]);
        });

    } );

});


$(function(){
		$('.TranslationDiv').each(function(i){
          lang1 = sessionStorage.getItem("lang");
          $(this).text(aLangKeys[lang1][ $(this).attr('key') ]);
        });

});