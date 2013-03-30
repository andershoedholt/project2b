$(document).ready(function() {
	var el = document.getElementById("clickMeIn");
	if (el.addEventListener)
	    el.addEventListener("click", login, false);
	else if (el.attachEvent)
	    el.attachEvent('onclick', login);  			
	
	var el = document.getElementById("clickMeOut");
	if (el.addEventListener)
	    el.addEventListener("click", logout, false);
	else if (el.attachEvent)
	    el.attachEvent('onclick', logout); 

  Parse.initialize("IreL2qXUQZqYq6xRUKpECvCSmHphZspk0gAlY72E", "ZqtSyDUwe6JwOEq6FZGfxk3H6G16ewxAlJSPuRDO");

	// var GameScore = Parse.Object.extend("Address");
	// var query = new Parse.Query(GameScore);
	// query.get("OhhrhFFd8B", {
	//   success: function(address) {
	//     // The object was retrieved successfully.
	//     alert(address.get("street"));
	//   },
	//   error: function(object, error) {
	//     // The object was not retrieved successfully.
	//     // error is a Parse.Error with an error code and description.
	//   }
	// });

	var currentUser = Parse.User.current();
	if (currentUser) {
	    $('#login').css("display", "none");
	}else{		$('#logout').css("display", "none");}

	function login() {
		Parse.User.logIn($('#login_username').val(), $('#login_password').val(), {
  			success: function(user) {
<<<<<<< HEAD
    		//	alert('Welcome, ' + $('#login_username').val());
	    	$('#login').css("display", "none");
	    	$('#logout').css("display", "Block");
=======
    			alert('Welcome, ' + $('#login_username').val());
    			window.location = "http://www.google.com/"
>>>>>>> test
  			},
  			error: function(user, error) {
    			alert('Login Failed');
  			}
		});
	}

	function logout() {
		Parse.User.logOut();
		var currentUser = Parse.User.current();
		$('#login').css("display", "Block");
		$('#logout').css("display", "none");
	}
});