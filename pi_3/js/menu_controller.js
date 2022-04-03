function start_game(){
	name = prompt("User name");
	
	localStorage.setItem("username", name);
	
	loadpage("./html/game.html");
}

function exit(){
	name = localStorage.getItem("username");
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
	loadpage("../index.html");
}

function options(){
	loadpage("./html/options.html");
}


