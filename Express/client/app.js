var main = function(){
	"use strict";
	console.log("Hallo Welt!");
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
              "tags=cows&format=json&jsoncallback=?";

              $.getJSON(url, function (flickrResponse){
              	flickrResponse.items.forEach(function (photo){

              		var $img = $("<img>").hide();

              		$img.attr("src", photo.media.m);

              		$("main .photos").append($img);
              		/*console.log(photo.media.m);*/
              		$img.fadeIn();
              	});
              		
              	
              });
          };
$(document).ready(main);