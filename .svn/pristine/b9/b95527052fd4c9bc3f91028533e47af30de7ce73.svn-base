'use strict';

angular.module('jp.common.mod')

.factory('EmailService', function EmailService (AjaxService) {

	return {
		send: function(emailData) {

			var ajaxParams = {
				method: 'POST',
				url: 'backend/email.php',
				data: {
					name: emailData.name.$modelValue,
					email: emailData.email.$modelValue,
					message: emailData.message.$modelValue
				},
				cache: false
			}

			return AjaxService.http(ajaxParams);
		}
	}
})

.factory('AjaxService', function AjaxService ($q, $http) {
	return {
		http: function(ajaxParams) {
			var deferred = $q.defer();

			$http(ajaxParams)
				.success(function (data, status, headers, config) {
					deferred.resolve({
						success: true,
						status: status,
						message: data
					});
				})
				.error(function (data, status, headers, config) {
					deferred.reject({
						success: false,
						status: status,
						message: "Http Error"
					});
				});

			return deferred.promise;
		}
	}
});