'use strict';

Nate.controller('ContactController', function ContactController ($scope, EmailService) {
	$scope.formSubmit = function(form) {

		EmailService.send(form).then(function(data) {
			if(data.message.sent) {
				$scope.resetForm();
				alert("Message Sent");
			}
			else {
				alert("Something went wrong.  Try emailing me.");
			}
		});
	}

	$scope.resetForm = function() {
		$scope.name = "";
		$scope.email = "";
		$scope.message = "";
	}
});