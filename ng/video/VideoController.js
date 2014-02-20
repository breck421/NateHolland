'use strict';

Nate.controller('VideoController', function VideoController ($scope, $sce, VideoService) {
	var self = this;

	this.init = function() {
		self.loadData();
		self.load();
	}

	this.loadData = function() {
		$scope.videos = VideoService.getVideos();
		$scope.currentIndex = 0;
	}

	this.load = function() {
		self.setPageEvents();
	}

	this.setPageEvents = function() {
		$scope.trustSrc = function(src) {
			return $sce.trustAsResourceUrl(src);
		}

		$scope.prevVideo = function () {
			$scope.currentIndex = ($scope.currentIndex < $scope.videos.length - 1) ? ++$scope.currentIndex : 0;
		};

		$scope.nextVideo = function () {
			$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.videos.length - 1;
		};

		$scope.setCurrentVideoIndex = function (index) {
			$scope.currentIndex = index;
		};

		$scope.isCurrentVideoIndex = function (index) {
			return $scope.currentIndex === index;
		};
	}

	this.init();
});