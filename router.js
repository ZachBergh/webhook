function route(handle, pname, data){

	if(typeof handle[pname] === "function") {

		return handle[pname](data, req);
	}else{

		return "404 NOT FOUND.";
	}
}

exports.route = route;