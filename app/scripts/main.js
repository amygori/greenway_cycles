//key
var flickrSecret = "b3ff002dc62fcf26";//secret  

//define variable for API key
var flickrKey = 'f1bfffb9390361590e7654a60cb2b6bf'; 

var flickrAPI = 'https://api.flickr.com/services/	rest/?method=flickr.photos.search&api_key=' + 	flickrKey + '&tags=bike%2C+trail&tag_mode=all&sort	=interestingness-desc%2C+relevance&extras=url_z&per_pa	ge=3&format=json&nojsoncallback=1';

$(document).ready(function(){
	$.getJSON(flickrAPI).done(function(bikeImgs) {
		var photos = bikeImgs.photos.photo;
		//console.log(photos);
		_.each(photos, function(photo){
			//console.log(photo);
			var images = $('#flickr').html();
				//console.log(images);
	    	flickrMarkup = _.template(images, photo);
	    	
	    if(Modernizr.touch) {
	    	$('.swipe-wrap').append(flickrMarkup);
	    //jQuery swipe: http://swipejs.com Copyright (c) 	2013 Brad Birdsall Licensed under the The MIT 	License (MIT).
	   new Swipe(document.getElementById('slider'), {
	            auto: 3000,
	            continuous: true,
	            speed: 400
	          });
		}
		else {
			$('.photosContainer').append(flickrMarkup);
		}
		});
	});
});
    



