// preparing language file
var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['fr']=new Array();

/********************* Anglais **************************/
//Common Words
aLangKeys['en']['****']='Submit';
aLangKeys['en']['****']='Login Page';


//Page Index
aLangKeys['en']['HERE']='Here';
aLangKeys['en']['Login_with']='Login With';
aLangKeys['en']['New_Sign_up']='New ? Sign up';
// Page Register
aLangKeys['en']['NewUser']='New user';
aLangKeys['en']['Name']='Name';
aLangKeys['en']['LastName']='Last Name';
aLangKeys['en']['Email']='Email';
aLangKeys['en']['Password']='Password';
aLangKeys['en']['PasswordConf']='Password (Confirmation)';
aLangKeys['en']['Birthday']='Birthday';
aLangKeys['en']['Male']='Male';
aLangKeys['en']['Female']='Female';

// Page Menu
aLangKeys['en']['MyNotifications']='My Notifications';
aLangKeys['en']['MyPublications']='My Publications';
aLangKeys['en']['MyMeetingPlaces']='My Meeting Places';
aLangKeys['en']['MyEvents']='My Events';
aLangKeys['en']['MyFriends']='My Friends';
aLangKeys['en']['MyFavorites']='My Favorites';
aLangKeys['en']['MyProfile']='My Profile';
aLangKeys['en']['FAQ']='FAQ';
aLangKeys['en']['Settings']='Settings';
aLangKeys['en']['Privacy']='Privacy';
aLangKeys['en']['Logout']='Logout';

// Search Form
aLangKeys['en']['FindPlayers']='Find Players';
aLangKeys['en']['FindEvents']='Find Events';
aLangKeys['en']['FindPlaces']='Find Places';
aLangKeys['en']['Distance']='Distance';
aLangKeys['en']['Age']='Age';
aLangKeys['en']['Gender']='Gender';
aLangKeys['en']['Profile']='Profile';
aLangKeys['en']['SearchMembers']='Search Members';
aLangKeys['en']['EventType']='Event Type';
aLangKeys['en']['Activity']='Activity';
aLangKeys['en']['TakingPlaceMaxDays']='Taking Place in max x days';
aLangKeys['en']['TakingPlaceToday']='Taking Place Today';
aLangKeys['en']['SearchEvents']='Search Events';
aLangKeys['en']['MeetingLocation']='Meeting Location';
aLangKeys['en']['OnlyOpenedNow']='Only Opened Now';
aLangKeys['en']['SearchPlace']='Search Place';


/********************* Francais **************************/
//Page Index
aLangKeys['fr']['HERE']='Ici';
aLangKeys['fr']['Login_with']='Se Connecter avec';
aLangKeys['fr']['New_Sign_up']='Nouveau ? s\'enregistrer';
// Page Register
aLangKeys['fr']['NewUser']='Nouvel Utilisateur';
aLangKeys['fr']['Name']='Nom';
aLangKeys['fr']['LastName']='Prénom';
aLangKeys['fr']['Email']='Email';
aLangKeys['fr']['Password']='Mot de Passe';
aLangKeys['fr']['PasswordConf']='Mot de Passe (Confirmation)';
aLangKeys['fr']['Birthday']='Date Naissance';
aLangKeys['fr']['Male']='Homme';
aLangKeys['fr']['Female']='Femme';

// Page Menu
aLangKeys['fr']['MyNotifications']='Mes Notifications';
aLangKeys['fr']['MyPublications']='Mes Publications';
aLangKeys['fr']['MyMeetingPlaces']='Mes Lieux de Rencontre';
aLangKeys['fr']['MyEvents']='Mes Evènements';
aLangKeys['fr']['MyFriends']='Mes Amis';
aLangKeys['fr']['MyFavorites']='Mes Favoris';
aLangKeys['fr']['MyProfile']='Mon Profile';
aLangKeys['fr']['FAQ']='FAQ';
aLangKeys['fr']['Settings']='Paramètres';
aLangKeys['fr']['Privacy']='Privacy';
aLangKeys['fr']['Logout']='Se Déconnecter';

// Search Form
aLangKeys['fr']['FindPlayers']='Trouver Joueurs';
aLangKeys['fr']['FindEvents']='Trouver Evènements';
aLangKeys['fr']['FindPlaces']='Trouver Emplacement';
aLangKeys['fr']['Distance']='Distance';
aLangKeys['fr']['Age']='Age';
aLangKeys['fr']['Gender']='Sexe';
aLangKeys['fr']['Profile']='Profile';
aLangKeys['fr']['SearchMembers']='Recherche Members';
aLangKeys['fr']['EventType']='Type d\'Evenement';
aLangKeys['fr']['Activity']='Activité';
aLangKeys['fr']['TakingPlaceMaxDays']='Ayant Lieu dans Max X Jours';
aLangKeys['fr']['TakingPlaceToday']='Ayant Lieu Ajourd\'hui';
aLangKeys['fr']['SearchEvents']='Rechercher Evènements';
aLangKeys['fr']['MeetingLocation']='Lieux de rencontre';
aLangKeys['fr']['OnlyOpenedNow']='Que les ouverts Maintenant';
aLangKeys['fr']['SearchPlace']='Rechercher Lieux';




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