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

handleFn.handleHook = function(data){

	if(typeof data != 'string') return 'false';
	
	var dataobj = JSON.parse(data);
	var branch = dataobj.repository.master_branch;
	var repo_name = dataobj.repository.name;

	if(typeof cfg[repo_name] != "undefined"){

		console.log("INFO: Pull Branch '" + branch + "'");
		console.log("INFO: Pull Path   '" + cfg[repo_name]['path'] + "'")
		child_process.exec('cd ' + cfg[repo_name]['path'] + ' && git checkout ' + branch + ' && git pull', _runCMDcb);
		if(cfg[repo_name]['command'] != ""){
			child_process.exec(cfg[repo_name]['command'], _runCMDcb);
		}
	}
	return false;
}

exports.handleFn = handleFn;