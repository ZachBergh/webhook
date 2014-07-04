var server = require('./server'),
	router = require('./router'),
	reqHandler= require('./req_handler');

var handle = {};
handle['/elkhorizon'] = reqHandler.handleFn.handleHook;

server.launch(router.route, handle);