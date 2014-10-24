var ntwitter = require("ntwitter"),
	credentials = require("./credentials.json"),
	twitter,
	counts = {};

	counts.awesome = 0;
	/*counts.cool = 0;
	counts.rad = 0;
	counts.gnarly = 0;
	counts.groovy = 0;*/

//set up twitter object
twitter = ntwitter(credentials);

//set up twitter stream with three parameters, seperated by commas
twitter.stream(
	//1st param. is a string
	"statuses/filter",

	//2nd param., an object containing an array
	//{"track" : ["awesome", "cool", "rad", "gnarly", "groovy"]},
	{"track" : ["awesome"]},

	//3rd param is the callback for when stream is created
	function(stream){
		stream.on("data", function(tweet){
			if(tweet.text.indexOf("awesome") > -1){

				counts.awesome = counts.awesome + 1;
				module.exports = counts;
			}
		});

	});

setInterval(function (){
	console.log("awesome: " + counts.awesome);
}, 3000);
