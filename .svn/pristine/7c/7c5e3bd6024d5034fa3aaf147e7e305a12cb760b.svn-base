'use strict';

Nate.controller('PhotoController', function PhotoController ($scope, SlideshowService, PhotoService) {
	var self = this;

	this.init = function() {
		self.loadData();
		self.load();
	}

	this.loadData = function() {
		$scope.slides = PhotoService.getPhotos();
	}

	this.load = function() {
		SlideshowService.init();
	}

	this.init();
});