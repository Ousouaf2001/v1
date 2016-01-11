
     // Defaults to sessionStorage for storing the Facebook token
       openFB.init({
           appId: '157543477652947',
           status : true, // check login status
           cookie : true, // enable cookies to allow the server to access the session
           xfbml  : true, // parse XFBML
           oauth  : true // enable OAuth 2.0
   });

      //  Uncomment the line below to store the Facebook token in localStorage instead of sessionStorage
      //  openFB.init({appId: 'YOUR_FB_APP_ID', tokenStore: window.localStorage});

      function login() {
          openFB.login(
                  function(response) {
					  alert("ok");
                      if(response.status === 'connected') {
                          alert("1");
						  //window.location.href = 'home.html';
                          //alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                      } else {
                          alert('Facebook login failed: ' + response.error);
                      }
                  }, { scope: 'email,publish_actions,user_birthday', return_scopes: true });
      }

      function getInfo() {
          openFB.api({
              path: '/me',
              success: function(data) {
                  console.log(JSON.stringify(data));
				  //alert(data.toSource());
                  $("#name").val(data.name);
				  $("#last_name").val(data.name);
                  $("#image").val('http://graph.facebook.com/' + data.id + '/picture?type=small');
                  //$("#id").val(data.id);
                  $("#email").val(data.email);
                  $("#birthday").val(data.birthday);
                  $("#genre").val(data.gender);
              },
              error: errorHandler});
      }
	  function errorHandler(error){
		alert(error.message);
	  }

                              