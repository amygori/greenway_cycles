

/*Slider = $('#Slider').Swipe({  
    auto: 4000,  
    continuous: true,
    speed: 400
}).data('Swipe');*/

//key
var flickrSecret = "b3ff002dc62fcf26" //secret  

//define variable for API key
var flickrKey = "f1bfffb9390361590e7654a60cb2b6bf"; 
$( document ).ready(function() {
	$.getJSON('https://api.flickr.com/services/	rest/?method=flickr.photos.search&api_key=' + 	flickrKey + '&tags=bike%2C+trail&tag_mode=all&sort	=interestingness-desc%2C+relevance&extras=url_z&per_pa	ge=3&format=json&nojsoncallback=1').done(function(	bikeImgs) {
		var markup = '';
		var photos = bikeImgs.photos.photo;
		_.each(photos, function(img) {
			//populate the template
			markup += '<img src="' + img.url_z + '">';
	    $('.photosContainer').html(markup);
	    //jQuery swipe: http://swipejs.com Copyright (c) 	2013 Brad Birdsall Licensed under the The MIT 	License (MIT).
	    Swipe(document.getElementById('slider'), {
	            auto: 3000,
	            continuous: true,
	            speed: 400
	          });
			$('.swipe-wrap').html(markup);
		})
	});
});
    

