var flickrSecret="b3ff002dc62fcf26",flickrKey="f1bfffb9390361590e7654a60cb2b6bf";$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+flickrKey+"&tags=bike%2C+trail%2c+bicycle&tag_mode=all&sort=interestingness-desc%2C+relevance&extras=url_z&per_page=3&format=json&nojsoncallback=1").done(function(e){var t="",c=e.photos.photo;_.each(c,function(e){t+='<img src="'+e.url_z+'">',$(".photosContainer").html(t),Swipe(document.getElementById("slider"),{auto:3e3,continuous:!0,speed:400}),$(".swipe-wrap").html(t)})});