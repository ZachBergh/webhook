var child_process = require("child_process"),
	cfg = require('./config').config;

var handleFn = function(){
	
}

var _runCMDcb = function(error, stdout, stderr){
	
	if (error){
		console.log(error.toString());
		return false;
	}else{
		console.log(stdout);
		return true;
	}
};

handleFn.elkhorizon = function(data){

	if(typeof data != 'string') return 'false';
	
	var dataobj = JSON.parse(data);
	var branch = dataobj.repository.master_branch;
	var repo_name = dataobj.repository.name;

	if(repo_name == "elkhorizon"){

		console.log("INFO: Pull Branch '" + branch + "'");
		console.log("INFO: Pull Path   '" + cfg.path + "'")
		child_process.exec('cd ' + cfg.path + ' && git checkout ' + branch + ' && git pull', function(error, stdout, stderr){
			console.log(stdout);
		});
	}
	return false;
}

exports.handleFn = handleFn;