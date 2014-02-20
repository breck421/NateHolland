'use strict';

Nate.controller('AboutController', function AboutController($scope) {
	$scope.titleText = "Nate Holland";
	$scope.leadText = "Passionate Shredder, Fierce Competitor, Consistency, and Power are perfect descriptors for my Snowboard style.";
	$scope.aboutText = "My love for Snowboarding was evident as I grew up in N. Idaho, later moving to Squaw Valley, CA egger to leave my mark on and off the slopes.  With two Olympic appearances, seven X Games Gold Medals, and a slue of World Championship, World Cup, Baker Banked Slalom, and Nation Title wins and podiums I am now recognized as one of the fastest men in the world on a snowboard.  That passion for competition is only rivaled by my passion for freeriding.  I love my competitive side of Snowboarding but freeriding is my true love, I race to afford my freeriding.  Nothing compares to the freedom I feel while shredding big mountain.";
	$scope.stats = {
		age: 35,
		homeTown: 'Sandpoint, ID',
		homeResort: 'Squaw Valley, CA',
		boardSetup: {
			stance: "Regular",
			stanceWidth: '23"',
			stanceAngle: [
				{
					type: 'Freeride',
					front: '15',
					back: '0'
				},
				{
					type: 'Race',
					front: '24',
					back: '6'
				}
			]
		}
	}
});