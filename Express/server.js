var express = require("express"),
	http = require("http"),
	app = express();

	//create Express powered server and set to listen to port 3000
	app.use(express.static(__dirname + "/client")) ;


	http.createServer(app).listen(3000);

	//set up routes
	app.get("/hello", function(req, res){
		res.send("Hello World!!");
	});

	app.get("/goodbye", function(req, res){
		res.send("Goodbye World!");
	});

	app.get("/", function(req, res){
		res.send("This is the Root Route");
	});


