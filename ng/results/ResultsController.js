'use strict';

Nate.controller('ResultsController', function ResultsController ($scope, ResultsService) {
	var self = this;

	this.init = function() {
		$scope.results = ResultsService.getResults();
		self.load();
	}

	this.load = function() {

	}

	this.init();
});