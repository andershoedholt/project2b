$(document).ready(function() {
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
		Parse.User.logIn($('login_username').val(), $('login_password').val(), {
  			success: function(user) {
    			alert('Login Successfull');
  			},
  			error: function(user, error) {
    			alert('Login Failed');
  			}
		});
	}
});