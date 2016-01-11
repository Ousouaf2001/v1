// JavaScript Document
$(document).ready(function(){
	var current_title = $(document).attr('title');

	if(current_title=='Profile Details'){
		var url = window.location.search;
    	var id_utilisateur = url.substring(url.lastIndexOf("=")+1);//1;
	}else{
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}
	/*if(id_utilisateur==NULL || id_utilisateur==""){
		$(location).attr('href',"index.html");
		alert("Veuillez entrer vos Login/Password");
	}*/
	
	var urlWS = "http://api.chessfamily.net/api/query";
    function PublicationsGetAllById() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"member_publications",
				member_id:id_utilisateur,
				perpage:10,
				page:1},
            dataType:"json",

          beforeSend: function(){
              $('.affiche_detail_publication').hide();
              $('.load_detail_publication').show();
          },
          success:function(result){
			  $.each(result.publications, function (index, item) { 
			  $('#publication_list').append(+
			  	"<div class='container'>"+
					  "<div class='pub' style='padding-bottom:10px;margin-bottom:10px;'>"+
					  "<div class='row'>"+
						 "<div class='col-xs-3'>"+
							"<img src='"+item.member_photo+" 'class='imgresponsive img-circle ' width= '50' height='50'>"+
						  "</div>"+
						  "<div class='col-xs-6'>"+
							"<div class='row'>"+
								"<div class='col-xs-12'>"+
									"<h4>"+item.member+"</h4>"+
								"</div>"+
								"<div class='col-xs-12'>"+
									"<p>"+item.formatted_text+"</p>"+
								"</div>"+
								"<div class='col-xs-12'>");
								
								
								if(item.video_link!=""){$('#publication_list').append("<button class='btn btn-sm btn_index' onclick=\"window.open('"+item.video_link+"')\"><i class='glyphicon glyphicon-facetime-video'></i>&nbsp;&nbsp;Video </button>");}
					if(item.web_link!=""){$('#publication_list').append("<button class='btn btn-sm btn_index' onclick=\"window.open('"+item.web_link+"')\"><i class='glyphicon glyphicon-globe'></i>&nbsp;&nbsp;Link </button>");}
					if(item.photos!=""){$('#publication_list').append("<button class='btn btn-sm  btn_index' onclick=\"window.open('"+item.photos+"')\"><i class='glyphicon glyphicon-camera'></i>&nbsp;&nbsp;Photo </button>");}
									/*"<button class='btn btn-sm btn_index'><i class='glyphicon glyphicon-facetime-video'></i>&nbsp;&nbsp;Video</button> &nbsp;"+
									"<button class='btn btn-sm btn_index'><i class='glyphicon glyphicon-globe'></i>&nbsp;&nbsp;Link</button>&nbsp;"+
									"<button class='btn btn-sm  btn_index'><i class='glyphicon glyphicon-camera'></i>&nbsp;&nbsp;Photo</button>"+*/
									
									
			   $('#publication_list').append(+
								"</div>"+
							"</div>"+
						  "</div>"+
						  "<div class='col-xs-3'>"+
								"<h5>"+item.date+"</h5>"+
						  "</div>"+
					   "</div>"+
					   "</div>"+
					   "</div>"+
			  "");
			   
			  });
			  
			  
					/*
					if(item.video_link!=""){$('#publication_list').append("<button class='btn btn-sm btn_index' onclick=\"window.open('"+item.video_link+"')\"><i class='glyphicon glyphicon-facetime-video'></i>&nbsp;&nbsp;Video </button>");}
					if(item.web_link!=""){$('#publication_list').append("<button class='btn btn-sm btn_index' onclick=\"window.open('"+item.web_link+"')\"><i class='glyphicon glyphicon-globe'></i>&nbsp;&nbsp;Link </button>");}
					if(item.photos!=""){$('#publication_list').append("<button class='btn btn-sm  btn_index' onclick=\"window.open('"+item.photos+"')\"><i class='glyphicon glyphicon-camera'></i>&nbsp;&nbsp;Photo </button>");}
					*/	  
							  //alert(result.event.meeting_photos[0].image);		  
          },
          complete: function(){
              $('.load_detail_publication').hide();
              $('.affiche_detail_publication').show();
          }
        });
    }



    PublicationsGetAllById();

});
