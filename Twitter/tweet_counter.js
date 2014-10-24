var ntwitter = require("ntwitter"),
	credentials = require("./credentials.json"),
	twitter;

//set up twitter object
twitter = ntwitter(credentials);

//set up twitter stream with three parameters, seperated by commas
twitter.stream(
	//1st param. is a string
	"statuses/filter",

	//2nd param., an object containing an array
	{"track" : ["awesome"]},

	//3rd param is the callback for when stream is created
	function(stream){
		stream.on("data", function(tweet){
			console.log(tweet.text);
		});

	});

