'use strict';

Nate.factory('PhotoService', function PhotoService () {
	var photos = [
		// {
		// 	image: 'assets/images/gallery/start.jpg',
		// 	filename: 'start.jpg',
		// 	description: 'Image 02'
		// },
		// {
		// 	image: 'assets/images/gallery/chutedescent.jpg',
		// 	filename: 'chutedescent.jpg',
		// 	description: 'Image 01'
		// },
		// {
		// 	image: 'assets/images/gallery/fistpump.jpg',
		// 	filename: 'fistpump.jpg',
		// 	description: 'Image 03'
		// },
		// {
		// 	image: 'assets/images/gallery/layoutpow.jpg',
		// 	filename: 'layoutpow.jpg',
		// 	description: 'Image 04'
		// },
		// {
		// 	image: 'assets/images/gallery/gastein.jpg',
		// 	filename: 'gastein.jpg',
		// 	description: 'Image 04'
		// },
		// {
		// 	image: 'assets/images/gallery/lookback.jpg',
		// 	filename: 'lookback.jpg',
		// 	description: 'Image 04'
		// },
		// {
		// 	image: 'assets/images/gallery/onefoot.jpg',
		// 	filename: 'onefoot.jpg',
		// 	description: 'Image 04'
		// },
		// {
		// 	image: 'assets/images/gallery/podium.jpg',
		// 	filename: 'podium.jpg',
		// 	description: 'Image 04'
		// },
		// {
		// 	image: 'assets/images/gallery/racesolo.jpg',
		// 	filename: 'racesolo.jpg',
		// 	description: 'Image 04'
		// },
		// {
		// 	image: 'assets/images/gallery/rollers.jpg',
		// 	filename: 'rollers.jpg',
		// 	description: 'Image 04'
		// },
		{
			image: 'assets/images/gallery/tomahawk.jpg',
			filename: 'tomahawk.jpg',
			description: 'Image 04'
		},
		{
			image: 'assets/images/gallery/xcourse.jpg',
			filename: 'xcourse.jpg',
			description: 'Image 04'
		}
	];

	return {
		getPhotos: function() {
			return photos;
		}
	}
});