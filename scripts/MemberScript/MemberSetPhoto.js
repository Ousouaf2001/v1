//upload image to the server
function MemberSetPhoto() {
    var urlWS = "http://api.chessfamily.net/api/query";
	var imgSrc = document.getElementById('image').src;
	alert(imgSrc);
	var id_utilisateur = sessionStorage.getItem("identifiant");
	
	alert(imgSrc.substr(imgSrc.lastIndexOf('/')+1));
    options = new FileUploadOptions();
	options.fileKey = "photo";
	options.fileName = imgSrc.substr(imgSrc.lastIndexOf('/')+1);
	options.mimeType = "image/jpeg";
	
	var params = new Object();
	params.authentication="chessfemily";
	params.action="member_set_photo";
	params.member_id=id_utilisateur;
	
	options.params = params;
	var ft = new FileTransfer();
	ft.upload(imgSrc, urlWS, win, fail, options);
    return false;
}
function win(r) {
	alert("Code = " + r.responseCode);
	alert("Response = " + r.response);
	alert("Sent = " + r.bytesSent);
}

function fail(error) {
	alert("upload error source " + error.source);
	alert("upload error target " + error.target);
}
