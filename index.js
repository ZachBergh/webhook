var server = require('./server'),
	router = require('./router'),
	reqHandler= require('./req_handler');

var handle = {};
handle['/elkhorizon'] = reqHandler.handleFn.elkhorizon;

server.launch(router.route, handle);