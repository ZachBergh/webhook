var http = require("http"),
	url  = require("url"),
	config = require('./config').config;

function launch(route, handle){

	function onRequest(req, res){

		var pname = url.parse(req.url).pathname,
			postData = '';
		res.writeHead(200, {"Content-Type":"text/plain"});

		req.addListener('data', function(data) {
	        postData += data;
	    });
	    req.addListener('end', function() {
	        
			var content = route(handle, pname, postData);
	    });

		res.end();
	}

	http.createServer(onRequest).listen(config.http_port);
	console.log("Listen port : " + config.http_port);
}

exports.launch = launch;