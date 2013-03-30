$(document).ready(function() {
	var el = document.getElementById("clickMe");
	if (el.addEventListener)
	    el.addEventListener("click", login, false);
	else if (el.attachEvent)
	    el.attachEvent('onclick', login);  

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

	function login() {
		Parse.User.logIn($('#login_username').val(), $('#login_password').val(), {
  			success: function(user) {
    			alert('Welcome, ' + $('#login_username').val());
  			},
  			error: function(user, error) {
    			alert('Login Failed');
  			}
		});
	}

	function logout() {
		Parse.User.logOut();
		var currentUser = Parse.User.current();
	}

	function test() {
		alert("hey");
	}
});