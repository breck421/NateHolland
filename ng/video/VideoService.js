'use strict';

Nate.factory('VideoService', function VideoService () {
	var i = 0;
	var videos = [
		// {
		// 	name: 'Crossed Off',
		// 	src: 'http://www.youtube.com/embed/RRCZ5xv5l4s',
		// 	provider: 'youtube',
		// 	isVisible: false,
		// 	order: i++
		// },
		{
			name: 'Tomahawk',
			src: 'http://www.youtube.com/embed/cqzD6_rUcE0',
			provider: 'youtube',
			isVisible: true,
			order: i++
		},
		{
			name: 'Time Mag, how they train',
			src: 'http://www.youtube.com/embed/oJflNjpKLds',
			provider: 'youtube',
			isVisible: true,
			order: i++
		},
		// {
		// 	name: 'Jeep, behind the sceans',
		// 	src: 'http://www.youtube.com/embed/fQWy0pcESjM',
		// 	provider: 'youtube',
		// 	isVisible: false,
		// 	order: i++
		// },
		{
			name: 'Ride with US',
			src: 'http://www.youtube.com/embed/djZbY6juE68',
			provider: 'youtube',
			isVisible: true,
			order: i++
		},
		{
			name: 'Meet Nate Holland',
			src: 'http://www.youtube.com/embed/yGiuwHAVvnA',
			provider: 'youtube',
			isVisible: true,
			order: i++
		},
		{
			name: 'Arosa 2nd',
			src: 'http://www.youtube.com/embed/wnGRwi7PJIo',
			provider: 'youtube',
			isVisible: true,
			order: i++
		},
		{
			name: 'Pyha CrossGames',
			src: 'http://www.youtube.com/embed/cVimORzyNfo',
			provider: 'youtube',
			isVisible: true,
			order: i++
		},
		{
			name: 'X Games 12',
			src: 'http://www.youtube.com/embed/qCWLsgVJO5I',
			provider: 'youtube',
			isVisible: true,
			order: i++
		},
		{
			name: 'X Games 13',
			src: 'http://www.youtube.com/embed/3GoliLCk1pk',
			provider: 'youtube',
			isVisible: true,
			order: i++
		},
		{
			name: 'X Games 14',
			src: 'http://www.youtube.com/embed/Aue7l__tV3Q',
			provider: 'youtube',
			isVisible: true,
			order: i++
		},
		{
			name: 'Free Ride Tight Lines',
			url: 'http://www.youtube.com/embed/7SAqo0cOvQg',
			provider: 'youtube',
			isVisible: true,
			order: i++
		}
		// ,
		// {
		// 	name: 'Head Shots',
		// 	url: 'http://huldrarock.viewbook.com/album/nateholland#1',  MISSING
		// 	provider: 'youtube',
		// 	isVisible: false,
		// 	order: i++
		// },
		// {
		// 	name: 'X Games 16, Gold',
		// 	url: 'http://espn.go.com/action/xgames/winter/2012/story/_/id/7499226/nate-holland-wins-winter-x-2012-men-snowboarder-x',
		// 	provider: 'youtube',
		// 	isVisible: false,
		// 	order: i++
		// }
	];

	return {
		getVideos: function() {
			return videos;
		}
	}
});












