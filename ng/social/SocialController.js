'use strict';

Nate.controller('SocialController', function ($scope) {

});

Nate.directive('socialMedia', function (SocialService) {
	var template = '' +
		'<nav class="social-media">' +
			'<ul>' +
				'<li ng-if="links.facebook"><a class="icon-social icon-facebook" title="Facebook" target="_blank" href="{{links.facebook}}">Facebook</a></li>' +
				'<li ng-if="links.twitter"><a class="icon-social icon-twitter" title="Twitter" target="_blank" href="{{links.twitter}}">Twitter</a></li>' +
				'<li ng-if="links.youtube"><a class="icon-social icon-youtube" title="YouTube" target="_blank" href="{{links.youtube}}">YouTube</a></li>' +
			'</ul>' +
		'</nav class="social-media"';

	return {
		restrict: 'E',
		replace: true,
		template: template,
		scope: true,
		controller: function($scope, SocialService) {
			$scope.links = SocialService.getLinks();
		}
	};
});

Nate.factory("SocialService", function() {
	var socialMedia = {
		facebook: 'https://www.facebook.com/pages/Nate-Holland/114181601932675',
		twitter: 'https://twitter.com/N8Holland',
		youtube: 'http://www.youtube.com/user/n8holland'
	};

	return {
		getLinks: function() {
			return socialMedia;
		}
	};
});